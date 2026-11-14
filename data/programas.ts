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
      "Programa completo publicado el 10 de noviembre («La Reconstrucción Nacional», 249 medidas).",
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
      "Programa completo publicado el 12 de noviembre («Es sentido común», 115 medidas).",
  },
  fa: {
    id: "fa",
    name: "Frente Amplio",
    fullName: "Frente Amplio (IU, Más Madrid, Movimiento Sumar, Comuns)",
    candidate: "Ada Colau / Emilio Delgado",
    status:
      "Presentó un avance («100+15») el 12 de noviembre. El resto se completa con anuncios de 2026 y el programa de Sumar de 2023.",
  },
  podemos: {
    id: "podemos",
    name: "Podemos",
    fullName: "Podemos",
    candidate: "Irene Montero",
    status:
      "Sin programa completo publicado. Se resumen sus medidas de campaña («Paz, casa y trabajo») y sus documentos de 2024 y 2025.",
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

export const TOPICS: Topic[] = [
  {
    id: "vivienda",
    title: "Vivienda",
    emoji: "🏠",
    question: "¿Cómo hacer que la vivienda sea más asequible?",
    proposals: [
      {
        party: "pp",
        idea: "Construir mucho más y ayudar a los jóvenes a comprar.",
        points: [
          "Facilitar que se construya un millón de viviendas en cuatro años, con licencias de obra resueltas en tres meses.",
          "Bajar el IVA de la primera vivienda nueva del 10 % al 4 % para menores de 40 años y dar avales públicos para la entrada.",
          "Una cuenta de ahorro para jóvenes («hucha hogar») con desgravación del 20 %.",
          "Quitar la actual Ley de Vivienda y los límites al alquiler en zonas tensionadas. Desalojo de okupas en 48 horas.",
        ],
      },
      {
        party: "psoe",
        idea: "Más vivienda pública de alquiler y mantener los límites a las subidas.",
        points: [
          "Crear una empresa estatal de vivienda para que la vivienda pública supere el 6 % del total.",
          "Mantener la prórroga de los alquileres con un tope del 2 % a las subidas y frenar desahucios de familias vulnerables hasta 2030.",
          "Préstamos públicos sin intereses para pagar la entrada de la primera vivienda.",
          "Más impuestos a los pisos turísticos y a las grandes empresas inmobiliarias cotizadas (socimis).",
        ],
      },
      {
        party: "vox",
        idea: "Menos impuestos al comprar y preferencia para los españoles en las ayudas.",
        points: [
          "IVA del 0 % en la compra de la primera vivienda nueva y sin impuesto de transmisión en la primera usada.",
          "Liberar suelo para construir más y más rápido.",
          "Dar prioridad a los españoles en vivienda protegida, social y ayudas al alquiler.",
          "Quitar la actual Ley de Vivienda. Desalojo de okupas en menos de 24 horas.",
        ],
      },
      {
        party: "fa",
        idea: "Intervenir el mercado y limitar la compra de viviendas como inversión.",
        points: [
          "Prohibir que fondos de inversión y empresas compren vivienda.",
          "Limitar los precios del alquiler en zonas tensionadas y avanzar hacia contratos indefinidos.",
          "Crear un gran parque de vivienda pública (dos millones de viviendas asequibles en diez años).",
          "Restringir pisos turísticos y alquileres de temporada o por habitaciones.",
        ],
      },
      {
        party: "podemos",
        idea: "Bajar los alquileres por ley y que las casas sean solo para vivir.",
        points: [
          "Bajar por ley todos los alquileres un 40 % como medida de choque.",
          "Prohibir comprar viviendas que no sean para vivir en ellas y limitar cuántas puede tener cada propietario.",
          "Pasar al alquiler social viviendas de grandes propietarios y fondos, incluso expropiando su uso.",
          "Prohibir el uso turístico de viviendas y poner un impuesto a las viviendas vacías.",
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
        idea: "Bajar impuestos a familias, jóvenes y rentas medias.",
        points: [
          "Ajustar el IRPF a la inflación para que no suba sin que subas de sueldo.",
          "Jóvenes de 18 a 35 años: sin IRPF el primer año de trabajo y una rebaja que va bajando hasta el cuarto año.",
          "IVA del 0 % en alimentos básicos mientras siga la inflación y bajar el IVA de la energía al 10 %.",
          "Autónomos que facturen menos de 85.000 € sin tener que cobrar ni declarar IVA.",
        ],
      },
      {
        party: "psoe",
        idea: "Que pague más quien más gana y luchar contra el fraude.",
        points: [
          "Tipo del 50 % en el IRPF para quien gane más de 300.000 € al año.",
          "Mantener el impuesto permanente a la banca y el mínimo del 15 % a las multinacionales.",
          "Más impuestos a empresas cuyos directivos cobren muchísimo más que su plantilla.",
          "Un gran acuerdo contra el fraude fiscal.",
        ],
      },
      {
        party: "vox",
        idea: "Bajar impuestos en general y premiar a las familias con hijos.",
        points: [
          "Rebajar los tipos del IRPF, con más ventajas cuantos más hijos se tengan.",
          "Bajar el IVA, sobre todo en productos básicos y de la luz.",
          "Dejar el impuesto de sociedades en el 15 %.",
          "Autónomos que ganen menos del salario mínimo, cuota cero.",
        ],
      },
      {
        party: "fa",
        idea: "Más impuestos a las grandes fortunas y herencias.",
        points: [
          "Un impuesto estatal a las herencias y donaciones de más de un millón de euros.",
          "Hacer permanente el impuesto a las grandes fortunas.",
          "Nuevos tramos de IRPF para quien gane más de 120.000 € al año.",
          "Mantener los impuestos especiales a bancos y energéticas.",
        ],
      },
      {
        party: "podemos",
        idea: "Que paguen más las grandes empresas y fortunas, nunca los trabajadores.",
        points: [
          "Impuesto del 50 % a los beneficios extraordinarios de las grandes empresas.",
          "Que las ganancias del capital tributen igual que los sueldos.",
          "Impuestos a lujos como jets privados, yates o coches de gran cilindrada.",
          "No subir impuestos a trabajadores, autónomos ni pymes.",
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
        idea: "Facilitar contratar y emprender para que suban los sueldos.",
        points: [
          "Objetivo de subir el salario medio.",
          "Autónomos: cuota cero el primer año y menos papeleo (algunas declaraciones pasan a ser semestrales).",
          "Bonificaciones al contratar al primer trabajador.",
          "Cupos de trabajadores extranjeros según los puestos que no se cubren en cada sector.",
        ],
      },
      {
        party: "psoe",
        idea: "Seguir subiendo el salario mínimo y reducir la jornada.",
        points: [
          "Salario mínimo de al menos el 60 % del salario medio, recogido en la Constitución.",
          "Jornada media de 36 horas semanales en 2030.",
          "Mantener la reforma laboral actual.",
          "Un Estatuto del Becario y obligar a las grandes empresas a repartir beneficios con la plantilla.",
        ],
      },
      {
        party: "vox",
        idea: "Abaratar el coste de contratar y no imponer reducción de jornada.",
        points: [
          "Bajar las cotizaciones y los costes laborales de las empresas.",
          "No reducir la jornada laboral por ley de forma general.",
          "Quitar la reforma laboral actual.",
          "Reindustrializar el país y frenar que las empresas se vayan fuera.",
        ],
      },
      {
        party: "fa",
        idea: "Trabajar menos horas cobrando lo mismo.",
        points: [
          "Bajar la jornada de 40 a 37,5 horas semanales sin bajar el sueldo.",
          "Seguir subiendo el salario mínimo.",
          "Registro digital obligatorio de la jornada para acabar con las horas extra sin pagar.",
        ],
      },
      {
        party: "podemos",
        idea: "Salario mínimo de 1.800 € y semana de 30 horas.",
        points: [
          "Subir el salario mínimo a 1.800 euros al mes.",
          "Reducir la jornada hasta 30 horas semanales sin bajar el sueldo.",
          "Que en una empresa nadie cobre más de 20 veces el sueldo más bajo.",
        ],
      },
    ],
  },
  {
    id: "pensiones",
    title: "Pensiones",
    emoji: "👵",
    question: "¿Cómo asegurar las pensiones?",
    proposals: [
      {
        party: "pp",
        idea: "Subirlas con el IPC y reforzar el acuerdo entre partidos.",
        points: [
          "Revalorizar las pensiones cada año según el IPC.",
          "Reforzar el Pacto de Toledo para que el sistema sea sostenible.",
          "Garantizar por ley que la Seguridad Social siga siendo una caja única para toda España.",
          "Asegurar que los jóvenes de hoy puedan cobrar pensiones dignas en el futuro.",
        ],
      },
      {
        party: "psoe",
        idea: "Seguir subiéndolas con el IPC y llenar la hucha de las pensiones.",
        points: [
          "Cuatro años más de subida con el IPC.",
          "Que el Fondo de Reserva llegue a 20.000 millones al final de la legislatura.",
          "Subir más las pensiones mínimas y no contributivas.",
          "Mejorar el complemento que compensa la brecha de género y las de viudedad.",
        ],
      },
      {
        party: "fa",
        idea: "Proteger las pensiones en la Constitución y subir las más bajas.",
        points: [
          "Subida con el IPC garantizada por ley.",
          "Subir las pensiones mínimas y no contributivas por encima del IPC hasta salir de la pobreza.",
          "Que el Estado pague hasta la mitad del sistema de dependencia.",
        ],
      },
      {
        party: "podemos",
        idea: "Jubilación a los 63 y ninguna pensión por debajo del salario mínimo.",
        points: [
          "Bajar la edad de jubilación a los 63 años.",
          "Que ninguna pensión, tampoco las no contributivas, esté por debajo del salario mínimo.",
          "Mantener el sistema público sin entrada de bancos ni fondos de inversión.",
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
        idea: "Más médicos de cabecera y un plan de salud mental.",
        points: [
          "Contratar al menos 4.500 médicos más en Atención Primaria, junto a las comunidades.",
          "Plan nacional de salud mental 2027-2037 con dinero garantizado.",
          "Una ley nacional de cuidados paliativos.",
        ],
      },
      {
        party: "psoe",
        idea: "Defender la gestión pública y fijar tiempos máximos de espera.",
        points: [
          "Defender la sanidad de gestión pública frente a la privada, «cero recortes».",
          "Esperas máximas: 120 días para operarse, 60 para el especialista y 30 para pruebas.",
          "15 % más de plazas para estudiar Medicina.",
          "Más dinero para las comunidades destinado a sanidad.",
        ],
      },
      {
        party: "vox",
        idea: "Una tarjeta sanitaria única y usar la privada si reduce esperas.",
        points: [
          "Tarjeta sanitaria e historial clínico únicos para toda España.",
          "Plan nacional contra las listas de espera, colaborando con la sanidad privada cuando las reduzca.",
          "Incentivos para trabajar en zonas rurales y para que vuelvan sanitarios que se fueron fuera.",
          "Limitar la atención a inmigrantes en situación irregular a urgencias graves.",
        ],
      },
      {
        party: "fa",
        idea: "Más inversión pública y ampliar lo que cubre la sanidad.",
        points: [
          "Priorizar la gestión pública y que una misma empresa no pueda construir y gestionar un hospital.",
          "Incluir dentista, gafas, audífonos, psicoterapia y fisioterapia en la sanidad pública.",
          "Una ley de listas de espera con tiempos máximos.",
          "Crear una empresa pública de medicamentos.",
        ],
      },
      {
        party: "podemos",
        idea: "Acabar con la gestión privada de la sanidad pública.",
        points: [
          "Derogar las leyes que permiten privatizar la sanidad y que ninguna empresa gestione hospitales públicos.",
          "Mucho más dinero para Atención Primaria, zonas rurales y listas de espera.",
          "Dentista, vista, oído y fisioterapia en la sanidad pública.",
          "Una empresa pública de medicamentos y precios máximos.",
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
        idea: "Más exigencia y una selectividad igual en toda España.",
        points: [
          "Sustituir la ley educativa actual (LOMLOE).",
          "Endurecer los requisitos para pasar de curso en la ESO.",
          "Una misma prueba de acceso a la universidad en toda España.",
          "Más nivel para entrar a estudiar Magisterio.",
        ],
      },
      {
        party: "psoe",
        idea: "Clases con menos alumnos y estudios más baratos.",
        points: [
          "Máximo de 22 alumnos por clase en Primaria y 25 en la ESO.",
          "Matrícula gratis en universidad y FP superior para quien apruebe a la primera.",
          "Plazas públicas gratis de 0 a 3 años y libros de texto gratuitos.",
          "Mantener las becas.",
        ],
      },
      {
        party: "vox",
        idea: "Un mismo temario y exámenes nacionales, con enseñanza en español garantizada.",
        points: [
          "Quitar la ley educativa actual (LOMLOE).",
          "Un mismo temario para toda España, exámenes de reválida y una selectividad única.",
          "Garantizar que se pueda estudiar en español en todo el país.",
          "Más libertad para elegir colegio y quitar contenidos que considera ideológicos.",
        ],
      },
      {
        party: "fa",
        idea: "Más inversión y educación gratis desde los 0 años.",
        points: [
          "Máximo de 20 alumnos por clase en Primaria y ESO.",
          "Educación de 0 a 3 años, FP y comedores escolares gratis.",
          "Universidad cada vez más gratuita y más becas.",
          "Subir el gasto en educación hasta el 5 % del PIB y luego al 7 %.",
        ],
      },
      {
        party: "podemos",
        idea: "Educación pública gratis de 0 a 18 años y escuela laica.",
        points: [
          "Educación pública gratis de 0 a 18 años, con libros, comedor y transporte.",
          "Universidad gratis, incluidos los másteres obligatorios para ejercer.",
          "Limitar los colegios concertados.",
          "Escuela laica: sin religión en la escuela pública y fin de los privilegios fiscales de la Iglesia.",
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
        idea: "Inmigración ordenada según el empleo y más control de fronteras.",
        points: [
          "Cupos anuales de trabajadores extranjeros según las vacantes, el paro y la capacidad de vivienda y servicios.",
          "Más agentes y tecnología en la frontera sur e identificar en siete días a quien entre de forma irregular.",
          "Acelerar el asilo y las devoluciones.",
          "Requisitos más duros para la nacionalidad y poder retirarla por delitos graves.",
        ],
      },
      {
        party: "psoe",
        idea: "Combinar control de fronteras con vías legales para venir a trabajar.",
        points: [
          "Mantener la regularización extraordinaria de inmigrantes aprobada en 2026.",
          "Repartir entre comunidades a los menores que llegan solos.",
          "Más acuerdos de migración circular (venir a trabajar por temporadas).",
          "Luchar contra las mafias en los países de origen.",
        ],
      },
      {
        party: "vox",
        idea: "Expulsar a quien esté de forma ilegal y prioridad para los españoles.",
        points: [
          "Repatriar a los inmigrantes en situación irregular y prohibir las regularizaciones masivas.",
          "Plan para que se vayan los extranjeros que no contribuyan o vivan de ayudas.",
          "Deportar a quien cometa delitos graves o repetidos.",
          "Reservar ayudas como el ingreso mínimo vital a los españoles.",
        ],
      },
      {
        party: "fa",
        idea: "Vías permanentes para regularizar y más derechos.",
        points: [
          "Un mecanismo permanente para regularizar a quien ya vive aquí.",
          "Poder pedir asilo en embajadas y consulados.",
          "Cerrar los centros de internamiento de extranjeros (CIE).",
          "Una ley integral contra el racismo.",
        ],
      },
      {
        party: "podemos",
        idea: "Regularizar a todos los que viven y trabajan aquí.",
        points: [
          "Regularizar ya a todas las personas que viven y trabajan en España.",
          "Derogar la Ley de Extranjería y cerrar los CIE.",
          "Vías legales y seguras para llegar y un servicio público de rescate en el mar.",
        ],
      },
    ],
  },
  {
    id: "energia",
    title: "Energía y clima",
    emoji: "⚡",
    question: "¿Cómo conseguir energía barata y qué hacer con el clima?",
    proposals: [
      {
        party: "pp",
        idea: "Mantener las nucleares y bajar impuestos a la luz.",
        points: [
          "Cancelar el calendario de cierre de las centrales nucleares, bajo control del Consejo de Seguridad Nuclear.",
          "Combinar nuclear, renovables y almacenamiento.",
          "Quitar el impuesto del 7 % a la generación eléctrica y crear un bono social único.",
        ],
      },
      {
        party: "psoe",
        idea: "Acelerar las renovables y cumplir los objetivos climáticos.",
        points: [
          "81 % de la electricidad renovable en 2030.",
          "Un gran acuerdo de Estado contra la emergencia climática.",
          "Mantener el abono único de transporte.",
          "Más autoconsumo, almacenamiento e hidrógeno verde.",
        ],
      },
      {
        party: "vox",
        idea: "Más nuclear y menos normas medioambientales europeas.",
        points: [
          "Cancelar el cierre de las nucleares y estudiar construir nuevas.",
          "Revertir las normas del Pacto Verde europeo y la Agenda 2030, como los límites a coches de combustión.",
          "Revisar las zonas de bajas emisiones.",
          "Bajar los impuestos de la luz.",
        ],
      },
      {
        party: "fa",
        idea: "Cerrar las nucleares según lo previsto y apostar por las renovables.",
        points: [
          "Mantener el cierre de las nucleares hasta 2035, sin alargar ninguna.",
          "90 % de la electricidad renovable en 2030 y cero emisiones netas en 2040.",
          "Rehabilitar 500.000 viviendas al año para que gasten menos energía.",
          "Sustituir vuelos cortos por tren cuando sea posible.",
        ],
      },
      {
        party: "podemos",
        idea: "Una empresa pública de energía y luz a precio de coste.",
        points: [
          "Crear una empresa pública de energía.",
          "Que la luz se pague a precio de coste de producción, más cara cuanto más se consume.",
          "Ayudas para que las familias con menos ingresos compren coche eléctrico al precio de uno de gasolina.",
          "100 % renovables en 2040 y salir de la energía nuclear.",
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
        idea: "Penas más duras para delitos graves y juicios más rápidos.",
        points: [
          "Ampliar la prisión permanente revisable a asesinos que oculten el cadáver y violadores reincidentes.",
          "Juicios rápidos y más dureza con quien reincide en hurtos u ocupaciones.",
          "Más medios contra bandas que usan a menores y reforzar el sistema VioGén.",
        ],
      },
      {
        party: "psoe",
        idea: "Más policías y que los fiscales dirijan las investigaciones.",
        points: [
          "Seguir aumentando las plantillas de Policía Nacional y Guardia Civil.",
          "Que los fiscales investiguen los delitos, con un juez que vigile las garantías.",
          "Más jueces y fiscales para acercarse a la media europea.",
          "Más medios contra la violencia de género.",
        ],
      },
      {
        party: "vox",
        idea: "Endurecer el Código Penal y bajar la edad penal de los menores.",
        points: [
          "Ampliar la prisión permanente revisable.",
          "Bajar la edad a partir de la cual un menor responde penalmente.",
          "Recuperar el delito de sedición.",
          "Más medios para Policía, Guardia Civil y Fuerzas Armadas.",
        ],
      },
      {
        party: "fa",
        idea: "Reformar la «ley mordaza» y cambiar el modelo policial.",
        points: [
          "Reformar la Ley de Seguridad Ciudadana («ley mordaza»).",
          "Prohibir las pelotas de goma y los controles de identidad por aspecto racial.",
          "Cámaras corporales e identificación visible de los agentes.",
        ],
      },
      {
        party: "podemos",
        idea: "Derogar la «ley mordaza» y legalizar el cannabis.",
        points: [
          "Derogar la Ley de Seguridad Ciudadana («ley mordaza»).",
          "Prohibir grupos neonazis y crear unidades policiales contra delitos de odio.",
          "Que no se desahucie a ninguna familia vulnerable sin una alternativa.",
          "Legalizar y regular el cannabis, también para uso recreativo.",
        ],
      },
    ],
  },
  {
    id: "territorial",
    title: "Comunidades autónomas",
    emoji: "🗺️",
    question: "¿Cómo organizar el Estado y las comunidades autónomas?",
    proposals: [
      {
        party: "pp",
        idea: "Mismas reglas para todas las comunidades, sin acuerdos especiales.",
        points: [
          "Reformar la financiación autonómica con un acuerdo entre todas las comunidades a la vez.",
          "Rechazar nuevos regímenes especiales negociados con una sola comunidad.",
          "No ceder competencias de Hacienda, Seguridad Social, Defensa o fronteras a cambio de apoyos.",
          "Un plan de infraestructuras de más de 300.000 millones en 15 años.",
        ],
      },
      {
        party: "psoe",
        idea: "Un modelo más federal y más dinero para las comunidades.",
        points: [
          "Nuevo sistema de financiación autonómica con unos 21.000 millones más en 2027.",
          "Perdonar a las comunidades parte de su deuda con el Estado (83.252 millones).",
          "Mantener la Ley de Amnistía.",
          "Avanzar hacia un modelo federal con un Senado territorial.",
        ],
      },
      {
        party: "vox",
        idea: "Que lo autorizado en una comunidad valga en toda España.",
        points: [
          "Ley de Unidad de Mercado: una actividad aprobada en una comunidad puede funcionar en todas.",
          "Derogar tres normas por cada nueva que se apruebe.",
          "Ilegalizar partidos y organizaciones que atenten contra la unidad de España.",
          "Que saber una lengua cooficial no sea una barrera para ciertos empleos públicos.",
        ],
      },
      {
        party: "fa",
        idea: "Reconocer a España como un país plurinacional.",
        points: [
          "Reconocer España como Estado plurinacional con un nuevo pacto territorial.",
          "Un suelo fiscal para que las comunidades no compitan bajando impuestos a los ricos.",
          "Más uso de las lenguas cooficiales en las instituciones del Estado.",
          "Un acuerdo para Cataluña que voten los catalanes.",
        ],
      },
      {
        party: "podemos",
        idea: "Una república plurinacional con derecho a decidir.",
        points: [
          "Una república plurinacional donde cada pueblo pueda decidir.",
          "Ventajas fiscales para las zonas más despobladas.",
          "Tener en cuenta la despoblación al repartir los fondos europeos.",
        ],
      },
    ],
  },
  {
    id: "instituciones",
    title: "Corrupción e instituciones",
    emoji: "🏛️",
    question: "¿Cómo limpiar y mejorar las instituciones?",
    proposals: [
      {
        party: "pp",
        idea: "Adelgazar el Estado y dar más independencia a fiscal y tribunales.",
        points: [
          "Auditar todo el gasto público en los primeros 100 días y reducir ministerios, altos cargos y asesores.",
          "Fiscal General con un solo mandato de cinco años, independiente del Gobierno.",
          "Que no puedan entrar en el Tribunal Constitucional personas con cargos políticos en los cinco años anteriores.",
          "Convocar elecciones si no se aprueban presupuestos dos años seguidos.",
        ],
      },
      {
        party: "psoe",
        idea: "Una agencia anticorrupción y revisar el patrimonio de los altos cargos.",
        points: [
          "Crear una agencia independiente contra la corrupción.",
          "Revisiones al azar del patrimonio de los altos cargos.",
          "Cambiar el acceso a las carreras de juez y fiscal.",
        ],
      },
      {
        party: "vox",
        idea: "Que los jueces elijan a los jueces y acabar con las subvenciones a partidos y sindicatos.",
        points: [
          "Que los jueces elijan a 12 de los miembros del Consejo General del Poder Judicial.",
          "Prohibir indultos por corrupción y endurecer las penas por malversación.",
          "Quitar las subvenciones a partidos, sindicatos, patronales y ONG.",
          "Auditoría completa de la Administración para reducirla.",
        ],
      },
      {
        party: "fa",
        idea: "Vetar a empresas corruptas y frenar las puertas giratorias.",
        points: [
          "Prohibir durante 20 años contratar con la Administración a empresas implicadas en corrupción.",
          "Que los expresidentes esperen 10 años (en vez de 2) para trabajar en empresas privadas.",
          "Una agencia de prevención de la corrupción y una ley de lobbies.",
          "Que los indultos solo se den si hay interés público.",
        ],
      },
      {
        party: "podemos",
        idea: "Democratizar la justicia y controlar quién manda en los medios.",
        points: [
          "Cambiar cómo se elige el Consejo General del Poder Judicial y las oposiciones a juez.",
          "Que dueños de medios, directores y presentadores declaren sus bienes e intereses.",
          "Que bancos, fondos y eléctricas no puedan tener más del 10 % de un medio.",
          "Justicia gratuita para todos.",
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
        idea: "Cumplir con la OTAN y reforzar las Fuerzas Armadas.",
        points: [
          "Cumplir los compromisos de inversión con la OTAN con el visto bueno del Congreso.",
          "Una ley que fije el gasto en defensa para varios años y más militares, con mejores sueldos.",
          "Reforzar la presencia militar en Ceuta, Melilla y Canarias.",
          "Estrechar la relación con Estados Unidos.",
        ],
      },
      {
        party: "psoe",
        idea: "Europeísmo, apoyo a Ucrania y gasto militar moderado.",
        points: [
          "Gasto militar del 2,1 % del PIB, sin aceptar el 5 % que pide la OTAN.",
          "Seguir apoyando a Ucrania.",
          "Embargo de armas a Israel y pedir a la UE que suspenda su acuerdo con ese país.",
          "Más autonomía de Europa en defensa.",
        ],
      },
      {
        party: "vox",
        idea: "Proteger el campo frente a acuerdos comerciales y más medios para defensa.",
        points: [
          "Rechazar el acuerdo comercial entre la UE y Mercosur.",
          "Exigir a los productos importados las mismas normas que a los españoles.",
          "Más medios para las Fuerzas Armadas.",
        ],
      },
      {
        party: "fa",
        idea: "No subir el gasto militar y más autonomía frente a la OTAN.",
        points: [
          "No aumentar el gasto militar.",
          "Embargo total de armas a Israel.",
          "Más autonomía europea frente a la OTAN.",
          "Dedicar el 0,7 % de la renta a ayuda al desarrollo en 2030.",
        ],
      },
      {
        party: "podemos",
        idea: "Salir de la OTAN y ni un euro para guerras.",
        points: [
          "Salir de la OTAN lo antes posible y cerrar las bases de EE. UU. en Rota y Morón.",
          "No subir el gasto militar.",
          "Romper relaciones con Israel y no enviar armas a Ucrania, buscando una paz negociada.",
          "Firmar el tratado que prohíbe las armas nucleares.",
        ],
      },
    ],
  },
  {
    id: "derechos",
    title: "Familia y derechos",
    emoji: "👨‍👩‍👧",
    question: "¿Qué hacer con la familia, el aborto y otros derechos?",
    proposals: [
      {
        party: "pp",
        idea: "Una ayuda mensual por hijo y apoyo a la maternidad.",
        points: [
          "Duplicar la desgravación por el primer hijo (de 2.400 a 4.800 €).",
          "Juntar las deducciones familiares en una sola ayuda mensual, también para quien no paga IRPF.",
          "Aprobar una «ley del concebido no nacido».",
          "Prohibir el burka y el niqab en espacios públicos.",
        ],
      },
      {
        party: "psoe",
        idea: "Blindar el aborto en la Constitución y más igualdad.",
        points: [
          "Incluir el derecho al aborto en la Constitución.",
          "Una ley contra la violencia vicaria (dañar a los hijos para hacer daño a la madre).",
          "Abolir la prostitución castigando a quien se lucra.",
          "Un año de cotización por cada hijo.",
        ],
      },
      {
        party: "vox",
        idea: "Defender la vida desde la concepción y apoyar a las familias numerosas.",
        points: [
          "Defender la vida «desde la concepción hasta la muerte natural», en contra del aborto y la eutanasia.",
          "Quitar las actuales leyes de género y la de Memoria Democrática.",
          "Ventajas fiscales según el número de hijos y rebaja de impuestos en productos infantiles.",
          "Prohibir el burka y el niqab en espacios públicos.",
        ],
      },
      {
        party: "fa",
        idea: "200 € al mes por hijo y garantizar el aborto en la sanidad pública.",
        points: [
          "Una ayuda de 200 € al mes por cada hijo hasta los 18 años, sin requisito de renta.",
          "Garantizar el aborto en la sanidad pública de todo el país.",
          "Reproducción asistida pública hasta los 45 años.",
          "Seguir desarrollando los derechos LGTBI, incluida la ley trans.",
        ],
      },
      {
        party: "podemos",
        idea: "Feminismo y derechos LGTBI como prioridad.",
        points: [
          "Garantizar el aborto y la muerte digna en la sanidad pública.",
          "Mantener la ley trans y reconocer a las personas no binarias.",
          "Abolir la prostitución sin castigar a las mujeres y prohibir los vientres de alquiler.",
          "Aplicar la ley del «solo sí es sí» y contar todos los feminicidios.",
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
