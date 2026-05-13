const PRODUCTS = [
  {
    id: 1,
    name: "Par Cuartos Reflejantes Traseros CV Beat",
    category: "Iluminación",
    price: 380,
    extraPriceText: "Pieza: $200",
    image: "images/cuartos-reflejantes-beat.jpg",
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
    image: "images/calaveras-vocho-led.jpg",
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
    image: "images/perilla-dsg.jpg",
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
    image: "images/coderas-vocho.jpg",
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
    name: "Par Cuartos de Salpicadera VW",
    category: "Iluminación",
    price: 140,
    extraPriceText: "",
    image: "images/cuartos-salpicadera-vw.jpg",
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
    name: "Cuarto Kia Rio LED Secuencial Mica Blanca",
    category: "Iluminación",
    price: 280,
    extraPriceText: "",
    image: "images/cuarto-kia-rio-led.jpg",
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
    image: "images/luz-stop-ford-lobo.jpg",
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
    name: "Tapa de Bolsa de Aire Tablero Polo Vento",
    category: "Interior",
    price: 600,
    extraPriceText: "",
    image: "images/tapa-airbag-polo-vento.jpg",
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
    name: "Calavera Aveo 2018 a 2023 con Arnés",
    category: "Iluminación",
    price: 650,
    extraPriceText: "Disponible izquierda o derecha con arnés",
    image: "images/calavera-aveo-2018-2023.jpg",
    shortDescription: "Calavera para Aveo con arnés incluido.",
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
    image: "images/llave-vw-3-botones.jpg",
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
    image: "images/llave-vw-4-botones.jpg",
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
    name: "Carcasa Llave Control Kia 2 Botones",
    category: "Accesorios",
    price: 190,
    extraPriceText: "",
    image: "images/llave-kia-2-botones.jpg",
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
    name: "Carcasa Llave Control Kia 3 Botones",
    category: "Accesorios",
    price: 200,
    extraPriceText: "",
    image: "images/llave-kia-3-botones.jpg",
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
    name: "Carcasa Llave Buick Chevrolet Opel 3 Botones",
    category: "Accesorios",
    price: 190,
    extraPriceText: "",
    image: "images/llave-opel-chevrolet-3-botones.jpg",
    shortDescription: "Carcasa de llave 3 botones compatible con varios modelos.",
    description: "Carcasa para llave de coche fabricada en ABS + metal. Nueva, sin uso y lista para reemplazo de carcasa original.",
    measures: "Medidas no especificadas",
    compatibility: "Insignia, Astra, Mokka, Zafira, Cruze, Epica, Camaro, Impala",
    stock: 9,
    rating: 4.4,
    reviews: [
      { name: "Emilio", stars: 5, comment: "Muy útil para reemplazo." },
      { name: "Claudia", stars: 4, comment: "Buen material." }
    ]
  },
  {
    id: 15,
    name: "Cuarto Ford Lobo / F150 1997-2009",
    category: "Iluminación",
    price: 250,
    extraPriceText: "Pieza individual",
    image: "images/cuarto-ford-lobo-f150.jpg",
    shortDescription: "Cuarto para Ford Lobo y F150 modelos 1997 a 2009.",
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
    image: "images/calavera-vento-2016-2019.jpg",
    shortDescription: "Calavera nacional para Vento 2016 a 2019.",
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
    name: "Espadillas Mazda Negro o Fibra de Carbono",
    category: "Exterior",
    price: 340,
    extraPriceText: "",
    image: "images/espadillas-mazda.jpg",
    shortDescription: "Par de espadillas Mazda en negro o tipo fibra de carbono.",
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
    name: "Parrilla Negra con Moldura Vento Polo",
    category: "Exterior",
    price: 920,
    extraPriceText: "Pieza individual",
    image: "images/parrilla-vento-polo.jpg",
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
    image: "images/calaveras-tsuru-3.jpg",
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
    name: "Parrilla Jetta A4 Tipo GLI Emblema Rojo",
    category: "Exterior",
    price: 1000,
    extraPriceText: "Filo cromo o filo rojo",
    image: "images/parrilla-jetta-a4-gli.jpg",
    shortDescription: "Parrilla tipo GLI con emblema rojo para Jetta A4.",
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
    image: "images/calavera-nissan-urvan.jpg",
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
  },
  {
    id: 22,
    name: "Faro Delantero Jetta A6 2012-2018",
    category: "Iluminación",
    price: 1850,
    extraPriceText: "Pieza individual izquierdo o derecho",
    image: "https://http2.mlstatic.com/D_NQ_NP_773901-MLM47434811156_092021-O.webp",
    shortDescription: "Faro delantero de reemplazo para Jetta A6.",
    description: "Faro delantero compatible con Jetta A6 modelos 2012 a 2018. Instalación directa sin modificaciones.",
    measures: "Medidas no especificadas",
    compatibility: "Volkswagen Jetta A6 2012 a 2018",
    stock: 5,
    rating: 4.7,
    reviews: [
      { name: "Roberto", stars: 5, comment: "Perfecto ajuste, muy buena calidad." },
      { name: "Verónica", stars: 4, comment: "Llegó bien empacado y funciona perfecto." }
    ]
  },
  {
    id: 23,
    name: "Neblinero Nissan Sentra 2016-2020",
    category: "Iluminación",
    price: 420,
    extraPriceText: "Pieza individual",
    image: "https://http2.mlstatic.com/D_NQ_NP_714901-MLM47434811156_092021-O.webp",
    shortDescription: "Neblinero delantero para Nissan Sentra.",
    description: "Neblinero delantero de reemplazo para Nissan Sentra 2016 a 2020. Fácil instalación y buen acabado.",
    measures: "Medidas no especificadas",
    compatibility: "Nissan Sentra 2016 a 2020",
    stock: 8,
    rating: 4.5,
    reviews: [
      { name: "Felipe", stars: 5, comment: "Excelente producto." },
      { name: "Mónica", stars: 4, comment: "Buen precio y calidad." }
    ]
  },
  {
    id: 24,
    name: "Espejo Retrovisor Chevrolet Aveo 2009-2017",
    category: "Exterior",
    price: 580,
    extraPriceText: "Izquierdo o derecho",
    image: "https://placehold.co/600x400/1e293b/f59e0b?text=Espejo+Retrovisor+Aveo",
    shortDescription: "Espejo retrovisor lateral para Chevrolet Aveo.",
    description: "Espejo retrovisor lateral de reemplazo para Chevrolet Aveo 2009 a 2017. Compatible con ajuste manual.",
    measures: "Medidas no especificadas",
    compatibility: "Chevrolet Aveo 2009 a 2017",
    stock: 9,
    rating: 4.6,
    reviews: [
      { name: "Rodrigo", stars: 5, comment: "Muy buen producto." },
      { name: "Adriana", stars: 4, comment: "Encajó perfecto." }
    ]
  },
  {
    id: 25,
    name: "Manija Exterior Puerta Tsuru 1992-2017",
    category: "Exterior",
    price: 180,
    extraPriceText: "Delantera o trasera",
    image: "https://placehold.co/600x400/1e293b/f59e0b?text=Manija+Tsuru",
    shortDescription: "Manija exterior de puerta para Tsuru.",
    description: "Manija exterior de puerta compatible con Nissan Tsuru 1992 a 2017. Disponible delantera o trasera.",
    measures: "Medidas no especificadas",
    compatibility: "Nissan Tsuru 1992 a 2017",
    stock: 15,
    rating: 4.4,
    reviews: [
      { name: "Ernesto", stars: 4, comment: "Buen producto económico." },
      { name: "Lucía", stars: 5, comment: "Llegó en perfecto estado." }
    ]
  },
  {
    id: 26,
    name: "Amortiguador Delantero Seat Ibiza 2009-2016",
    category: "Suspensión",
    price: 980,
    extraPriceText: "Pieza individual",
    image: "https://placehold.co/600x400/0f172a/ea580c?text=Amortiguador+Ibiza",
    shortDescription: "Amortiguador delantero para Seat Ibiza.",
    description: "Amortiguador delantero de gas para Seat Ibiza 2009 a 2016. Mayor estabilidad y confort en manejo.",
    measures: "Medidas no especificadas",
    compatibility: "Seat Ibiza 2009 a 2016",
    stock: 6,
    rating: 4.7,
    reviews: [
      { name: "Andrés", stars: 5, comment: "Excelente amortiguador, muy suave." },
      { name: "Gabriela", stars: 4, comment: "Buena calidad por el precio." }
    ]
  },
  {
    id: 27,
    name: "Balatas Traseras Toyota Corolla 2015-2022",
    category: "Frenos",
    price: 650,
    extraPriceText: "Juego de 4 piezas",
    image: "https://placehold.co/600x400/0f172a/ea580c?text=Balatas+Corolla",
    shortDescription: "Balatas traseras para Toyota Corolla.",
    description: "Juego de balatas traseras para Toyota Corolla 2015 a 2022. Material semimetálico de alto rendimiento.",
    measures: "Medidas no especificadas",
    compatibility: "Toyota Corolla 2015 a 2022",
    stock: 11,
    rating: 4.8,
    reviews: [
      { name: "Alejandro", stars: 5, comment: "Muy buenas balatas, frenan muy bien." },
      { name: "Carmen", stars: 4, comment: "Buen producto." }
    ]
  },
  {
    id: 28,
    name: "Disco de Freno Delantero Nissan Versa 2012-2019",
    category: "Frenos",
    price: 750,
    extraPriceText: "Pieza individual",
    image: "https://placehold.co/600x400/0f172a/ea580c?text=Disco+Freno+Versa",
    shortDescription: "Disco de freno delantero para Nissan Versa.",
    description: "Disco de freno delantero ventilado para Nissan Versa 2012 a 2019. Reduce la distancia de frenado.",
    measures: "Diámetro: 258mm",
    compatibility: "Nissan Versa 2012 a 2019",
    stock: 7,
    rating: 4.6,
    reviews: [
      { name: "Hugo", stars: 5, comment: "Muy buen disco, fácil instalación." },
      { name: "Isabel", stars: 4, comment: "Buena calidad." }
    ]
  },
  {
    id: 29,
    name: "Filtro de Aceite Volkswagen Jetta 2.0",
    category: "Motor",
    price: 120,
    extraPriceText: "",
    image: "https://placehold.co/600x400/334155/f59e0b?text=Filtro+Aceite+Jetta",
    shortDescription: "Filtro de aceite para Volkswagen Jetta 2.0.",
    description: "Filtro de aceite de alta calidad compatible con Volkswagen Jetta 2.0. Recomendado cambiar cada 5,000 km.",
    measures: "Medidas no especificadas",
    compatibility: "Volkswagen Jetta 2.0 todos los años",
    stock: 20,
    rating: 4.5,
    reviews: [
      { name: "Manuel", stars: 5, comment: "Muy buen filtro, original de calidad." },
      { name: "Silvia", stars: 4, comment: "Fácil instalación." }
    ]
  },
  {
    id: 30,
    name: "Filtro de Aire Chevrolet Spark 2010-2020",
    category: "Motor",
    price: 95,
    extraPriceText: "",
    image: "https://placehold.co/600x400/334155/f59e0b?text=Filtro+Aire+Spark",
    shortDescription: "Filtro de aire para Chevrolet Spark.",
    description: "Filtro de aire de reemplazo para Chevrolet Spark 2010 a 2020. Mejora el rendimiento del motor.",
    measures: "Medidas no especificadas",
    compatibility: "Chevrolet Spark 2010 a 2020",
    stock: 18,
    rating: 4.4,
    reviews: [
      { name: "Francisco", stars: 4, comment: "Buen filtro a buen precio." },
      { name: "Teresa", stars: 5, comment: "Muy recomendado." }
    ]
  },
  {
    id: 31,
    name: "Bujías NGK Nissan Tsuru 1.6",
    category: "Motor",
    price: 280,
    extraPriceText: "Juego de 4 piezas",
    image: "https://placehold.co/600x400/334155/f59e0b?text=Bujias+NGK+Tsuru",
    shortDescription: "Juego de bujías NGK para Nissan Tsuru 1.6.",
    description: "Juego de 4 bujías NGK de iridio para Nissan Tsuru 1.6. Mayor eficiencia de combustión y rendimiento.",
    measures: "Medidas no especificadas",
    compatibility: "Nissan Tsuru 1.6 todos los años",
    stock: 14,
    rating: 4.8,
    reviews: [
      { name: "Víctor", stars: 5, comment: "Excelentes bujías, el carro jala mejor." },
      { name: "Alicia", stars: 4, comment: "Buen producto." }
    ]
  },
  {
    id: 32,
    name: "Termostato Motor Toyota Camry 2007-2014",
    category: "Motor",
    price: 320,
    extraPriceText: "",
    image: "https://placehold.co/600x400/334155/f59e0b?text=Termostato+Camry",
    shortDescription: "Termostato de motor para Toyota Camry.",
    description: "Termostato de motor para Toyota Camry 2007 a 2014. Regula la temperatura del motor eficientemente.",
    measures: "Medidas no especificadas",
    compatibility: "Toyota Camry 2007 a 2014",
    stock: 8,
    rating: 4.6,
    reviews: [
      { name: "Benjamín", stars: 5, comment: "Solucionó el problema de temperatura." },
      { name: "Natalia", stars: 4, comment: "Buen producto de reemplazo." }
    ]
  },
  {
    id: 33,
    name: "Bomba de Agua Seat León 1.8T",
    category: "Motor",
    price: 780,
    extraPriceText: "",
    image: "https://placehold.co/600x400/334155/f59e0b?text=Bomba+Agua+Leon",
    shortDescription: "Bomba de agua para Seat León 1.8T.",
    description: "Bomba de agua de reemplazo para Seat León 1.8T. Mantiene la temperatura ideal del motor.",
    measures: "Medidas no especificadas",
    compatibility: "Seat León 1.8T 2000 a 2006",
    stock: 5,
    rating: 4.7,
    reviews: [
      { name: "Sergio", stars: 5, comment: "Muy buena calidad." },
      { name: "Lorena", stars: 4, comment: "Funciona perfecto." }
    ]
  },
  {
    id: 34,
    name: "Sensor de Oxígeno Chevrolet Malibu 2013-2018",
    category: "Motor",
    price: 650,
    extraPriceText: "",
    image: "https://placehold.co/600x400/334155/f59e0b?text=Sensor+Oxigeno+Malibu",
    shortDescription: "Sensor de oxígeno para Chevrolet Malibu.",
    description: "Sensor de oxígeno universal compatible con Chevrolet Malibu 2013 a 2018. Mejora el consumo de combustible.",
    measures: "Medidas no especificadas",
    compatibility: "Chevrolet Malibu 2013 a 2018",
    stock: 6,
    rating: 4.5,
    reviews: [
      { name: "Rubén", stars: 5, comment: "Quitó la luz de check engine." },
      { name: "Esperanza", stars: 4, comment: "Buen sensor." }
    ]
  },
  {
    id: 35,
    name: "Tapetes Hule Universal 4 Piezas",
    category: "Interior",
    price: 350,
    extraPriceText: "Juego de 4 piezas",
    image: "https://placehold.co/600x400/1e3a5f/ffffff?text=Tapetes+Hule+Universal",
    shortDescription: "Juego de tapetes de hule universales.",
    description: "Tapetes de hule universal para 4 piezas. Protegen la alfombra del vehículo de suciedad y humedad.",
    measures: "60x45cm delanteros, 50x35cm traseros",
    compatibility: "Universal para la mayoría de vehículos",
    stock: 25,
    rating: 4.5,
    reviews: [
      { name: "Guillermo", stars: 5, comment: "Muy buenos tapetes, resistentes." },
      { name: "Pilar", stars: 4, comment: "Buena calidad por el precio." }
    ]
  },
  {
    id: 36,
    name: "Volante Deportivo 350mm Negro Cuero",
    category: "Interior",
    price: 1200,
    extraPriceText: "",
    image: "https://placehold.co/600x400/1e3a5f/ffffff?text=Volante+Deportivo+350mm",
    shortDescription: "Volante deportivo de cuero de 350mm.",
    description: "Volante deportivo de 350mm forrado en cuero genuino. Incluye cuerno central y adaptador universal.",
    measures: "Diámetro: 350mm",
    compatibility: "Universal con adaptador",
    stock: 7,
    rating: 4.7,
    reviews: [
      { name: "Julio", stars: 5, comment: "Se ve muy deportivo, excelente calidad." },
      { name: "Yolanda", stars: 4, comment: "Muy cómodo para manejar." }
    ]
  },
  {
    id: 37,
    name: "Funda para Asientos Neopreno Sedan",
    category: "Interior",
    price: 890,
    extraPriceText: "Juego completo delantero y trasero",
    image: "https://placehold.co/600x400/1e3a5f/ffffff?text=Fundas+Asientos+Neopreno",
    shortDescription: "Fundas para asientos en neopreno para sedán.",
    description: "Fundas para asientos en neopreno impermeable para vehículos tipo sedán. Protegen los asientos originales.",
    measures: "Medidas no especificadas",
    compatibility: "Sedanes en general",
    stock: 10,
    rating: 4.6,
    reviews: [
      { name: "Enrique", stars: 5, comment: "Muy buenas fundas, fácil instalación." },
      { name: "Claudia", stars: 4, comment: "Bonitas y resistentes." }
    ]
  },
  {
    id: 38,
    name: "Espejo Retrovisor Interior Universal",
    category: "Interior",
    price: 160,
    extraPriceText: "",
    image: "https://placehold.co/600x400/1e3a5f/ffffff?text=Espejo+Retrovisor+Interior",
    shortDescription: "Espejo retrovisor interior universal con pegamento.",
    description: "Espejo retrovisor interior universal con adhesivo de instalación. Reemplaza el espejo roto fácilmente.",
    measures: "25x8cm",
    compatibility: "Universal para la mayoría de vehículos",
    stock: 20,
    rating: 4.3,
    reviews: [
      { name: "Alfonso", stars: 4, comment: "Fácil de instalar y buena visibilidad." },
      { name: "Rosa", stars: 5, comment: "Muy buen espejo." }
    ]
  },
  {
    id: 39,
    name: "Deflectores de Lluvia Nissan Versa 2015-2022",
    category: "Exterior",
    price: 480,
    extraPriceText: "Juego de 4 piezas",
    image: "https://placehold.co/600x400/1e293b/f59e0b?text=Deflectores+Versa",
    shortDescription: "Deflectores de lluvia para ventanas Nissan Versa.",
    description: "Juego de 4 deflectores de lluvia para ventanas del Nissan Versa 2015 a 2022. Instalación sin taladro.",
    measures: "Medidas no especificadas",
    compatibility: "Nissan Versa 2015 a 2022",
    stock: 9,
    rating: 4.6,
    reviews: [
      { name: "Ignacio", stars: 5, comment: "Perfectos, instalación sencilla." },
      { name: "Rebeca", stars: 4, comment: "Muy buen producto." }
    ]
  },
  {
    id: 40,
    name: "Antena de Radio Universal Corta",
    category: "Exterior",
    price: 95,
    extraPriceText: "",
    image: "https://placehold.co/600x400/1e293b/f59e0b?text=Antena+Corta+Universal",
    shortDescription: "Antena de radio universal tipo corta estilo deportivo.",
    description: "Antena de radio universal tipo corta con rosca universal. Estilo deportivo y resistente al agua.",
    measures: "Longitud: 10cm",
    compatibility: "Universal con rosca estándar",
    stock: 30,
    rating: 4.2,
    reviews: [
      { name: "Oswaldo", stars: 4, comment: "Buena señal y se ve bien." },
      { name: "Cristina", stars: 5, comment: "Excelente para sustituir la original." }
    ]
  },
  {
    id: 41,
    name: "Portaplacas con Tornillos Acero Inox",
    category: "Accesorios",
    price: 85,
    extraPriceText: "Incluye tornillos",
    image: "https://placehold.co/600x400/0a1628/f59e0b?text=Portaplacas+Acero+Inox",
    shortDescription: "Portaplacas de acero inoxidable con tornillos incluidos.",
    description: "Portaplacas de acero inoxidable resistente a la corrosión. Incluye tornillos y tapones de plástico.",
    measures: "Estándar México",
    compatibility: "Universal",
    stock: 40,
    rating: 4.5,
    reviews: [
      { name: "Esteban", stars: 5, comment: "Muy resistente y bien terminado." },
      { name: "Josefina", stars: 4, comment: "Buen precio y calidad." }
    ]
  },
  {
    id: 42,
    name: "Cubierta para Volante Cuero Sintético",
    category: "Interior",
    price: 180,
    extraPriceText: "",
    image: "https://placehold.co/600x400/1e3a5f/ffffff?text=Cubierta+Volante+Cuero",
    shortDescription: "Cubierta para volante de cuero sintético antideslizante.",
    description: "Cubierta para volante de cuero sintético antideslizante. Fácil instalación y mejor agarre al manejar.",
    measures: "Diámetro: 37-38cm",
    compatibility: "Universal diámetro 37-38cm",
    stock: 22,
    rating: 4.4,
    reviews: [
      { name: "Patricio", stars: 4, comment: "Muy cómoda y fácil de poner." },
      { name: "Norma", stars: 5, comment: "Le da un look muy bonito al volante." }
    ]
  },
  {
    id: 43,
    name: "Cable de Acelerador Tsuru 1992-2017",
    category: "Motor",
    price: 220,
    extraPriceText: "",
    image: "https://placehold.co/600x400/334155/f59e0b?text=Cable+Acelerador+Tsuru",
    shortDescription: "Cable de acelerador para Nissan Tsuru.",
    description: "Cable de acelerador de reemplazo para Nissan Tsuru 1992 a 2017. Respuesta suave y precisa.",
    measures: "Longitud: 1.20m",
    compatibility: "Nissan Tsuru 1992 a 2017",
    stock: 12,
    rating: 4.5,
    reviews: [
      { name: "Aurelio", stars: 5, comment: "Perfecto reemplazo, igual al original." },
      { name: "Consuelo", stars: 4, comment: "Buen producto." }
    ]
  },
  {
    id: 44,
    name: "Tapa de Gasolina con Seguro Universal",
    category: "Exterior",
    price: 130,
    extraPriceText: "",
    image: "https://placehold.co/600x400/1e293b/f59e0b?text=Tapa+Gasolina+Seguro",
    shortDescription: "Tapa de gasolina con seguro universal.",
    description: "Tapa de gasolina con llave y seguro. Previene el robo de combustible. Rosca universal.",
    measures: "Rosca: estándar",
    compatibility: "Universal rosca estándar",
    stock: 16,
    rating: 4.3,
    reviews: [
      { name: "Leopoldo", stars: 4, comment: "Muy buena opción de seguridad." },
      { name: "Graciela", stars: 5, comment: "Funciona perfecto." }
    ]
  },
  {
    id: 45,
    name: "Limpiabrisas 24 Pulgadas Universal",
    category: "Exterior",
    price: 120,
    extraPriceText: "Pieza individual",
    image: "https://placehold.co/600x400/1e293b/f59e0b?text=Limpiabrisas+24+Pulgadas",
    shortDescription: "Limpiabrisas de 24 pulgadas tipo plana universal.",
    description: "Limpiabrisas de 24 pulgadas tipo plana con adaptadores universales. Mayor área de limpieza.",
    measures: "24 pulgadas / 60cm",
    compatibility: "Universal con adaptadores incluidos",
    stock: 28,
    rating: 4.4,
    reviews: [
      { name: "Ezequiel", stars: 4, comment: "Muy buen limpiabrisas, limpia perfecto." },
      { name: "Amparo", stars: 5, comment: "Excelente calidad." }
    ]
  },
  {
    id: 46,
    name: "Bocina 6x9 Pulgadas 300W Par",
    category: "Accesorios",
    price: 680,
    extraPriceText: "Par de bocinas",
    image: "https://placehold.co/600x400/0a1628/f59e0b?text=Bocinas+6x9+300W",
    shortDescription: "Par de bocinas 6x9 pulgadas 300W para coche.",
    description: "Par de bocinas coaxiales 6x9 pulgadas 300W máx. Sonido potente y claro para el interior del vehículo.",
    measures: "6x9 pulgadas",
    compatibility: "Universal para espacios 6x9",
    stock: 13,
    rating: 4.6,
    reviews: [
      { name: "Maximiliano", stars: 5, comment: "Sonido excelente para su precio." },
      { name: "Dolores", stars: 4, comment: "Muy buenas bocinas." }
    ]
  },
  {
    id: 47,
    name: "Radio Bluetooth USB MP3 1 DIN",
    category: "Accesorios",
    price: 950,
    extraPriceText: "",
    image: "https://placehold.co/600x400/0a1628/f59e0b?text=Radio+Bluetooth+1DIN",
    shortDescription: "Radio para coche con Bluetooth, USB y MP3.",
    description: "Radio para coche 1 DIN con Bluetooth, entrada USB, lector MP3 y control remoto. Fácil instalación.",
    measures: "1 DIN estándar",
    compatibility: "Universal 1 DIN",
    stock: 8,
    rating: 4.7,
    reviews: [
      { name: "Florencio", stars: 5, comment: "Excelente radio, muy fácil de usar." },
      { name: "Margarita", stars: 4, comment: "Muy buen sonido y fácil de instalar." }
    ]
  },
  {
    id: 48,
    name: "Cámara de Reversa Visión Nocturna",
    category: "Accesorios",
    price: 450,
    extraPriceText: "",
    image: "https://placehold.co/600x400/0a1628/f59e0b?text=Camara+Reversa+170+Grados",
    shortDescription: "Cámara de reversa con visión nocturna universal.",
    description: "Cámara de reversa con visión nocturna, ángulo de 170°. Compatible con la mayoría de radios con entrada de video.",
    measures: "Medidas no especificadas",
    compatibility: "Universal con entrada de video RCA",
    stock: 17,
    rating: 4.6,
    reviews: [
      { name: "Celestino", stars: 5, comment: "Muy buena imagen, incluso de noche." },
      { name: "Susana", stars: 4, comment: "Fácil instalación y buena calidad." }
    ]
  },
  {
    id: 49,
    name: "Alarma para Coche con Control Remoto",
    category: "Accesorios",
    price: 750,
    extraPriceText: "Incluye 2 controles",
    image: "https://placehold.co/600x400/0a1628/f59e0b?text=Alarma+2+Controles+120dB",
    shortDescription: "Sistema de alarma para coche con 2 controles remotos.",
    description: "Sistema de alarma para coche con 2 controles remotos, sensor de impacto y sirena de 120dB.",
    measures: "Medidas no especificadas",
    compatibility: "Universal 12V",
    stock: 10,
    rating: 4.7,
    reviews: [
      { name: "Teodoro", stars: 5, comment: "Muy buena alarma, fácil programación." },
      { name: "Concepción", stars: 4, comment: "Funciona muy bien." }
    ]
  },
  {
    id: 50,
    name: "Kit Luces LED Interior Domo 12V",
    category: "Iluminación",
    price: 95,
    extraPriceText: "Juego de 6 piezas",
    image: "https://placehold.co/600x400/0b1533/f59e0b?text=Kit+LED+Interior+6+Piezas",
    shortDescription: "Kit de luces LED para interior del coche 12V.",
    description: "Kit de 6 luces LED para el interior del vehículo. Incluye tiras para piso, techo y puertas. Conexión 12V.",
    measures: "Tiras de 30cm",
    compatibility: "Universal 12V",
    stock: 24,
    rating: 4.5,
    reviews: [
      { name: "Saturnino", stars: 5, comment: "Se ve increíble de noche." },
      { name: "Remedios", stars: 4, comment: "Muy fáciles de instalar." }
    ]
  }
];
