const PRODUCTS = [
  {
    id: 1,
    name: "Faros LED Deportivos",
    category: "Iluminación",
    price: 2500,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Iluminación moderna y agresiva para resaltar el frente de tu vehículo.",
    description: "Faros LED de alto brillo ideales para mejorar la visibilidad y darle un estilo deportivo a tu auto. Fabricados con materiales resistentes al calor y la humedad.",
    measures: "45 cm x 20 cm x 18 cm",
    compatibility: "Compatibles con varios modelos sedán y hatchback (revisar ajuste específico).",
    stock: 12,
    rating: 4.8,
    reviews: [
      { name: "Carlos", stars: 5, comment: "Excelente iluminación, se ven muy premium." },
      { name: "Ana", stars: 4, comment: "Me gustaron mucho, aunque tardé un poco en instalarlos." }
    ]
  },
  {
    id: 2,
    name: "Parrilla Frontal Negra",
    category: "Exterior",
    price: 1800,
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Renueva la apariencia del auto con una parrilla elegante y resistente.",
    description: "Parrilla frontal con acabado negro brillante, diseñada para mejorar la estética y proteger la parte frontal del vehículo.",
    measures: "80 cm x 25 cm x 10 cm",
    compatibility: "Compatible con varios modelos compactos y deportivos.",
    stock: 7,
    rating: 4.5,
    reviews: [
      { name: "Luis", stars: 5, comment: "Le cambió totalmente el frente al carro." },
      { name: "Miriam", stars: 4, comment: "Buen material y buen acabado." }
    ]
  },
  {
    id: 3,
    name: "Alerón Deportivo",
    category: "Exterior",
    price: 3200,
    image: "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Dale una presencia más deportiva y llamativa a tu carro.",
    description: "Alerón deportivo universal fabricado en material resistente, ideal para mejorar la estética del vehículo y darle un look más agresivo.",
    measures: "120 cm x 18 cm x 14 cm",
    compatibility: "Universal para varios sedanes y compactos.",
    stock: 5,
    rating: 4.9,
    reviews: [
      { name: "Jorge", stars: 5, comment: "Se ve increíble y quedó muy bien." },
      { name: "Sofía", stars: 5, comment: "Me encantó, se ve muy deportivo." }
    ]
  },
  {
    id: 4,
    name: "Faros de Niebla",
    category: "Iluminación",
    price: 1400,
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Mayor visibilidad y mejor seguridad en lluvia o neblina intensa.",
    description: "Faros de niebla de excelente potencia para condiciones climáticas difíciles. Ideales para mejorar la seguridad en carretera.",
    measures: "16 cm x 10 cm x 9 cm",
    compatibility: "Compatibles con distintos modelos mediante base universal.",
    stock: 10,
    rating: 4.4,
    reviews: [
      { name: "Kevin", stars: 4, comment: "Buen producto, iluminan bien." },
      { name: "Daniela", stars: 5, comment: "Muy útiles para carretera." }
    ]
  },
  {
    id: 5,
    name: "Lip Delantero Universal",
    category: "Exterior",
    price: 1100,
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Mejora el estilo frontal con un acabado más deportivo.",
    description: "Lip delantero universal para autos compactos y sedanes. Aporta una apariencia más baja y deportiva.",
    measures: "160 cm x 12 cm x 8 cm",
    compatibility: "Universal, recomendado para defensa delantera estándar.",
    stock: 9,
    rating: 4.3,
    reviews: [
      { name: "Eduardo", stars: 4, comment: "Buen precio y se ve muy bien." }
    ]
  },
  {
    id: 6,
    name: "Espejo Lateral Deportivo",
    category: "Accesorios",
    price: 1350,
    image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Diseño aerodinámico para renovar el estilo lateral.",
    description: "Espejo lateral deportivo con carcasa resistente y acabado moderno para personalizar tu vehículo.",
    measures: "30 cm x 15 cm x 12 cm",
    compatibility: "Universal con adaptadores incluidos.",
    stock: 6,
    rating: 4.2,
    reviews: [
      { name: "Ricardo", stars: 4, comment: "Muy buen diseño." }
    ]
  },
  {
    id: 7,
    name: "Calaveras LED",
    category: "Iluminación",
    price: 2800,
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Moderniza la parte trasera con iluminación LED.",
    description: "Calaveras LED con diseño estilizado para mejorar la apariencia y visibilidad trasera del vehículo.",
    measures: "42 cm x 22 cm x 14 cm",
    compatibility: "Compatibles según modelo específico.",
    stock: 8,
    rating: 4.7,
    reviews: [
      { name: "Valeria", stars: 5, comment: "Se ven increíbles de noche." }
    ]
  },
  {
    id: 8,
    name: "Rines Deportivos",
    category: "Ruedas",
    price: 6500,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Rines con diseño moderno para un look más agresivo.",
    description: "Juego de rines deportivos fabricados con materiales resistentes y diseño llamativo para elevar la estética del auto.",
    measures: "17 pulgadas",
    compatibility: "Verificar birlos y compatibilidad de modelo.",
    stock: 4,
    rating: 4.9,
    reviews: [
      { name: "Marco", stars: 5, comment: "Mi carro se ve otro totalmente." }
    ]
  }
];
