// Draft project groupings/descriptions — edit titles & descriptions as needed.
const PROJECTS = [
  // Illustrations
  {
    id: "fanzine", category: "illustrations", title: "Fanzine",
    description: "A multi-page fanzine illustration project.",
    images: [
      "assets/Illustrations/fanzine new_page-0002.jpg",
      "assets/Illustrations/fanzine new_page-0003.jpg",
      "assets/Illustrations/fanzine new_page-0004.jpg",
      "assets/Illustrations/fanzine new_page-0005.jpg",
      "assets/Illustrations/fanzine new_page-0006.jpg",
      "assets/Illustrations/fanzine new_page-0007.jpg",
      "assets/Illustrations/fanzine new_page-0008.jpg",
      "assets/Illustrations/fanzine new_page-0009.jpg",
      "assets/Illustrations/fanzine new_page-0010.jpg",
      "assets/Illustrations/fanzine new_page-0011.jpg",
      "assets/Illustrations/fanzine new_page-0012.jpg"
    ]
  },
  { id: "artboard-2", category: "illustrations", title: "Artboard 2", description: "Illustration piece.", images: ["assets/Illustrations/Artboard 2.jpg"] },
  { id: "tofsens-julkalender", category: "illustrations", title: "Tofsens Julkalender", description: "An advent calendar illustration.", images: ["assets/Illustrations/Tofsens_Julkalender.png"] },
  { id: "whatsapp-illustration", category: "illustrations", title: "Untitled Illustration", description: "Illustration piece.", images: ["assets/Illustrations/WhatsApp Image 2025-10-06 at 20.07.46.jpeg"] },
  { id: "cortegebonk", category: "illustrations", title: "Cortegebonk", description: "Illustration piece.", images: ["assets/Illustrations/cortegebonk.png"] },
  { id: "drumline", category: "illustrations", title: "Drumline", description: "Illustration piece.", images: ["assets/Illustrations/drumline  proper.png"] },
  { id: "guldtummen", category: "illustrations", title: "Guldtummen", description: "Illustration piece.", images: ["assets/Illustrations/guldtummen.png"] },
  { id: "offpist", category: "illustrations", title: "Offpist", description: "Illustration piece.", images: ["assets/Illustrations/offpist nkd.jpg"] },
  { id: "sn", category: "illustrations", title: "Sn", description: "Illustration piece.", images: ["assets/Illustrations/sn.png"] },
  { id: "illustration-1", category: "illustrations", title: "Illustration I", description: "Illustration piece.", images: ["assets/Illustrations/314930249_1137291046992081_9046293873338689407_n.jpg"] },
  { id: "illustration-2", category: "illustrations", title: "Illustration II", description: "Illustration piece.", images: ["assets/Illustrations/316352269_1094899431170969_1405260034856978331_n.jpg"] },
  { id: "illustration-3", category: "illustrations", title: "Illustration III", description: "Illustration piece.", images: ["assets/Illustrations/338934394_1289748828557931_6545065167870564912_n.jpg"] },
  { id: "illustration-4", category: "illustrations", title: "Illustration IV", description: "Illustration piece.", images: ["assets/Illustrations/339007627_140338392168347_7948102358119156778_n.jpg"] },
  { id: "illustration-5", category: "illustrations", title: "Illustration V", description: "Illustration piece.", images: ["assets/Illustrations/339124489_919906299333100_8212768645202035842_n.jpg"] },
  { id: "illustration-6", category: "illustrations", title: "Illustration VI", description: "Illustration piece.", images: ["assets/Illustrations/339254644_1255823028351734_7717809000302394909_n.jpg"] },

  // Logotypes
  {
    id: "flashit", category: "logotypes", title: "Flashit",
    description: "Logotype design for Flashit.",
    images: [
      "assets/Logotyper/flashit logo.png",
      "assets/Logotyper/flashit märke orig new.png",
      "assets/Logotyper/flashit märke poppins.png",
      "assets/Logotyper/flshmrk.png"
    ]
  },
  { id: "sexit", category: "logotypes", title: "Sexit", description: "Logotype design for Sexit.", images: ["assets/Logotyper/zoomSexit.png"] },
  { id: "lion-review", category: "logotypes", title: "LionReview", description: "Logo icon design for the LionReview project.", images: ["assets/Logotyper/LionReviewlogoico.png"] },
  { id: "logga", category: "logotypes", title: "Logga", description: "Logotype design.", images: ["assets/Logotyper/Logga.png"] },
  { id: "smurf", category: "logotypes", title: "Smurf", description: "Logotype design.", images: ["assets/Logotyper/Smurf.png"] },
  { id: "artmed", category: "logotypes", title: "Artmed", description: "Logotype design for Artmed.", images: ["assets/Logotyper/artmed.png"] },
  { id: "untitled-artwork", category: "logotypes", title: "Untitled Artwork", description: "Logotype design.", images: ["assets/Logotyper/Untitled_Artwork.jpg"] },
  { id: "logotype-1", category: "logotypes", title: "Logotype I", description: "Logotype design.", images: ["assets/Logotyper/145423402_3608430885901713_3237213211251175800_n.jpg"] },
  { id: "logotype-2", category: "logotypes", title: "Logotype II", description: "Logotype design.", images: ["assets/Logotyper/151072332_551828212441639_158023302838826865_n.png"] },
  { id: "logotype-3", category: "logotypes", title: "Logotype III", description: "Logotype design.", images: ["assets/Logotyper/_6fb18c04-57c8-46a4-8d40-76a3f8fa30f2.png"] },

  // Posters
  {
    id: "gasque", category: "posters", title: "Gasque",
    description: "Poster designs for a Gasque formal dinner event.",
    images: [
      "assets/posters/Gasque2 eng.png",
      "assets/posters/GasqueposterLiggande SWE.png.jpg",
      "assets/posters/GasqueposterLiggande jub eng.png",
      "assets/posters/gasque2 eng liggande.png",
      "assets/posters/gasqueposter stående a3 ENG.png",
      "assets/posters/gasqueposter stående a3 jubileum eng.png"
    ]
  },
  {
    id: "boiler-room", category: "posters", title: "Boiler Room",
    description: "Poster designs for a Boiler Room event.",
    images: [
      "assets/posters/biolerroom liggande eng.jpg",
      "assets/posters/boiler liggande eng.jpg",
      "assets/posters/boilerroom stående eng.jpg"
    ]
  },
  { id: "blind-dating", category: "posters", title: "Blind Dating", description: "Poster design for a Blind Dating event.", images: ["assets/posters/new poster blind dating.png"] },
  { id: "poster-1", category: "posters", title: "Poster I", description: "Poster design.", images: ["assets/posters/received_2267156626804455.jpeg"] },
  { id: "poster-2", category: "posters", title: "Poster II", description: "Poster design.", images: ["assets/posters/received_285856717021895.webp"] },

  // Fashion
  {
    id: "sewing-may-2023", category: "fashion", title: "Sewing Project — May 2023",
    description: "A sewing project.",
    images: [
      "assets/sewing projects/20230531125838_5K5A3456.jpg",
      "assets/sewing projects/20230531125858_5K5A3465.jpg",
      "assets/sewing projects/20230531125920_5K5A3476.jpg"
    ]
  },
  { id: "sewing-oct-2023", category: "fashion", title: "Sewing Project — October 2023", description: "A sewing project.", images: ["assets/sewing projects/20231017165921_5K5A4250.jpg"] },
  {
    id: "sewing-nov-2023", category: "fashion", title: "Sewing Project — November 2023",
    description: "A sewing project.",
    images: [
      "assets/sewing projects/22-20231117234927_5K5A4474.jpg",
      "assets/sewing projects/23-20231117233828_5K5A4448.jpg",
      "assets/sewing projects/24-20231117232724_5K5A4416.jpg",
      "assets/sewing projects/25-20231117232148_5K5A4393-Recovered.jpg"
    ]
  },
  { id: "sewing-oct10", category: "fashion", title: "Sewing Project", description: "A sewing project.", images: ["assets/sewing projects/IMG_20231010_183044.jpg"] },
  { id: "sewing-nov10", category: "fashion", title: "Sewing Project", description: "A sewing project.", images: ["assets/sewing projects/IMG_20231110_200400.jpg"] },
  { id: "mark", category: "fashion", title: "Mark", description: "A sewing project.", images: ["assets/sewing projects/mark 1.jpg", "assets/sewing projects/mark2.jpg"] },

  // Traditional Canvas Art
  { id: "canvas-1", category: "traditionalcanvasart", title: "Canvas Piece I", description: "Traditional canvas painting.", images: ["assets/Konst/IMG_20221116_134414_742.jpg"] },
  { id: "canvas-2", category: "traditionalcanvasart", title: "Canvas Piece II", description: "Traditional canvas painting.", images: ["assets/Konst/IMG_20221124_113348_000.jpg"] },
  { id: "canvas-3", category: "traditionalcanvasart", title: "Canvas Piece III", description: "Traditional canvas painting.", images: ["assets/Konst/IMG_7830.jpg"] },
  { id: "canvas-4", category: "traditionalcanvasart", title: "Canvas Piece IV", description: "Traditional canvas painting.", images: ["assets/Konst/IMG_7835.jpg"] },
  { id: "canvas-5", category: "traditionalcanvasart", title: "Canvas Piece V", description: "Traditional canvas painting.", images: ["assets/Konst/IMG_7888 (1).jpg"] },
  { id: "art-untitled", category: "traditionalcanvasart", title: "Untitled", description: "Traditional canvas painting.", images: ["assets/Konst/art.jpg"] },
  { id: "flower-branch", category: "traditionalcanvasart", title: "Flower Branch", description: "Traditional canvas painting, 2021.", images: ["assets/Konst/flower branch 2021.jpg"] },
  { id: "calf-painting", category: "traditionalcanvasart", title: "Calf Painting", description: "Traditional canvas painting, 2022.", images: ["assets/Konst/simple calf painting 2022.jpg"] }
];
