const baseProducts = [
  {
    type: "Faros principales",
    category: "Iluminación",
    price: 3200,
    measuresList: [
      "58 cm x 24 cm x 20 cm",
      "59 cm x 24 cm x 20 cm",
      "60 cm x 25 cm x 21 cm",
      "61 cm x 25 cm x 21 cm",
      "62 cm x 26 cm x 22 cm",
      "63 cm x 26 cm x 22 cm",
      "64 cm x 27 cm x 22 cm",
      "65 cm x 27 cm x 23 cm",
      "66 cm x 28 cm x 23 cm",
      "67 cm x 28 cm x 24 cm"
    ],
    shortDescription: "Juego de faros principales con diseño moderno para renovar el frente del vehículo.",
    description: "Faros principales con acabado elegante, excelente iluminación y estructura resistente para mejorar la estética frontal y la visibilidad del automóvil.",
    images: [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    type: "Faros de niebla",
    category: "Iluminación",
    price: 1650,
    measuresList: [
      "18 cm x 11 cm x 9 cm",
      "18 cm x 11 cm x 9 cm",
      "19 cm x 11 cm x 9 cm",
      "19 cm x 12 cm x 10 cm",
      "20 cm x 12 cm x 10 cm",
      "20 cm x 12 cm x 10 cm",
      "21 cm x 13 cm x 10 cm",
      "21 cm x 13 cm x 11 cm",
      "22 cm x 13 cm x 11 cm",
      "22 cm x 14 cm x 11 cm"
    ],
    shortDescription: "Faros de niebla para mejorar visibilidad y seguridad en lluvia o neblina.",
    description: "Faros de niebla compactos con buena intensidad de luz para mejorar la conducción en condiciones de clima complicado.",
    images: [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    type: "Rejilla superior",
    category: "Exterior",
    price: 2100,
    measuresList: [
      "84 cm x 24 cm x 8 cm",
      "85 cm x 24 cm x 8 cm",
      "86 cm x 25 cm x 8 cm",
      "87 cm x 25 cm x 9 cm",
      "88 cm x 26 cm x 9 cm",
      "89 cm x 26 cm x 9 cm",
      "90 cm x 27 cm x 9 cm",
      "91 cm x 27 cm x 10 cm",
      "92 cm x 28 cm x 10 cm",
      "93 cm x 28 cm x 10 cm"
    ],
    shortDescription: "Rejilla superior para renovar la imagen frontal con un diseño llamativo.",
    description: "Rejilla superior con acabado moderno y estructura firme para darle al frente del vehículo una apariencia más deportiva.",
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    type: "Rejilla inferior",
    category: "Exterior",
    price: 1550,
    measuresList: [
      "72 cm x 15 cm x 8 cm",
      "73 cm x 15 cm x 8 cm",
      "74 cm x 16 cm x 8 cm",
      "75 cm x 16 cm x 8 cm",
      "76 cm x 17 cm x 9 cm",
      "77 cm x 17 cm x 9 cm",
      "78 cm x 18 cm x 9 cm",
      "79 cm x 18 cm x 9 cm",
      "80 cm x 19 cm x 10 cm",
      "81 cm x 19 cm x 10 cm"
    ],
    shortDescription: "Rejilla inferior para complementar el frente con un estilo más agresivo.",
    description: "Rejilla inferior diseñada para integrarse a la defensa delantera y aportar una línea más deportiva al vehículo.",
    images: [
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    type: "Faldones laterales",
    category: "Exterior",
    price: 2450,
    measuresList: [
      "184 cm x 15 cm x 10 cm",
      "185 cm x 15 cm x 10 cm",
      "186 cm x 16 cm x 10 cm",
      "187 cm x 16 cm x 10 cm",
      "188 cm x 17 cm x 11 cm",
      "189 cm x 17 cm x 11 cm",
      "190 cm x 18 cm x 11 cm",
      "191 cm x 18 cm x 11 cm",
      "192 cm x 19 cm x 12 cm",
      "193 cm x 19 cm x 12 cm"
    ],
    shortDescription: "Faldones laterales para darle una línea más baja y deportiva al auto.",
    description: "Faldones laterales fabricados para mejorar la presencia visual del vehículo y complementar el kit aerodinámico.",
    images: [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    type: "Estribos laterales",
    category: "Accesorios",
    price: 3600,
    measuresList: [
      "194 cm x 19 cm x 15 cm",
      "195 cm x 19 cm x 15 cm",
      "196 cm x 20 cm x 15 cm",
      "197 cm x 20 cm x 15 cm",
      "198 cm x 21 cm x 16 cm",
      "199 cm x 21 cm x 16 cm",
      "200 cm x 22 cm x 16 cm",
      "201 cm x 22 cm x 16 cm",
      "202 cm x 23 cm x 17 cm",
      "203 cm x 23 cm x 17 cm"
    ],
    shortDescription: "Estribos laterales con acabado resistente para un acceso más cómodo y mejor estilo.",
    description: "Estribos laterales con diseño firme y atractivo, ideales para mejorar la apariencia lateral y facilitar el acceso.",
    images: [
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    type: "Alerón volado",
    category: "Exterior",
    price: 3950,
    measuresList: [
      "132 cm x 23 cm x 17 cm",
      "133 cm x 23 cm x 17 cm",
      "134 cm x 24 cm x 17 cm",
      "135 cm x 24 cm x 17 cm",
      "136 cm x 25 cm x 18 cm",
      "137 cm x 25 cm x 18 cm",
      "138 cm x 26 cm x 18 cm",
      "139 cm x 26 cm x 18 cm",
      "140 cm x 27 cm x 19 cm",
      "141 cm x 27 cm x 19 cm"
    ],
    shortDescription: "Alerón volado para un estilo agresivo y muy llamativo en la parte trasera.",
    description: "Alerón volado con diseño deportivo de gran presencia, ideal para darle un look más extremo a la parte trasera.",
    images: [
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    type: "Alerón delgado",
    category: "Exterior",
    price: 2450,
    measuresList: [
      "122 cm x 11 cm x 8 cm",
      "123 cm x 11 cm x 8 cm",
      "124 cm x 12 cm x 8 cm",
      "125 cm x 12 cm x 8 cm",
      "126 cm x 13 cm x 9 cm",
      "127 cm x 13 cm x 9 cm",
      "128 cm x 14 cm x 9 cm",
      "129 cm x 14 cm x 9 cm",
      "130 cm x 15 cm x 10 cm",
      "131 cm x 15 cm x 10 cm"
    ],
    shortDescription: "Alerón delgado para una apariencia limpia, deportiva y discreta.",
    description: "Alerón delgado de línea estilizada, perfecto para quienes buscan un detalle deportivo más fino y elegante.",
    images: [
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    type: "Retrovisor exterior",
    category: "Accesorios",
    price: 1580,
    measuresList: [
      "32 cm x 16 cm x 12 cm",
      "33 cm x 16 cm x 12 cm",
      "34 cm x 17 cm x 12 cm",
      "35 cm x 17 cm x 12 cm",
      "36 cm x 18 cm x 13 cm",
      "37 cm x 18 cm x 13 cm",
      "38 cm x 19 cm x 13 cm",
      "39 cm x 19 cm x 13 cm",
      "40 cm x 20 cm x 14 cm",
      "41 cm x 20 cm x 14 cm"
    ],
    shortDescription: "Retrovisor exterior con estilo moderno para renovar el costado del vehículo.",
    description: "Retrovisor exterior con estructura resistente y diseño actual para mejorar la imagen lateral del auto.",
    images: [
      "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    type: "Rines deportivos",
    category: "Ruedas",
    price: 7200,
    measuresList: [
      "18 pulgadas",
      "19 pulgadas",
      "20 pulgadas",
      "21 pulgadas",
      "22 pulgadas",
      "18 pulgadas",
      "19 pulgadas",
      "20 pulgadas",
      "21 pulgadas",
      "22 pulgadas"
    ],
    shortDescription: "Rines deportivos con acabado moderno para una imagen más agresiva y elegante.",
    description: "Rines deportivos con diseño llamativo para elevar el estilo del vehículo y destacar visualmente el conjunto de ruedas.",
    images: [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80"
    ]
  }
];

const vehicleModels = [
  { brand: "Volkswagen", model: "Jetta GLI" },
  { brand: "Volkswagen", model: "Golf GTI" },
  { brand: "Nissan", model: "Versa" },
  { brand: "Nissan", model: "Sentra" },
  { brand: "Chevrolet", model: "Aveo" },
  { brand: "Chevrolet", model: "Camaro" },
  { brand: "Jeep", model: "Wrangler" },
  { brand: "SEAT", model: "Ibiza" },
  { brand: "Toyota", model: "Tacoma" },
  { brand: "Honda", model: "Civic" }
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

baseProducts.forEach((baseProduct, typeIndex) => {
  vehicleModels.forEach((vehicle, vehicleIndex) => {
    PRODUCTS.push({
      id: idCounter,
      name: `${baseProduct.type} para ${vehicle.brand} ${vehicle.model}`,
      category: baseProduct.category,
      price: baseProduct.price + (vehicleIndex * 120) + (typeIndex * 45),
      image: baseProduct.images[vehicleIndex],
      shortDescription: `${baseProduct.shortDescription} Diseñado para ${vehicle.brand} ${vehicle.model}.`,
      description: `${baseProduct.description} Esta versión está pensada para ${vehicle.brand} ${vehicle.model}, ofreciendo una apariencia más atractiva y mejor integración visual con el vehículo.`,
      measures: baseProduct.measuresList[vehicleIndex],
      compatibility: `Compatible con ${vehicle.brand} ${vehicle.model}.`,
      stock: 5 + ((vehicleIndex + typeIndex) % 8),
      rating: Number((4.2 + ((vehicleIndex + typeIndex) % 8) * 0.1).toFixed(1)),
      reviews: [
        reviewPool[(vehicleIndex + typeIndex) % reviewPool.length],
        reviewPool[(vehicleIndex + typeIndex + 2) % reviewPool.length]
      ]
    });

    idCounter++;
  });
});
