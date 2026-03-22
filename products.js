const vehicleModels = [
  {
    brand: "Volkswagen",
    model: "Jetta GLI",
    imageQuery: "volkswagen,jetta"
  },
  {
    brand: "Volkswagen",
    model: "Golf GTI",
    imageQuery: "volkswagen,golf"
  },
  {
    brand: "Nissan",
    model: "Versa",
    imageQuery: "nissan,versa"
  },
  {
    brand: "Nissan",
    model: "Sentra",
    imageQuery: "nissan,sentra"
  },
  {
    brand: "Chevrolet",
    model: "Aveo",
    imageQuery: "chevrolet,aveo"
  },
  {
    brand: "Chevrolet",
    model: "Camaro",
    imageQuery: "chevrolet,camaro"
  },
  {
    brand: "Jeep",
    model: "Wrangler",
    imageQuery: "jeep,wrangler"
  },
  {
    brand: "Jeep",
    model: "Grand Cherokee",
    imageQuery: "jeep,grand-cherokee"
  },
  {
    brand: "SEAT",
    model: "Ibiza",
    imageQuery: "seat,ibiza"
  },
  {
    brand: "SEAT",
    model: "León",
    imageQuery: "seat,leon"
  },
  {
    brand: "Toyota",
    model: "Tacoma",
    imageQuery: "toyota,tacoma"
  },
  {
    brand: "Honda",
    model: "Civic",
    imageQuery: "honda,civic"
  },
  {
    brand: "Mazda",
    model: "Mazda 3",
    imageQuery: "mazda,mazda3"
  },
  {
    brand: "Ford",
    model: "Mustang",
    imageQuery: "ford,mustang"
  },
  {
    brand: "BMW",
    model: "Serie 3",
    imageQuery: "bmw,3-series"
  },
  {
    brand: "Audi",
    model: "A4",
    imageQuery: "audi,a4"
  },
  {
    brand: "Mercedes-Benz",
    model: "Clase C",
    imageQuery: "mercedes,c-class"
  },
  {
    brand: "Kia",
    model: "Forte",
    imageQuery: "kia,forte"
  },
  {
    brand: "Hyundai",
    model: "Elantra",
    imageQuery: "hyundai,elantra"
  },
  {
    brand: "Dodge",
    model: "Charger",
    imageQuery: "dodge,charger"
  }
];

const partTemplates = [
  {
    part: "Faros principales",
    category: "Iluminación",
    price: 3200,
    measures: "58 cm x 24 cm x 20 cm",
    shortDescription: "Juego de faros principales con diseño moderno para renovar el frente del vehículo.",
    description: "Faros principales con acabado elegante, excelente iluminación y estructura resistente para mejorar la estética frontal y la visibilidad del automóvil."
  },
  {
    part: "Faros de niebla",
    category: "Iluminación",
    price: 1650,
    measures: "18 cm x 11 cm x 9 cm",
    shortDescription: "Faros de niebla para mejorar visibilidad y seguridad en lluvia o neblina.",
    description: "Faros de niebla compactos con buena intensidad de luz para mejorar la conducción en condiciones de clima complicado."
  },
  {
    part: "Rejilla superior",
    category: "Exterior",
    price: 2100,
    measures: "84 cm x 24 cm x 8 cm",
    shortDescription: "Rejilla superior para renovar la imagen frontal con un diseño llamativo.",
    description: "Rejilla superior con acabado moderno y estructura firme para darle al frente del vehículo una apariencia más deportiva."
  },
  {
    part: "Rejilla inferior",
    category: "Exterior",
    price: 1550,
    measures: "72 cm x 15 cm x 8 cm",
    shortDescription: "Rejilla inferior para complementar el frente con un estilo más agresivo.",
    description: "Rejilla inferior diseñada para integrarse a la defensa delantera y aportar una línea más deportiva al vehículo."
  },
  {
    part: "Faldones laterales",
    category: "Exterior",
    price: 2450,
    measures: "184 cm x 15 cm x 10 cm",
    shortDescription: "Faldones laterales para darle una línea más baja y deportiva al auto.",
    description: "Faldones laterales fabricados para mejorar la presencia visual del vehículo y complementar el kit aerodinámico."
  },
  {
    part: "Estribos laterales",
    category: "Accesorios",
    price: 3600,
    measures: "194 cm x 19 cm x 15 cm",
    shortDescription: "Estribos laterales con acabado resistente para un acceso más cómodo y mejor estilo.",
    description: "Estribos laterales con diseño firme y atractivo, ideales para mejorar la apariencia lateral y facilitar el acceso."
  },
  {
    part: "Alerón volado",
    category: "Exterior",
    price: 3950,
    measures: "132 cm x 23 cm x 17 cm",
    shortDescription: "Alerón volado para un estilo agresivo y muy llamativo en la parte trasera.",
    description: "Alerón volado con diseño deportivo de gran presencia, ideal para darle un look más extremo a la parte trasera."
  },
  {
    part: "Alerón delgado",
    category: "Exterior",
    price: 2450,
    measures: "122 cm x 11 cm x 8 cm",
    shortDescription: "Alerón delgado para una apariencia limpia, deportiva y discreta.",
    description: "Alerón delgado de línea estilizada, perfecto para quienes buscan un detalle deportivo más fino y elegante."
  },
  {
    part: "Retrovisor exterior",
    category: "Accesorios",
    price: 1580,
    measures: "32 cm x 16 cm x 12 cm",
    shortDescription: "Retrovisor exterior con estilo moderno para renovar el costado del vehículo.",
    description: "Retrovisor exterior con estructura resistente y diseño actual para mejorar la imagen lateral del auto."
  },
  {
    part: "Cubreasientos deportivos",
    category: "Interior",
    price: 2100,
    measures: "Universal para asientos delanteros",
    shortDescription: "Cubreasientos para proteger el interior y darle un acabado más deportivo.",
    description: "Cubreasientos con estilo deportivo y ajuste práctico para mejorar la apariencia interior del auto y proteger la tapicería."
  }
];

const reviewPool = [
  { name: "Carlos", stars: 5, comment: "Excelente calidad y muy buen acabado." },
  { name: "Ana", stars: 4, comment: "Se ve muy bien instalado en el auto." },
  { name: "Luis", stars: 5, comment: "Buen producto, lo recomiendo." },
  { name: "Miriam", stars: 4, comment: "Buena relación calidad-precio." },
  { name: "Jorge", stars: 5, comment: "Me gustó mucho el diseño." },
  { name: "Valeria", stars: 4, comment: "Muy bonito y se ve moderno." }
];

const PRODUCTS = [];
let idCounter = 1;

vehicleModels.forEach((vehicle, vehicleIndex) => {
  partTemplates.forEach((part, partIndex) => {
    const lockId = 300 + idCounter;

    let measures = part.measures;
    let compatibility = `${part.part} compatible con ${vehicle.brand} ${vehicle.model}.`;

    if (part.part === "Rines deportivos") {
      measures = ["18 pulgadas", "19 pulgadas", "20 pulgadas", "21 pulgadas", "22 pulgadas"][vehicleIndex % 5];
      compatibility = `Compatible con ${vehicle.brand} ${vehicle.model}, revisar birlos y offset para rin de ${measures}.`;
    }

    const dynamicPrice = part.price + (vehicleIndex * 90) + (partIndex * 35);
    const dynamicRating = Number((4.2 + ((vehicleIndex + partIndex) % 8) * 0.1).toFixed(1));

    PRODUCTS.push({
      id: idCounter,
      name: `${part.part} para ${vehicle.brand} ${vehicle.model}`,
      category: part.category,
      price: dynamicPrice,
      image: `https://loremflickr.com/900/600/${vehicle.imageQuery}?lock=${lockId}`,
      shortDescription: `${part.shortDescription} Diseñado para ${vehicle.brand} ${vehicle.model}.`,
      description: `${part.description} Esta versión fue pensada para ${vehicle.brand} ${vehicle.model}, buscando una apariencia más atractiva, mejor presencia visual y una integración más adecuada al diseño del vehículo.`,
      measures: measures,
      compatibility: compatibility,
      stock: 5 + ((vehicleIndex + partIndex) % 11),
      rating: dynamicRating,
      reviews: [
        reviewPool[(vehicleIndex + partIndex) % reviewPool.length],
        reviewPool[(vehicleIndex + partIndex + 2) % reviewPool.length]
      ]
    });

    idCounter++;
  });
});
