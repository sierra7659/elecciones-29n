"use client";

import { useEffect, useMemo, useState } from "react";
import {
  LAST_UPDATED,
  PARTIES,
  PartyId,
  SOURCES,
  TOPICS,
  Topic,
} from "@/data/programas";

type Choice = PartyId | "none" | "skip";
interface Answer {
  choice?: Choice;
  important: boolean;
}
type Screen = "intro" | "quiz" | "results";

interface SavedState {
  screen: Screen;
  step: number;
  answers: Record<string, Answer>;
  order: Record<string, PartyId[]>;
  showParties: boolean;
}

const STORAGE_KEY = "29n-a-ciegas-v2";
const LETTERS = "ABCDEFGH";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Cada tema recibe un orden distinto: ningún partido repite la posición que tenía en el
// tema anterior y no se repite ninguna combinación ya usada en otro tema.
function newOrder(): Record<string, PartyId[]> {
  const o: Record<string, PartyId[]> = {};
  const used = new Set<string>();
  let prev: PartyId[] = [];
  for (const t of TOPICS) {
    const parties = t.proposals.map((p) => p.party);
    let best = shuffle(parties);
    for (let tries = 0; tries < 500; tries++) {
      const cand = shuffle(parties);
      const samePos = cand.some((pid, i) => prev[i] === pid);
      if (!samePos && !used.has(cand.join())) {
        best = cand;
        break;
      }
    }
    used.add(best.join());
    o[t.id] = best;
    prev = best;
  }
  return o;
}

function proposalOf(topic: Topic, party: PartyId) {
  return topic.proposals.find((p) => p.party === party)!;
}

export default function Quiz() {
  const [screen, setScreen] = useState<Screen>("intro");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [order, setOrder] = useState<Record<string, PartyId[]>>({});
  const [showParties, setShowParties] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Restaurar progreso guardado
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const s: SavedState = JSON.parse(raw);
        const valid = TOPICS.every((t) => s.order?.[t.id]?.length === t.proposals.length);
        if (valid) {
          setScreen(s.screen);
          setStep(Math.min(s.step, TOPICS.length - 1));
          setAnswers(s.answers || {});
          setOrder(s.order);
          setShowParties(!!s.showParties);
        }
      }
    } catch {
      /* sin almacenamiento disponible */
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      const s: SavedState = { screen, step, answers, order, showParties };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
    } catch {
      /* ignorar */
    }
  }, [loaded, screen, step, answers, order, showParties]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [screen, step]);

  const start = () => {
    setOrder(newOrder());
    setAnswers({});
    setStep(0);
    setScreen("quiz");
  };

  const answeredCount = Object.values(answers).filter((a) => a.choice && a.choice !== "skip").length;

  if (!loaded) return <main className="wrap" />;

  return (
    <main className="wrap">
      <header className="top">
        <button className="brand" onClick={() => setScreen("intro")} aria-label="Ir al inicio">
          <span className="brand-mark">29N</span>
          <span className="brand-text">a ciegas</span>
        </button>
        <label className="toggle" title="Mostrar u ocultar qué partido propone cada cosa">
          <input
            type="checkbox"
            checked={showParties}
            onChange={(e) => setShowParties(e.target.checked)}
          />
          <span className="track" aria-hidden />
          <span className="toggle-label">{showParties ? "Partidos visibles" : "Modo ciego"}</span>
        </label>
      </header>

      {screen === "intro" && (
        <Intro
          onStart={start}
          canResume={Object.keys(order).length > 0 && answeredCount > 0}
          onResume={() => setScreen("quiz")}
          onResults={() => setScreen("results")}
        />
      )}

      {screen === "quiz" && order[TOPICS[step].id] && (
        <TopicStep
          topic={TOPICS[step]}
          step={step}
          order={order[TOPICS[step].id]}
          answer={answers[TOPICS[step].id]}
          showParties={showParties}
          onAnswer={(a) => setAnswers((prev) => ({ ...prev, [TOPICS[step].id]: a }))}
          onPrev={() => setStep((s) => Math.max(0, s - 1))}
          onNext={() => {
            if (step < TOPICS.length - 1) setStep(step + 1);
            else setScreen("results");
          }}
          answers={answers}
          onJump={setStep}
        />
      )}

      {screen === "results" && (
        <Results
          answers={answers}
          order={order}
          onRestart={start}
          onEdit={(i) => {
            setStep(i);
            setScreen("quiz");
          }}
        />
      )}

      <footer className="foot">
        <p>
          Herramienta informativa e independiente. No es una recomendación de voto ni mide si las
          propuestas son viables. Datos revisados el {LAST_UPDATED}.
        </p>
      </footer>
    </main>
  );
}

/* ---------------------------------- Intro --------------------------------- */

function Intro({
  onStart,
  canResume,
  onResume,
  onResults,
}: {
  onStart: () => void;
  canResume: boolean;
  onResume: () => void;
  onResults: () => void;
}) {
  return (
    <section className="intro">
      <p className="kicker">Elecciones generales · 29 de noviembre de 2026</p>
      <h1>
        Elige ideas,
        <br />
        no siglas.
      </h1>
      <p className="lead">
        Te enseñamos lo más importante de cada programa en {TOPICS.length} temas, con palabras
        sencillas y <strong>sin decirte qué partido lo propone</strong>. Tú eliges la propuesta que
        más te convence (o ninguna) y al final descubres con quién coincides.
      </p>

      <div className="cta-row">
        <button className="btn primary" onClick={onStart}>
          {canResume ? "Empezar de nuevo" : "Empezar el test"}
        </button>
        {canResume && (
          <>
            <button className="btn" onClick={onResume}>
              Continuar
            </button>
            <button className="btn ghost" onClick={onResults}>
              Ver resultado
            </button>
          </>
        )}
      </div>

      <ol className="how">
        <li>
          <b>Lee</b> las propuestas de cada tema. Aparecen como A, B, C… en un orden distinto cada
          vez.
        </li>
        <li>
          <b>Elige</b> la que prefieras, marca «ninguna me convence» o salta el tema. Puedes marcar
          los temas que más te importan.
        </li>
        <li>
          <b>Descubre</b> qué partido está detrás de cada idea y tu porcentaje de coincidencia.
        </li>
      </ol>

      <p className="hint">
        ¿Prefieres ver los partidos desde el principio? Cambia el interruptor de arriba a «Partidos
        visibles».
      </p>

      <details className="about">
        <summary>Qué partidos están y de dónde salen los datos</summary>
        <p>
          Incluimos las cinco candidaturas de ámbito estatal con más apoyo. No todos han publicado
          todavía un programa completo, así que indicamos de dónde sale cada resumen:
        </p>
        <ul className="status">
          {Object.values(PARTIES).map((p) => (
            <li key={p.id}>
              <b>{p.name}</b> ({p.candidate}): {p.status}
            </li>
          ))}
        </ul>
        <p>
          Los partidos que solo se presentan en algunas comunidades (ERC, Junts, PNV, EH Bildu, BNG,
          Coalición Canaria…) no aparecen. Fuentes:
        </p>
        <ul className="sources">
          {SOURCES.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noopener noreferrer">
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </details>
    </section>
  );
}

/* -------------------------------- TopicStep ------------------------------- */

function TopicStep({
  topic,
  step,
  order,
  answer,
  showParties,
  onAnswer,
  onPrev,
  onNext,
  answers,
  onJump,
}: {
  topic: Topic;
  step: number;
  order: PartyId[];
  answer?: Answer;
  showParties: boolean;
  onAnswer: (a: Answer) => void;
  onPrev: () => void;
  onNext: () => void;
  answers: Record<string, Answer>;
  onJump: (i: number) => void;
}) {
  const important = answer?.important ?? false;
  const choice = answer?.choice;
  const isLast = step === TOPICS.length - 1;

  const pick = (c: Choice) => onAnswer({ choice: c, important });

  return (
    <section className="step">
      <nav className="progress" aria-label="Temas">
        {TOPICS.map((t, i) => {
          const a = answers[t.id];
          const state =
            i === step ? "current" : a?.choice ? (a.choice === "skip" ? "skipped" : "done") : "";
          return (
            <button
              key={t.id}
              className={`dot ${state}`}
              onClick={() => onJump(i)}
              title={t.title}
              aria-label={`${t.title}${a?.choice ? " (respondido)" : ""}`}
            />
          );
        })}
      </nav>

      <p className="kicker">
        Tema {step + 1} de {TOPICS.length}
      </p>
      <h2>
        <span aria-hidden>{topic.emoji}</span> {topic.title}
      </h2>
      <p className="question">{topic.question}</p>

      <div className="cards" role="radiogroup" aria-label={topic.question}>
        {order.map((pid, i) => {
          const p = proposalOf(topic, pid);
          const selected = choice === pid;
          return (
            <button
              key={pid}
              role="radio"
              aria-checked={selected}
              className={`card ${selected ? "selected" : ""}`}
              onClick={() => pick(pid)}
            >
              <span className="card-head">
                <span className="letter">{LETTERS[i]}</span>
                {showParties && <span className="party-tag">{PARTIES[pid].name}</span>}
                <span className="check" aria-hidden>
                  {selected ? "✓" : ""}
                </span>
              </span>
              <span className="idea">{p.idea}</span>
              <ul>
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </button>
          );
        })}
      </div>

      <div className="alt-row">
        <button
          className={`chip ${choice === "none" ? "on" : ""}`}
          onClick={() => pick("none")}
          aria-pressed={choice === "none"}
        >
          🙅 Ninguna me convence
        </button>
        <button
          className={`chip ${choice === "skip" ? "on" : ""}`}
          onClick={() => pick("skip")}
          aria-pressed={choice === "skip"}
        >
          ⏭️ No me importa / saltar
        </button>
        <label className={`chip ${important ? "on" : ""}`}>
          <input
            type="checkbox"
            checked={important}
            onChange={(e) =>
              onAnswer({ choice, important: e.target.checked })
            }
          />
          ⭐ Este tema me importa mucho
        </label>
      </div>

      <div className="nav-row">
        <button className="btn ghost" onClick={onPrev} disabled={step === 0}>
          ← Anterior
        </button>
        <button className="btn primary" onClick={onNext} disabled={!choice}>
          {isLast ? "Ver mi resultado" : "Siguiente →"}
        </button>
      </div>
    </section>
  );
}

/* --------------------------------- Results -------------------------------- */

function computeScores(answers: Record<string, Answer>) {
  const ids = Object.keys(PARTIES) as PartyId[];
  const pts: Record<string, number> = {};
  const max: Record<string, number> = {};
  ids.forEach((id) => ((pts[id] = 0), (max[id] = 0)));
  let none = 0;
  let answered = 0;

  for (const t of TOPICS) {
    const a = answers[t.id];
    if (!a || !a.choice || a.choice === "skip") continue;
    answered++;
    if (a.choice === "none") none++;
    const w = a.important ? 2 : 1;
    for (const p of t.proposals) {
      max[p.party] += w;
      if (a.choice === p.party) pts[p.party] += w;
    }
  }

  const ranking = ids
    .map((id) => ({
      id,
      pct: max[id] ? Math.round((pts[id] / max[id]) * 100) : 0,
      pts: pts[id],
    }))
    .sort((a, b) => b.pct - a.pct || b.pts - a.pts);

  return { ranking, none, answered };
}

function Results({
  answers,
  order,
  onRestart,
  onEdit,
}: {
  answers: Record<string, Answer>;
  order: Record<string, PartyId[]>;
  onRestart: () => void;
  onEdit: (i: number) => void;
}) {
  const { ranking, none, answered } = useMemo(() => computeScores(answers), [answers]);
  const [open, setOpen] = useState<string | null>(null);
  const top = ranking[0];
  const tie = ranking.filter((r) => r.pct === top.pct && r.pct > 0);

  if (answered === 0) {
    return (
      <section className="results">
        <h2>Aún no hay resultado</h2>
        <p className="lead">Has saltado todos los temas. Responde al menos uno para comparar.</p>
        <button className="btn primary" onClick={() => onEdit(0)}>
          Volver al test
        </button>
      </section>
    );
  }

  return (
    <section className="results">
      <p className="kicker">Tu resultado · {answered} temas respondidos</p>
      {top.pct === 0 ? (
        <h2>Ninguna propuesta te ha convencido</h2>
      ) : tie.length > 1 ? (
        <h2>
          Empate entre {tie.map((t) => PARTIES[t.id].name).join(" y ")}
        </h2>
      ) : (
        <h2>
          Coincides más con <span className="hl">{PARTIES[top.id].name}</span>
        </h2>
      )}
      <p className="lead small">
        Porcentaje de temas en los que elegiste su propuesta (los temas marcados con ⭐ cuentan
        doble).{" "}
        {none > 0 && (
          <>
            En {none} {none === 1 ? "tema" : "temas"} no te convenció ninguna.
          </>
        )}
      </p>

      <div className="bars">
        {ranking.map((r) => (
          <div className="bar-row" key={r.id}>
            <span className="bar-name">{PARTIES[r.id].name}</span>
            <span className="bar-track">
              <span className="bar-fill" style={{ width: `${Math.max(r.pct, 1)}%` }} />
            </span>
            <span className="bar-pct">{r.pct}%</span>
          </div>
        ))}
      </div>

      <div className="warn">
        <b>Ojo:</b> esto solo compara tus preferencias con propuestas resumidas. Algunos partidos no
        han publicado aún su programa completo y no se valora si las medidas son realistas, su coste
        ni lo que cada partido ha hecho cuando ha gobernado. Úsalo como punto de partida, no como
        respuesta definitiva.
      </div>

      <h3>Tus elecciones, tema a tema</h3>
      <ul className="breakdown">
        {TOPICS.map((t, i) => {
          const a = answers[t.id];
          const ch = a?.choice;
          const letter =
            ch && ch !== "none" && ch !== "skip"
              ? LETTERS[(order[t.id] || []).indexOf(ch)]
              : null;
          return (
            <li key={t.id} className="bd-item">
              <div className="bd-head">
                <span className="bd-title">
                  {t.emoji} {t.title}
                  {a?.important && <span title="Te importa mucho"> ⭐</span>}
                </span>
                <button className="link" onClick={() => onEdit(i)}>
                  cambiar
                </button>
              </div>
              {!ch || ch === "skip" ? (
                <p className="bd-choice muted">Saltado</p>
              ) : ch === "none" ? (
                <p className="bd-choice muted">Ninguna te convenció</p>
              ) : (
                <p className="bd-choice">
                  Elegiste la {letter}: «{proposalOf(t, ch as PartyId).idea}» →{" "}
                  <b>{PARTIES[ch as PartyId].name}</b>
                </p>
              )}
              <button className="link" onClick={() => setOpen(open === t.id ? null : t.id)}>
                {open === t.id ? "Ocultar todas" : "Ver quién propone cada una"}
              </button>
              {open === t.id && (
                <ul className="reveal">
                  {(order[t.id] || []).map((pid, j) => (
                    <li key={pid} className={pid === ch ? "mine" : ""}>
                      <b>
                        {LETTERS[j]} · {PARTIES[pid].name}:
                      </b>{" "}
                      {proposalOf(t, pid).idea}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>

      <div className="cta-row">
        <button className="btn primary" onClick={onRestart}>
          Repetir con otro orden
        </button>
        <a className="btn ghost" href="https://www.infoelectoral.interior.gob.es/" target="_blank" rel="noopener noreferrer">
          Información oficial del 29N
        </a>
      </div>
    </section>
  );
}
