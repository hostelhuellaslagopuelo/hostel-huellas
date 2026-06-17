export type Actividad = {
  slug: string;
  title: string;
  subtitle?: string;
  desc: string;
  descLong: string;
  dificultad: string;
  duracion: string;
  img: string;
  images?: string[];
  llevar: string;
  tag: string;
  esDeMaxi?: boolean;
};

export const actividades: Actividad[] = [
  {
    slug: "cerro-currumahuida",
    title: "Cerro Currumahuida",
    desc: "La cima más icónica de Lago Puelo. Desde arriba se ve el lago entero, el valle y la cordillera en todas direcciones. Los últimos 100 metros se ponen intensos — pero las vistas lo pagan con creces.",
    descLong:
      "La cumbre del Cerro Currumahuida es el trekking mas emblemático del Parque Nacional Lago Puelo. El sendero asciende de forma sostenida por bosque nativo de ciprés y lenga hasta salir a la zona rocosa afectada por incendio. En los últimos cien metros la pendiente se empina y hay que apoyar manos en algunos tramos — pero no requiere equipo técnico. Desde la cima se domina una vista de 360°: el lago turquesa abajo, el valle del Azul al norte, la frontera con Chile al oeste y las cumbres nevadas en todas las direcciones. Un día claro en Currumahuida es de los que no se olvidan.",
    dificultad: "Media",
    duracion: "6 a 8 horas",
    llevar:
      "Agua abundante (especialmente en verano), snacks, ropa de abrigo, bastones opcionales",
    img: "/assets/experiencias/cerro-currumahuida-cumbre.webp",
    images: [
      "/assets/experiencias/cerro-currumahuida-cumbre.webp",
      "/assets/experiencias/cerro-currumahuida-vista-lagunas.jpg",
      "/assets/experiencias/cerro-churrumahuida-cartel.webp",
    ],
    tag: "Trekking",
    esDeMaxi: true,
  },
  {
    slug: "refugio-motoco",
    title: "Refugio Motoco",
    desc: "El sendero sale del puente colgante sobre el Río Azul y no se separa del río hasta llegar al refugio. Bosque nativo todo el camino, agua fresca para cargar en la ruta. El refugio ofrece pernocte y comida — ideal para quienes quieren una noche en la montaña.",
    descLong:
      "El sendero al Refugio Motoco es uno de los más lindos del parque: parte desde el puente colgante sobre el Río Azul y acompaña el curso del río durante toda la caminata. El bosque es denso y la senda bien marcada, con varios arroyos que cruzan para refrescar o recargar agua. Al llegar al refugio — rústico, con energía solar y cocina a leña — el dueño prepara comida casera y hay lugar para armar la carpa o dormir adentro. Es una excursión ideal para la primera noche de pernocte en montaña: suficiente para sentirse en el interior patagónico sin que sea una expedición técnica.",
    dificultad: "Media",
    duracion: "4 a 5 horas (solo ida)",
    llevar: "Mochila completa, sleeping si se pernocta, comida extra",
    img: "/assets/experiencias/refugio-el-motoco.webp",
    images: ["/assets/experiencias/refugio-el-motoco.webp"],
    tag: "Trekking con pernocte",
    esDeMaxi: true,
  },
  {
    slug: "sendero-los-hitos",
    title: "Sendero Los Hitos — Límite con Chile",
    desc: "Una de las caminatas más completas del parque. Sale de la pasarela del Río Azul y termina en el límite con Chile, donde el Río Puelo conecta ambos países. Se puede continuar al lado chileno.",
    descLong:
      "El Sendero Los Hitos es la ruta más completa del Parque Nacional Lago Puelo. Parte desde la pasarela sobre el Río Azul y atraviesa bosque valdiviano nativo durante varios kilómetros hasta llegar al límite internacional marcado por los hitos en el Río Puelo. En Gendarmería se puede hacer el trámite migratorio para cruzar a Chile y continuar por el lago Inferior chileno — uno de los pasos de montaña más hermosos y menos concurridos de la Patagonia. Se trata de una excursión de día completo.",
    dificultad: "Media-alta",
    duracion: "Día completo",
    llevar:
      "DNI o pasaporte, equipo de acampe si se queda, agua y comida para el día",
    img: "/assets/experiencias/sendero-los-hitos.jpg",
    images: [
      "/assets/experiencias/sendero-los-hitos.jpg",
      "/assets/experiencias/sendero-los-hitos-2.jpg",
    ],
    tag: "Trekking largo",
    esDeMaxi: true,
  },
  {
    slug: "bahia-las-percas",
    title: "Bahía Las Percas",
    desc: "Una caminata por bosque nativo hasta las orillas del lago Epuyén. El destino es Bahía Las Percas: aguas cristalinas, colores sorprendentes y silencio casi total. Un rincón para desconectar de verdad.",
    descLong:
      "El recorrido atraviesa bosque nativo y nos lleva hasta las tranquilas orillas del lago Epuyén, donde se puede descansar y disfrutar del paisaje antes de llegar al destino final. Bahía Las Percas es un rincón de aguas cristalinas y colores que van del turquesa al verde profundo, rodeado de vegetación patagónica. Una caminata ideal para conectar con la naturaleza de Lago Puelo sin necesitar experiencia previa en trekking.",
    dificultad: "Media-baja",
    duracion: "3 a 5 horas",
    llevar: "Comida y agua, protección solar, ropa y calzado adecuados",
    img: "/exp-trek.jpg",
    images: ["/exp-trek.jpg"],
    tag: "Caminata",
    esDeMaxi: true,
  },
  {
    slug: "piletones-del-manso",
    title: "Piletones del Manso",
    desc: "Pozones y pequeñas playas esculpidas por el agua entre las rocas del río Manso. Una breve caminata desde Villegas y aparece uno de los rincones más sorprendentes de la comarca. El traslado está incluido.",
    descLong:
      "Tras llegar al paraje Villegas, realizamos una breve caminata de unos 500 metros hasta los Piletones del Manso, formaciones naturales esculpidas por el agua entre las rocas. El imponente río Manso — famoso por sus aguas cristalinas y por ser escenario de rafting — ofrece aquí pozones, pequeñas playas y espacios ideales para relajarse o darse un refrescante baño en los días cálidos. La entrada al predio se abona por separado y su costo se divide entre los ocupantes del vehículo.",
    dificultad: "Baja",
    duracion: "Medio día",
    llevar:
      "Agua y algo para comer, protección solar, traje de baño y toalla, ropa adecuada",
    img: "/exp-trek.jpg",
    images: ["/exp-trek.jpg"],
    tag: "Río",
    esDeMaxi: true,
  },
  {
    slug: "piedra-mojada-cajon-motoco",
    title: "Piedra Mojada y Cajón del Motoco",
    desc: "Una excursión de día completo a dos de los rincones más espectaculares y menos visitados de Lago Puelo. El Cajón del Motoco visto desde la pasarela y, más arriba, el peñón de Piedra Mojada con vistas al cañón y al Piltriquitrón.",
    descLong:
      "A lo largo de un recorrido de aproximadamente 6 a 7 kilómetros por senderos de montaña, nos internamos en un entorno natural único rodeado de bosque nativo y vistas panorámicas. La primera parada es el Cajón del Motoco, un impresionante encajonamiento del río que se observa desde la pasarela que conduce al refugio. Más adelante, alcanzamos Piedra Mojada — un magnífico peñón natural con vistas privilegiadas del cañón, el valle de Lago Puelo y el Cerro Piltriquitrón. Una excursión ideal para quienes disfrutan del trekking y los lugares fuera de los circuitos más conocidos.",
    dificultad: "Media-alta",
    duracion: "Día completo",
    llevar:
      "Agua y comida para la jornada, protección solar, calzado de trekking con buen agarre, ropa adecuada, traje de baño y toalla (opcional)",
    img: "/exp-trek.jpg",
    images: ["/exp-trek.jpg"],
    tag: "Trekking largo",
    esDeMaxi: true,
  },
  {
    slug: "astroturismo-mirador",
    title: "Astroturismo en el Mirador",
    desc: "Una vez por semana, subimos al mirador con vistas al valle para observar las estrellas. Sin telescopios ni tecnicismos — solo el cielo nocturno, buena compañía y algo para picar. Actividad gratuita con inscripción previa.",
    descLong:
      "Una propuesta diferente para disfrutar de la noche en Lago Puelo. Una vez por semana nos reunimos en el mirador con vistas privilegiadas al valle y la localidad para compartir una experiencia sencilla y auténtica: observar las estrellas, conversar y disfrutar de un momento agradable en buena compañía. Durante el encuentro compartimos algo para picar y tomar mientras contemplamos el cielo nocturno y las luces del valle desde un entorno natural único. La subida dura unos 20 minutos y el desnivel ronda los 200 metros.",
    dificultad: "Alta (subida corta de ~200 metros)",
    duracion: "Hasta 2 horas",
    llevar: "Ropa cómoda, abrigo para la noche",
    img: "/exp-trek.jpg",
    images: ["/exp-trek.jpg"],
    tag: "Astroturismo",
    esDeMaxi: true,
  },
  {
    slug: "mirador-rio-blanco",
    title: "Mirador del Río Blanco",
    desc: "Cruzás el puente colgante sobre el Río Azul al norte del pueblo y llegás a uno de los miradores más fotogénicos de la zona. Vistas al río y sus cascadas, camino ancho y sin desnivel pronunciado.",
    descLong:
      "El acceso al Mirador del Río Blanco arranca en el puente colgante sobre el Río Azul, al norte del casco urbano de Lago Puelo. El sendero sigue la margen del río entre cipreses y arrayanes con muy poco desnivel — es una de las caminatas más accesibles de la zona y perfecta para días en que querés salir sin comprometerte con una larga jornada. Al llegar al mirador, se abre una vista sobre el río y sus saltos de agua que combina bien con la vegetación del bosque de ribera. En el regreso vale la pena bajar a la costanera del río para ver las piletas naturales que se forman entre las rocas.",
    dificultad: "Fácil",
    duracion: "3 a 4 horas",
    llevar: "Calzado cómodo, agua, algo para comer",
    img: "/assets/experiencias/mirador-rio-blanco.webp",
    images: [
      "/assets/experiencias/mirador-rio-blanco.webp",
      "/assets/experiencias/mirador-rio-blanco-2.webp",
      "/assets/experiencias/mirador-rio-blanco-cartel.webp",
    ],
    tag: "Caminata familiar",
    esDeMaxi: false,
  },
  {
    slug: "bosque-sombras",
    title: "Bosque de las Sombras",
    desc: "Pasarelas de madera, arrayanes, niebla entre los árboles y carteles sobre la fauna del lugar. Un sendero corto dentro del Parque Nacional que en días nublados se convierte en algo completamente distinto. Uno de los favoritos de los que vuelven.",
    descLong:
      "El Bosque de las Sombras es un circuito corto dentro del Parque Nacional Lago Puelo que recorre un bosque puro de arrayán — el árbol de corteza fría al tacto y color canela que caracteriza el bosque valdiviano. Las pasarelas de madera se elevan sobre el suelo para proteger las raíces superficiales de los arrayanes, y la señalización explica el ecosistema local de forma clara. En días nublados o con algo de lluvia, la luz que filtra entre los troncos retorcidos y el musgo en el suelo lo convierten en un sendero de otra dimensión. Corto e íntimo — uno de los favoritos de los huéspedes que ya conocen los circuitos largos.",
    dificultad: "Fácil",
    duracion: "1 a 2 horas",
    llevar: "Impermeable, calzado cómodo",
    img: "/assets/experiencias/bosque-de-las-sombras-lagopuelo-1.jpg",
    images: [
      "/assets/experiencias/bosque-de-las-sombras-lagopuelo-1.jpg",
      "/assets/experiencias/bosque-de-las-sombras-cartel.jpg",
    ],
    tag: "Bosque nativo",
    esDeMaxi: false,
  },
  {
    slug: "mirador-la-playita",
    title: "Mirador La Playita",
    desc: "El mirador más popular del parque. Sube desde La Playita con bastante pendiente pero en poco tiempo — unos 20 a 30 minutos de subida. En el camino hay murra y maqui silvestre para comer. Desde arriba, el lago se ve entero.",
    descLong:
      "La subida al Mirador La Playita es corta pero intensa: unos veinte a treinta minutos de pendiente constante desde la playa de La Playita hasta la cima. A cambio de ese esfuerzo se obtiene una de las mejores vistas panorámicas del lago disponibles sin necesitar equipamiento especial. En verano, el camino está bordeado de murra y maqui silvestre — salís caminando y llegás a la cima con los dedos morados. Desde arriba se ve el lago entero, el pueblo al fondo y, en días despejados, los volcanes chilenos en el horizonte.",
    dificultad: "Fácil-Media",
    duracion: "1 a 2 horas",
    llevar: "Agua, calzado con grip, protector solar",
    img: "/assets/experiencias/mirador-la-playita.webp",
    images: ["/assets/experiencias/mirador-la-playita.webp"],
    tag: "Mirador",
    esDeMaxi: false,
  },
  {
    slug: "escalada",
    title: "Escalada en Cerro Currumahuida",
    desc: "El mismo cerro, otra dimensión. La roca de granito a 10 minutos del centro tiene 5 sectores equipados con unas 30 vías, desde 5to grado hasta 7C. Una actividad joven en Lago Puelo pero con mucho futuro.",
    descLong:
      "El granito del Cerro Currumahuida tiene una calidad de roca excepcional para la escalada deportiva. A diez minutos del centro del pueblo, hay cinco sectores equipados con aproximadamente treinta vías que van desde el quinto grado hasta el 7C — suficiente rango para que tanto principiantes como escaladores experimentados encuentren algo a su nivel. La escalada en Lago Puelo es una disciplina joven, lo que significa que las vías están en excelente estado y hay muy poca gente. Las vistas desde la pared — con el lago abajo y la cordillera frente — son completamente distintas a las del sendero de trekking.",
    dificultad: "Variable (según vía)",
    duracion: "Medio día a día completo",
    llevar: "Equipo de escalada, zapatillas de pared",
    img: "/assets/experiencias/escalada-cerro-currumahuida.jpg",
    images: ["/assets/experiencias/escalada-cerro-currumahuida.jpg"],
    tag: "Escalada",
    esDeMaxi: false,
  },
  {
    slug: "kayak",
    title: "Kayak en Lago Puelo",
    desc: "El agua turquesa del lago vista desde adentro. Sin necesitar experiencia previa, es una de las actividades más disfrutadas de la zona. Hay alquiler dentro del parque o salidas organizadas. Perfecto para una tarde que no querés desperdiciar.",
    descLong:
      "Navegar el Lago Puelo en kayak es una de las mejores formas de entender la escala de este lugar. El agua turquesa, el reflejo de los cerros nevados y el silencio del lago — roto solo por el sonido de los remos — crean una experiencia completamente diferente a cualquier sendero. No necesitás experiencia previa: el alquiler dentro del parque incluye chaleco salvavidas y una explicación básica. También hay salidas organizadas en kayak de mar para quienes quieren ir más lejos, bordeando los rincones menos visitados del lago hasta llegar a playas privadas de arena blanca.",
    dificultad: "Fácil",
    duracion: "2 a 4 horas",
    llevar:
      "Ropa para mojarse, protector solar, chaleco salvavidas (incluido en alquiler)",
    img: "/assets/experiencias/kayak-lago-puelo.jpg",
    images: ["/assets/experiencias/kayak-lago-puelo.jpg"],
    tag: "Agua",
  },
  {
    slug: "cabalgata",
    title: "Cabalgata por el Valle del Azul",
    desc: "Recorrer chacras, cruzar el río a caballo y llegar a miradores del valle con vistas panorámicas del lago. En otoño, entre los colores del follaje, es una experiencia distinta a cualquier caminata.",
    descLong:
      "Subirse a un caballo y recorrer el Valle del Azul cambia completamente la percepción del paisaje. Los operadores locales ofrecen salidas de medio día y día completo que atraviesan chacras, cruzan el Río Azul a caballo y ascienden a miradores del valle con vistas panorámicas del lago. En otoño, cuando el bosque nativo se tiñe de amarillo y naranja, la cabalgata adquiere una dimensión completamente diferente. Algunos operadores también organizan travesías a Chile por pasos de montaña — una experiencia de varios días que conecta los dos lados de la cordillera.",
    dificultad: "Fácil",
    duracion: "3 a 6 horas",
    llevar: "Ropa cómoda, calzado cerrado",
    img: "/assets/experiencias/cabalgata-rio-azul.webp",
    images: [
      "/assets/experiencias/cabalgata-rio-azul.webp",
      "/assets/experiencias/cabalgata-rio-azul-2.webp",
    ],
    tag: "Cabalgata",
  },
  {
    slug: "pesca-mosca",
    title: "Pesca con mosca en el Río Puelo",
    desc: "El área del Río Puelo es uno de los mejores pesqueros de la Patagonia para trucha. No hace falta experiencia previa — hay guías profesionales de pesca con mosca y spinning. El paisaje mientras pescás ya justifica la salida.",
    descLong:
      "El Río Puelo y sus afluentes forman uno de los sistemas pesqueros más valorados de la Patagonia para pesca con mosca. Trucha arco iris y trucha marrón en aguas cristalinas rodeadas de bosque nativo — es el tipo de escenario que los pescadores viajan miles de kilómetros para encontrar. Hay guías profesionales especializados en mosca seca, ninfas y streamer que adaptan la salida al nivel del visitante, desde principiantes absolutos hasta pescadores con experiencia que buscan ampliar su técnica. El paisaje durante la espera ya justifica la salida, aunque no piques nada.",
    dificultad: "Fácil",
    duracion: "Medio día o día completo",
    llevar: "Ropa impermeable, botas de vadeo si tenés",
    img: "/assets/experiencias/pesca-rio-puelo.jpg",
    images: ["/assets/experiencias/pesca-rio-puelo.jpg"],
    tag: "Pesca",
  },
  {
    slug: "jardin-botanico",
    title: "Jardín Botánico del Parque Nacional",
    desc: "16 hectáreas señalizadas con información sobre la flora patagónica nativa. Pitras, arrayanes, lengas. Ideal para quienes quieren entender el bosque mientras lo caminan. Circuitos cortos y bien marcados.",
    descLong:
      "El Jardín Botánico del Parque Nacional Lago Puelo abarca 16 hectáreas con circuitos señalizados que explican la flora nativa del bosque valdiviano. Los carteles identifican pitras, arrayanes, lengas, cipreses de la cordillera y otras especies, con información sobre su rol en el ecosistema. Es la actividad perfecta para los viajeros que quieren entender lo que están viendo — no solo caminar entre árboles, sino saber qué son y por qué importan. El acceso está próximo al Bosque de las Sombras, así que se pueden combinar en la misma salida.",
    dificultad: "Muy fácil",
    duracion: "1 a 2 horas",
    llevar: "Calzado cómodo, cámara",
    img: "/assets/experiencias/jardin-botanico.jpg",
    images: [
      "/assets/experiencias/jardin-botanico.jpg",
      "/assets/experiencias/jardin-botanico-2.jpg",
    ],
    tag: "Naturaleza",
  },
  {
    slug: "paseo-barco",
    title: "Paseo en barco — Circuito al límite con Chile",
    desc: "Sale del puerto del Parque Nacional y navega por el brazo occidental del lago hasta el límite con Chile. Ver el lago desde el agua, rodeado de bosque y cordillera, es una perspectiva que ningún sendero te puede dar.",
    descLong:
      "El barco del Parque Nacional Lago Puelo sale del embarcadero del parque y navega por el brazo occidental del lago hasta el límite con Chile. El recorrido dura entre dos y tres horas y ofrece una perspectiva del lago que es imposible de obtener desde tierra: la escala del agua, los farallones de roca sobre el espejo turquesa, el bosque virgen que cae hasta la orilla y las cumbres nevadas al fondo. En el límite hay una parada para bajar a tierra. Una excursión sin ninguna exigencia física que complementa perfectamente las actividades de trekking.",
    dificultad: "Muy fácil",
    duracion: "2 a 4 horas",
    llevar: "Abrigo (en el agua refresca), protector solar",
    img: "/assets/experiencias/paseo-en-barco-pasarela.webp",
    images: ["/assets/experiencias/paseo-en-barco-pasarela.webp"],
    tag: "Navegación",
  },
  {
    slug: "atardecer-pasarela",
    title: "Atardecer en la pasarela",
    desc: "El tip de la casa. La pasarela sobre el lago al caer el sol es uno de los espectáculos más simples y más impresionantes de Lago Puelo. En verano también podés tirarte al agua. Llevá algo rico para picar y no tengas apuro.",
    descLong:
      "Este no es un tip turístico — es lo que los locales hacen cuando quieren mostrarle algo a alguien que viene de visita. La pasarela sobre el lago Puelo al caer el sol es gratuita, está a diez minutos del hostel, y el espectáculo varía cada tarde según las nubes y el viento: a veces el cielo se enciende naranja y rosa sobre las cumbres, a veces la luz es suave y el reflejo en el agua lo dice todo. En verano el agua está lo suficientemente cálida para tirarse — el atardecer y un chapuzón en el lago es una de las experiencias más características de Lago Puelo. Llevá mate, algo para picar y no tengas apuro.",
    dificultad: "Muy fácil",
    duracion: "1 a 2 horas",
    llevar: "Abrigo, mate, cámara",
    img: "/assets/experiencias/paseo-en-barco-pasarela.webp",
    images: ["/assets/experiencias/paseo-en-barco-pasarela.webp"],
    tag: "Paisaje",
  },
];
