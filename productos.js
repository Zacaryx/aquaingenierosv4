// productos.js — Mini base de datos de productos AquaIngenieros Perú
const PRODUCTOS = [
  {
    id: 1,
    nombre: "Membrana RO Suez Serie AG",
    categoria: "Osmosis Inversa",
    marca: "Suez Serie AG",
    imagen: "img/produc_galeria/1_MEMBRANAS-OSMOSIS-INVERSA-AG2540TM-SUEZ-AQUANOR-ENVIOS-A-TODO-EL-PERU.jpg",
    galeria: [
      "img/produc_galeria/1_MEMBRANAS-OSMOSIS-INVERSA-AG2540TM-SUEZ-AQUANOR-ENVIOS-A-TODO-EL-PERU.jpg",
      "img/produc_galeria/1_AG-90-SUEZ-LAS-MEJORES-MEMBRANAS-DE-OSMOSIS-INVERSA.jpg",
      "img/produc_galeria/1_MEMBRANA-RO-AGUA-SALOBRE-2.5-X-21-300-GPD-13-PIE2-AGUA-SALOBRE-MODELO-AG2521TM-SUEZ-TODO-EL-PERU-.jpg"
    ],
    slug: "membrana-ro-salobre-1",
    descripcion: "La serie AG de Suez (anteriormente Osmonics Desal) es una membrana de ósmosis inversa de película fina compuesta (TFC) diseñada para agua salobre. Ofrece alto flujo y alto rechazo de sales, siendo ideal para aplicaciones industriales y comerciales donde se requiere alta pureza con presiones operativas relativamente bajas. Especialmente recomendada cuando se necesita un rechazo muy alto de iones monovalentes (como cloruro de sodio) en aguas con TDS entre 1,000 y 10,000 mg/L.",
    modelos: [
      { modelo: "AG-2521 TM", dimension: "2.5″ × 21″", capacidad: "300 GPD" },
      { modelo: "AG-2540 TM", dimension: "2.5″ × 40″", capacidad: "750 GPD" },
      { modelo: "AG-90",      dimension: "4.0″ × 40″", capacidad: "2400 GPD" }
    ],
    specs: [
      { label: "Presión de operación recomendada", value: "200 psi (13.8 bar)" },
      { label: "Presión máxima de operación",      value: "600 psi (41.4 bar)" },
      { label: "Temperatura máxima",               value: "122 °F (50 °C)" },
      { label: "Rango de pH (operación continua)", value: "2.0 – 11.0" },
      { label: "Rango de pH (limpieza CIP)",        value: "1.0 – 13.0" },
      { label: "Tolerancia al cloro",              value: "1,000+ ppm-horas (se recomienda decloración)" },
      { label: "Rechazo óptimo de sales",          value: "99.5%+ (NaCl)" }
    ]
  },
  {
    id: 2,
    nombre: "Membrana RO Axeon HR3",
    categoria: "Osmosis Inversa",
    marca: "Axeon Water",
    imagen: "img/produc_galeria/2_pr-Membrana-de-osmosis-inversa-RO-agua-salobre-02-b-600x600.jpg",
    galeria: [
      "img/produc_galeria/2_pr-Membrana-de-osmosis-inversa-RO-agua-salobre-02-b-600x600.jpg",
      "img/produc_galeria/2_pr-Membrana-de-osmosis-inversa-RO-agua-salobre-02-a.jpg",
      "img/produc_galeria/2_pr-Membrana-de-osmosis-inversa-RO-agua-salobre-02-c-600x600.jpg"
    ],
    slug: "membrana-ro-salobre-2",
    descripcion: "Los elementos de la serie AXEON HR3 son altamente confiables, con carcasa protectora de ABS. Fabricados con tecnología avanzada que garantiza alta calidad y rendimiento. Enviados secos para mayor vida útil. Ideales para aplicaciones de agua salobre en sistemas industriales y comerciales.",
    modelos: [
      { modelo: "HR3-2514", dimension: "2.5″ × 14″", capacidad: "150 GPD" },
      { modelo: "HR3-2521", dimension: "2.5″ × 21″", capacidad: "250 GPD" },
      { modelo: "HR3-4021", dimension: "4.0″ × 21″", capacidad: "900 GPD" }
    ],
    specs: [
      { label: "Tipo",                             value: "Compuesto de película fina de poliamida" },
      { label: "Temperatura máxima",               value: "113 °F (45 °C)" },
      { label: "Presión máxima",                   value: "600 psi (41 bar)" },
      { label: "Rango de pH (operación continua)", value: "2 – 11" },
      { label: "Rango de pH (limpieza)",           value: "1 – 13" },
      { label: "Tolerancia al cloro",              value: "0 ppm" }
    ]
  },
  {
    id: 3,
    nombre: "Membrana RO Canature 4040",
    categoria: "Osmosis Inversa",
    marca: "Canature",
    imagen: "img/produc_galeria/3_pr-Membrana-de-osmosis-inversa-RO-agua-salobre-a.jpg",
    galeria: [
      "img/produc_galeria/3_pr-Membrana-de-osmosis-inversa-RO-agua-salobre-a.jpg",
      "img/produc_galeria/3_pr-Membrana-de-osmosis-inversa-RO-agua-salobre-b.jpg",
      "img/produc_galeria/3_pr-Membrana-de-osmosis-inversa-RO-agua-salobre-c-600x600.jpg"
    ],
    slug: "membrana-ro-salobre-3",
    descripcion: "Membranas RO de alto rendimiento utilizadas ampliamente en tratamiento de agua. Mejorada resistencia a impactos y anti-contaminación. Fabricadas con materiales de alta calidad que garantizan larga vida útil y rendimiento consistente en aplicaciones industriales.",
    modelos: [
      { modelo: "CN-4040-LPI / 4040-NPI", dimension: "4″ × 40″", capacidad: "2200 GPD" }
    ],
    specs: [
      { label: "Presión máxima",    value: "365 PSI" },
      { label: "Temperatura máxima", value: "40 °C" },
      { label: "SDI máximo",        value: "5" }
    ]
  },
  {
    id: 4,
    nombre: "Filtro de Carbón Activado Granular – GAC",
    categoria: "Filtro de carbón activado granular-Gac",
    marca: "Pentair",
    imagen: "img/produc_galeria/4_pr-Filtro-de-carbon-activado-granular-GAC-a.jpg",
    galeria: [
      "img/produc_galeria/4_pr-Filtro-de-carbon-activado-granular-GAC-a.jpg",
      "img/produc_galeria/4_pr-Filtro-de-carbon-activado-granular-GAC-b.jpg",
      "img/produc_galeria/4_pr-Filtro-de-carbon-activado-granular-GAC-c.jpg",
      "img/produc_galeria/4_pr-Filtro-de-carbon-activado-granular-GAC-d.jpg"
    ],
    slug: "filtro-carbon-activado-gac",
    descripcion: "Filtros de carbón activado para eliminar cloro, olor y sabor del agua. Equipados con válvula Pentair Performa/Magnum, tanque FRP Canature y carbón Hydraffin 40N. Diseñados para aplicaciones industriales que requieren alta eficiencia en la remoción de contaminantes orgánicos y clorados.",
    modelos: [],
    specs: [
      { label: "Medios filtrantes",     value: "Carbón activado Hydraffin 40N" },
      { label: "Presión de operación",  value: "30 psi" },
      { label: "Aplicaciones",          value: "Pre-filtración RO, calderas, torres de enfriamiento, industria en general" }
    ]
  },
  {
    id: 5,
    nombre: "Ablandador o Suavizador de Agua",
    categoria: "Ablandador o suavizador de agua",
    marca: "Pentair",
    imagen: "img/produc_galeria/5_pr-Ablandador-o-suavizador-de-agua-a.jpg",
    galeria: [
      "img/produc_galeria/5_pr-Ablandador-o-suavizador-de-agua-a.jpg",
      "img/produc_galeria/5_pr-Ablandador-o-suavizador-de-agua-b-600x600.jpg",
      "img/produc_galeria/5_pr-Ablandador-o-suavizador-de-agua-c.jpg",
      "img/produc_galeria/5_pr-Ablandador-o-suavizador-de-agua-d.jpg",
      "img/produc_galeria/5_pr-Ablandador-o-suavizador-de-agua-e-600x600.jpg"
    ],
    slug: "ablandador-suavizador",
    descripcion: "Ablandadores industriales simples o twin para eliminar la dureza del agua (sarro). Incluye válvula Pentair Logix o Magnum, tanque FRP Canature, resina catiónica Lewatit o Canature y tanque de salmuera. Solución confiable para proteger equipos industriales del daño por incrustaciones calcáreas.",
    modelos: [],
    specs: [
      { label: "Flujo servicio",       value: "2–5 gpm/ft³ de resina" },
      { label: "Presión de operación", value: "25–50 psi" },
      { label: "Conexión válvula",     value: "1.0″ MPT" }
    ]
  },
  {
    id: 6,
    nombre: "Válvula Automática Magnum Pentair",
    categoria: "Válvulas o cabezales",
    marca: "Pentair",
    imagen: "img/produc_galeria/6_pr-Valvula-o-cabezal-para-ablandador-y-filtros-de-agua-03-a.jpg",
    galeria: [
      "img/produc_galeria/6_pr-Valvula-o-cabezal-para-ablandador-y-filtros-de-agua-03-a.jpg",
      "img/produc_galeria/6_pr-Valvula-o-cabezal-para-ablandador-y-filtros-de-agua-03-b-600x600.jpg",
      "img/produc_galeria/6_pr-Valvula-o-cabezal-para-ablandador-y-filtros-de-agua-03-c-600x600.jpg"
    ],
    slug: "valvula-cabezal-modelo-1",
    descripcion: "Válvula automática Magnum Pentair para ablandadores y filtros. Alta durabilidad y control preciso. Diseñada para soportar condiciones industriales exigentes con ciclos de regeneración programables y bajo consumo energético.",
    modelos: [],
    specs: [
      { label: "Voltaje",   value: "12 voltios AC" },
      { label: "Consumo",   value: "3 vatios promedio" }
    ]
  },
  {
    id: 7,
    nombre: "Válvula Automática Logix Pentair",
    categoria: "Válvulas o cabezales",
    marca: "Pentair",
    imagen: "img/produc_galeria/7_pr-Valvula-o-cabezal-para-ablandador-y-filtros-de-agua-02-a.jpg",
    galeria: [
      "img/produc_galeria/7_pr-Valvula-o-cabezal-para-ablandador-y-filtros-de-agua-02-a.jpg",
      "img/produc_galeria/7_pr-Valvula-o-cabezal-para-ablandador-y-filtros-de-agua-02-b-600x600.jpg",
      "img/produc_galeria/7_pr-Valvula-o-cabezal-para-ablandador-y-filtros-de-agua-02-c-600x600.jpg"
    ],
    slug: "valvula-cabezal-modelo-2",
    descripcion: "Válvula automática Logix Pentair para ablandadores y filtros. Control de 5 u 8 ciclos con interfaz intuitiva. Ideal para instalaciones residenciales e industriales que requieren confiabilidad y facilidad de programación.",
    modelos: [],
    specs: [
      { label: "Flujo servicio continuo", value: "hasta 25 GPM" },
      { label: "Voltaje",                 value: "12 voltios AC" }
    ]
  },
  {
    id: 8,
    nombre: "Válvula Automática BNT Canature",
    categoria: "Válvulas o cabezales",
    marca: "Canature",
    imagen: "img/produc_galeria/8_pr-Valvula-o-cabezal-para-ablandador-y-filtros-de-agua-01-a.jpg",
    galeria: [
      "img/produc_galeria/8_pr-Valvula-o-cabezal-para-ablandador-y-filtros-de-agua-01-a.jpg",
      "img/produc_galeria/8_pr-Valvula-o-cabezal-para-ablandador-y-filtros-de-agua-01-b.jpg",
      "img/produc_galeria/8_pr-Valvula-o-cabezal-para-ablandador-y-filtros-de-agua-01-c.jpg"
    ],
    slug: "valvula-cabezal-modelo-3",
    descripcion: "Válvula automática BNT-Canature upflow para filtros y ablandadores. Programación flexible por tiempo o volumen con pantalla grande de 4 líneas para fácil configuración y monitoreo.",
    modelos: [],
    specs: [
      { label: "Pantalla",      value: "Grande, 4 líneas" },
      { label: "Programación",  value: "Por tiempo o volumen" },
      { label: "Medición",      value: "Turbina integrada" }
    ]
  },
  {
    id: 9,
    nombre: "Filtro Cartucho de Sedimento Plisado Absoluto",
    categoria: "Filtro Cartuchos y Portafiltros",
    marca: "Hydronix",
    imagen: "img/produc_galeria/9_pr-Filtro-cartucho-de-sedimento-plisado-absoluto-b.jpg",
    galeria: [
      "img/produc_galeria/9_pr-Filtro-cartucho-de-sedimento-plisado-absoluto-b.jpg",
      "img/produc_galeria/9_pr-Filtro-cartucho-de-sedimento-plisado-absoluto-a.jpg",
      "img/produc_galeria/9_pr-Filtro-cartucho-de-sedimento-plisado-absoluto-c-600x600.jpg",
      "img/produc_galeria/9_pr-Filtro-cartucho-de-sedimento-plisado-absoluto-d-600x600.jpg"
    ],
    slug: "filtro-cartucho-sedimento-plisado",
    descripcion: "Filtros plisados absolutos Beta 5000 de polipropileno puro con estructura de doble capa. Ofrecen mayor área filtrante, mayor vida útil y eficiencia de filtración absoluta. Ideales para pre-filtración en sistemas de ósmosis inversa y aplicaciones que requieren alta pureza.",
    modelos: [],
    specs: [
      { label: "Material",        value: "Polipropileno puro 100%" },
      { label: "Tipo de filtrado", value: "Plisado absoluto Beta 5000" },
      { label: "Construcción",    value: "Estructura de doble capa" }
    ]
  },
  {
    id: 10,
    nombre: "Filtro Cartucho de Sedimentos",
    categoria: "Filtro Cartuchos y Portafiltros",
    marca: "Hydronix",
    imagen: "img/produc_galeria/10_pr-Filtro-cartucho-de-sedimentos-a.jpg",
    galeria: [
      "img/produc_galeria/10_pr-Filtro-cartucho-de-sedimentos-a.jpg",
      "img/produc_galeria/10_pr-Filtro-cartucho-de-sedimentos-b-600x600.jpg",
      "img/produc_galeria/10_pr-Filtro-cartucho-de-sedimentos-c-600x600.jpg",
      "img/produc_galeria/10_pr-Filtro-cartucho-de-sedimentos-d-600x600.jpg"
    ],
    slug: "filtro-cartucho-sedimentos",
    descripcion: "Cartuchos de sedimentos de polipropileno para remover sólidos en suspensión. Disponibles en 1, 5 y 10 micras. Compatibles con la mayoría de portafiltros estándar. Excelente relación costo-rendimiento para aplicaciones residenciales e industriales.",
    modelos: [
      { modelo: "1 µm",  dimension: "–", capacidad: "Filtración fina" },
      { modelo: "5 µm",  dimension: "–", capacidad: "Filtración media" },
      { modelo: "10 µm", dimension: "–", capacidad: "Filtración gruesa" }
    ],
    specs: [
      { label: "Material",              value: "Polipropileno" },
      { label: "Micras disponibles",    value: "1, 5 y 10 µm" },
      { label: "Aplicación",            value: "Remoción de sólidos en suspensión" }
    ]
  },
  {
    id: 11,
    nombre: "Filtro Cartucho de Carbón Activado",
    categoria: "Filtro Cartuchos y Portafiltros",
    marca: "Hydronix",
    imagen: "img/produc_galeria/11_pr-Filtro-cartucho-de-carbon-activado-a.jpg",
    galeria: [
      "img/produc_galeria/11_pr-Filtro-cartucho-de-carbon-activado-a.jpg",
      "img/produc_galeria/11pr-Filtro-cartucho-de-carbon-activado-b-600x600.jpg",
      "img/produc_galeria/11pr-Filtro-cartucho-de-carbon-activado-c-600x600.jpg",
      "img/produc_galeria/11pr-Filtro-cartucho-de-carbon-activado-d-600x600.jpg"
    ],
    slug: "filtro-cartucho-carbon",
    descripcion: "Cartuchos de carbón activado en bloque de cáscara de coco para eliminar sabor, olor y cloro. Alta capacidad de adsorción gracias al carbón activado de cáscara de coco, que garantiza agua de sabor limpio y libre de contaminantes orgánicos.",
    modelos: [],
    specs: [
      { label: "Material",           value: "Carbón activado en bloque de cáscara de coco" },
      { label: "Eliminación",        value: "Cloro, sabor y olor" },
      { label: "Tipo de construcción", value: "Bloque sólido extruido" }
    ]
  },
  {
    id: 12,
    nombre: "Motor para Osmosis Inversa – Marathon Serie 48Y",
    categoria: "Osmosis Inversa",
    marca: "Marathon",
    imagen: "img/produc_galeria/12pr-Motor-para-osmosis-inversa-RO-a-600x600.jpg",
    galeria: [
      "img/produc_galeria/12pr-Motor-para-osmosis-inversa-RO-a-600x600.jpg",
      "img/produc_galeria/12pr-Motor-para-osmosis-inversa-RO-b-600x600.jpg",
      "img/produc_galeria/12pr-Motor-para-osmosis-inversa-RO-c-600x600.jpg",
      "img/produc_galeria/12pr-Motor-para-osmosis-inversa-RO-d.jpg"
    ],
    slug: "motor-osmosis-inversa",
    descripcion: "Motores Marathon Serie 48Y para bombas de ósmosis inversa. Rotación reversible, diseño robusto y alta eficiencia energética. Compatibles con una amplia gama de bombas de alta presión utilizadas en sistemas RO industriales y comerciales.",
    modelos: [],
    specs: [
      { label: "Serie",     value: "48Y" },
      { label: "Rotación",  value: "Reversible" },
      { label: "Aplicación", value: "Bombas de ósmosis inversa industrial y comercial" }
    ]
  },
  {
    id: 13,
    nombre: "Portafiltro Transparente Hydronix/Watts 02",
    categoria: "Filtro Cartuchos y Portafiltros",
    marca: "Hydronix",
    imagen: "img/produc_galeria/13pr-Portafiltro-Hydronix-Watts-02-a.jpg",
    galeria: [
      "img/produc_galeria/13pr-Portafiltro-Hydronix-Watts-02-a.jpg",
      "img/produc_galeria/13pr-Portafiltro-Hydronix-Watts-02-b-600x600.jpg",
      "img/produc_galeria/13pr-Portafiltro-Hydronix-Watts-02-c-600x600.jpg",
      "img/produc_galeria/13pr-Portafiltro-Hydronix-Watts-02-d.jpg"
    ],
    slug: "portafiltro-hydronix-02",
    descripcion: "Portafiltro transparente con purga. Permite la inspección visual del cartucho sin necesidad de desmontaje. Fabricado con materiales de alta resistencia compatibles con agua potable.",
    modelos: [],
    specs: [
      { label: "Cuerpo",     value: "Transparente (inspección visual)" },
      { label: "Característica", value: "Con purga" },
      { label: "Uso",        value: "Agua potable" }
    ]
  },
  {
    id: 14,
    nombre: "Portafiltro Opaco Hydronix/Watts 01",
    categoria: "Filtro Cartuchos y Portafiltros",
    marca: "Hydronix",
    imagen: "img/produc_galeria/14pr-Portafiltro-Hydronix-Watts-01-d-600x600.jpg",
    galeria: [
      "img/produc_galeria/14pr-Portafiltro-Hydronix-Watts-01-d-600x600.jpg",
      "img/produc_galeria/14pr-Portafiltro-Hydronix-Watts-01-a-600x600.jpg",
      "img/produc_galeria/14pr-Portafiltro-Hydronix-Watts-01-b-600x600.jpg",
      "img/produc_galeria/14pr-Portafiltro-Hydronix-Watts-01-c-600x600.jpg"
    ],
    slug: "portafiltro-hydronix-01",
    descripcion: "Portafiltro opaco (azul) con purga. Diseño robusto que protege el cartucho de la luz, ideal para cartuchos sensibles. Fabricado con materiales de alta resistencia compatibles con agua potable.",
    modelos: [],
    specs: [
      { label: "Cuerpo",        value: "Opaco – color azul" },
      { label: "Característica", value: "Con purga" },
      { label: "Uso",           value: "Agua potable" }
    ]
  },
  {
    id: 15,
    nombre: "Filtro Multimedia",
    categoria: "Filtros multimedia",
    marca: "Canature",
    imagen: "img/produc_galeria/15pr-Filtro-multimedia-a.jpg",
    galeria: [
      "img/produc_galeria/15pr-Filtro-multimedia-a.jpg",
      "img/produc_galeria/15pr-Filtro-multimedia-b.jpg"
    ],
    slug: "filtro-multimedia",
    descripcion: "Filtro multimedia con antracita, arena, granet y grava para filtración profunda. Diseñado para remover turbidez, hierro y sólidos en suspensión. Equipado con válvula Canature y tanque FRP de alta calidad.",
    modelos: [],
    specs: [
      { label: "Medios filtrantes", value: "Antracita, arena, granet y grava" },
      { label: "Aplicación",        value: "Remoción de turbidez, hierro y sólidos" },
      { label: "Tanque",            value: "FRP grado alimenticio Canature" }
    ]
  },
  {
    id: 16,
    nombre: "Resina Catiónica Lewatit S-1567",
    categoria: "Medios Filtrantes",
    marca: "Lewatit",
    imagen: "img/produc_galeria/16pr-Resina-Cationica-para-ablandador-Lewatit-S-1567-a.webp",
    galeria: [
      "img/produc_galeria/16pr-Resina-Cationica-para-ablandador-Lewatit-S-1567-a.webp",
      "img/produc_galeria/16pr-Resina-Cationica-para-ablandador-Lewatit-S-1567-b-600x600.jpg"
    ],
    slug: "resina-cationica-lewatit-s1567",
    descripcion: "Resina catiónica monodispersa de grado alimenticio de alta capacidad y estabilidad. Fabricada por Lanxess bajo la marca Lewatit, es reconocida mundialmente por su uniformidad de tamaño de grano, que permite mayor eficiencia en la regeneración y menor pérdida de presión.",
    modelos: [],
    specs: [
      { label: "Tipo",            value: "Catiónica fuerte (gel, monodispersa)" },
      { label: "Grado",           value: "Alimenticio" },
      { label: "Características", value: "Alta capacidad, alta estabilidad térmica y osmótica" }
    ]
  },
  {
    id: 17,
    nombre: "Resina Catiónica Canature 001X8 NA FG",
    categoria: "Medios Filtrantes",
    marca: "Canature",
    imagen: "img/produc_galeria/17pr-Resina-cationica-para-ablandador-Canature-001X8-NA-FG-a.webp",
    galeria: [
      "img/produc_galeria/17pr-Resina-cationica-para-ablandador-Canature-001X8-NA-FG-a.webp",
      "img/produc_galeria/17pr-Resina-cationica-para-ablandador-Canature-001X8-NA-FG-b.jpg"
    ],
    slug: "resina-cationica-canature",
    descripcion: "Resina catiónica gelular de alto grado de pureza y capacidad. Certificada NSF para contacto con agua potable. Ideal para ablandadores residenciales e industriales que requieren eficiencia en la eliminación de dureza del agua.",
    modelos: [],
    specs: [
      { label: "Tipo",      value: "Catiónica fuerte (gel)" },
      { label: "Grado",     value: "Alimenticio (FG)" },
      { label: "Modelo",    value: "001X8 NA FG" }
    ]
  },
  {
    id: 18,
    nombre: "Carbón Activado Granular Hydraffin 40N",
    categoria: "Medios Filtrantes",
    marca: "Donau Carbon – Hydraffin",
    imagen: "img/produc_galeria/18_pr-Carbon-activado-granular-40-N-a-600x600.jpg",
    galeria: [
      "img/produc_galeria/18_pr-Carbon-activado-granular-40-N-a-600x600.jpg",
      "img/produc_galeria/18_pr-Carbon-activado-granular-40-N-b.jpg"
    ],
    slug: "carbon-activado-granular-40n",
    descripcion: "Carbón activado bituminoso malla 12x40 para purificación de agua y soluciones alimentarias. Producido por Donau Carbon bajo la marca Hydraffin, ofrece alta área superficial y capacidad de adsorción para la eliminación de cloro, sabores, olores y contaminantes orgánicos.",
    modelos: [],
    specs: [
      { label: "Tipo",        value: "Bituminoso activado" },
      { label: "Malla",       value: "12×40" },
      { label: "Aplicación",  value: "Purificación de agua y soluciones alimentarias" }
    ]
  },
  {
    id: 19,
    nombre: "Tanque de Salmuera Canature",
    categoria: "Tanques",
    marca: "Canature",
    imagen: "img/produc_galeria/19pr-Tanque-de-salmuera-b.jpg",
    galeria: [
      "img/produc_galeria/19pr-Tanque-de-salmuera-b.jpg",
      "img/produc_galeria/19pr-Tanque-de-salmuera-a.jpg",
      "img/produc_galeria/19pr-Tanque-de-salmuera-c.jpg",
      "img/produc_galeria/19pr-Tanque-de-salmuera-d.jpg",
      "img/produc_galeria/19pr-Tanque-de-salmuera-e.jpg"
    ],
    slug: "tanque-salmuera",
    descripcion: "Tanques de salmuera de 70 L a 1000 L. Fabricados con materiales de alta calidad compatibles con soluciones salinas. Diseñados para su uso con ablandadores de agua, garantizando un suministro confiable de salmuera para la regeneración de la resina.",
    modelos: [
      { modelo: "Pequeño",  dimension: "–", capacidad: "70 L" },
      { modelo: "Mediano",  dimension: "–", capacidad: "200 L" },
      { modelo: "Grande",   dimension: "–", capacidad: "500 L" },
      { modelo: "Industrial", dimension: "–", capacidad: "1000 L" }
    ],
    specs: [
      { label: "Capacidad",  value: "70 L a 1000 L" },
      { label: "Material",   value: "Polietileno de alta densidad" },
      { label: "Uso",        value: "Regeneración de resinas en ablandadores" }
    ]
  },
  {
    id: 20,
    nombre: "Tanque de Fibra de Vidrio FRP Canature",
    categoria: "Tanques",
    marca: "Canature",
    imagen: "img/produc_galeria/20pr-Tanque-de-fibra-de-vidrio-a.jpg",
    galeria: [
      "img/produc_galeria/20pr-Tanque-de-fibra-de-vidrio-a.jpg",
      "img/produc_galeria/20pr-Tanque-de-fibra-de-vidrio-c.jpg",
      "img/produc_galeria/20pr-Tanque-de-fibra-de-vidrio-d.jpg",
      "img/produc_galeria/20pr-Tanque-de-fibra-de-vidriob.jpg"
    ],
    slug: "tanque-fibra-vidrio",
    descripcion: "Tanques FRP (fibra de vidrio) de alta calidad grado alimenticio. Resistentes a la corrosión, presión y temperatura. Ideales para ablandadores, filtros multimedia, filtros de carbón activado y sistemas de ósmosis inversa a nivel industrial.",
    modelos: [],
    specs: [
      { label: "Material",  value: "Fibra de vidrio reforzada (FRP)" },
      { label: "Grado",     value: "Alimenticio" },
      { label: "Uso",       value: "Ablandadores, filtros, sistemas RO" }
    ]
  },
  {
    id: 21,
    nombre: "Tanque Hidroneumático Wellmate – Pentair",
    categoria: "Tanques",
    marca: "Wellmate – Pentair",
    imagen: "img/produc_galeria/21pr-Tanque-Hidroneumatico-a.jpg",
    galeria: [
      "img/produc_galeria/21pr-Tanque-Hidroneumatico-a.jpg",
      "img/produc_galeria/21pr-Tanque-Hidroneumatico-b-600x600.jpg",
      "img/produc_galeria/21pr-Tanque-Hidroneumatico-c.jpg",
      "img/produc_galeria/21pr-Tanque-Hidroneumatico-d.jpg"
    ],
    slug: "tanque-hidroneumatico",
    descripcion: "Tanques hidroneumáticos de fibra de vidrio de 29 a 119 galones. Sin membrana metálica interna que pueda corroerse. Diseñados para mantener la presión del sistema y reducir el número de arranques de la bomba, prolongando su vida útil.",
    modelos: [
      { modelo: "WM-9",  dimension: "–", capacidad: "29 galones" },
      { modelo: "WM-14", dimension: "–", capacidad: "44 galones" },
      { modelo: "WM-35", dimension: "–", capacidad: "119 galones" }
    ],
    specs: [
      { label: "Material",   value: "Fibra de vidrio (FRP)" },
      { label: "Capacidad",  value: "29 a 119 galones" },
      { label: "Ventaja",    value: "Sin partes metálicas internas, anticorrosivo" }
    ]
  },
  {
    id: 22,
    nombre: "Equipo de Desinfección UV Viqua",
    categoria: "Equipo Ultravioleta",
    marca: "Viqua",
    imagen: "img/produc_galeria/22pr-Equipo-UV-Viqua-f.jpg",
    galeria: [
      "img/produc_galeria/22pr-Equipo-UV-Viqua-f.jpg",
      "img/produc_galeria/22pr-Equipo-UV-Viqua-a.jpg",
      "img/produc_galeria/22pr-Equipo-UV-Viqua-b-600x600.jpg",
      "img/produc_galeria/22pr-Equipo-UV-Viqua-c.jpg",
      "img/produc_galeria/22pr-Equipo-UV-Viqua-d-600x600.jpg",
      "img/produc_galeria/22pr-Equipo-UV-Viqua-e.jpg",
      "img/produc_galeria/22pr-Equipo-UV-Viqua-g.jpg",
      "img/produc_galeria/22pr-Equipo-UV-Viqua-h-600x600.jpg"
    ],
    slug: "equipo-uv-viqua",
    descripcion: "Sistemas de desinfección ultravioleta residenciales, comerciales e industriales. Viqua es el fabricante líder mundial de equipos UV para tratamiento de agua. Sus sistemas destruyen el 99.9% de bacterias, virus y otros microorganismos sin usar químicos.",
    modelos: [],
    specs: [
      { label: "Aplicaciones",   value: "Residencial, comercial e industrial" },
      { label: "Eficiencia",     value: "99.9% eliminación de microorganismos" },
      { label: "Tecnología",     value: "Luz ultravioleta de longitud de onda 254 nm" }
    ]
  },
  {
    id: 23,
    nombre: "Bomba Dosificadora Walchem-Iwaki Serie EJ",
    categoria: "Bombas dosificadoras",
    marca: "Walchem – Iwaki",
    imagen: "img/produc_galeria/23pr-Bomba-dosificadora-Walchem-Iwaki-Serie-EJ-a.jpg",
    galeria: [
      "img/produc_galeria/23pr-Bomba-dosificadora-Walchem-Iwaki-Serie-EJ-a.jpg",
      "img/produc_galeria/23pr-Bomba-dosificadora-Walchem-Iwaki-Serie-EJ-b-600x600.jpg",
      "img/produc_galeria/23pr-Bomba-dosificadora-Walchem-Iwaki-Serie-EJ-c-600x600.jpg",
      "img/produc_galeria/23pr-Bomba-dosificadora-Walchem-Iwaki-Serie-EJ-d.jpg"
    ],
    slug: "bomba-walchem-iwaki-ej",
    descripcion: "Bomba dosificadora económica serie EJ de Walchem-Iwaki. Ideal para aplicaciones de dosificación de productos químicos en tratamiento de aguas. Diseño compacto y confiable para instalaciones residenciales y comerciales.",
    modelos: [],
    specs: [
      { label: "Caudal máximo", value: "0–12 lph" },
      { label: "Tipo",          value: "Dosificadora de diafragma" },
      { label: "Serie",         value: "EJ – Económica" }
    ]
  },
  {
    id: 24,
    nombre: "Bomba Dosificadora SEKO Tekna TPG (Digital)",
    categoria: "Bombas dosificadoras",
    marca: "Seko",
    imagen: "img/produc_galeria/24pr-Bomba-dosificadora-SEKO-Tekna-TPG-a.jpg",
    galeria: [
      "img/produc_galeria/24pr-Bomba-dosificadora-SEKO-Tekna-TPG-a.jpg",
      "img/produc_galeria/24pr-Bomba-dosificadora-SEKO-Tekna-TPG-b.jpg",
      "img/produc_galeria/24pr-Bomba-dosificadora-SEKO-Tekna-TPG-c.jpg",
      "img/produc_galeria/24pr-Bomba-dosificadora-SEKO-Tekna-TPG-d.jpg",
      "img/produc_galeria/24pr-Bomba-dosificadora-SEKO-Tekna-TPG-e-600x600.jpg"
    ],
    slug: "bomba-seko-tekna-tpg",
    descripcion: "Bomba dosificadora digital serie Tekna Evo de SEKO. Control digital preciso con pantalla LCD y múltiples modos de operación. Perfecta para dosificación exacta de cloro, antiincrustante, coagulante u otros químicos de tratamiento.",
    modelos: [],
    specs: [
      { label: "Tipo",    value: "Digital (Tekna Evo)" },
      { label: "Control", value: "Pantalla LCD, múltiples modos de operación" },
      { label: "Serie",   value: "TPG" }
    ]
  },
  {
    id: 25,
    nombre: "Bomba Dosificadora SEKO Tekna AKL (Analógica)",
    categoria: "Bombas dosificadoras",
    marca: "Seko",
    imagen: "img/produc_galeria/25pr-Bomba-dosificadora-SEKO-Tekna-AKL-c-600x600.jpg",
    galeria: [
      "img/produc_galeria/25pr-Bomba-dosificadora-SEKO-Tekna-AKL-c-600x600.jpg",
      "img/produc_galeria/25pr-Bomba-dosificadora-SEKO-Tekna-AKL-a.jpg",
      "img/produc_galeria/25pr-Bomba-dosificadora-SEKO-Tekna-AKL-b-600x600.jpg",
      "img/produc_galeria/25pr-Bomba-dosificadora-SEKO-Tekna-AKL-d.jpg"
    ],
    slug: "bomba-seko-tekna-akl",
    descripcion: "Bomba dosificadora analógica serie Tekna Evo de SEKO. Control analógico sencillo y robusto. Ideal para instalaciones donde se requiere durabilidad y facilidad de operación sin necesidad de programación compleja.",
    modelos: [],
    specs: [
      { label: "Tipo",    value: "Analógica (Tekna Evo)" },
      { label: "Control", value: "Ajuste analógico de frecuencia y caudal" },
      { label: "Serie",   value: "AKL" }
    ]
  },
  {
    id: 26,
    nombre: "Bomba Dosificadora Seko Kompact AML 200",
    categoria: "Bombas dosificadoras",
    marca: "Seko",
    imagen: "img/produc_galeria/26pr-Bomba-dosificadora-Seko-Kompact-AML-200-a-1.jpg",
    galeria: [
      "img/produc_galeria/26pr-Bomba-dosificadora-Seko-Kompact-AML-200-a-1.jpg",
      "img/produc_galeria/26pr-Bomba-dosificadora-Seko-Kompact-AML-200-b-1-600x600.jpg",
      "img/produc_galeria/26pr-Bomba-dosificadora-Seko-Kompact-AML-200-c-1-600x600.jpg"
    ],
    slug: "bomba-seko-aml-200",
    descripcion: "Bomba dosificadora Kompact de SEKO. Diseño ultra-compacto ideal para instalaciones con espacio reducido. Perfecta para dosificación de productos químicos a baja presión en sistemas de tratamiento de agua.",
    modelos: [],
    specs: [
      { label: "Caudal máximo", value: "3 LPH" },
      { label: "Presión máxima", value: "10 BAR" },
      { label: "Serie",         value: "Kompact AML 200" }
    ]
  },
  {
    id: 27,
    nombre: "Bomba Dosificadora Seko Invikta KCL",
    categoria: "Bombas dosificadoras",
    marca: "Seko",
    imagen: "img/produc_galeria/27pr-Bomba-dosificadora-Seko-Invikta-KCL-a.jpg",
    galeria: [
      "img/produc_galeria/27pr-Bomba-dosificadora-Seko-Invikta-KCL-a.jpg",
      "img/produc_galeria/27pr-Bomba-dosificadora-Seko-Invikta-KCL-b.jpg",
      "img/produc_galeria/27pr-Bomba-dosificadora-Seko-Invikta-KCL-c-600x600.jpg",
      "img/produc_galeria/27pr-Bomba-dosificadora-Seko-Invikta-KCL-d-600x600.jpg"
    ],
    slug: "bomba-seko-invikta-kcl",
    descripcion: "Bomba dosificadora Invikta de SEKO. Construcción robusta para entornos industriales exigentes. Ideal para dosificación de ácidos, álcalis y otros productos químicos agresivos en plantas de tratamiento de agua.",
    modelos: [],
    specs: [
      { label: "Caudal máximo",  value: "5 LPH" },
      { label: "Presión máxima", value: "5 BAR" },
      { label: "Serie",          value: "Invikta KCL" }
    ]
  },
  {
    id: 28,
    nombre: "Bomba Dosificadora Blue White CHEM-FEED® C-600P",
    categoria: "Bombas dosificadoras",
    marca: "Blue White",
    imagen: "img/produc_galeria/28pr-Bomba-dosificadora-Blue-White-CHEM-FEED.jpg",
    galeria: [
      "img/produc_galeria/28pr-Bomba-dosificadora-Blue-White-CHEM-FEED.jpg",
      "img/produc_galeria/28pr-Bomba-dosificadora-Blue-White-CHEM-FEED®-C-600P-c.jpg",
      "img/produc_galeria/28pr-Bomba-dosificadora-Blue-White-CHEM-FEED®-C-600P-d-600x600.jpg"
    ],
    slug: "bomba-bluewhite-c600p",
    descripcion: "Bomba de diafragma CHEM-FEED C-600P de Blue White. Alta precisión y amplio rango de caudal. Diseñada para aplicaciones industriales que requieren dosificación exacta y confiable de productos químicos de tratamiento de agua.",
    modelos: [],
    specs: [
      { label: "Caudal",         value: "3.8 a 61.4 LPH" },
      { label: "Tipo",           value: "Diafragma" },
      { label: "Modelo",         value: "CHEM-FEED® C-600P" }
    ]
  }
];