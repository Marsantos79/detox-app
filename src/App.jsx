import { useState } from "react";

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
    color:"#2c6a7a", colorLight:"#e0f0f5",
    youtubeId:"dQw4w9WgXcQ",
    videoTitle:"Guía Día 4 – Hidratación Profunda",
    meals:[
      { name:"Desayuno", desc:"Sandía + menta fresca",
        photo:"https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=600&q=80",
        ingredients:["3 rodajas de sandía","Hojas de menta fresca","Zumo de 1/2 lima","Hielo (opcional)"],
        steps:["Corta la sandía en triángulos o cubos.","Coloca sobre plato con las hojas de menta.","Rocía con zumo de lima. Sirve muy frío."] },
      { name:"Almuerzo", desc:"Gazpacho casero sin pan",
        photo:"https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=600&q=80",
        ingredients:["4 tomates maduros","1/2 pepino","1/2 pimiento verde","1 diente de ajo","3 cucharadas aceite de oliva","Vinagre de manzana","Sal al gusto"],
        steps:["Trocea todas las verduras y colócalas en la batidora.","Añade el aceite, vinagre y sal. Tritura hasta obtener crema fina.","Enfría 1 hora en nevera. Sirve muy frío."] },
      { name:"Merienda", desc:"Agua de coco natural",
        photo:"https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=600&q=80",
        ingredients:["400 ml de agua de coco natural","Hielo","Rodaja de lima","Hojitas de menta"],
        steps:["Sirve el agua de coco en vaso grande con hielo.","Decora con la rodaja de lima y la menta.","Bebe lentamente durante la tarde."] },
      { name:"Cena", desc:"Ensalada de pepino, aguacate y cilantro",
        photo:"https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80",
        ingredients:["1 pepino grande","1 aguacate","Cilantro fresco","1/2 cebolla roja","Zumo de 1 lima","Aceite de sésamo","Sal marina"],
        steps:["Corta el pepino en medias lunas y el aguacate en dados.","Pica la cebolla roja fina y el cilantro.","Mezcla todo y aliña con lima, aceite de sésamo y sal."] },
    ],
    tasks:["Beber mínimo 2,5 litros de agua durante el día","Desayuno: sandía + menta fresca","Almuerzo: gazpacho casero sin pan","Merienda: agua de coco natural","Cena: ensalada de pepino, aguacate y cilantro","Baño de pies con sal del Himalaya 15 min"],
  },
  {
    day:5, emoji:"⚡",
    title:"Regeneración Celular",
    subtitle:"Ayuno intermitente y nutrientes que reparan desde dentro.",
    color:"#6a3a7a", colorLight:"#f0e8f5",
    youtubeId:"dQw4w9WgXcQ",
    videoTitle:"Guía Día 5 – Regeneración Celular",
    meals:[
      { name:"Primera comida", desc:"Ensalada de germinados y nueces",
        photo:"https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80",
        ingredients:["60 g germinados de alfalfa o brócoli","30 g nueces","1/2 manzana","Zumo de limón","Aceite de lino","Sal marina"],
        steps:["Coloca los germinados como base en el plato.","Añade las nueces y la manzana en láminas finas.","Aliña con zumo de limón y aceite de lino."] },
      { name:"Merienda", desc:"Infusión de ortiga y cola de caballo",
        photo:"https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&q=80",
        ingredients:["1 cucharada de ortiga seca","1 cucharada de cola de caballo","300 ml de agua","Miel cruda (opcional)"],
        steps:["Hierve el agua y añade las hierbas.","Infusiona tapado 10 minutos.","Cuela y añade miel si deseas. Bebe caliente."] },
      { name:"Cena", desc:"Salmón al vapor con brócoli",
        photo:"https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80",
        ingredients:["150 g lomo de salmón","200 g brócoli","Zumo de limón","Eneldo fresco","Sal y pimienta","Aceite de oliva"],
        steps:["Coloca el salmón en la vaporera con eneldo y sal.","Cuece al vapor 10-12 minutos hasta que esté hecho.","Cuece el brócoli al vapor 5 min. Sirve con limón y aceite."] },
    ],
    tasks:["Ayuno intermitente 16/8 (comenzar a las 12:00)","Primera comida: ensalada de germinados y nueces","Infusión de ortiga y cola de caballo","Cena: salmón al vapor con brócoli","Suplemento: vitamina C 1000 mg","Journaling: escribe 3 cosas por las que estás agradecido/a"],
  },
  {
    day:6, emoji:"🔥",
    title:"Drenaje Linfático",
    subtitle:"Activamos el sistema linfático con movimiento y alimentación.",
    color:"#7a4a2c", colorLight:"#f5ece0",
    youtubeId:"dQw4w9WgXcQ",
    videoTitle:"Guía Día 6 – Drenaje Linfático",
    meals:[
      { name:"Desayuno", desc:"Smoothie de arándanos y espinacas",
        photo:"https://images.unsplash.com/photo-1638439430466-b2bb7fdc1d67?w=600&q=80",
        ingredients:["100 g arándanos frescos o congelados","1 puñado de espinacas","200 ml leche vegetal de avena","1 plátano","1 cucharada de mantequilla de almendras"],
        steps:["Coloca todos los ingredientes en la batidora.","Tritura a máxima potencia 1 minuto.","Sirve inmediatamente con arándanos por encima."] },
      { name:"Almuerzo", desc:"Ensalada de remolacha, nuez y queso fresco",
        photo:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
        ingredients:["2 remolachas cocidas","50 g nueces","60 g queso fresco de cabra","Rúcula","Vinagre balsámico","Aceite de oliva","Sal y pimienta"],
        steps:["Corta la remolacha en dados o rodajas.","Mezcla con rúcula, nueces y queso desmenuzado.","Aliña con balsámico, aceite, sal y pimienta."] },
      { name:"Cena", desc:"Crema de brócoli y ajo",
        photo:"https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=600&q=80",
        ingredients:["1 brócoli grande","3 dientes de ajo","1 cebolla","Caldo de verduras","Aceite de oliva","Nuez moscada","Sal y pimienta"],
        steps:["Sofríe el ajo y la cebolla en aceite hasta dorar.","Añade el brócoli en flores y el caldo. Cuece 15 minutos.","Tritura todo. Sazona con nuez moscada, sal y pimienta."] },
    ],
    tasks:["Masaje de drenaje linfático en piernas y abdomen","Desayuno: smoothie de arándanos y espinacas","Caminar 45 minutos a ritmo moderado","Almuerzo: ensalada de remolacha, nuez y queso fresco","Infusión de cola de caballo","Cena: crema de brócoli y ajo"],
  },
  {
    day:7, emoji:"🌟",
    title:"Consolidación & Celebración",
    subtitle:"¡Lo lograste! Hoy honramos el viaje y celebramos tu cuerpo.",
    color:"#5c7a3a", colorLight:"#eaf5e0",
    youtubeId:"dQw4w9WgXcQ",
    videoTitle:"Guía Día 7 – Consolidación & Celebración",
    meals:[
      { name:"Desayuno especial", desc:"Açaí bowl con frutas frescas",
        photo:"https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&q=80",
        ingredients:["200 g pulpa de açaí congelada","1 plátano","100 ml leche vegetal","Fresas, arándanos y kiwi para decorar","Granola sin azúcar","Semillas de cáñamo"],
        steps:["Tritura el açaí con el plátano y la leche vegetal.","Vierte la mezcla espesa en un bol.","Decora con la fruta fresca, granola y semillas de cáñamo."] },
      { name:"Almuerzo", desc:"Paella de verduras con azafrán",
        photo:"https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=600&q=80",
        ingredients:["300 g arroz bomba","1 pimiento rojo y verde","200 g judías verdes","1 tomate","Unas hebras de azafrán","Caldo de verduras caliente","Aceite de oliva","Pimentón dulce","Sal"],
        steps:["Sofríe las verduras en aceite con pimentón.","Añade el arroz, el azafrán y el caldo caliente (doble de caldo que arroz).","Cuece 18 min a fuego medio sin remover. Reposa 5 min tapado."] },
      { name:"Cena", desc:"Gazpacho + tostada de aguacate",
        photo:"https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=600&q=80",
        ingredients:["Gazpacho del día 4 (ver receta)","1 rebanada de pan integral","1/2 aguacate","Semillas de sésamo","Zumo de limón","Sal en escamas"],
        steps:["Prepara el gazpacho (ver receta Día 4).","Tuesta el pan y aplasta el aguacate encima con un tenedor.","Exprime limón, añade sal en escamas y sésamo. Sirve junto al gazpacho."] },
    ],
    tasks:["Ritual de gratitud al despertar (5 minutos)","Desayuno especial: açaí bowl con frutas frescas","Almuerzo: paella de verduras con azafrán","Té de hierbas variadas (manzanilla, menta, tila)","Cena: gazpacho + tostada de aguacate integral","Reflexión escrita: ¿Cómo te sientes tras la semana?"],
  },
];
const shoppingList = {
  "Frutas & Verduras":["Limones (8 ud.)","Apio (1 manojo)","Pepinos (4 ud.)","Espinacas baby (300 g)","Manzanas verdes (4 ud.)","Calabaza (1 kg)","Zanahorias (500 g)","Papaya (1 ud.)","Sandía (1/2 ud.)","Aguacates (3 ud.)","Remolacha (3 ud.)","Brócoli (2 cabezas)","Arándanos (200 g)"],
  "Proteínas & Granos":["Quinoa (250 g)","Lentejas rojas (250 g)","Salmón fresco (400 g)","Semillas de chía (100 g)","Nueces (150 g)","Garbanzos cocidos (1 bote)"],
  "Infusiones & Líquidos":["Té de diente de león","Té de hinojo","Té de ortiga","Cola de caballo (hierba)","Agua de coco (4 unidades)","Aceite de oliva virgen extra (500 ml)"],
  "Suplementos & Extras":["Cúrcuma en polvo","Jengibre fresco","Carbón activado alimentario","Vitamina C 1000 mg","Sal del Himalaya","Açaí en polvo o pulpa"],
};

const Icon = ({name,size=24})=>{
  const p={
    leaf:<><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></>,
    home:<><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>,
    protocol:<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></>,
    progress:<><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>,
    shopping:<><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></>,
    contact:<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.64 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16l.19.92z"/>,
    check:<polyline points="20 6 9 17 4 12"/>,
    arrow:<><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>,
    back:<polyline points="15 18 9 12 15 6"/>,
    sun:<><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></>,
    send:<><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></>,
    drop:<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>,
    user:<><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
    lock:<><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>,
    eye:<><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>,
    play:<><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></>,
    logout:<><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></>,
    x:<><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{p[name]}</svg>;
};
const css=`
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --sage:#5c7a5c;--sage-l:#8aab8a;--sage-p:#d4e8d4;
  --cream:#faf6f0;--earth:#8b6e4e;--charcoal:#2c3a2c;
  --text:#3d4a3d;--text-l:#7a8a7a;--white:#fff;
  --sh:0 4px 24px rgba(44,58,44,.10);--sh-s:0 2px 8px rgba(44,58,44,.08);
  --r:20px;--rs:12px;
}
body{font-family:'DM Sans',sans-serif;background:var(--cream);color:var(--text)}
.app{max-width:430px;margin:0 auto;min-height:100vh;position:relative;overflow:hidden}
.splash{min-height:100vh;background:linear-gradient(160deg,#2c3a2c 0%,#3d5c3a 42%,#5c7a4a 80%,#8aab6a 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px 28px;position:relative;overflow:hidden}
.splash::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 70% 20%,rgba(200,230,160,.18) 0%,transparent 60%),radial-gradient(ellipse at 20% 80%,rgba(90,140,90,.22) 0%,transparent 50%)}
.splash-orb{width:200px;height:200px;border-radius:50%;background:radial-gradient(circle at 35% 35%,rgba(210,240,190,.35),rgba(90,130,70,.15));border:1px solid rgba(200,230,160,.25);display:flex;align-items:center;justify-content:center;margin-bottom:24px;z-index:1;box-shadow:0 0 80px rgba(140,200,100,.2),inset 0 0 40px rgba(200,240,160,.08)}
.splash-orb-inner{width:130px;height:130px;border-radius:50%;background:radial-gradient(circle at 40% 35%,rgba(220,250,200,.5),rgba(100,160,80,.3));border:1px solid rgba(220,250,200,.4);display:flex;align-items:center;justify-content:center;color:rgba(230,255,200,.9)}
.splash-title{font-family:'Playfair Display',serif;font-size:40px;font-weight:700;color:#e8f5e0;line-height:1.1;text-align:center;z-index:1;letter-spacing:-.5px;text-shadow:0 2px 20px rgba(0,0,0,.3)}
.splash-title em{font-style:italic;color:#b8e0a0}
.splash-by{font-size:13px;color:rgba(200,240,170,.6);text-align:center;margin-top:7px;letter-spacing:.5px;font-style:italic;z-index:1}
.login-card{width:100%;background:rgba(255,255,255,.10);backdrop-filter:blur(12px);border:1px solid rgba(200,230,160,.2);border-radius:24px;padding:26px 22px;margin-top:26px;z-index:1}
.login-card-title{font-family:'Playfair Display',serif;font-size:17px;color:#e8f5e0;text-align:center;margin-bottom:18px;font-weight:700}
.lf{position:relative;margin-bottom:12px}
.lf-icon{position:absolute;left:14px;top:50%;transform:translateY(-50%);color:rgba(200,230,160,.55);pointer-events:none}
.l-input{width:100%;background:rgba(255,255,255,.08);border:1px solid rgba(200,230,160,.2);border-radius:14px;padding:13px 14px 13px 44px;font-family:'DM Sans',sans-serif;font-size:14px;color:#e8f5e0;outline:none;transition:border .2s}
.l-input::placeholder{color:rgba(200,230,160,.4)}
.l-input:focus{border-color:rgba(200,230,160,.5);background:rgba(255,255,255,.13)}
.l-eye{position:absolute;right:14px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:rgba(200,230,160,.45);display:flex;align-items:center}
.l-btn{width:100%;background:linear-gradient(135deg,#8aab6a,#5c7a4a);color:#e8f5e0;border:none;cursor:pointer;padding:14px;border-radius:50px;font-family:'DM Sans',sans-serif;font-size:15px;font-weight:500;letter-spacing:.4px;box-shadow:0 8px 32px rgba(44,80,44,.4);transition:all .3s}
.l-btn:hover{transform:translateY(-2px)}
.l-err{color:#ffb3b3;font-size:12px;text-align:center;margin-top:10px;background:rgba(255,100,100,.12);border-radius:8px;padding:6px}
.header{background:linear-gradient(135deg,var(--charcoal) 0%,#3d5c3a 100%);padding:52px 22px 26px;position:relative;overflow:hidden}
.header::after{content:'';position:absolute;bottom:-1px;left:0;right:0;height:24px;background:var(--cream);border-radius:24px 24px 0 0}
.h-top{display:flex;align-items:flex-start;justify-content:space-between;gap:12px}
.h-greeting{font-size:13px;color:var(--sage-l);margin-bottom:4px}
.h-title{font-family:'Playfair Display',serif;font-size:25px;font-weight:700;color:#e8f5e0;letter-spacing:-.3px;line-height:1.2}
.h-title em{font-style:italic;color:#b8e0a0}
.h-pills{display:flex;gap:8px;margin-top:11px;flex-wrap:wrap}
.h-pill{background:rgba(200,230,160,.15);border:1px solid rgba(200,230,160,.2);color:rgba(220,245,200,.8);font-size:12px;padding:4px 12px;border-radius:20px}
.logout-btn{background:rgba(200,230,160,.1);border:1px solid rgba(200,230,160,.18);color:rgba(220,245,200,.7);border-radius:12px;padding:9px;display:flex;align-items:center;cursor:pointer;transition:all .2s;flex-shrink:0;margin-top:2px}
.logout-btn:hover{background:rgba(200,230,160,.2)}
.nav{position:fixed;bottom:0;left:50%;transform:translateX(-50%);width:100%;max-width:430px;background:var(--white);border-top:1px solid var(--sage-p);padding:10px 0 20px;display:flex;justify-content:space-around;z-index:100;box-shadow:0 -4px 20px rgba(44,58,44,.08)}
.nav-btn{background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:4px;padding:6px 10px;border-radius:var(--rs);transition:all .2s;color:var(--text-l);font-size:11px;font-family:'DM Sans',sans-serif}
.nav-btn.active{color:var(--sage)}
.nav-btn.active .ni{background:var(--sage-p)}
.ni{width:42px;height:42px;border-radius:14px;display:flex;align-items:center;justify-content:center;transition:all .2s}
.content{padding:20px 20px 100px}
.pg-title{font-family:'Playfair Display',serif;font-size:20px;font-weight:700;color:var(--charcoal);margin-bottom:16px}
.back-btn-top{display:flex;align-items:center;gap:6px;background:none;border:none;cursor:pointer;color:rgba(200,230,160,.8);font-size:14px;font-weight:500;font-family:'DM Sans',sans-serif;margin-bottom:10px;padding:4px 0}
.volver-btn{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;background:var(--white);border:2px solid var(--sage-p);border-radius:50px;padding:14px 24px;margin-top:24px;color:var(--sage);font-family:'DM Sans',sans-serif;font-size:15px;font-weight:500;cursor:pointer;transition:all .25s;box-shadow:var(--sh-s)}
.volver-btn:hover{background:var(--sage-p);border-color:var(--sage-l);transform:translateY(-2px);box-shadow:var(--sh)}
@keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
.fade-up{animation:fadeUp .35s ease both}
.card{background:var(--white);border-radius:var(--r);padding:20px;margin-bottom:16px;box-shadow:var(--sh-s);border:1px solid rgba(200,220,200,.3)}
.s-tile{background:var(--white);border-radius:var(--r);padding:17px 18px;margin-bottom:13px;box-shadow:var(--sh-s);border:1px solid rgba(200,220,200,.3);display:flex;align-items:center;justify-content:space-between;cursor:pointer;transition:all .22s;text-align:left;width:100%}
.s-tile:hover{transform:translateY(-2px);box-shadow:var(--sh)}
.t-icon{width:50px;height:50px;border-radius:16px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.day-row{background:var(--white);border-radius:var(--r);margin-bottom:11px;box-shadow:var(--sh-s);border:1px solid rgba(200,220,200,.3);cursor:pointer;transition:all .2s;overflow:hidden}
.day-row:hover{transform:translateY(-2px);box-shadow:var(--sh)}
.day-row-body{display:flex;align-items:center;gap:14px;padding:15px 18px}
.d-badge{background:var(--sage);color:#fff;font-size:11px;font-weight:500;padding:2px 9px;border-radius:20px;display:inline-block;margin-bottom:4px}
.d-strip{height:4px;width:100%}
.dd-hero{position:relative;overflow:hidden;padding:54px 22px 34px}
.dd-hero::after{content:'';position:absolute;bottom:-1px;left:0;right:0;height:28px;background:var(--cream);border-radius:28px 28px 0 0}
.dd-badge{display:inline-block;background:rgba(255,255,255,.2);border:1px solid rgba(255,255,255,.3);color:#fff;font-size:11px;padding:3px 12px;border-radius:20px;margin-bottom:11px}
.vid-wrap{background:var(--white);border-radius:var(--r);overflow:hidden;margin-bottom:20px;box-shadow:var(--sh-s);border:1px solid rgba(200,220,200,.3)}
.vid-label{display:flex;align-items:center;gap:8px;padding:13px 16px;font-size:13px;font-weight:500;border-bottom:1px solid var(--sage-p)}
.vid-label-icon{color:#e53935}
.vid-ratio{position:relative;padding-bottom:56.25%;height:0;overflow:hidden}
.vid-ratio iframe{position:absolute;top:0;left:0;width:100%;height:100%;border:0}
.meals-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px}
.meal-card{background:var(--white);border-radius:var(--rs);overflow:hidden;box-shadow:var(--sh-s);border:1px solid rgba(200,220,200,.3);cursor:pointer;transition:all .22s;position:relative}
.meal-card:hover{transform:translateY(-3px);box-shadow:var(--sh)}
.meal-card-badge{position:absolute;top:8px;right:8px;background:rgba(44,58,44,.55);backdrop-filter:blur(4px);color:#fff;font-size:10px;padding:3px 7px;border-radius:20px}
.meal-photo{width:100%;height:110px;object-fit:cover;display:block}
.meal-info{padding:9px 11px}
.meal-time{font-size:10px;font-weight:500;text-transform:uppercase;letter-spacing:.6px}
.meal-name{font-size:12px;color:var(--text);margin-top:2px;line-height:1.3}
.modal-overlay{position:fixed;inset:0;background:rgba(30,44,30,.55);backdrop-filter:blur(6px);z-index:200;display:flex;align-items:flex-end}
.modal-sheet{background:var(--white);border-radius:28px 28px 0 0;width:100%;max-width:430px;margin:0 auto;max-height:88vh;overflow-y:auto;padding-bottom:32px}
.modal-close{position:absolute;top:14px;right:14px;background:rgba(255,255,255,.85);border:none;border-radius:50%;width:34px;height:34px;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:var(--sh-s)}
.modal-header{position:relative}
.modal-time{font-size:11px;font-weight:500;text-transform:uppercase;letter-spacing:.7px;margin-bottom:4px}
.modal-title{font-family:'Playfair Display',serif;font-size:22px;font-weight:700;line-height:1.2;margin-bottom:14px}
.recipe-section-title{font-size:12px;font-weight:500;text-transform:uppercase;letter-spacing:.7px;color:var(--sage);margin-bottom:10px;margin-top:18px}
.ingredient-item{display:flex;align-items:flex-start;gap:10px;padding:7px 0;border-bottom:1px solid var(--sage-p);font-size:13px}
.ingredient-item:last-child{border:none}
.ing-dot{width:6px;height:6px;border-radius:50%;flex-shrink:0;margin-top:5px}
.step-item{display:flex;gap:12px;padding:9px 0;border-bottom:1px solid var(--sage-p);font-size:13px;line-height:1.5}
.step-item:last-child{border:none}
.step-num{width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:700;flex-shrink:0;margin-top:1px}
.chk-row{background:var(--white);border-radius:var(--rs);padding:13px 15px;margin-bottom:8px;display:flex;align-items:center;gap:12px;box-shadow:var(--sh-s);cursor:pointer;transition:all .2s;border:1px solid rgba(200,220,200,.3)}
.chk-row:hover{transform:translateX(3px)}
.chk-box{width:28px;height:28px;border-radius:50%;border:2px solid var(--sage-p);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .2s}
.stat-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:20px}
.stat{background:var(--white);border-radius:var(--rs);padding:16px 12px;text-align:center;box-shadow:var(--sh-s);border:1px solid rgba(200,220,200,.3)}
.stat-n{font-family:'Playfair Display',serif;font-size:26px;font-weight:700;color:var(--sage)}
.stat-l{font-size:11px;color:var(--text-l);margin-top:2px}
.pb-wrap{background:var(--sage-p);border-radius:10px;height:10px;overflow:hidden}
.pb{background:linear-gradient(90deg,var(--sage-l),var(--sage));height:100%;border-radius:10px;transition:width .6s ease}
.chart-bars{display:flex;align-items:flex-end;gap:6px;height:120px;padding:0 4px}
.chart-bar-col{display:flex;flex-direction:column;align-items:center;flex:1;gap:4px;height:100%}
.chart-bar-wrap{flex:1;display:flex;align-items:flex-end;width:100%}
.chart-bar{width:100%;border-radius:6px 6px 0 0;transition:height .6s ease;min-height:4px}
.chart-label{font-size:10px;color:var(--text-l);font-weight:500}
.chart-pct{font-size:10px;color:var(--sage);font-weight:600}
.sh-cat{font-size:12px;font-weight:500;color:var(--sage);text-transform:uppercase;letter-spacing:.7px;margin:16px 0 8px 4px}
.sh-item{background:var(--white);border-radius:var(--rs);padding:12px 15px;margin-bottom:6px;display:flex;align-items:center;gap:12px;box-shadow:var(--sh-s);cursor:pointer;transition:all .2s;border:1px solid rgba(200,220,200,.3)}
.sh-item:hover{transform:translateX(3px)}
.sh-chk{width:22px;height:22px;border-radius:6px;border:2px solid var(--sage-p);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .2s}
.sh-chk.done{background:var(--sage);border-color:var(--sage);color:#fff}
.c-hero{background:linear-gradient(135deg,var(--charcoal),#3d5c3a);border-radius:var(--r);padding:30px 22px;text-align:center;margin-bottom:18px;position:relative;overflow:hidden}
.c-hero::before{content:'';position:absolute;top:-30px;right:-30px;width:120px;height:120px;border-radius:50%;background:rgba(200,230,160,.1)}
.c-method{background:var(--white);border-radius:var(--r);padding:17px 18px;margin-bottom:12px;display:flex;align-items:center;gap:14px;box-shadow:var(--sh-s);border:1px solid rgba(200,220,200,.3);cursor:pointer;transition:all .2s}
.c-method:hover{transform:translateY(-2px);box-shadow:var(--sh)}
.cm-icon{width:46px;height:46px;border-radius:14px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.form-area{background:var(--white);border-radius:var(--r);padding:20px;box-shadow:var(--sh-s);border:1px solid rgba(200,220,200,.3)}
.fl{font-size:12px;color:var(--text-l);margin-bottom:6px;display:block;margin-top:12px}
.fl:first-of-type{margin-top:0}
.fi,.fta{width:100%;background:var(--cream);border:1px solid var(--sage-p);border-radius:var(--rs);padding:12px 14px;font-family:'DM Sans',sans-serif;font-size:14px;color:var(--text);outline:none;transition:border .2s}
.fi:focus,.fta:focus{border-color:var(--sage-l)}
.fta{resize:none;min-height:100px}
.f-btn{width:100%;background:linear-gradient(135deg,var(--sage),var(--charcoal));color:#fff;border:none;border-radius:50px;padding:14px;font-family:'DM Sans',sans-serif;font-size:15px;font-weight:500;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;margin-top:14px;transition:all .2s;box-shadow:0 4px 16px rgba(44,80,44,.3)}
.f-btn:hover{transform:translateY(-2px)}
`;
const VolverBtn = ({onClick})=>(
  <button className="volver-btn" onClick={onClick}>
    <Icon name="home" size={17}/> Volver al inicio
  </button>
);

function RecipeModal({meal,color,onClose}){
  if(!meal) return null;
  return(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-sheet" onClick={e=>e.stopPropagation()}>
        <div className="modal-header" style={{position:"relative"}}>
          <img src={meal.photo} alt={meal.desc} style={{width:"100%",height:200,objectFit:"cover",display:"block"}} onError={e=>e.target.style.display="none"}/>
          <button className="modal-close" onClick={onClose}><Icon name="x" size={16}/></button>
        </div>
        <div style={{padding:"22px 22px 0"}}>
          <div className="modal-time" style={{color}}>{meal.name}</div>
          <div className="modal-title">{meal.desc}</div>
          <div className="recipe-section-title">Ingredientes</div>
          {meal.ingredients.map((ing,i)=>(
            <div key={i} className="ingredient-item">
              <div className="ing-dot" style={{background:color}}/>
              {ing}
            </div>
          ))}
          <div className="recipe-section-title">Preparación</div>
          {meal.steps.map((step,i)=>(
            <div key={i} className="step-item">
              <div className="step-num" style={{background:color}}>{i+1}</div>
              <span>{step}</span>
            </div>
          ))}
          <div style={{height:8}}/>
        </div>
      </div>
    </div>
  );
}

function LoginScreen({onLogin}){
  const [u,setU]=useState(""); const [pw,setPw]=useState("");
  const [show,setShow]=useState(false); const [err,setErr]=useState("");
  const go=()=>{
    const f=USERS.find(x=>x.username===u.trim()&&x.password===pw);
    if(f) onLogin(f); else setErr("Usuario o contraseña incorrectos.");
  };
  return(
    <div className="splash">
      <div className="splash-orb"><div className="splash-orb-inner"><Icon name="leaf" size={56}/></div></div>
      <div className="splash-title">Detox<br/><em>&amp; Vida</em></div>
      <div className="splash-by">por Mar Saints</div>
      <div className="login-card">
        <div className="login-card-title">Accede a tu programa</div>
        <div className="lf">
          <div className="lf-icon"><Icon name="user" size={17}/></div>
          <input className="l-input" placeholder="Usuario" value={u} onChange={e=>{setU(e.target.value);setErr("")}} onKeyDown={e=>e.key==="Enter"&&go()}/>
        </div>
        <div className="lf">
          <div className="lf-icon"><Icon name="lock" size={17}/></div>
          <input className="l-input" type={show?"text":"password"} placeholder="Contraseña" value={pw} onChange={e=>{setPw(e.target.value);setErr("")}} onKeyDown={e=>e.key==="Enter"&&go()}/>
          <button className="l-eye" onClick={()=>setShow(v=>!v)}><Icon name="eye" size={16}/></button>
        </div>
        <button className="l-btn" onClick={go}>Entrar al programa</button>
        {err&&<div className="l-err">{err}</div>}
      </div>
    </div>
  );
}
function HomeScreen({user,onNavigate,onLogout}){
  const sections=[
    {key:"protocol",icon:"protocol",bg:"#e8f0e8",fg:"#5c7a5c",title:"Protocolo",desc:"Plan detallado día a día de tu desintoxicación"},
    {key:"progress",icon:"progress",bg:"#f0e8d8",fg:"#8b6e4e",title:"Mi Progreso",desc:"Gráfico de avance del programa"},
    {key:"shopping",icon:"shopping",bg:"#e8eef8",fg:"#4e6a8b",title:"Lista de Compra",desc:"Todo lo que necesitas para esta semana"},
    {key:"contact", icon:"contact", bg:"#e8f5e8",fg:"#3d7a5c",title:"Contacta con Nosotros",desc:"Resuelve tus dudas con nuestro equipo"},
  ];
  return(
    <>
      <div className="header">
        <div className="h-top">
          <div>
            <div className="h-greeting">Hola, {user.name} ✦</div>
            <div className="h-title">Tu programa de <em>desintoxicación</em></div>
          </div>
          <button className="logout-btn" onClick={onLogout} title="Cerrar sesión"><Icon name="logout" size={18}/></button>
        </div>
        <div className="h-pills"><div className="h-pill">🌿 7 días</div><div className="h-pill">💧 Programa completo</div></div>
      </div>
      <div className="content fade-up">
        <div className="card" style={{background:"linear-gradient(135deg,#e8f0e8,#f0f7f0)",border:"1px solid #c8dcc8",marginBottom:20}}>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:8}}>
            <div style={{width:40,height:40,borderRadius:12,background:"var(--sage)",color:"#e8f5e0",display:"flex",alignItems:"center",justifyContent:"center"}}><Icon name="sun" size={20}/></div>
            <div style={{fontSize:14,fontWeight:500}}>Consejo del día</div>
          </div>
          <p style={{fontSize:13,color:"var(--text)",lineHeight:1.6}}>"Comienza cada mañana con agua tibia y limón. Este sencillo hábito activa tu sistema digestivo y prepara tu cuerpo para absorber los nutrientes del día."</p>
        </div>
        <div className="pg-title" style={{fontSize:17,marginTop:4}}>¿Qué quieres hacer hoy?</div>
        {sections.map(s=>(
          <button key={s.key} className="s-tile" onClick={()=>onNavigate(s.key)}>
            <div style={{display:"flex",alignItems:"center",gap:14}}>
              <div className="t-icon" style={{background:s.bg,color:s.fg}}><Icon name={s.icon} size={24}/></div>
              <div><div style={{fontSize:15,fontWeight:500}}>{s.title}</div><div style={{fontSize:12,color:"var(--text-l)",marginTop:2}}>{s.desc}</div></div>
            </div>
            <Icon name="arrow" size={18}/>
          </button>
        ))}
      </div>
    </>
  );
}

function ProtocolScreen({onBack,onSelectDay}){
  return(
    <>
      <div className="header">
        <button className="back-btn-top" onClick={onBack}><Icon name="back" size={18}/> Inicio</button>
        <div className="h-title">Protocolo de <em>desintoxicación</em></div>
        <div className="h-pills"><div className="h-pill">📅 7 días</div><div className="h-pill">🌿 Natural</div></div>
      </div>
      <div className="content fade-up">
        <div className="pg-title">Selecciona un día</div>
        {protocol.map(d=>(
          <div key={d.day} className="day-row" onClick={()=>onSelectDay(d)}>
            <div className="d-strip" style={{background:d.color}}/>
            <div className="day-row-body">
              <div style={{fontSize:28,flexShrink:0}}>{d.emoji}</div>
              <div style={{flex:1}}>
                <div className="d-badge">Día {d.day}</div>
                <div style={{fontSize:14,fontWeight:500}}>{d.title}</div>
                <div style={{fontSize:12,color:"var(--text-l)",marginTop:2}}>{d.subtitle}</div>
              </div>
              <div style={{color:"var(--text-l)",flexShrink:0}}><Icon name="arrow" size={18}/></div>
            </div>
          </div>
        ))}
        <VolverBtn onClick={onBack}/>
      </div>
    </>
  );
}function DayDetailScreen({day,checked,onToggle,onBack,onGoHome}){
  const [activeMeal,setActiveMeal]=useState(null);
  const dayDone=day.tasks.filter((_,i)=>!!checked[`${day.day}-${i}`]).length;
  const dayPct=Math.round((dayDone/day.tasks.length)*100);
  return(
    <>
      <RecipeModal meal={activeMeal} color={day.color} onClose={()=>setActiveMeal(null)}/>
      <div className="dd-hero" style={{background:`linear-gradient(150deg,${day.color}ee,${day.color}99)`}}>
        <button className="back-btn-top" onClick={onBack}><Icon name="back" size={18}/> Protocolo</button>
        <div className="dd-badge">Día {day.day} {day.emoji}</div>
        <div style={{fontFamily:"'Playfair Display',serif",fontSize:24,fontWeight:700,color:"#fff",lineHeight:1.2}}>{day.title}</div>
        <div style={{fontSize:13,color:"rgba(255,255,255,.75)",marginTop:8,lineHeight:1.5}}>{day.subtitle}</div>
      </div>
      <div className="content fade-up" style={{paddingTop:22}}>
        <div className="vid-wrap">
          <div className="vid-label">
            <span className="vid-label-icon"><Icon name="play" size={18}/></span>
            <span style={{flex:1,fontSize:13}}>{day.videoTitle}</span>
          </div>
          <div className="vid-ratio">
            <iframe src={`https://www.youtube.com/embed/${day.youtubeId}?rel=0&modestbranding=1`}
              title={day.videoTitle}
              allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
              allowFullScreen/>
          </div>
        </div>
        <div className="pg-title" style={{fontSize:17}}>Menú del día 🍽️</div>
        <p style={{fontSize:12,color:"var(--text-l)",marginTop:-10,marginBottom:14}}>Toca una comida para ver la receta completa</p>
        <div className="meals-grid">
          {day.meals.map((m,i)=>(
            <div key={i} className="meal-card" onClick={()=>setActiveMeal(m)}>
              <img className="meal-photo" src={m.photo} alt={m.name} onError={e=>{e.target.style.background=day.colorLight}}/>
              <div className="meal-card-badge">Ver receta</div>
              <div className="meal-info">
                <div className="meal-time" style={{color:day.color}}>{m.name}</div>
                <div className="meal-name">{m.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="card" style={{marginBottom:20,background:day.colorLight,border:`1px solid ${day.color}44`}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
            <span style={{fontSize:13,fontWeight:500}}>Progreso del día</span>
            <span style={{background:day.color,color:"#fff",fontSize:11,padding:"2px 10px",borderRadius:20}}>{dayPct}%</span>
          </div>
          <div className="pb-wrap"><div className="pb" style={{width:`${dayPct}%`,background:day.color}}/></div>
          <div style={{fontSize:12,color:"var(--text-l)",marginTop:6}}>{dayDone} de {day.tasks.length} tareas completadas</div>
        </div>
        <div className="pg-title" style={{fontSize:17}}>Tareas del día ✅</div>
        {day.tasks.map((t,i)=>{
          const id=`${day.day}-${i}`,isDone=!!checked[id];
          return(
            <div key={id} className="chk-row" onClick={()=>onToggle(id)}>
              <div className="chk-box" style={{background:isDone?day.color:"transparent",borderColor:isDone?day.color:"var(--sage-p)"}}>
                {isDone&&<Icon name="check" size={14}/>}
              </div>
              <span style={{fontSize:13,flex:1,lineHeight:1.4,textDecoration:isDone?"line-through":"none",color:isDone?"var(--text-l)":"var(--text)"}}>{t}</span>
            </div>
          );
        })}
        <VolverBtn onClick={onGoHome}/>
      </div>
    </>
  );
}function ProgressScreen({checked,onBack,onGoHome}){
  const total=protocol.reduce((a,d)=>a+d.tasks.length,0);
  const done=Object.values(checked).filter(Boolean).length;
  const pct=Math.round((done/total)*100);
  const dayData=protocol.map(d=>{
    const dc=d.tasks.filter((_,i)=>!!checked[`${d.day}-${i}`]).length;
    return{day:d.day,emoji:d.emoji,color:d.color,total:d.tasks.length,done:dc,pct:Math.round((dc/d.tasks.length)*100)};
  });
  return(
    <>
      <div className="header">
        <button className="back-btn-top" onClick={onBack}><Icon name="back" size={18}/> Inicio</button>
        <div className="h-title">Mi <em>progreso</em></div>
      </div>
      <div className="content fade-up">
        <div className="stat-grid">
          {[{n:done,l:"Completadas"},{n:total-done,l:"Pendientes"},{n:`${pct}%`,l:"Avance global"}].map(s=>(
            <div key={s.l} className="stat"><div className="stat-n">{s.n}</div><div className="stat-l">{s.l}</div></div>
          ))}
        </div>
        <div className="card" style={{marginBottom:20}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
            <span style={{fontSize:14,fontWeight:500}}>Progreso total del programa</span>
            <span style={{background:"var(--sage-p)",color:"var(--sage)",fontSize:11,padding:"2px 10px",borderRadius:20}}>{pct}%</span>
          </div>
          <div className="pb-wrap"><div className="pb" style={{width:`${pct}%`}}/></div>
          <div style={{fontSize:12,color:"var(--text-l)",marginTop:6}}>{done} de {total} tareas completadas</div>
        </div>
        <div className="pg-title" style={{fontSize:17}}>Progreso por día 📊</div>
        <div className="card" style={{paddingBottom:16}}>
          <div className="chart-bars">
            {dayData.map(d=>(
              <div key={d.day} className="chart-bar-col">
                <div className="chart-pct">{d.pct}%</div>
                <div className="chart-bar-wrap">
                  <div className="chart-bar" style={{height:`${(d.pct/100)*100}%`,background:d.color,opacity:d.pct===0?0.18:1}}/>
                </div>
                <div className="chart-label">{d.emoji}</div>
                <div className="chart-label">D{d.day}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="pg-title" style={{fontSize:17,marginTop:4}}>Detalle por día</div>
        {dayData.map(d=>(
          <div key={d.day} className="card" style={{marginBottom:10,padding:"14px 16px"}}>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}>
              <span style={{fontSize:20}}>{d.emoji}</span>
              <div style={{flex:1}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <span style={{fontSize:13,fontWeight:500}}>{protocol[d.day-1].title}</span>
                  <span style={{background:d.color,color:"#fff",fontSize:10,padding:"2px 8px",borderRadius:20}}>{d.done}/{d.total}</span>
                </div>
                <div className="pb-wrap" style={{marginTop:6,height:6}}>
                  <div className="pb" style={{width:`${d.pct}%`,background:d.color}}/>
                </div>
              </div>
            </div>
          </div>
        ))}
        <VolverBtn onClick={onGoHome}/>
      </div>
    </>
  );
}

function ShoppingScreen({shopChecked,onShopToggle,onBack,onGoHome}){
  return(
    <>
      <div className="header">
        <button className="back-btn-top" onClick={onBack}><Icon name="back" size={18}/> Inicio</button>
        <div className="h-title">Lista de <em>compra</em></div>
        <div className="h-pills"><div className="h-pill">🛒 Semana 1</div></div>
      </div>
      <div className="content fade-up">
        <div className="pg-title">Ingredientes semanales</div>
        {Object.entries(shoppingList).map(([cat,items])=>{
          const catDone=items.filter(it=>shopChecked[`${cat}-${it}`]).length;
          return(
            <div key={cat}>
              <div className="sh-cat">{cat} — {catDone}/{items.length}</div>
              {items.map(item=>{
                const id=`${cat}-${item}`,isDone=!!shopChecked[id];
                return(
                  <div key={id} className="sh-item" onClick={()=>onShopToggle(id)}>
                    <div className={`sh-chk ${isDone?"done":""}`}>{isDone&&<Icon name="check" size={11}/>}</div>
                    <span style={{fontSize:13,textDecoration:isDone?"line-through":"none",color:isDone?"var(--text-l)":"var(--text)"}}>{item}</span>
                  </div>
                );
              })}
            </div>
          );
        })}
        <VolverBtn onClick={onGoHome}/>
      </div>
    </>
  );
}
function ContactScreen({onBack,onGoHome}){
  const [sent,setSent]=useState(false);
  return(
    <>
      <div className="header">
        <button className="back-btn-top" onClick={onBack}><Icon name="back" size={18}/> Inicio</button>
        <div className="h-title">Contacta con <em>nosotros</em></div>
      </div>
      <div className="content fade-up">
        <div className="c-hero">
          <div style={{color:"rgba(200,230,160,.8)",marginBottom:12}}><Icon name="leaf" size={32}/></div>
          <div style={{fontFamily:"'Playfair Display',serif",fontSize:21,fontWeight:700,color:"#e8f5e0",marginBottom:8}}>Estamos aquí para ti</div>
          <div style={{fontSize:13,color:"rgba(220,245,200,.7)",lineHeight:1.5}}>Nuestro equipo de expertos en bienestar está disponible para acompañarte en tu proceso de desintoxicación.</div>
        </div>
        {[
          {icon:"drop",bg:"#e8f0e8",fg:"#5c7a5c",title:"WhatsApp",val:"+34 600 000 000"},
          {icon:"send",bg:"#f0e8d8",fg:"#8b6e4e",title:"Email",val:"hola@detoxvida.com"},
        ].map(m=>(
          <div key={m.title} className="c-method">
            <div className="cm-icon" style={{background:m.bg,color:m.fg}}><Icon name={m.icon} size={22}/></div>
            <div>
              <div style={{fontSize:15,fontWeight:500}}>{m.title}</div>
              <div style={{fontSize:12,color:"var(--text-l)",marginTop:2}}>{m.val}</div>
            </div>
            <div style={{marginLeft:"auto",color:"var(--text-l)"}}><Icon name="arrow" size={16}/></div>
          </div>
        ))}
        <div className="form-area">
          <div style={{fontFamily:"'Playfair Display',serif",fontSize:17,fontWeight:700,marginBottom:4}}>Envíanos un mensaje</div>
          {sent?(
            <div style={{textAlign:"center",padding:"28px 0"}}>
              <div style={{color:"var(--sage)",marginBottom:8}}><Icon name="check" size={40}/></div>
              <div style={{fontSize:15,fontWeight:500}}>¡Mensaje enviado!</div>
              <div style={{fontSize:13,color:"var(--text-l)",marginTop:4}}>Te responderemos en menos de 24h.</div>
            </div>
          ):(
            <>
              <label className="fl">Tu nombre</label>
              <input className="fi" placeholder="Ej. María García"/>
              <label className="fl">Email</label>
              <input className="fi" placeholder="tu@email.com"/>
              <label className="fl">Mensaje</label>
              <textarea className="fta" placeholder="Cuéntanos en qué podemos ayudarte…"/>
              <button className="f-btn" onClick={()=>setSent(true)}><Icon name="send" size={16}/> Enviar mensaje</button>
            </>
          )}
        </div>
        <VolverBtn onClick={onGoHome}/>
      </div>
    </>
  );
}

export default function App(){
  const [user,setUser]=useState(null);
  const [tab,setTab]=useState("home");
  const [selectedDay,setSelectedDay]=useState(null);
  const [checked,setChecked]=useState({});
  const [shopChecked,setShopChecked]=useState({});

  const toggleTask=id=>setChecked(p=>({...p,[id]:!p[id]}));
  const toggleShop=id=>setShopChecked(p=>({...p,[id]:!p[id]}));
  const goHome=()=>{setSelectedDay(null);setTab("home");};

  const tabs=[
    {key:"home",icon:"home",label:"Inicio"},
    {key:"protocol",icon:"protocol",label:"Protocolo"},
    {key:"progress",icon:"progress",label:"Progreso"},
    {key:"shopping",icon:"shopping",label:"Compra"},
    {key:"contact",icon:"contact",label:"Contacto"},
  ];

  if(!user) return <><style>{css}</style><div className="app"><LoginScreen onLogin={setUser}/></div></>;

  return(
    <>
      <style>{css}</style>
      <div className="app">
        {selectedDay?(
          <DayDetailScreen day={selectedDay} checked={checked} onToggle={toggleTask}
            onBack={()=>setSelectedDay(null)} onGoHome={goHome}/>
        ):(
          <>
            {tab==="home"&&<HomeScreen user={user} onNavigate={k=>setTab(k)} onLogout={()=>setUser(null)}/>}
            {tab==="protocol"&&<ProtocolScreen onBack={()=>setTab("home")} onSelectDay={d=>setSelectedDay(d)}/>}
            {tab==="progress"&&<ProgressScreen checked={checked} onBack={()=>setTab("home")} onGoHome={goHome}/>}
            {tab==="shopping"&&<ShoppingScreen shopChecked={shopChecked} onShopToggle={toggleShop} onBack={()=>setTab("home")} onGoHome={goHome}/>}
            {tab==="contact"&&<ContactScreen onBack={()=>setTab("home")} onGoHome={goHome}/>}
            <nav className="nav">
              {tabs.map(t=>(
                <button key={t.key} className={`nav-btn ${tab===t.key?"active":""}`} onClick={()=>setTab(t.key)}>
                  <div className="ni"><Icon name={t.icon} size={20}/></div>
                  {t.label}
                </button>
              ))}
            </nav>
          </>
        )}
      </div>
    </>
  );
}


