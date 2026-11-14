// Propuestas resumidas en lenguaje sencillo para las elecciones generales del 29 de noviembre de 2026.
// Fuentes al final del archivo. Revisado a 14 de noviembre de 2026.

export type PartyId = "pp" | "psoe" | "vox" | "fa" | "podemos";

export interface Party {
  id: PartyId;
  name: string;
  fullName: string;
  candidate: string;
  status: string; // estado del programa
}

export const PARTIES: Record<PartyId, Party> = {
  pp: {
    id: "pp",
    name: "PP",
    fullName: "Partido Popular",
    candidate: "Alberto Núñez Feijóo",
    status:
      "Programa completo publicado el 10 de noviembre (249 medidas).",
  },
  psoe: {
    id: "psoe",
    name: "PSOE",
    fullName: "Partido Socialista Obrero Español",
    candidate: "Pedro Sánchez",
    status:
      "Programa anunciado para el 15 de noviembre. Aquí se resumen sus anuncios de 2026, las resoluciones de su Congreso Federal de 2024 y lo que sigue vigente de su programa de 2023.",
  },
  vox: {
    id: "vox",
    name: "Vox",
    fullName: "Vox",
    candidate: "Santiago Abascal",
    status:
      "Programa completo publicado el 12 de noviembre (115 medidas).",
  },
  fa: {
    id: "fa",
    name: "Frente Amplio",
    fullName: "Frente Amplio (IU, Más Madrid, Movimiento Sumar, Comuns)",
    candidate: "Ada Colau / Emilio Delgado",
    status:
      "Presentó un avance de 100 medidas el 12 de noviembre. El resto se completa con anuncios de 2026 y el programa de Sumar de 2023.",
  },
  podemos: {
    id: "podemos",
    name: "Podemos",
    fullName: "Podemos",
    candidate: "Irene Montero",
    status:
      "Sin programa completo publicado. Se resumen sus medidas de campaña y sus documentos de 2024 y 2025.",
  },
};

export interface Proposal {
  party: PartyId;
  idea: string; // la idea principal en una frase
  points: string[]; // detalles en palabras sencillas
}

export interface Topic {
  id: string;
  title: string;
  emoji: string;
  question: string;
  proposals: Proposal[];
}

// Guía de estilo: verbos en infinitivo, vocabulario descriptivo, sin lemas ni expresiones
// propias de un partido, tres puntos por propuesta y longitudes parecidas.
export const TOPICS: Topic[] = [
  {
    id: "vivienda",
    title: "Vivienda",
    emoji: "🏠",
    question: "¿Qué hacer para que la vivienda cueste menos?",
    proposals: [
      {
        party: "pp",
        idea: "Aumentar la construcción y facilitar la compra a menores de 40 años.",
        points: [
          "Cambiar la ley del suelo para construir un millón de viviendas en cuatro años y conceder las licencias en tres meses.",
          "Bajar el IVA de la primera vivienda nueva del 10 % al 4 % para menores de 40 años, con aval público para la entrada.",
          "Retirar la ley de vivienda actual y los topes al alquiler, y recuperar una vivienda ocupada sin permiso en 48 horas.",
        ],
      },
      {
        party: "psoe",
        idea: "Aumentar la vivienda pública de alquiler y limitar las subidas.",
        points: [
          "Crear una empresa estatal de vivienda para que la vivienda pública pase del 6 % del total.",
          "Prorrogar los contratos de alquiler con subidas de como máximo el 2 % y frenar desahucios de hogares vulnerables hasta 2030.",
          "Dar préstamos públicos sin intereses para la entrada de la primera vivienda y subir impuestos a los pisos turísticos.",
        ],
      },
      {
        party: "vox",
        idea: "Bajar los impuestos de compra y reservar las ayudas a quien tenga nacionalidad española.",
        points: [
          "Quitar el IVA en la primera vivienda nueva y el impuesto de transmisiones en la primera vivienda usada.",
          "Dar preferencia a personas con nacionalidad española en vivienda protegida y ayudas al alquiler.",
          "Retirar la ley de vivienda actual y recuperar una vivienda ocupada sin permiso en menos de 24 horas.",
        ],
      },
      {
        party: "fa",
        idea: "Limitar los precios y la compra de vivienda por parte de empresas.",
        points: [
          "Prohibir que fondos de inversión y empresas compren viviendas.",
          "Limitar el precio del alquiler en las zonas más caras y avanzar hacia contratos sin fecha de fin.",
          "Invertir durante diez años para llegar a dos millones de viviendas de alquiler asequible.",
        ],
      },
      {
        party: "podemos",
        idea: "Bajar los alquileres por ley y limitar la compra de vivienda a quien vaya a vivir en ella.",
        points: [
          "Reducir por ley todos los alquileres un 40 % de forma inmediata.",
          "Permitir comprar vivienda solo para residir en ella y limitar cuántas puede tener cada propietario.",
          "Pasar a alquiler social viviendas de grandes propietarios, también por expropiación, y prohibir el alquiler turístico.",
        ],
      },
    ],
  },
  {
    id: "impuestos",
    title: "Impuestos",
    emoji: "💶",
    question: "¿Quién debería pagar más o menos impuestos?",
    proposals: [
      {
        party: "pp",
        idea: "Rebajar el IRPF a jóvenes y familias y el IVA de productos básicos.",
        points: [
          "Ajustar cada año los tramos del IRPF a la inflación.",
          "Jóvenes de 18 a 35 años: no pagar IRPF el primer año de trabajo y pagar una parte creciente hasta el cuarto.",
          "IVA del 0 % en alimentos básicos mientras dure la inflación y del 10 % en la factura de la energía.",
        ],
      },
      {
        party: "psoe",
        idea: "Subir la tributación de las rentas más altas y de las grandes empresas.",
        points: [
          "Tipo del 50 % en el IRPF para ingresos de más de 300.000 € al año.",
          "Mantener el impuesto a la banca y el tipo mínimo del 15 % a las multinacionales.",
          "Subir el impuesto de sociedades a empresas con sueldos de directivos muy superiores a los de la plantilla.",
        ],
      },
      {
        party: "vox",
        idea: "Bajar el IRPF, el IVA y el impuesto de sociedades.",
        points: [
          "Reducir los tipos del IRPF, con más rebaja cuantos más hijos haya en el hogar.",
          "Bajar el IVA, sobre todo en productos básicos y en la electricidad.",
          "Fijar el impuesto de sociedades en el 15 %.",
        ],
      },
      {
        party: "fa",
        idea: "Subir la tributación de patrimonios y herencias altas.",
        points: [
          "Crear un impuesto estatal a herencias y donaciones de más de un millón de euros.",
          "Hacer permanente el impuesto a los patrimonios más grandes.",
          "Añadir tramos de IRPF para ingresos de más de 120.000 € al año.",
        ],
      },
      {
        party: "podemos",
        idea: "Subir la tributación de grandes empresas, rentas del capital y bienes de lujo.",
        points: [
          "Gravar al 50 % los beneficios extraordinarios de las grandes empresas cotizadas.",
          "Que las rentas del capital paguen lo mismo que las del trabajo en el IRPF.",
          "Crear impuestos a bienes de lujo como aviones privados o yates, sin subir los de asalariados y pymes.",
        ],
      },
    ],
  },
  {
    id: "trabajo",
    title: "Trabajo y salarios",
    emoji: "💼",
    question: "¿Qué hacer con la jornada laboral y los sueldos?",
    proposals: [
      {
        party: "pp",
        idea: "Reducir costes a autónomos y empresas que contratan.",
        points: [
          "Cuota cero de autónomos durante el primer año y menos declaraciones trimestrales.",
          "Bonificar las cotizaciones al contratar al primer trabajador.",
          "Fijar cupos de trabajadores extranjeros según los puestos sin cubrir en cada sector.",
        ],
      },
      {
        party: "psoe",
        idea: "Subir el salario mínimo y reducir la jornada de forma gradual.",
        points: [
          "Fijar en la Constitución un salario mínimo de al menos el 60 % del salario medio.",
          "Llegar a una jornada media de 36 horas semanales en 2030.",
          "Obligar a las grandes empresas a repartir parte de los beneficios con la plantilla.",
        ],
      },
      {
        party: "vox",
        idea: "Bajar cotizaciones y dejar la jornada a la negociación.",
        points: [
          "Reducir las cotizaciones sociales y los costes de contratar.",
          "No reducir por ley la jornada laboral de forma general.",
          "Retirar la reforma laboral de 2021 y ayudar a la industria a quedarse en España.",
        ],
      },
      {
        party: "fa",
        idea: "Reducir la jornada sin bajar el sueldo y controlar las horas extra.",
        points: [
          "Pasar de 40 a 37,5 horas semanales manteniendo el sueldo.",
          "Seguir subiendo el salario mínimo.",
          "Hacer obligatorio el registro digital de la jornada para que se paguen todas las horas extra.",
        ],
      },
      {
        party: "podemos",
        idea: "Subir el salario mínimo y reducir la jornada a 30 horas.",
        points: [
          "Salario mínimo de 1.800 euros al mes.",
          "Jornada de 30 horas semanales sin bajar el sueldo.",
          "Que nadie en una empresa cobre más de 20 veces el sueldo más bajo.",
        ],
      },
    ],
  },
  {
    id: "pensiones",
    title: "Pensiones",
    emoji: "👵",
    question: "¿Cómo mantener y mejorar las pensiones?",
    proposals: [
      {
        party: "pp",
        idea: "Subirlas con el IPC y acordar reformas entre partidos.",
        points: [
          "Revalorizar todas las pensiones cada año según el IPC.",
          "Reforzar el acuerdo parlamentario sobre pensiones (Pacto de Toledo) para que el sistema sea sostenible.",
          "Garantizar por ley que la Seguridad Social siga siendo una sola para todo el país.",
        ],
      },
      {
        party: "psoe",
        idea: "Subirlas con el IPC y aumentar el fondo de reserva.",
        points: [
          "Revalorizar todas las pensiones con el IPC durante los próximos cuatro años.",
          "Llegar a 20.000 millones en el fondo de reserva al final de la legislatura.",
          "Subir más las pensiones mínimas, las no contributivas y las de viudedad.",
        ],
      },
      {
        party: "fa",
        idea: "Proteger la subida por ley y subir más las pensiones bajas.",
        points: [
          "Garantizar por ley la subida anual con el IPC.",
          "Subir las pensiones mínimas y no contributivas por encima del IPC hasta el umbral de pobreza.",
          "Que el Estado pague hasta la mitad del sistema de atención a la dependencia.",
        ],
      },
      {
        party: "podemos",
        idea: "Adelantar la jubilación y fijar un mínimo igual al salario mínimo.",
        points: [
          "Bajar la edad de jubilación a los 63 años.",
          "Que ninguna pensión, tampoco las no contributivas, quede por debajo del salario mínimo.",
          "Impedir que bancos y fondos de inversión gestionen planes de pensiones dentro del sistema.",
        ],
      },
    ],
  },
  {
    id: "sanidad",
    title: "Sanidad",
    emoji: "🏥",
    question: "¿Cómo mejorar la sanidad?",
    proposals: [
      {
        party: "pp",
        idea: "Contratar médicos de familia y financiar salud mental y cuidados paliativos.",
        points: [
          "Contratar al menos 4.500 médicos más en los centros de salud, junto a las comunidades.",
          "Un plan nacional de salud mental para 2027-2037 con presupuesto garantizado.",
          "Una ley nacional de cuidados paliativos.",
        ],
      },
      {
        party: "psoe",
        idea: "Fijar por ley tiempos máximos de espera y formar más médicos.",
        points: [
          "Esperas máximas de 120 días para operarse, 60 para el especialista y 30 para pruebas.",
          "Aumentar un 15 % las plazas para estudiar Medicina.",
          "Dar prioridad a la gestión pública y destinar a sanidad parte de la nueva financiación autonómica.",
        ],
      },
      {
        party: "vox",
        idea: "Unificar la sanidad en todo el país y concertar con la privada para reducir esperas.",
        points: [
          "Una tarjeta sanitaria y un historial médico únicos en todo el país.",
          "Un plan nacional de listas de espera que use centros privados cuando acorten los plazos.",
          "Atender solo urgencias graves a inmigrantes sin permiso de residencia.",
        ],
      },
      {
        party: "fa",
        idea: "Aumentar el gasto público y ampliar las prestaciones cubiertas.",
        points: [
          "Incluir dentista, gafas, audífonos, psicología y fisioterapia en la sanidad pública.",
          "Una ley de listas de espera con plazos máximos.",
          "Crear una empresa pública que fabrique medicamentos.",
        ],
      },
      {
        party: "podemos",
        idea: "Que la sanidad pública sea gestionada solo por la administración.",
        points: [
          "Derogar las leyes que permiten que empresas privadas gestionen hospitales públicos.",
          "Incluir dentista, vista, oído y fisioterapia en la sanidad pública.",
          "Crear una empresa pública de medicamentos y fijar precios máximos.",
        ],
      },
    ],
  },
  {
    id: "educacion",
    title: "Educación",
    emoji: "🎓",
    question: "¿Qué cambiar en colegios, institutos y universidades?",
    proposals: [
      {
        party: "pp",
        idea: "Cambiar la ley educativa y endurecer los requisitos para pasar de curso.",
        points: [
          "Sustituir la ley educativa actual por una nueva.",
          "Exigir más para pasar de curso en la ESO y para entrar a estudiar Magisterio.",
          "Una misma prueba de acceso a la universidad en todo el país.",
        ],
      },
      {
        party: "psoe",
        idea: "Reducir alumnos por clase y abaratar los estudios.",
        points: [
          "Máximo de 22 alumnos por clase en Primaria y 25 en la ESO.",
          "Matrícula gratis en universidad y FP superior para quien apruebe a la primera.",
          "Plazas públicas gratuitas de 0 a 3 años y libros de texto gratis.",
        ],
      },
      {
        party: "vox",
        idea: "Un mismo temario y exámenes comunes en todo el país.",
        points: [
          "Sustituir la ley educativa actual y fijar un temario común con exámenes al final de cada etapa.",
          "Una única prueba de acceso a la universidad y poder estudiar en castellano en todas las comunidades.",
          "Ampliar la libertad de elección de centro y retirar contenidos que considera de carácter ideológico.",
        ],
      },
      {
        party: "fa",
        idea: "Aumentar la inversión y ofrecer educación gratuita desde los 0 años.",
        points: [
          "Máximo de 20 alumnos por clase en Primaria y ESO.",
          "Educación de 0 a 3 años, FP y comedor escolar gratuitos.",
          "Subir el gasto educativo al 5 % del PIB y después al 7 %.",
        ],
      },
      {
        party: "podemos",
        idea: "Educación pública gratuita de 0 a 18 años y sin religión en las aulas.",
        points: [
          "Educación pública gratis de 0 a 18 años, con libros, comedor y transporte, y universidad gratis.",
          "Reducir los conciertos con colegios privados.",
          "Sacar la religión de la escuela pública y acabar con los acuerdos y ventajas fiscales de la Iglesia.",
        ],
      },
    ],
  },
  {
    id: "inmigracion",
    title: "Inmigración",
    emoji: "🌍",
    question: "¿Qué hacer con la inmigración?",
    proposals: [
      {
        party: "pp",
        idea: "Vincular la llegada al empleo y reforzar el control de fronteras.",
        points: [
          "Cupos anuales de trabajadores extranjeros según las vacantes y la capacidad de servicios.",
          "Más agentes en la frontera sur, identificar en siete días a quien entre sin permiso y acelerar devoluciones.",
          "Endurecer los requisitos de nacionalidad y poder retirarla por delitos graves.",
        ],
      },
      {
        party: "psoe",
        idea: "Combinar control de fronteras con vías legales para trabajar.",
        points: [
          "Mantener la regularización extraordinaria aprobada en 2026.",
          "Repartir entre comunidades a los menores que llegan sin familia.",
          "Ampliar los acuerdos para venir a trabajar por temporadas y perseguir a las redes en origen.",
        ],
      },
      {
        party: "vox",
        idea: "Devolver a quien esté sin permiso y limitar ayudas a extranjeros.",
        points: [
          "Devolver a su país a quien esté sin permiso y no permitir regularizaciones.",
          "Promover el retorno de extranjeros que no trabajen o vivan de ayudas, y expulsar por delitos graves.",
          "Reservar el ingreso mínimo vital a personas con nacionalidad española.",
        ],
      },
      {
        party: "fa",
        idea: "Crear vías permanentes de regularización y de asilo.",
        points: [
          "Un procedimiento permanente para regularizar a quien ya vive en el país.",
          "Poder pedir asilo en embajadas y consulados.",
          "Cerrar los centros de internamiento de extranjeros y aprobar una ley contra la discriminación racial.",
        ],
      },
      {
        party: "podemos",
        idea: "Regularizar a todas las personas que ya viven aquí.",
        points: [
          "Regularizar de inmediato a todas las personas que viven y trabajan en el país.",
          "Sustituir la ley de extranjería y cerrar los centros de internamiento.",
          "Abrir vías legales para llegar y crear un servicio público de rescate en el mar.",
        ],
      },
    ],
  },
  {
    id: "energia",
    title: "Energía y clima",
    emoji: "⚡",
    question: "¿Cómo abaratar la energía y qué hacer con las emisiones?",
    proposals: [
      {
        party: "pp",
        idea: "Mantener abiertas las centrales nucleares y bajar impuestos a la electricidad.",
        points: [
          "Cancelar el calendario de cierre de las centrales nucleares, con supervisión del regulador.",
          "Combinar nuclear, renovables y almacenamiento.",
          "Eliminar el impuesto del 7 % a la producción eléctrica y unificar las ayudas a la factura.",
        ],
      },
      {
        party: "psoe",
        idea: "Acelerar las renovables y cumplir los objetivos de emisiones.",
        points: [
          "Que el 81 % de la electricidad sea renovable en 2030.",
          "Un acuerdo entre partidos para el cambio climático y mantener el abono único de transporte.",
          "Impulsar el autoconsumo, el almacenamiento y el hidrógeno.",
        ],
      },
      {
        party: "vox",
        idea: "Ampliar la energía nuclear y suavizar normas medioambientales.",
        points: [
          "Cancelar el cierre de las nucleares y estudiar construir otras nuevas.",
          "Revisar normas medioambientales europeas, como el fin de la venta de coches de gasolina y diésel.",
          "Revisar las zonas de bajas emisiones de las ciudades y bajar impuestos a la electricidad.",
        ],
      },
      {
        party: "fa",
        idea: "Cerrar las nucleares según el calendario y acelerar las renovables.",
        points: [
          "Mantener el cierre de las nucleares hasta 2035 sin prorrogar ninguna.",
          "90 % de electricidad renovable en 2030 y emisiones netas cero en 2040.",
          "Rehabilitar 500.000 viviendas al año y sustituir vuelos cortos por tren.",
        ],
      },
      {
        party: "podemos",
        idea: "Crear una empresa pública de energía y cambiar cómo se fija el precio.",
        points: [
          "Crear una empresa pública de energía.",
          "Cobrar la electricidad a su coste de producción, con precio más alto para quien más consume.",
          "100 % renovables en 2040, cerrar las nucleares y ayudas para comprar coche eléctrico a hogares con menos ingresos.",
        ],
      },
    ],
  },
  {
    id: "seguridad",
    title: "Seguridad y justicia",
    emoji: "⚖️",
    question: "¿Cómo mejorar la seguridad y la justicia?",
    proposals: [
      {
        party: "pp",
        idea: "Aumentar penas en delitos graves y acelerar juicios.",
        points: [
          "Ampliar la prisión permanente revisable a quien oculte el cuerpo de la víctima y a agresores sexuales reincidentes.",
          "Juicios rápidos para quien reincide en hurtos y delitos leves.",
          "Más medios contra grupos que usan a menores para delinquir y contra la violencia de género.",
        ],
      },
      {
        party: "psoe",
        idea: "Aumentar plantillas y cambiar quién investiga los delitos.",
        points: [
          "Aumentar las plantillas de Policía Nacional y Guardia Civil.",
          "Que los fiscales dirijan las investigaciones, con un juez que vigile los derechos.",
          "Más jueces y fiscales hasta acercarse a la media europea.",
        ],
      },
      {
        party: "vox",
        idea: "Endurecer el Código Penal y la responsabilidad penal de menores.",
        points: [
          "Ampliar la prisión permanente revisable a más delitos.",
          "Bajar la edad a partir de la cual un menor responde penalmente.",
          "Volver a incluir el delito de sedición y dar más medios a las fuerzas de seguridad.",
        ],
      },
      {
        party: "fa",
        idea: "Reformar la Ley de Seguridad Ciudadana y el modelo policial.",
        points: [
          "Reformar la Ley de Seguridad Ciudadana de 2015.",
          "Prohibir las pelotas de goma y las identificaciones por el aspecto físico.",
          "Cámaras en el uniforme y número de identificación visible en los agentes.",
        ],
      },
      {
        party: "podemos",
        idea: "Derogar la Ley de Seguridad Ciudadana y regular el cannabis.",
        points: [
          "Derogar la Ley de Seguridad Ciudadana de 2015.",
          "Crear unidades policiales contra delitos de odio y prohibir grupos neonazis.",
          "Legalizar y regular el cannabis, también para uso recreativo.",
        ],
      },
    ],
  },
  {
    id: "territorial",
    title: "Comunidades autónomas",
    emoji: "🗺️",
    question: "¿Cómo repartir el poder y el dinero entre Estado y comunidades?",
    proposals: [
      {
        party: "pp",
        idea: "Negociar la financiación con todas las comunidades a la vez.",
        points: [
          "Reformar la financiación autonómica en un acuerdo conjunto de todas las comunidades.",
          "No firmar acuerdos fiscales especiales con una sola comunidad ni ceder Hacienda o Seguridad Social.",
          "Invertir más de 300.000 millones en infraestructuras en 15 años.",
        ],
      },
      {
        party: "psoe",
        idea: "Dar más recursos a las comunidades y avanzar a un modelo federal.",
        points: [
          "Un nuevo sistema de financiación con unos 21.000 millones más para las comunidades en 2027.",
          "Asumir desde el Estado 83.252 millones de deuda de las comunidades.",
          "Convertir el Senado en una cámara de las comunidades y mantener la amnistía aprobada en 2024.",
        ],
      },
      {
        party: "vox",
        idea: "Igualar las normas en todo el país y reducir regulación.",
        points: [
          "Que una actividad autorizada en una comunidad pueda funcionar en todas sin nuevas licencias.",
          "Eliminar tres normas por cada nueva que se apruebe.",
          "Ilegalizar partidos y organizaciones que atenten contra la unidad del país.",
        ],
      },
      {
        party: "fa",
        idea: "Reconocer varias naciones dentro del Estado y fijar mínimos fiscales comunes.",
        points: [
          "Reconocer en la Constitución que en España conviven varias naciones.",
          "Un mínimo común de impuestos para que las comunidades no compitan rebajándolos.",
          "Un acuerdo sobre Cataluña que se someta a votación en Cataluña.",
        ],
      },
      {
        party: "podemos",
        idea: "Pasar a una república con más soberanía para los territorios.",
        points: [
          "Cambiar la monarquía por una república con varias naciones reconocidas.",
          "Permitir votaciones sobre la relación de cada territorio con el Estado.",
          "Ventajas fiscales para las zonas más despobladas.",
        ],
      },
    ],
  },
  {
    id: "instituciones",
    title: "Corrupción e instituciones",
    emoji: "🏛️",
    question: "¿Cómo mejorar las instituciones y prevenir la corrupción?",
    proposals: [
      {
        party: "pp",
        idea: "Reducir la Administración y dar más independencia a fiscalía y tribunales.",
        points: [
          "Revisar todo el gasto público en 100 días y reducir ministerios, altos cargos y asesores.",
          "Fiscal general con un único mandato de cinco años y sin cargos políticos recientes en el Tribunal Constitucional.",
          "Convocar elecciones si no se aprueban presupuestos dos años seguidos.",
        ],
      },
      {
        party: "psoe",
        idea: "Crear una agencia anticorrupción y controlar el patrimonio de cargos públicos.",
        points: [
          "Una agencia independiente para prevenir la corrupción.",
          "Revisiones al azar del patrimonio de los altos cargos.",
          "Cambiar el sistema de acceso a las carreras de juez y fiscal.",
        ],
      },
      {
        party: "vox",
        idea: "Cambiar la elección del órgano de los jueces y retirar subvenciones.",
        points: [
          "Que los propios jueces elijan a 12 miembros del Consejo General del Poder Judicial.",
          "Prohibir indultos por corrupción y endurecer las penas por desvío de dinero público.",
          "Retirar las subvenciones públicas a partidos, sindicatos, patronales y ONG.",
        ],
      },
      {
        party: "fa",
        idea: "Excluir de contratos a empresas corruptas y limitar el paso de cargos a empresas.",
        points: [
          "Prohibir durante 20 años contratar con la Administración a empresas implicadas en casos de corrupción.",
          "Que los expresidentes del Gobierno esperen 10 años, en vez de 2, para trabajar en empresas privadas.",
          "Una agencia de prevención de la corrupción y un registro obligatorio de grupos de presión.",
        ],
      },
      {
        party: "podemos",
        idea: "Cambiar el acceso a la judicatura y la propiedad de los medios.",
        points: [
          "Cambiar cómo se elige el Consejo General del Poder Judicial y las oposiciones a juez.",
          "Que propietarios, directores y presentadores de medios declaren sus bienes e intereses.",
          "Limitar al 10 % la participación de bancos, fondos y eléctricas en medios de comunicación.",
        ],
      },
    ],
  },
  {
    id: "exterior",
    title: "Defensa y política exterior",
    emoji: "🕊️",
    question: "¿Qué papel debe tener España en el mundo?",
    proposals: [
      {
        party: "pp",
        idea: "Aumentar el gasto y el personal militar según los compromisos con aliados.",
        points: [
          "Cumplir los compromisos de gasto de la OTAN con aprobación del Congreso.",
          "Una ley de financiación de defensa a varios años, más militares y mejores sueldos.",
          "Más presencia militar en Ceuta, Melilla y Canarias y más relación con Estados Unidos.",
        ],
      },
      {
        party: "psoe",
        idea: "Subir moderadamente el gasto militar y priorizar la política europea.",
        points: [
          "Gasto militar del 2,1 % del PIB, sin llegar al 5 % que pide la OTAN.",
          "Mantener el apoyo a Ucrania y una defensa europea más autónoma.",
          "Embargo de armas a Israel y pedir a la UE que suspenda su acuerdo con ese país.",
        ],
      },
      {
        party: "vox",
        idea: "Revisar acuerdos comerciales y aumentar los medios militares.",
        points: [
          "Rechazar el acuerdo comercial entre la UE y Mercosur.",
          "Exigir a los productos importados las mismas normas que a los nacionales.",
          "Aumentar los medios de las Fuerzas Armadas.",
        ],
      },
      {
        party: "fa",
        idea: "Mantener el gasto militar y reducir la dependencia de la OTAN.",
        points: [
          "No aumentar el gasto militar.",
          "Embargo total de armas a Israel.",
          "Más autonomía europea frente a la OTAN y el 0,7 % de la renta para ayuda al desarrollo en 2030.",
        ],
      },
      {
        party: "podemos",
        idea: "Salir de la OTAN y no aumentar el gasto militar.",
        points: [
          "Salir de la OTAN y cerrar las bases de Estados Unidos en Rota y Morón.",
          "No aumentar el gasto militar ni enviar armas a Ucrania, y buscar una paz negociada.",
          "Romper relaciones con Israel y firmar el tratado de prohibición de armas nucleares.",
        ],
      },
    ],
  },
  {
    id: "derechos",
    title: "Familia y derechos",
    emoji: "👨‍👩‍👧",
    question: "¿Qué hacer con las ayudas a familias, el aborto y otros derechos?",
    proposals: [
      {
        party: "pp",
        idea: "Aumentar las deducciones por hijo y unificar las ayudas familiares.",
        points: [
          "Duplicar el mínimo por el primer hijo en el IRPF, de 2.400 a 4.800 €.",
          "Unir las deducciones familiares en un pago mensual, también para quien no paga IRPF.",
          "Prohibir el burka y el niqab en espacios públicos.",
        ],
      },
      {
        party: "psoe",
        idea: "Incluir el aborto en la Constitución y ampliar las leyes de igualdad.",
        points: [
          "Reconocer el derecho al aborto en la Constitución.",
          "Una ley contra el maltrato a los hijos usado para dañar a la madre.",
          "Prohibir el lucro con la prostitución y reconocer un año cotizado por cada hijo.",
        ],
      },
      {
        party: "vox",
        idea: "Oponerse al aborto y la eutanasia y dar ventajas por número de hijos.",
        points: [
          "Oponerse al aborto y a la eutanasia.",
          "Derogar las leyes de género actuales y la Ley de Memoria Democrática.",
          "Ventajas fiscales según el número de hijos y prohibir el burka y el niqab en espacios públicos.",
        ],
      },
      {
        party: "fa",
        idea: "Crear una ayuda universal por hijo y garantizar el aborto en la sanidad pública.",
        points: [
          "200 € al mes por cada hijo hasta los 18 años, sin requisito de ingresos.",
          "Que todos los hospitales públicos del país garanticen el aborto.",
          "Reproducción asistida pública hasta los 45 años y más derechos para personas LGTBI.",
        ],
      },
      {
        party: "podemos",
        idea: "Garantizar aborto y eutanasia en la sanidad pública y ampliar derechos LGTBI.",
        points: [
          "Garantizar el aborto y la eutanasia en la sanidad pública.",
          "Mantener la ley de personas trans y reconocer legalmente a las personas no binarias.",
          "Prohibir la gestación subrogada y el lucro con la prostitución sin multar a las mujeres.",
        ],
      },
    ],
  },
];

export const SOURCES: { title: string; url: string }[] = [
  { title: "Telecinco — Programas electorales del 29N (13 nov 2026)", url: "https://www.telecinco.es/noticias/espana/20261113/elecciones-generales-2026-programas-electorales-pp-psoe-vox-sumar-podemos_18_020555572.html" },
  { title: "Demócrata — Comparativa de los programas de PP y Vox", url: "https://www.democrata.es/elecciones-generales-espana/comparativa-programas-electorales-derecha-proponen-pp-vox-29n/" },
  { title: "Demócrata — Programa del PP «La Reconstrucción Nacional»", url: "https://www.democrata.es/actualidad/feijoo-programa-electoral-pp-29n-reconstruccion-nacional-medidas/" },
  { title: "Política Electoral — PP 2026", url: "https://www.politicaelectoral.com/es/espana/generales-2026/nacional/pp" },
  { title: "Infodefensa — Defensa en el programa del PP", url: "https://www.infodefensa.com/texto-diario/mostrar/6085546/pp-promete-programa-aumentar-efectivos-militares-subir-salarios-reforzar-ceuta-melilla-aprobar-ley-financiacion-defensa" },
  { title: "Política Electoral — PSOE 2026", url: "https://www.politicaelectoral.com/es/espana/generales-2026/nacional/psoe" },
  { title: "Vox — «Es sentido común»: medidas para el 29N", url: "https://www.voxespana.es/abascal/es-sentido-comun-estas-son-las-medidas-de-vox-para-el-29n-20261112" },
  { title: "Infobae — Programa de Vox para el 29-N", url: "https://www.infobae.com/espana/2026/11/12/vox-lleva-al-29-n-un-programa-electoral-con-repatriaciones-y-deportaciones-de-migrantes-prioridad-nacional-y-derogacion-de-leyes-de-genero/" },
  { title: "Política Electoral — Frente Amplio (Sumar) 2026", url: "https://www.politicaelectoral.com/es/espana/generales-2026/nacional/sumar" },
  { title: "Demócrata — Frente Amplio y la corrupción", url: "https://www.democrata.es/politica/frente-amplio-propone-vetar-20-anos-en-contratos-publicos-a-empresas-implicadas-en-corrupcion/" },
  { title: "Política Electoral — Podemos 2026", url: "https://www.politicaelectoral.com/es/espana/generales-2026/nacional/podemos" },
  { title: "Diario en Positivo — Montero: jubilación a los 63", url: "https://www.diarioenpositivo.com/politica/29n-irene-montero-plantea-bajar-edad-jubilacion-63-anos-subir-pensiones-minimas-contributivas/20261106130751096883.html" },
];

export const LAST_UPDATED = "14 de noviembre de 2026";
