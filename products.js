const PRODUCTS = [
  {
    id: 1,
    name: "Faros principales para Volkswagen Jetta GLI",
    category: "Iluminación",
    price: 3200,
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Faros principales con diseño moderno para renovar el frente del vehículo.",
    description: "Faros principales con acabado elegante, excelente iluminación y estructura resistente para mejorar la estética frontal y la visibilidad del Volkswagen Jetta GLI.",
    measures: "58 cm x 24 cm x 20 cm",
    compatibility: "Compatible con Volkswagen Jetta GLI.",
    stock: 8,
    rating: 4.8,
    reviews: [
      { name: "Carlos", stars: 5, comment: "Excelente calidad y muy buen acabado." },
      { name: "Ana", stars: 4, comment: "Se ve muy bien instalado en el auto." }
    ]
  },
  {
    id: 2,
    name: "Faros de niebla para Nissan Versa",
    category: "Iluminación",
    price: 1650,
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Faros de niebla para mejorar visibilidad y seguridad en lluvia o neblina.",
    description: "Faros de niebla compactos con buena intensidad de luz para mejorar la conducción del Nissan Versa en clima complicado.",
    measures: "18 cm x 11 cm x 9 cm",
    compatibility: "Compatible con Nissan Versa.",
    stock: 10,
    rating: 4.6,
    reviews: [
      { name: "Luis", stars: 5, comment: "Buen producto, lo recomiendo." },
      { name: "Miriam", stars: 4, comment: "Buena relación calidad-precio." }
    ]
  },
  {
    id: 3,
    name: "Rejilla superior para Chevrolet Aveo",
    category: "Exterior",
    price: 2100,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Rejilla superior para renovar la imagen frontal con un diseño llamativo.",
    description: "Rejilla superior con acabado moderno y estructura firme para darle al frente del Chevrolet Aveo una apariencia más deportiva.",
    measures: "84 cm x 24 cm x 8 cm",
    compatibility: "Compatible con Chevrolet Aveo.",
    stock: 7,
    rating: 4.5,
    reviews: [
      { name: "Jorge", stars: 5, comment: "Me gustó mucho el diseño." },
      { name: "Valeria", stars: 4, comment: "Muy bonito y se ve moderno." }
    ]
  },
  {
    id: 4,
    name: "Rejilla inferior para SEAT Ibiza",
    category: "Exterior",
    price: 1550,
    image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Rejilla inferior para complementar el frente con un estilo más agresivo.",
    description: "Rejilla inferior diseñada para integrarse a la defensa delantera y aportar una línea más deportiva al SEAT Ibiza.",
    measures: "72 cm x 15 cm x 8 cm",
    compatibility: "Compatible con SEAT Ibiza.",
    stock: 9,
    rating: 4.4,
    reviews: [
      { name: "Carlos", stars: 5, comment: "Excelente calidad y muy buen acabado." },
      { name: "Ana", stars: 4, comment: "Se ve muy bien instalado en el auto." }
    ]
  },
  {
    id: 5,
    name: "Faldones laterales para SEAT León",
    category: "Exterior",
    price: 2450,
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Faldones laterales para darle una línea más baja y deportiva al auto.",
    description: "Faldones laterales fabricados para mejorar la presencia visual del SEAT León y complementar el kit aerodinámico.",
    measures: "184 cm x 15 cm x 10 cm",
    compatibility: "Compatible con SEAT León.",
    stock: 6,
    rating: 4.7,
    reviews: [
      { name: "Luis", stars: 5, comment: "Buen producto, lo recomiendo." },
      { name: "Miriam", stars: 4, comment: "Buena relación calidad-precio." }
    ]
  },
  {
    id: 6,
    name: "Estribos laterales para Toyota Tacoma",
    category: "Accesorios",
    price: 3600,
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Estribos laterales con acabado resistente para un acceso más cómodo y mejor estilo.",
    description: "Estribos laterales con diseño firme y atractivo, ideales para mejorar la apariencia lateral y facilitar el acceso a la Toyota Tacoma.",
    measures: "194 cm x 19 cm x 15 cm",
    compatibility: "Compatible con Toyota Tacoma.",
    stock: 5,
    rating: 4.8,
    reviews: [
      { name: "Jorge", stars: 5, comment: "Me gustó mucho el diseño." },
      { name: "Valeria", stars: 4, comment: "Muy bonito y se ve moderno." }
    ]
  },
  {
    id: 7,
    name: "Alerón volado para Chevrolet Camaro",
    category: "Exterior",
    price: 3950,
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Alerón volado para un estilo agresivo y muy llamativo en la parte trasera.",
    description: "Alerón volado con diseño deportivo de gran presencia, ideal para darle un look más extremo al Chevrolet Camaro.",
    measures: "132 cm x 23 cm x 17 cm",
    compatibility: "Compatible con Chevrolet Camaro.",
    stock: 4,
    rating: 4.9,
    reviews: [
      { name: "Carlos", stars: 5, comment: "Excelente calidad y muy buen acabado." },
      { name: "Ana", stars: 4, comment: "Se ve muy bien instalado en el auto." }
    ]
  },
  {
    id: 8,
    name: "Alerón delgado para Volkswagen Jetta GLI",
    category: "Exterior",
    price: 2450,
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Alerón delgado para una apariencia limpia, deportiva y discreta.",
    description: "Alerón delgado de línea estilizada, perfecto para quienes buscan un detalle deportivo más fino y elegante en el Jetta GLI.",
    measures: "122 cm x 11 cm x 8 cm",
    compatibility: "Compatible con Volkswagen Jetta GLI.",
    stock: 8,
    rating: 4.5,
    reviews: [
      { name: "Luis", stars: 5, comment: "Buen producto, lo recomiendo." },
      { name: "Miriam", stars: 4, comment: "Buena relación calidad-precio." }
    ]
  },
  {
    id: 9,
    name: "Retrovisor exterior para Jeep Wrangler",
    category: "Accesorios",
    price: 1580,
    image: "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Retrovisor exterior con estilo moderno para renovar el costado del vehículo.",
    description: "Retrovisor exterior con estructura resistente y diseño actual para mejorar la imagen lateral del Jeep Wrangler.",
    measures: "32 cm x 16 cm x 12 cm",
    compatibility: "Compatible con Jeep Wrangler.",
    stock: 7,
    rating: 4.6,
    reviews: [
      { name: "Jorge", stars: 5, comment: "Me gustó mucho el diseño." },
      { name: "Valeria", stars: 4, comment: "Muy bonito y se ve moderno." }
    ]
  },
  {
    id: 10,
    name: "Cubreasientos deportivos para Honda Civic",
    category: "Interior",
    price: 2100,
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Cubreasientos para proteger el interior y darle un acabado más deportivo.",
    description: "Cubreasientos con estilo deportivo y ajuste práctico para mejorar la apariencia interior del Honda Civic y proteger la tapicería.",
    measures: "Universal para asientos delanteros",
    compatibility: "Compatible con Honda Civic.",
    stock: 11,
    rating: 4.7,
    reviews: [
      { name: "Carlos", stars: 5, comment: "Excelente calidad y muy buen acabado." },
      { name: "Ana", stars: 4, comment: "Se ve muy bien instalado en el auto." }
    ]
  }
];
