const productTemplates = [
  {
    baseName: "Faros LED",
    category: "Iluminación",
    basePrice: 2500,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Iluminación moderna y agresiva para resaltar el frente de tu vehículo.",
    description: "Faros LED de alto brillo ideales para mejorar la visibilidad y darle un estilo deportivo a tu auto. Fabricados con materiales resistentes al calor y la humedad.",
    measures: "45 cm x 20 cm x 18 cm",
    compatibility: "Compatibles con varios modelos sedán y hatchback.",
    rating: 4.8
  },
  {
    baseName: "Parrilla Frontal",
    category: "Exterior",
    basePrice: 1800,
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Renueva la apariencia del auto con una parrilla elegante y resistente.",
    description: "Parrilla frontal con acabado moderno diseñada para mejorar la estética y proteger la parte frontal del vehículo.",
    measures: "80 cm x 25 cm x 10 cm",
    compatibility: "Compatible con varios modelos compactos y deportivos.",
    rating: 4.5
  },
  {
    baseName: "Alerón Deportivo",
    category: "Exterior",
    basePrice: 3200,
    image: "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Dale una presencia más deportiva y llamativa a tu carro.",
    description: "Alerón deportivo fabricado en material resistente, ideal para mejorar la estética del vehículo y darle un look más agresivo.",
    measures: "120 cm x 18 cm x 14 cm",
    compatibility: "Universal para varios sedanes y compactos.",
    rating: 4.9
  },
  {
    baseName: "Faros de Niebla",
    category: "Iluminación",
    basePrice: 1400,
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Mayor visibilidad y mejor seguridad en lluvia o neblina intensa.",
    description: "Faros de niebla de excelente potencia para condiciones climáticas difíciles. Ideales para mejorar la seguridad en carretera.",
    measures: "16 cm x 10 cm x 9 cm",
    compatibility: "Compatibles con distintos modelos mediante base universal.",
    rating: 4.4
  },
  {
    baseName: "Lip Delantero",
    category: "Exterior",
    basePrice: 1100,
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Mejora el estilo frontal con un acabado más deportivo.",
    description: "Lip delantero universal para autos compactos y sedanes. Aporta una apariencia más baja y deportiva.",
    measures: "160 cm x 12 cm x 8 cm",
    compatibility: "Universal, recomendado para defensa delantera estándar.",
    rating: 4.3
  },
  {
    baseName: "Espejo Lateral Deportivo",
    category: "Accesorios",
    basePrice: 1350,
    image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Diseño aerodinámico para renovar el estilo lateral.",
    description: "Espejo lateral deportivo con carcasa resistente y acabado moderno para personalizar tu vehículo.",
    measures: "30 cm x 15 cm x 12 cm",
    compatibility: "Universal con adaptadores incluidos.",
    rating: 4.2
  },
  {
    baseName: "Calaveras LED",
    category: "Iluminación",
    basePrice: 2800,
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Moderniza la parte trasera con iluminación LED.",
    description: "Calaveras LED con diseño estilizado para mejorar la apariencia y visibilidad trasera del vehículo.",
    measures: "42 cm x 22 cm x 14 cm",
    compatibility: "Compatibles según modelo específico.",
    rating: 4.7
  },
  {
    baseName: "Rines Deportivos",
    category: "Ruedas",
    basePrice: 6500,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Rines con diseño moderno para un look más agresivo.",
    description: "Juego de rines deportivos fabricados con materiales resistentes y diseño llamativo para elevar la estética del auto.",
    measures: "17 pulgadas",
    compatibility: "Verificar birlos y compatibilidad de modelo.",
    rating: 4.9
  },
  {
    baseName: "Defensa Delantera",
    category: "Exterior",
    basePrice: 3900,
    image: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Protección y estilo para la parte frontal del vehículo.",
    description: "Defensa delantera con diseño moderno que aporta presencia y mejora visual para autos urbanos y deportivos.",
    measures: "150 cm x 40 cm x 28 cm",
    compatibility: "Compatible con diversos modelos según adaptación.",
    rating: 4.6
  },
  {
    baseName: "Spoiler Trasero",
    category: "Exterior",
    basePrice: 2900,
    image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Accesorio trasero para una imagen más deportiva.",
    description: "Spoiler trasero de apariencia elegante y deportiva, ideal para personalización estética del vehículo.",
    measures: "110 cm x 16 cm x 12 cm",
    compatibility: "Universal para varios autos compactos y sedanes.",
    rating: 4.5
  }
];

const variants = [
  "Modelo A",
  "Modelo B",
  "Modelo C",
  "Modelo D",
  "Modelo E",
  "Modelo F",
  "Modelo G",
  "Modelo H",
  "Modelo I",
  "Modelo J"
];

const reviewPool = [
  { name: "Carlos", stars: 5, comment: "Excelente calidad y muy buen acabado." },
  { name: "Ana", stars: 4, comment: "Se ve muy bien instalado en el auto." },
  { name: "Luis", stars: 5, comment: "Buen producto, lo recomiendo." },
  { name: "Miriam", stars: 4, comment: "Buena relación calidad-precio." },
  { name: "Jorge", stars: 5, comment: "Me gustó mucho el diseño." }
];

const PRODUCTS = [];
let idCounter = 1;

productTemplates.forEach((template, templateIndex) => {
  variants.forEach((variant, variantIndex) => {
    PRODUCTS.push({
      id: idCounter++,
      name: `${template.baseName} ${variant}`,
      category: template.category,
      price: template.basePrice + (variantIndex * 120) + (templateIndex * 35),
      image: template.image,
      shortDescription: `${template.shortDescription} Versión ${variant}.`,
      description: `${template.description} Esta versión corresponde a ${variant}, ideal para usuarios que buscan una opción visualmente atractiva y funcional.`,
      measures: template.measures,
      compatibility: `${template.compatibility} Variante: ${variant}.`,
      stock: 5 + ((templateIndex + variantIndex) % 10),
      rating: Number((template.rating - (variantIndex % 3) * 0.1).toFixed(1)),
      reviews: [
        reviewPool[(templateIndex + variantIndex) % reviewPool.length],
        reviewPool[(templateIndex + variantIndex + 1) % reviewPool.length]
      ]
    });
  });
});
