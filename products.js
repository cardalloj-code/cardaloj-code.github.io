const PRODUCTS = [
  {
    id: 1,
    name: "Par Cuartos Reflejantes Traseros CV Beat",
    category: "Iluminación",
    price: 380,
    extraPriceText: "Pieza: $200",
    image: "images/producto1.jpg",
    shortDescription: "Par de cuartos reflejantes traseros para Chevrolet Beat.",
    description: "Par de cuartos reflejantes traseros compatibles con Chevrolet Beat modelos 2018 a 2021. Ideales para reemplazo y mejorar la apariencia del vehículo.",
    measures: "Medidas no especificadas",
    compatibility: "Chevrolet Beat 2018 a 2021",
    stock: 6,
    rating: 4.7,
    reviews: [
      { name: "Carlos", stars: 5, comment: "Muy buen producto y buen acabado." },
      { name: "Ana", stars: 4, comment: "Se instalaron bien y se ven muy bien." }
    ]
  },
  {
    id: 2,
    name: "Par de Calaveras Vocho LED",
    category: "Iluminación",
    price: 1300,
    extraPriceText: "",
    image: "images/producto2.jpg",
    shortDescription: "Par de calaveras LED para Vocho.",
    description: "Par de calaveras LED para Vocho con diseño moderno, excelente iluminación y apariencia renovada para la parte trasera del vehículo.",
    measures: "Medidas no especificadas",
    compatibility: "Vocho",
    stock: 4,
    rating: 4.8,
    reviews: [
      { name: "Luis", stars: 5, comment: "Excelente diseño y buena iluminación." },
      { name: "Miriam", stars: 4, comment: "Muy bonitas y fáciles de instalar." }
    ]
  },
  {
    id: 3,
    name: "Perilla de Cambios DSG",
    category: "Interior",
    price: 480,
    extraPriceText: "",
    image: "images/producto3.jpg",
    shortDescription: "Perilla de cambios DSG compatible con varios modelos Volkswagen.",
    description: "Perilla de cambios DSG con acabado elegante y diseño moderno. Ideal para renovar el interior del vehículo.",
    measures: "Medidas no especificadas",
    compatibility: "Jetta MK6, Bora, Passat, Beetle",
    stock: 8,
    rating: 4.6,
    reviews: [
      { name: "Jorge", stars: 5, comment: "Se ve muy bien en el interior." },
      { name: "Valeria", stars: 4, comment: "Buen material y buena presentación." }
    ]
  },
  {
    id: 4,
    name: "Par de Coderas para Puerta",
    category: "Interior",
    price: 220,
    extraPriceText: "",
    image: "images/producto4.jpg",
    shortDescription: "Par de coderas para puerta compatibles con varios modelos clásicos.",
    description: "Par de coderas para puerta ideales para renovar el interior y brindar mayor comodidad y mejor apariencia.",
    measures: "Medidas no especificadas",
    compatibility: "Vocho, Caribe, Brasilia y Combi",
    stock: 7,
    rating: 4.5,
    reviews: [
      { name: "Pedro", stars: 5, comment: "Muy útiles y bien hechas." },
      { name: "Laura", stars: 4, comment: "Buena relación calidad-precio." }
    ]
  },
  {
    id: 5,
    name: "Par Cuartos de Salpicadera",
    category: "Iluminación",
    price: 140,
    extraPriceText: "",
    image: "images/producto5.jpg",
    shortDescription: "Par de cuartos de salpicadera para varios modelos Volkswagen y Seat.",
    description: "Par de cuartos de salpicadera para reemplazo con diseño funcional y excelente compatibilidad.",
    measures: "Medidas no especificadas",
    compatibility: "Jetta, Golf, Beetle, Derby, Córdoba, Ibiza",
    stock: 10,
    rating: 4.4,
    reviews: [
      { name: "Ricardo", stars: 4, comment: "Buen producto por el precio." },
      { name: "Sofía", stars: 5, comment: "Quedaron perfectos." }
    ]
  },
  {
    id: 6,
    name: "Cuarto de Salpicadera Kia Rio LED Secuencial Mica Blanca",
    category: "Iluminación",
    price: 280,
    extraPriceText: "",
    image: "images/producto6.jpg",
    shortDescription: "Par de cuartos LED secuenciales para Kia Rio.",
    description: "Cuartos de salpicadera LED secuenciales con mica blanca para Kia Rio. Mejoran la apariencia lateral y dan un estilo más moderno.",
    measures: "Medidas no especificadas",
    compatibility: "Kia Rio",
    stock: 5,
    rating: 4.8,
    reviews: [
      { name: "Diego", stars: 5, comment: "Se ven increíbles encendidos." },
      { name: "Fernanda", stars: 4, comment: "Muy buena presentación." }
    ]
  },
  {
    id: 7,
    name: "Luz Stop de Cabina Ford Lobo F-150",
    category: "Iluminación",
    price: 350,
    extraPriceText: "",
    image: "images/producto7.jpg",
    shortDescription: "Luz stop de cabina para Ford Lobo y F-150.",
    description: "Luz stop de cabina para Ford Lobo F-150 modelos 2004 a 2008. Ideal para reemplazo con buena visibilidad y ajuste.",
    measures: "Medidas no especificadas",
    compatibility: "Ford Lobo F-150 2004 a 2008",
    stock: 4,
    rating: 4.6,
    reviews: [
      { name: "Mario", stars: 5, comment: "Muy buena calidad." },
      { name: "Elena", stars: 4, comment: "Quedó muy bien instalada." }
    ]
  },
  {
    id: 8,
    name: "Tapa de Bolsa de Aire de Tablero",
    category: "Interior",
    price: 600,
    extraPriceText: "",
    image: "images/producto8.jpg",
    shortDescription: "Tapa de bolsa de aire para tablero de Polo y Vento.",
    description: "Tapa de bolsa de aire de tablero completamente nueva para Polo y Vento de todos los años.",
    measures: "Medidas no especificadas",
    compatibility: "Polo y Vento, todos los años",
    stock: 3,
    rating: 4.7,
    reviews: [
      { name: "Raúl", stars: 5, comment: "Muy bien terminada." },
      { name: "Patricia", stars: 4, comment: "Buena pieza de reemplazo." }
    ]
  },
  {
    id: 9,
    name: "Calavera Aveo 2018 a 2023",
    category: "Iluminación",
    price: 650,
    extraPriceText: "Disponible izquierda o derecha con arnés",
    image: "images/producto9.jpg",
    shortDescription: "Calavera para Aveo con arnés.",
    description: "Calavera compatible con Aveo 2018 a 2023, disponible lado izquierdo o derecho con arnés incluido.",
    measures: "Medidas no especificadas",
    compatibility: "Aveo 2018 a 2023",
    stock: 6,
    rating: 4.8,
    reviews: [
      { name: "Héctor", stars: 5, comment: "Excelente calidad." },
      { name: "Brenda", stars: 4, comment: "Muy buen ajuste." }
    ]
  },
  {
    id: 10,
    name: "Carcasa de Llave 3 Botones Volkswagen",
    category: "Accesorios",
    price: 150,
    extraPriceText: "",
    image: "images/producto10.jpg",
    shortDescription: "Carcasa de llave de coche de 3 botones para Volkswagen.",
    description: "Carcasa de llave de coche fabricada en ABS + metal. Nueva y lista para reemplazar la carcasa original dañada.",
    measures: "Medidas no especificadas",
    compatibility: "Tiguan, Touran, Golf, Beetle, Polo, Jetta, Caddy, Eos",
    stock: 12,
    rating: 4.5,
    reviews: [
      { name: "Arturo", stars: 5, comment: "Justo lo que necesitaba." },
      { name: "Daniela", stars: 4, comment: "Buen material." }
    ]
  },
  {
    id: 11,
    name: "Carcasa de Llave 4 Botones Volkswagen",
    category: "Accesorios",
    price: 150,
    extraPriceText: "",
    image: "images/producto11.jpg",
    shortDescription: "Carcasa de llave de coche de 4 botones para Volkswagen.",
    description: "Carcasa de llave de coche fabricada en ABS + metal. Nueva, resistente y perfecta para reemplazo.",
    measures: "Medidas no especificadas",
    compatibility: "Tiguan, Touran, Golf, Beetle, Polo, Jetta, Caddy, Eos",
    stock: 12,
    rating: 4.5,
    reviews: [
      { name: "José", stars: 5, comment: "Buena compra." },
      { name: "Mariana", stars: 4, comment: "Se siente resistente." }
    ]
  },
  {
    id: 12,
    name: "Carcasa Para Llave Control Remoto Kia 2 Botones",
    category: "Accesorios",
    price: 190,
    extraPriceText: "",
    image: "images/producto12.jpg",
    shortDescription: "Carcasa para llave o control remoto Kia de 2 botones.",
    description: "Carcasa de llave de coche fabricada en ABS + metal, nueva y sin uso. Ideal para reemplazar la carcasa original.",
    measures: "Medidas no especificadas",
    compatibility: "Kia 2 botones",
    stock: 10,
    rating: 4.4,
    reviews: [
      { name: "Gloria", stars: 4, comment: "Buena opción de reemplazo." },
      { name: "Iván", stars: 5, comment: "Llegó en buen estado." }
    ]
  },
  {
    id: 13,
    name: "Carcasa Para Llave Control Remoto Kia 3 Botones",
    category: "Accesorios",
    price: 200,
    extraPriceText: "",
    image: "images/producto13.jpg",
    shortDescription: "Carcasa para llave o control remoto Kia de 3 botones.",
    description: "Carcasa de llave nueva y lista para reemplazo. Fabricada con ABS + metal para mayor durabilidad.",
    measures: "Medidas no especificadas",
    compatibility: "Kia 3 botones",
    stock: 10,
    rating: 4.5,
    reviews: [
      { name: "Nadia", stars: 4, comment: "Buena calidad." },
      { name: "Ulises", stars: 5, comment: "Se ajustó perfecto." }
    ]
  },
  {
    id: 14,
    name: "Carcasa para Buick Chevrolet Opel 3 Botones",
    category: "Accesorios",
    price: 190,
    extraPriceText: "",
    image: "images/producto14.jpg",
    shortDescription: "Carcasa de llave 3 botones compatible con varios modelos.",
    description: "Carcasa para llave de coche fabricada en ABS + metal. Nueva, sin uso y lista para reemplazo de carcasa original.",
    measures: "Medidas no especificadas",
    compatibility: "Insignia, Astra, Mokka, Zafira, Cruze, Epica, Lova, Camaro, Impala, Vauxhall",
    stock: 9,
    rating: 4.4,
    reviews: [
      { name: "Emilio", stars: 5, comment: "Muy útil para reemplazo." },
      { name: "Claudia", stars: 4, comment: "Buen material." }
    ]
  },
  {
    id: 15,
    name: "Cuarto Ford Lobo / F150",
    category: "Iluminación",
    price: 250,
    extraPriceText: "Pieza individual",
    image: "images/producto15.jpg",
    shortDescription: "Cuarto para Ford Lobo y F150.",
    description: "Cuarto compatible con Ford Lobo 1997 a 2003 y F150 1997 a 2009. Disponible izquierdo o derecho.",
    measures: "Medidas no especificadas",
    compatibility: "Ford Lobo 1997 a 2003 / F150 1997 a 2009",
    stock: 7,
    rating: 4.5,
    reviews: [
      { name: "Tomás", stars: 5, comment: "Buen ajuste." },
      { name: "Rosa", stars: 4, comment: "Se ve bien instalado." }
    ]
  },
  {
    id: 16,
    name: "Calavera Vento Nacional 2016 a 2019",
    category: "Iluminación",
    price: 530,
    extraPriceText: "Pieza individual",
    image: "images/producto16.jpg",
    shortDescription: "Calavera nacional para Vento.",
    description: "Calavera compatible con Vento 2016 a 2019, ideal para reemplazo con buen acabado y ajuste.",
    measures: "Medidas no especificadas",
    compatibility: "Vento 2016 a 2019",
    stock: 5,
    rating: 4.6,
    reviews: [
      { name: "Gerardo", stars: 5, comment: "Muy buena pieza." },
      { name: "Paola", stars: 4, comment: "Buena calidad y presentación." }
    ]
  },
  {
    id: 17,
    name: "Espadillas Mazda Negras o Tipo Fibra de Carbono",
    category: "Exterior",
    price: 340,
    extraPriceText: "",
    image: "images/producto17.jpg",
    shortDescription: "Par de espadillas Mazda en color negro o tipo fibra de carbono.",
    description: "Par de espadillas de metal para Mazda con acabado negro o tipo fibra de carbono. Ideales para mejorar la apariencia exterior.",
    measures: "Medidas no especificadas",
    compatibility: "Mazda",
    stock: 6,
    rating: 4.7,
    reviews: [
      { name: "Kevin", stars: 5, comment: "Se ven deportivas." },
      { name: "Andrea", stars: 4, comment: "Buen acabado." }
    ]
  },
  {
    id: 18,
    name: "Parrilla Negra con Moldura",
    category: "Exterior",
    price: 920,
    extraPriceText: "Pieza individual",
    image: "images/producto18.jpg",
    shortDescription: "Parrilla negra con moldura para Vento y Polo.",
    description: "Parrilla negra con moldura compatible con Vento 2020 a 2024 y Polo 2013 a 2024. Excelente para renovar el frente del vehículo.",
    measures: "Medidas no especificadas",
    compatibility: "Vento 2020 a 2024 / Polo 2013 a 2024",
    stock: 4,
    rating: 4.8,
    reviews: [
      { name: "Samuel", stars: 5, comment: "Muy elegante y moderna." },
      { name: "Liliana", stars: 4, comment: "Buena compra." }
    ]
  },
  {
    id: 19,
    name: "Par Calaveras Tsuru 3 Rojo Cristal",
    category: "Iluminación",
    price: 500,
    extraPriceText: "Pieza: $250",
    image: "images/producto19.jpg",
    shortDescription: "Par de calaveras rojo cristal para Tsuru 3.",
    description: "Par de calaveras para Tsuru 3 en acabado rojo cristal, compatibles con modelos 1992 a 2017.",
    measures: "Medidas no especificadas",
    compatibility: "Tsuru 3 1992 a 2017",
    stock: 5,
    rating: 4.7,
    reviews: [
      { name: "Noé", stars: 5, comment: "Muy bonitas." },
      { name: "Diana", stars: 4, comment: "Buen producto." }
    ]
  },
  {
    id: 20,
    name: "Parrilla Jetta A4 Tipo GLI con Emblema Rojo",
    category: "Exterior",
    price: 1000,
    extraPriceText: "Filo cromo o filo rojo",
    image: "images/producto20.jpg",
    shortDescription: "Parrilla tipo GLI para Jetta A4.",
    description: "Parrilla tipo GLI con emblema rojo para Jetta A4, compatible con modelos 1999 a 2007. Disponible con filo cromo o filo rojo.",
    measures: "Medidas no especificadas",
    compatibility: "Jetta A4 1999 a 2007",
    stock: 3,
    rating: 4.9,
    reviews: [
      { name: "Óscar", stars: 5, comment: "Le dio otro estilo al carro." },
      { name: "Karen", stars: 5, comment: "Excelente calidad." }
    ]
  },
  {
    id: 21,
    name: "Par Calavera Nissan Urvan",
    category: "Iluminación",
    price: 430,
    extraPriceText: "Pieza: $250",
    image: "images/producto21.jpg",
    shortDescription: "Par de calaveras para Nissan Urvan.",
    description: "Par de calaveras para Nissan Urvan, compatibles con varios años. Excelente opción de reemplazo.",
    measures: "Medidas no especificadas",
    compatibility: "Nissan Urvan 2002, 2004, 2005, 2007, 2008, 2010, 2012",
    stock: 4,
    rating: 4.6,
    reviews: [
      { name: "César", stars: 5, comment: "Muy buen ajuste." },
      { name: "Marisol", stars: 4, comment: "Todo bien con el producto." }
    ]
  }
];
