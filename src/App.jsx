import { useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// 📌  PERSONALIZACIÓN
//   youtubeId  → ID del vídeo YouTube (parte tras "?v=")
//   meals[].recipe → ingredientes y pasos de cada comida
//   USERS → credenciales
// ─────────────────────────────────────────────────────────────────────────────

const USERS = [
  { username: "marsaints", password: "detox2024", name: "Mar Saints" },
  { username: "admin",     password: "admin123",  name: "Administrador" },
];

const protocol = [
  {
    day:1, emoji:"🍋",
    title:"Preparación & Ayuno Suave",
    subtitle:"Empezamos con calma. Hoy le damos un descanso a tu cuerpo.",
    color:"#5c7a5c", colorLight:"#e8f0e8",
    youtubeId:"dQw4w9WgXcQ",
    videoTitle:"Guía Día 1 – Preparación & Ayuno Suave",
    meals:[
      { name:"Al despertar", desc:"Agua tibia con limón",
        photo:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80",
        ingredients:["2 vasos de agua","Zumo de 1 limón","1 pizca de sal rosa del Himalaya"],
        steps:["Calienta el agua hasta que esté tibia (no hirviendo).","Exprime el limón y añade el zumo al agua.","Añade la pizca de sal. Bebe despacio en ayunas."] },
      { name:"Desayuno", desc:"Zumo de apio, pepino y jengibre",
        photo:"https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600&q=80",
        ingredients:["4 ramas de apio","1/2 pepino","1 cm de jengibre fresco","1 manzana verde"],
        steps:["Lava y trocea todos los ingredientes.","Pásalos por la licuadora o extractor.","Sirve inmediatamente sin colar para conservar la fibra."] },
      { name:"Almuerzo", desc:"Ensalada verde con aceite de oliva",
        photo:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
        ingredients:["100 g espinacas baby","1/2 aguacate","Pepino en rodajas","Zumo de limón","2 cucharadas de aceite de oliva virgen extra","Sal y pimienta al gusto"],
        steps:["Lava las espinacas y colócalas en un cuenco grande.","Corta el aguacate y el pepino y añádelos.","Aliña con limón, aceite, sal y pimienta. Mezcla bien y sirve."] },
      { name:"Cena", desc:"Caldo de verduras depurativo",
        photo:"https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80",
        ingredients:["2 zanahorias","2 ramas de apio","1 cebolla","1 puerro","Perejil fresco","1,5 l de agua","Sal marina"],
        steps:["Trocea todas las verduras en trozos grandes.","Ponlas en una olla con agua fría y lleva a ebullición.","Cuece a fuego medio 40 minutos. Cuela y bebe caliente."] },
    ],
    tasks:["Beber 2 vasos de agua tibia con limón al despertar","Desayuno: zumo de apio, pepino y jengibre","Almuerzo: ensalada verde con aceite de oliva virgen","Cena: caldo de verduras depurativo","Tomar 30 min de caminata suave al aire libre","Meditar 10 minutos antes de dormir"],
  },
  {
    day:2, emoji:"🌿",
    title:"Activación Hepática",
    subtitle:"Despertamos el hígado con alimentos depurativos y cálidos.",
    color:"#7a6a2c", colorLight:"#f5f0e0",
    youtubeId:"dQw4w9WgXcQ",
    videoTitle:"Guía Día 2 – Activación Hepática",
    meals:[
      { name:"En ayunas", desc:"Agua con limón + cúrcuma",
        photo:"https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&q=80",
        ingredients:["1 vaso de agua tibia","Zumo de 1/2 limón","1/4 cucharadita de cúrcuma","Pizca de pimienta negra"],
        steps:["Calienta el agua.","Disuelve la cúrcuma y añade el limón.","Agrega la pimienta (activa la curcumina). Bebe en ayunas."] },
      { name:"Desayuno", desc:"Batido verde espinaca, manzana, limón",
        photo:"https://images.unsplash.com/photo-1638439430466-b2bb7fdc1d67?w=600&q=80",
        ingredients:["1 puñado de espinacas","1 manzana verde","Zumo de 1/2 limón","200 ml de agua de coco","1 cucharada de semillas de chía"],
        steps:["Tritura todos los ingredientes en la batidora.","Añade las semillas de chía y mezcla.","Sirve frío inmediatamente."] },
      { name:"Almuerzo", desc:"Crema de calabaza y zanahoria",
        photo:"https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=600&q=80",
        ingredients:["400 g de calabaza","3 zanahorias","1 cebolla","1 diente de ajo","Caldo de verduras","Aceite de oliva","Sal, cúrcuma y comino"],
        steps:["Sofríe la cebolla y el ajo en aceite de oliva.","Añade la calabaza y las zanahorias troceadas. Cubre con caldo.","Cuece 25 min y tritura hasta obtener crema suave."] },
      { name:"Cena", desc:"Quinoa con verduras al vapor",
        photo:"https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=600&q=80",
        ingredients:["150 g de quinoa","1 calabacín","1 zanahoria","1/2 brócoli","Aceite de oliva","Sal y hierbas provenzales"],
        steps:["Lava la quinoa y cuécela 15 min en el doble de agua.","Corta las verduras y cuécelas al vapor 8 min.","Sirve la quinoa con las verduras. Aliña con aceite y hierbas."] },
    ],
    tasks:["Agua con limón + cúrcuma en ayunas","Desayuno: batido verde (espinaca, manzana, limón)","Almuerzo: crema de calabaza y zanahoria","Merienda: té de diente de león","Cena: quinoa con verduras al vapor","Baño de vapor o sauna 20 minutos"],
  },
  {
    day:3, emoji:"🌱",
    title:"Limpieza Intestinal",
    subtitle:"Cuidamos nuestra microbiota y facilitamos la eliminación.",
    color:"#4a7a5c", colorLight:"#e0f0ea",
    youtubeId:"dQw4w9WgXcQ",
    videoTitle:"Guía Día 3 – Limpieza Intestinal",
    meals:[
      { name:"En ayunas", desc:"Agua tibia con carbón activado",
        photo:"https://images.unsplash.com/photo-1564894987891-98f67ae2e2bc?w=600&q=80",
        ingredients:["1 vaso de agua tibia","1/2 cucharadita de carbón activado grado alimentario","Zumo de 1/4 limón"],
        steps:["Asegúrate de que el carbón sea grado alimentario.","Disuelve en el agua tibia con el limón.","Bebe en ayunas. Espera 30 min antes de comer."] },
      { name:"Desayuno", desc:"Papaya con semillas de chía",
        photo:"https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=600&q=80",
        ingredients:["1/2 papaya madura","2 cucharadas de semillas de chía","Zumo de 1/2 lima","Hojas de menta fresca"],
        steps:["Corta la papaya en cubos o en mitades.","Esparce las semillas de chía por encima.","Rocía con lima y decora con menta. Sirve frío."] },
      { name:"Almuerzo", desc:"Sopa de lentejas rojas",
        photo:"https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80",
        ingredients:["200 g lentejas rojas","1 tomate","1 zanahoria","1 cebolla","Comino, cúrcuma, sal","Aceite de oliva","700 ml caldo de verduras"],
        steps:["Sofríe cebolla, tomate y zanahoria en aceite.","Añade las lentejas, el caldo y las especias.","Cuece 20 min a fuego medio. Tritura parcialmente y sirve."] },
      { name:"Cena", desc:"Verduras asadas con ajo y perejil",
        photo:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
        ingredients:["1 berenjena","1 calabacín","1 pimiento rojo","2 dientes de ajo","Perejil fresco","Aceite de oliva","Sal y orégano"],
        steps:["Trocea las verduras y colócalas en bandeja de horno.","Rocía con aceite, ajo picado, sal y orégano.","Hornea a 200°C durante 25-30 minutos. Sirve con perejil fresco."] },
    ],
    tasks:["Vaso de agua tibia con carbón activado (grado alimentario)","Desayuno: papaya con semillas de chía","Infusión de hinojo y menta después del desayuno","Almuerzo: sopa de lentejas rojas","Cena: verduras asadas con ajo y perejil","Ejercicio suave: yoga o estiramientos 30 min"],
  },
  {
    day:4, emoji:"💧",
    title:"Hidratación Profunda",
    subtitle:"El agua es el mejor desintoxicante. Hoy nos llenamos de ella.",
