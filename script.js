const CLAVE_PERSONAJES = "one_piece_personajes_aprendidos";
const CLAVE_PREGUNTAS = "one_piece_preguntas_aprendidas";

const atributosBase = {
  hombre: "no",
  pirata: "no",
  sombreroPaja: "no",
  marine: "no",
  revolucionario: "no",
  villano: "no",
  capitan: "no",
  emperador: "no",
  frutaDiablo: "no",
  usaEspada: "no",
  haki: "no",
  gyojin: "no",
  cyborg: "no",
  esqueleto: "no",
  animal: "no",
  medico: "no",
  princesa: "no",
  wano: "no",
  controlaFuego: "no",
  cabelloVerde: "no",
  cabelloRubio: "no",
  pelirrojo: "no",
  cabelloNaranja: "no",
  usaSombrero: "no",
  narizLarga: "no",
  arqueologa: "no",
  cocinero: "no",
  musico: "no",
  navegante: "no",
  gigante: "no",
  okama: "no",
  supernova: "no"
};

function crearPersonaje(nombre, descripcion, imagen, atributos) {
  return {
    nombre: nombre,
    descripcion: descripcion,
    imagen: imagen,
    atributos: {
      ...atributosBase,
      ...atributos
    }
  };
}

let personajes = [
  crearPersonaje("Monkey D. Luffy", "Capitan de los Sombrero de Paja. Su cuerpo se estira como goma.", "img/luffy.png", {
    hombre: "si", pirata: "si", sombreroPaja: "si", capitan: "si", emperador: "si",
    frutaDiablo: "si", haki: "si", usaSombrero: "si", frutaGoma: "si"
  }),

  crearPersonaje("Roronoa Zoro", "Espadachin de los Sombrero de Paja. Usa tres espadas.", "img/zoro.png", {
    hombre: "si", pirata: "si", sombreroPaja: "si", usaEspada: "si", haki: "si",
    cabelloVerde: "si", tresEspadas: "si"
  }),

  crearPersonaje("Nami", "Navegante de los Sombrero de Paja. Usa el clima tact.", "img/nami.png", {
    pirata: "si", sombreroPaja: "si", cabelloNaranja: "si", navegante: "si", climaTact: "si"
  }),

  crearPersonaje("Sanji", "Cocinero de los Sombrero de Paja. Pelea con patadas.", "img/sanji.png", {
    hombre: "si", pirata: "si", sombreroPaja: "si", cocinero: "si", haki: "si",
    cabelloRubio: "si", patadasCocinero: "si"
  }),

  crearPersonaje("Usopp", "Francotirador de los Sombrero de Paja. Tiene nariz larga.", "img/usopp.png", {
    hombre: "si", pirata: "si", sombreroPaja: "si", narizLarga: "si", resorteraUsopp: "si"
  }),

  crearPersonaje("Tony Tony Chopper", "Medico de los Sombrero de Paja. Es un reno.", "img/chopper.png", {
    hombre: "si", pirata: "si", sombreroPaja: "si", frutaDiablo: "si", medico: "si",
    animal: "si", usaSombrero: "si", renoMedico: "si"
  }),

  crearPersonaje("Nico Robin", "Arqueologa de los Sombrero de Paja. Puede hacer brotar brazos.", "img/robin.png", {
    pirata: "si", sombreroPaja: "si", frutaDiablo: "si", arqueologa: "si", brotarBrazos: "si"
  }),

  crearPersonaje("Franky", "Cyborg y carpintero de los Sombrero de Paja.", "img/franky.png", {
    hombre: "si", pirata: "si", sombreroPaja: "si", cyborg: "si", cyborgCarpintero: "si"
  }),

  crearPersonaje("Brook", "Musico de los Sombrero de Paja. Es un esqueleto.", "img/brook.png", {
    hombre: "si", pirata: "si", sombreroPaja: "si", frutaDiablo: "si", usaEspada: "si",
    esqueleto: "si", musico: "si", usaSombrero: "si", esqueletoMusico: "si"
  }),

  crearPersonaje("Jinbe", "Gyojin y timonel de los Sombrero de Paja.", "img/jinbe.png", {
    hombre: "si", pirata: "si", sombreroPaja: "si", gyojin: "si", haki: "si", karateGyojin: "si"
  }),

  crearPersonaje("Portgas D. Ace", "Hermano de Luffy. Controla fuego.", "img/ace.png", {
    hombre: "si", pirata: "si", frutaDiablo: "si", controlaFuego: "si", haki: "si",
    usaSombrero: "si", fuegoAce: "si"
  }),

  crearPersonaje("Sabo", "Revolucionario y hermano de Luffy. Usa el poder del fuego.", "img/sabo.png", {
    hombre: "si", revolucionario: "si", frutaDiablo: "si", controlaFuego: "si", haki: "si",
    cabelloRubio: "si", usaSombrero: "si", sombreroCopaSabo: "si"
  }),

  crearPersonaje("Trafalgar Law", "Capitan de los Piratas Heart. Es medico y usa la fruta Ope Ope.", "img/law.png", {
    hombre: "si", pirata: "si", capitan: "si", frutaDiablo: "si", usaEspada: "si",
    haki: "si", medico: "si", supernova: "si", usaSombrero: "si", opeOpe: "si"
  }),

  crearPersonaje("Shanks", "Pirata pelirrojo, capitan y emperador del mar.", "img/shanks.png", {
    hombre: "si", pirata: "si", capitan: "si", emperador: "si", usaEspada: "si",
    haki: "si", pelirrojo: "si", pelirrojoEmperador: "si"
  }),

  crearPersonaje("Buggy", "Pirata capitan. Puede separar su cuerpo en partes.", "img/buggy.png", {
    hombre: "si", pirata: "si", capitan: "si", emperador: "si", frutaDiablo: "si",
    villano: "si", usaSombrero: "si", separaCuerpo: "si"
  }),

  crearPersonaje("Dracule Mihawk", "Espadachin muy poderoso. Usa la espada Yoru.", "img/mihawk.png", {
    hombre: "si", usaEspada: "si", haki: "si", usaSombrero: "si", espadaYoru: "si"
  }),

  crearPersonaje("Boa Hancock", "Capitana pirata y usuaria de la fruta Mero Mero.", "img/hancock.png", {
    pirata: "si", capitan: "si", frutaDiablo: "si", haki: "si", meroMero: "si"
  }),

  crearPersonaje("Smoker", "Miembro de la Marina. Usa el poder del humo.", "img/smoker.png", {
    hombre: "si", marine: "si", frutaDiablo: "si", frutaHumo: "si"
  }),

  crearPersonaje("Koby", "Miembro de la Marina. Tiene haki y admira a Luffy.", "img/koby.png", {
    hombre: "si", marine: "si", haki: "si", marineKoby: "si"
  }),

  crearPersonaje("Donquixote Doflamingo", "Villano, capitan y usuario de la fruta de los hilos.", "img/doflamingo.png", {
    hombre: "si", pirata: "si", villano: "si", capitan: "si", frutaDiablo: "si",
    haki: "si", cabelloRubio: "si", hilosDoflamingo: "si"
  }),

  crearPersonaje("Crocodile", "Villano y usuario de la fruta de arena.", "img/crocodile.png", {
    hombre: "si", pirata: "si", villano: "si", capitan: "si", frutaDiablo: "si",
    frutaArena: "si"
  }),

  crearPersonaje("Monkey D. Garp", "Heroe de la Marina. Pelea principalmente con sus puños.", "img/garp.png", {
    hombre: "si", marine: "si", haki: "si", punosGarp: "si"
  }),

  crearPersonaje("Monkey D. Dragon", "Lider del Ejercito Revolucionario y padre de Luffy.", "img/dragon.png", {
    hombre: "si", revolucionario: "si", capitan: "si", haki: "si", padreLuffy: "si"
  }),

  crearPersonaje("Kaido", "Emperador del mar. Puede convertirse en dragon.", "img/kaido.png", {
    hombre: "si", pirata: "si", capitan: "si", emperador: "si", frutaDiablo: "si",
    villano: "si", haki: "si", wano: "si", dragonKaido: "si"
  }),

  crearPersonaje("Big Mom", "Emperatriz del mar. Usa el poder de las almas.", "img/bigmom.png", {
    pirata: "si", capitan: "si", emperador: "si", frutaDiablo: "si", villano: "si",
    haki: "si", gigante: "si", soulPocus: "si"
  }),

  crearPersonaje("Whitebeard", "Emperador del mar. Usa el poder de los terremotos.", "img/whitebeard.png", {
    hombre: "si", pirata: "si", capitan: "si", emperador: "si", frutaDiablo: "si",
    haki: "si", frutaTerremoto: "si"
  }),

  crearPersonaje("Blackbeard", "Emperador del mar. Usa el poder de la oscuridad.", "img/blackbeard.png", {
    hombre: "si", pirata: "si", capitan: "si", emperador: "si", frutaDiablo: "si",
    villano: "si", oscuridad: "si"
  }),

  crearPersonaje("Akainu", "Miembro importante de la Marina. Usa magma.", "img/akainu.png", {
    hombre: "si", marine: "si", frutaDiablo: "si", villano: "si", magma: "si"
  }),

  crearPersonaje("Aokiji", "Exmiembro de la Marina. Usa hielo.", "img/aokiji.png", {
    hombre: "si", marine: "si", frutaDiablo: "si", hielo: "si"
  }),

  crearPersonaje("Kizaru", "Almirante de la Marina. Usa luz.", "img/kizaru.png", {
    hombre: "si", marine: "si", frutaDiablo: "si", luz: "si"
  }),

  crearPersonaje("Fujitora", "Almirante de la Marina. Usa gravedad.", "img/fujitora.png", {
    hombre: "si", marine: "si", frutaDiablo: "si", usaEspada: "si", haki: "si", gravedad: "si"
  }),

  crearPersonaje("Rob Lucci", "Agente del Gobierno Mundial. Puede transformarse en leopardo.", "img/lucci.png", {
    hombre: "si", villano: "si", frutaDiablo: "si", leopardoCP0: "si"
  }),

  crearPersonaje("Katakuri", "Pirata de Big Mom. Usa mochi y haki de observacion.", "img/katakuri.png", {
    hombre: "si", pirata: "si", frutaDiablo: "si", haki: "si", mochi: "si"
  }),

  crearPersonaje("Enel", "Villano de Skypiea. Usa el poder de los rayos.", "img/enel.png", {
    hombre: "si", villano: "si", frutaDiablo: "si", rayosEnel: "si"
  }),

  crearPersonaje("Perona", "Personaje que usa fantasmas.", "img/perona.png", {
    pirata: "si", frutaDiablo: "si", fantasmas: "si"
  }),

  crearPersonaje("Vivi", "Princesa de Alabasta.", "img/vivi.png", {
    princesa: "si", princesaAlabasta: "si"
  }),

  crearPersonaje("Yamato", "Personaje de Wano relacionado con Kaido.", "img/yamato.png", {
    frutaDiablo: "si", haki: "si", wano: "si", hijaKaido: "si"
  }),

  crearPersonaje("Marco", "Pirata de Whitebeard. Tiene poder de fenix.", "img/marco.png", {
    hombre: "si", pirata: "si", frutaDiablo: "si", haki: "si", fenix: "si"
  }),

  crearPersonaje("Eustass Kid", "Supernova con poderes de magnetismo.", "img/kid.png", {
    hombre: "si", pirata: "si", capitan: "si", frutaDiablo: "si", haki: "si",
    supernova: "si", magnetismo: "si"
  }),

  crearPersonaje("Killer", "Supernova y compañero de Kid.", "img/killer.png", {
    hombre: "si", pirata: "si", supernova: "si", usaEspada: "si", sonrisaKiller: "si"
  }),

  crearPersonaje("Bon Clay", "Okama que puede cambiar de apariencia.", "img/bonclay.png", {
    hombre: "si", frutaDiablo: "si", okama: "si", cambiaGeneroOkama: "si"
  }),

  crearPersonaje("Bepo", "Oso polar y miembro de los Piratas Heart.", "img/bepo.png", {
    hombre: "si", pirata: "si", animal: "si", osoPolar: "si"
  }),

  crearPersonaje("Silvers Rayleigh", "Rey oscuro y antiguo compañero de Roger.", "img/rayleigh.png", {
    hombre: "si", pirata: "si", usaEspada: "si", haki: "si", reyOscuro: "si"
  }),

  crearPersonaje("Gol D. Roger", "Rey de los piratas.", "img/roger.png", {
    hombre: "si", pirata: "si", capitan: "si", haki: "si", reyPirata: "si"
  }),

  crearPersonaje("Kozuki Oden", "Samurai de Wano que viajo con Roger y Whitebeard.", "img/oden.png", {
    hombre: "si", pirata: "si", usaEspada: "si", haki: "si", wano: "si", samuraiWanoOden: "si"
  }),

  crearPersonaje("Kinemon", "Samurai de Wano que puede cortar fuego.", "img/kinemon.png", {
    hombre: "si", wano: "si", usaEspada: "si", frutaDiablo: "si", fuegoKinemon: "si"
  }),

  crearPersonaje("Momonosuke", "Personaje de Wano que puede transformarse en dragon.", "img/momonosuke.png", {
    hombre: "si", wano: "si", frutaDiablo: "si", dragonMomo: "si"
  }),

  crearPersonaje("Tashigi", "Espadachina de la Marina.", "img/tashigi.png", {
    marine: "si", usaEspada: "si", espadachinaMarine: "si"
  }),

  crearPersonaje("Ivankov", "Revolucionario okama con poderes hormonales.", "img/ivankov.png", {
    hombre: "si", revolucionario: "si", frutaDiablo: "si", okama: "si", hormoneIvankov: "si"
  }),

  crearPersonaje("Koala", "Miembro del Ejercito Revolucionario.", "img/koala.png", {
    revolucionario: "si", karateKoala: "si"
  }),

  crearPersonaje("Rebecca", "Gladiadora y princesa de Dressrosa.", "img/rebecca.png", {
    princesa: "si", usaEspada: "si", gladiadora: "si"
  }),

  crearPersonaje("Shirahoshi", "Princesa sirena gigante.", "img/shirahoshi.png", {
    princesa: "si", gyojin: "si", gigante: "si", sirenaGigante: "si"
  }),

  crearPersonaje("Arlong", "Gyojin villano con nariz de sierra.", "img/arlong.png", {
    hombre: "si", pirata: "si", villano: "si", gyojin: "si", tiburonSierra: "si"
  }),

  crearPersonaje("Hody Jones", "Gyojin villano.", "img/hody.png", {
    hombre: "si", pirata: "si", villano: "si", gyojin: "si", hodyGyojin: "si"
  }),

  crearPersonaje("Caesar Clown", "Cientifico villano que usa gas.", "img/caesar.png", {
    hombre: "si", villano: "si", frutaDiablo: "si", gasCaesar: "si"
  }),

  crearPersonaje("Magellan", "Exdirector de Impel Down. Usa veneno.", "img/magellan.png", {
    hombre: "si", frutaDiablo: "si", venenoMagellan: "si"
  }),

  crearPersonaje("Bartolomeo", "Capitan pirata con poderes de barrera.", "img/bartolomeo.png", {
    hombre: "si", pirata: "si", capitan: "si", frutaDiablo: "si", barreraBartolomeo: "si"
  }),

  crearPersonaje("Cavendish", "Pirata rubio y espadachin.", "img/cavendish.png", {
    hombre: "si", pirata: "si", capitan: "si", usaEspada: "si", cabelloRubio: "si", caballoCavendish: "si"
  }),

  crearPersonaje("X Drake", "Supernova con fruta de dinosaurio.", "img/xdrake.png", {
    hombre: "si", pirata: "si", marine: "si", frutaDiablo: "si", supernova: "si", dinosaurioDrake: "si"
  }),

  crearPersonaje("Basil Hawkins", "Supernova que usa cartas y muñecos de paja.", "img/hawkins.png", {
    hombre: "si", pirata: "si", capitan: "si", frutaDiablo: "si", supernova: "si", cartasHawkins: "si"
  }),

  crearPersonaje("Scratchmen Apoo", "Supernova que ataca con musica.", "img/apoo.png", {
    hombre: "si", pirata: "si", capitan: "si", frutaDiablo: "si", supernova: "si", musicaApoo: "si"
  }),

  crearPersonaje("Capone Bege", "Supernova con estilo de mafia.", "img/bege.png", {
    hombre: "si", pirata: "si", capitan: "si", frutaDiablo: "si", supernova: "si", mafiaBege: "si"
  }),

  crearPersonaje("Jewelry Bonney", "Supernova que cambia edades.", "img/bonney.png", {
    pirata: "si", capitan: "si", frutaDiablo: "si", supernova: "si", comeMuchoBonney: "si"
  }),

  crearPersonaje("Bartholomew Kuma", "Revolucionario convertido en cyborg con poderes de paw paw.", "img/kuma.png", {
    hombre: "si", revolucionario: "si", frutaDiablo: "si", cyborg: "si", pawKuma: "si"
  })
];

let preguntas = [
  { texto: "Tu personaje es hombre?", atributo: "hombre", peso: 20, tipo: "general" },
  { texto: "Tu personaje es pirata?", atributo: "pirata", peso: 8, tipo: "general" },
  { texto: "Tu personaje pertenece a los Sombrero de Paja?", atributo: "sombreroPaja", peso: 15, tipo: "grupo" },
  { texto: "Tu personaje pertenece a la Marina?", atributo: "marine", peso: 15, tipo: "grupo" },
  { texto: "Tu personaje pertenece al Ejercito Revolucionario?", atributo: "revolucionario", peso: 12, tipo: "grupo" },
  { texto: "Tu personaje es villano?", atributo: "villano", peso: 8, tipo: "grupo" },
  { texto: "Tu personaje es capitan?", atributo: "capitan", peso: 8, tipo: "grupo" },
  { texto: "Tu personaje es emperador del mar?", atributo: "emperador", peso: 12, tipo: "grupo" },
  { texto: "Tu personaje tiene fruta del diablo?", atributo: "frutaDiablo", peso: 12, tipo: "poder" },
  { texto: "Tu personaje usa espada?", atributo: "usaEspada", peso: 10, tipo: "poder" },
  { texto: "Tu personaje usa haki?", atributo: "haki", peso: 7, tipo: "poder" },
  { texto: "Tu personaje es gyojin?", atributo: "gyojin", peso: 20, tipo: "fuerte" },
  { texto: "Tu personaje es cyborg?", atributo: "cyborg", peso: 20, tipo: "fuerte" },
  { texto: "Tu personaje es un esqueleto?", atributo: "esqueleto", peso: 25, tipo: "fuerte" },
  { texto: "Tu personaje es un animal o criatura?", atributo: "animal", peso: 16, tipo: "fuerte" },
  { texto: "Tu personaje es medico?", atributo: "medico", peso: 10, tipo: "oficio" },
  { texto: "Tu personaje es princesa?", atributo: "princesa", peso: 12, tipo: "grupo" },
  { texto: "Tu personaje esta relacionado con Wano?", atributo: "wano", peso: 12, tipo: "grupo" },
  { texto: "Tu personaje controla fuego?", atributo: "controlaFuego", peso: 14, tipo: "poder" },
  { texto: "Tu personaje tiene cabello verde?", atributo: "cabelloVerde", peso: 12, tipo: "fisico" },
  { texto: "Tu personaje tiene cabello rubio?", atributo: "cabelloRubio", peso: 8, tipo: "fisico" },
  { texto: "Tu personaje es pelirrojo?", atributo: "pelirrojo", peso: 14, tipo: "fisico" },
  { texto: "Tu personaje tiene cabello naranja?", atributo: "cabelloNaranja", peso: 12, tipo: "fisico" },
  { texto: "Tu personaje usa sombrero?", atributo: "usaSombrero", peso: 5, tipo: "fisico" },
  { texto: "Tu personaje tiene nariz larga?", atributo: "narizLarga", peso: 20, tipo: "fisico" },
  { texto: "Tu personaje es arqueologa?", atributo: "arqueologa", peso: 18, tipo: "oficio" },
  { texto: "Tu personaje es cocinero?", atributo: "cocinero", peso: 15, tipo: "oficio" },
  { texto: "Tu personaje es musico?", atributo: "musico", peso: 15, tipo: "oficio" },
  { texto: "Tu personaje es navegante?", atributo: "navegante", peso: 15, tipo: "oficio" },
  { texto: "Tu personaje es gigante o muy grande?", atributo: "gigante", peso: 15, tipo: "fisico" },
  { texto: "Tu personaje es okama?", atributo: "okama", peso: 14, tipo: "grupo" },
  { texto: "Tu personaje es supernova?", atributo: "supernova", peso: 10, tipo: "grupo" },

  { texto: "Su cuerpo se estira como goma?", atributo: "frutaGoma", peso: 80, tipo: "decisiva", decisivoPara: "Monkey D. Luffy", depende: { pirata: "si", sombreroPaja: "si", frutaDiablo: "si" } },
  { texto: "Usa tres espadas?", atributo: "tresEspadas", peso: 80, tipo: "decisiva", decisivoPara: "Roronoa Zoro", depende: { sombreroPaja: "si", usaEspada: "si" } },
  { texto: "Es navegante y usa un clima tact?", atributo: "climaTact", peso: 80, tipo: "decisiva", decisivoPara: "Nami", depende: { sombreroPaja: "si", navegante: "si" } },
  { texto: "Es cocinero y pelea principalmente con patadas?", atributo: "patadasCocinero", peso: 80, tipo: "decisiva", decisivoPara: "Sanji", depende: { sombreroPaja: "si", cocinero: "si" } },
  { texto: "Tiene nariz larga y usa resortera?", atributo: "resorteraUsopp", peso: 80, tipo: "decisiva", decisivoPara: "Usopp", depende: { sombreroPaja: "si", narizLarga: "si" } },
  { texto: "Es un reno medico?", atributo: "renoMedico", peso: 80, tipo: "decisiva", decisivoPara: "Tony Tony Chopper", depende: { sombreroPaja: "si", medico: "si" } },
  { texto: "Puede hacer brotar brazos?", atributo: "brotarBrazos", peso: 80, tipo: "decisiva", decisivoPara: "Nico Robin", depende: { sombreroPaja: "si", frutaDiablo: "si" } },
  { texto: "Es un cyborg carpintero?", atributo: "cyborgCarpintero", peso: 80, tipo: "decisiva", decisivoPara: "Franky", depende: { sombreroPaja: "si", cyborg: "si" } },
  { texto: "Es un esqueleto musico?", atributo: "esqueletoMusico", peso: 80, tipo: "decisiva", decisivoPara: "Brook", depende: { sombreroPaja: "si", esqueleto: "si" } },
  { texto: "Usa karate gyojin?", atributo: "karateGyojin", peso: 80, tipo: "decisiva", decisivoPara: "Jinbe", depende: { sombreroPaja: "si", gyojin: "si" } },
  { texto: "Es hermano de Luffy y controla fuego?", atributo: "fuegoAce", peso: 80, tipo: "decisiva", decisivoPara: "Portgas D. Ace", depende: { controlaFuego: "si", frutaDiablo: "si" } },
  { texto: "Usa sombrero de copa y pertenece al Ejercito Revolucionario?", atributo: "sombreroCopaSabo", peso: 80, tipo: "decisiva", decisivoPara: "Sabo", depende: { revolucionario: "si", controlaFuego: "si" } },
  { texto: "Usa la fruta Ope Ope?", atributo: "opeOpe", peso: 80, tipo: "decisiva", decisivoPara: "Trafalgar Law", depende: { medico: "si", frutaDiablo: "si" } },
  { texto: "Es pelirrojo y emperador del mar?", atributo: "pelirrojoEmperador", peso: 80, tipo: "decisiva", decisivoPara: "Shanks", depende: { emperador: "si", pelirrojo: "si" } },
  { texto: "Puede separar su cuerpo en partes?", atributo: "separaCuerpo", peso: 80, tipo: "decisiva", decisivoPara: "Buggy", depende: { frutaDiablo: "si", pirata: "si" } },
  { texto: "Usa la espada negra Yoru?", atributo: "espadaYoru", peso: 80, tipo: "decisiva", decisivoPara: "Dracule Mihawk", depende: { usaEspada: "si" } },
  { texto: "Usa la fruta Mero Mero?", atributo: "meroMero", peso: 80, tipo: "decisiva", decisivoPara: "Boa Hancock", depende: { frutaDiablo: "si" } },
  { texto: "Usa el poder del humo?", atributo: "frutaHumo", peso: 80, tipo: "decisiva", decisivoPara: "Smoker", depende: { marine: "si", frutaDiablo: "si" } },
  { texto: "Es un marine joven que admira a Luffy?", atributo: "marineKoby", peso: 80, tipo: "decisiva", decisivoPara: "Koby", depende: { marine: "si" } },
  { texto: "Usa hilos como poder principal?", atributo: "hilosDoflamingo", peso: 80, tipo: "decisiva", decisivoPara: "Donquixote Doflamingo", depende: { frutaDiablo: "si", villano: "si" } },
  { texto: "Usa el poder de la arena?", atributo: "frutaArena", peso: 80, tipo: "decisiva", decisivoPara: "Crocodile", depende: { frutaDiablo: "si", villano: "si" } },
  { texto: "Es famoso por pelear con sus puños en la Marina?", atributo: "punosGarp", peso: 80, tipo: "decisiva", decisivoPara: "Monkey D. Garp", depende: { marine: "si" } },
  { texto: "Es el padre de Luffy?", atributo: "padreLuffy", peso: 80, tipo: "decisiva", decisivoPara: "Monkey D. Dragon", depende: { revolucionario: "si" } },
  { texto: "Puede transformarse en dragon y fue emperador?", atributo: "dragonKaido", peso: 80, tipo: "decisiva", decisivoPara: "Kaido", depende: { emperador: "si", frutaDiablo: "si" } },
  { texto: "Usa el poder de las almas?", atributo: "soulPocus", peso: 80, tipo: "decisiva", decisivoPara: "Big Mom", depende: { emperador: "si", frutaDiablo: "si" } },
  { texto: "Usa el poder de los terremotos?", atributo: "frutaTerremoto", peso: 80, tipo: "decisiva", decisivoPara: "Whitebeard", depende: { emperador: "si", frutaDiablo: "si" } },
  { texto: "Usa el poder de la oscuridad?", atributo: "oscuridad", peso: 80, tipo: "decisiva", decisivoPara: "Blackbeard", depende: { emperador: "si", frutaDiablo: "si" } },
  { texto: "Usa magma?", atributo: "magma", peso: 80, tipo: "decisiva", decisivoPara: "Akainu", depende: { marine: "si", frutaDiablo: "si" } },
  { texto: "Usa hielo?", atributo: "hielo", peso: 80, tipo: "decisiva", decisivoPara: "Aokiji", depende: { marine: "si", frutaDiablo: "si" } },
  { texto: "Usa luz?", atributo: "luz", peso: 80, tipo: "decisiva", decisivoPara: "Kizaru", depende: { marine: "si", frutaDiablo: "si" } },
  { texto: "Usa gravedad?", atributo: "gravedad", peso: 80, tipo: "decisiva", decisivoPara: "Fujitora", depende: { marine: "si", frutaDiablo: "si" } },
  { texto: "Puede transformarse en leopardo?", atributo: "leopardoCP0", peso: 80, tipo: "decisiva", decisivoPara: "Rob Lucci", depende: { frutaDiablo: "si" } },
  { texto: "Usa mochi como poder?", atributo: "mochi", peso: 80, tipo: "decisiva", decisivoPara: "Katakuri", depende: { frutaDiablo: "si", pirata: "si" } },
  { texto: "Usa rayos?", atributo: "rayosEnel", peso: 80, tipo: "decisiva", decisivoPara: "Enel", depende: { frutaDiablo: "si", villano: "si" } },
  { texto: "Usa fantasmas?", atributo: "fantasmas", peso: 80, tipo: "decisiva", decisivoPara: "Perona", depende: { frutaDiablo: "si" } },
  { texto: "Es la princesa de Alabasta?", atributo: "princesaAlabasta", peso: 80, tipo: "decisiva", decisivoPara: "Vivi", depende: { princesa: "si" } },
  { texto: "Es descendiente o familiar de Kaido?", atributo: "hijaKaido", peso: 80, tipo: "decisiva", decisivoPara: "Yamato", depende: { wano: "si" } },
  { texto: "Tiene poder de fenix?", atributo: "fenix", peso: 80, tipo: "decisiva", decisivoPara: "Marco", depende: { frutaDiablo: "si", pirata: "si" } },
  { texto: "Usa magnetismo?", atributo: "magnetismo", peso: 80, tipo: "decisiva", decisivoPara: "Eustass Kid", depende: { supernova: "si", frutaDiablo: "si" } },
  { texto: "Es compañero de Kid y usa una mascara?", atributo: "sonrisaKiller", peso: 80, tipo: "decisiva", decisivoPara: "Killer", depende: { supernova: "si" } },
  { texto: "Puede cambiar su apariencia?", atributo: "cambiaGeneroOkama", peso: 80, tipo: "decisiva", decisivoPara: "Bon Clay", depende: { okama: "si", frutaDiablo: "si" } },
  { texto: "Es un oso polar?", atributo: "osoPolar", peso: 80, tipo: "decisiva", decisivoPara: "Bepo", depende: { animal: "si" } },
  { texto: "Es conocido como el Rey Oscuro?", atributo: "reyOscuro", peso: 80, tipo: "decisiva", decisivoPara: "Silvers Rayleigh", depende: { haki: "si" } },
  { texto: "Es el Rey de los Piratas?", atributo: "reyPirata", peso: 80, tipo: "decisiva", decisivoPara: "Gol D. Roger", depende: { pirata: "si", capitan: "si" } },
  { texto: "Es un samurai de Wano que viajo con Roger?", atributo: "samuraiWanoOden", peso: 80, tipo: "decisiva", decisivoPara: "Kozuki Oden", depende: { wano: "si", usaEspada: "si" } },
  { texto: "Es un samurai que puede cortar fuego?", atributo: "fuegoKinemon", peso: 80, tipo: "decisiva", decisivoPara: "Kinemon", depende: { wano: "si", usaEspada: "si" } },
  { texto: "Es de Wano y puede transformarse en dragon?", atributo: "dragonMomo", peso: 80, tipo: "decisiva", decisivoPara: "Momonosuke", depende: { wano: "si", frutaDiablo: "si" } },
  { texto: "Es una espadachina de la Marina?", atributo: "espadachinaMarine", peso: 80, tipo: "decisiva", decisivoPara: "Tashigi", depende: { marine: "si", usaEspada: "si" } },
  { texto: "Usa poderes hormonales?", atributo: "hormoneIvankov", peso: 80, tipo: "decisiva", decisivoPara: "Ivankov", depende: { revolucionario: "si", frutaDiablo: "si" } },
  { texto: "Es revolucionaria y practica karate gyojin?", atributo: "karateKoala", peso: 80, tipo: "decisiva", decisivoPara: "Koala", depende: { revolucionario: "si" } },
  { texto: "Es gladiadora de Dressrosa?", atributo: "gladiadora", peso: 80, tipo: "decisiva", decisivoPara: "Rebecca", depende: { princesa: "si" } },
  { texto: "Es una princesa sirena gigante?", atributo: "sirenaGigante", peso: 80, tipo: "decisiva", decisivoPara: "Shirahoshi", depende: { princesa: "si", gyojin: "si" } },
  { texto: "Es un gyojin con nariz de sierra?", atributo: "tiburonSierra", peso: 80, tipo: "decisiva", decisivoPara: "Arlong", depende: { gyojin: "si", villano: "si" } },
  { texto: "Es un gyojin villano de la isla gyojin?", atributo: "hodyGyojin", peso: 80, tipo: "decisiva", decisivoPara: "Hody Jones", depende: { gyojin: "si", villano: "si" } },
  { texto: "Es un cientifico que usa gas?", atributo: "gasCaesar", peso: 80, tipo: "decisiva", decisivoPara: "Caesar Clown", depende: { frutaDiablo: "si", villano: "si" } },
  { texto: "Usa veneno?", atributo: "venenoMagellan", peso: 80, tipo: "decisiva", decisivoPara: "Magellan", depende: { frutaDiablo: "si" } },
  { texto: "Usa barreras?", atributo: "barreraBartolomeo", peso: 80, tipo: "decisiva", decisivoPara: "Bartolomeo", depende: { frutaDiablo: "si", pirata: "si" } },
  { texto: "Es un pirata rubio con doble personalidad?", atributo: "caballoCavendish", peso: 80, tipo: "decisiva", decisivoPara: "Cavendish", depende: { pirata: "si", cabelloRubio: "si" } },
  { texto: "Tiene fruta de dinosaurio?", atributo: "dinosaurioDrake", peso: 80, tipo: "decisiva", decisivoPara: "X Drake", depende: { supernova: "si", frutaDiablo: "si" } },
  { texto: "Usa cartas y muñecos de paja?", atributo: "cartasHawkins", peso: 80, tipo: "decisiva", decisivoPara: "Basil Hawkins", depende: { supernova: "si", frutaDiablo: "si" } },
  { texto: "Ataca usando musica?", atributo: "musicaApoo", peso: 80, tipo: "decisiva", decisivoPara: "Scratchmen Apoo", depende: { supernova: "si", frutaDiablo: "si" } },
  { texto: "Tiene estilo de mafia y castillo en su cuerpo?", atributo: "mafiaBege", peso: 80, tipo: "decisiva", decisivoPara: "Capone Bege", depende: { supernova: "si", frutaDiablo: "si" } },
  { texto: "Es una supernova que cambia edades?", atributo: "comeMuchoBonney", peso: 80, tipo: "decisiva", decisivoPara: "Jewelry Bonney", depende: { supernova: "si", frutaDiablo: "si" } },
  { texto: "Usa poderes de almohadillas en las manos?", atributo: "pawKuma", peso: 80, tipo: "decisiva", decisivoPara: "Bartholomew Kuma", depende: { revolucionario: "si", frutaDiablo: "si" } }
];

let preguntaActual = 0;
let respuestasUsuario = {};
let resultadoFinal = null;
let preguntaSeleccionada = null;
let preguntasRestantes = [];

let maxPreguntas = 18;
let minimoPreguntasAntesDeAdivinar = 5;
let puntajeParaAdivinar = 75;
let ventajaMinima = 18;

let aprendizajeTemp = null;
let preguntasAprendizaje = [];
let indiceAprendizaje = 0;

function mostrarPantalla(idPantalla) {
  let pantallas = document.querySelectorAll(".pantalla");

  pantallas.forEach(function(pantalla) {
    pantalla.classList.remove("activa");
  });

  document.getElementById(idPantalla).classList.add("activa");
}

function obtenerValor(personaje, atributo) {
  if (!personaje.atributos) {
    return "no";
  }

  return personaje.atributos[atributo] || "no";
}

function buscarPreguntaPorAtributo(atributo) {
  return preguntas.find(function(pregunta) {
    return pregunta.atributo === atributo;
  });
}

function cumpleFiltroDuro(personaje) {
  if (respuestasUsuario.hombre) {
    if (obtenerValor(personaje, "hombre") !== respuestasUsuario.hombre) {
      return false;
    }
  }

  return true;
}

function calcularPuntaje(personaje) {
  let puntos = 0;

  for (let atributo in respuestasUsuario) {
    let respuesta = respuestasUsuario[atributo];
    let valorPersonaje = obtenerValor(personaje, atributo);
    let pregunta = buscarPreguntaPorAtributo(atributo);
    let peso = pregunta ? pregunta.peso : 5;

    if (valorPersonaje === respuesta) {
      puntos += peso;
    } else {
      puntos -= peso * 0.7;
    }
  }

  return Math.round(puntos);
}

function obtenerPersonajesOrdenados() {
  return personajes
    .filter(cumpleFiltroDuro)
    .map(function(personaje) {
      return {
        ...personaje,
        puntaje: calcularPuntaje(personaje)
      };
    })
    .sort(function(a, b) {
      return b.puntaje - a.puntaje;
    });
}

function dependenciasCumplidas(pregunta) {
  if (!pregunta.depende) {
    return true;
  }

  for (let atributo in pregunta.depende) {
    if (respuestasUsuario[atributo] !== pregunta.depende[atributo]) {
      return false;
    }
  }

  return true;
}

function obtenerPreguntasDisponibles() {
  return preguntasRestantes.filter(function(pregunta) {
    return dependenciasCumplidas(pregunta);
  });
}

function elegirMejorPregunta() {
  let disponibles = obtenerPreguntasDisponibles();

  if (disponibles.length === 0) {
    return preguntasRestantes[0];
  }

  let ordenInicial = [
    "hombre",
    "pirata",
    "sombreroPaja",
    "marine",
    "revolucionario",
    "frutaDiablo",
    "usaEspada",
    "capitan"
  ];

  for (let i = 0; i < ordenInicial.length; i++) {
    let atributo = ordenInicial[i];

    let preguntaInicial = disponibles.find(function(pregunta) {
      return pregunta.atributo === atributo;
    });

    if (preguntaInicial) {
      return preguntaInicial;
    }
  }

  let mejoresPersonajes = obtenerPersonajesOrdenados().slice(0, 6);

  let preguntaDecisiva = disponibles.find(function(pregunta) {
    return pregunta.tipo === "decisiva" && mejoresPersonajes.some(function(personaje) {
      return personaje.nombre === pregunta.decisivoPara;
    });
  });

  if (preguntaDecisiva && preguntaActual >= 4) {
    return preguntaDecisiva;
  }

  let mejoresParaAnalisis = obtenerPersonajesOrdenados().slice(0, 14);
  let mejorPregunta = disponibles[0];
  let mejorValor = -Infinity;

  disponibles.forEach(function(pregunta) {
    if (pregunta.tipo === "decisiva" && preguntaActual < 4) {
      return;
    }

    let cantidadSi = 0;
    let cantidadNo = 0;

    mejoresParaAnalisis.forEach(function(personaje) {
      if (obtenerValor(personaje, pregunta.atributo) === "si") {
        cantidadSi++;
      } else {
        cantidadNo++;
      }
    });

    if (cantidadSi === 0 || cantidadNo === 0) {
      return;
    }

    let balance = 1 - Math.abs(cantidadSi - cantidadNo) / mejoresParaAnalisis.length;
    let valorPregunta = pregunta.peso + balance * 20;

    if (pregunta.tipo === "decisiva") {
      valorPregunta += 20;
    }

    if (valorPregunta > mejorValor) {
      mejorValor = valorPregunta;
      mejorPregunta = pregunta;
    }
  });

  return mejorPregunta;
}

function puedeAdivinar() {
  if (preguntaActual < minimoPreguntasAntesDeAdivinar) {
    return false;
  }

  let ordenados = obtenerPersonajesOrdenados();

  if (ordenados.length === 0) {
    return true;
  }

  let primero = ordenados[0];
  let segundo = ordenados[1];

  if (!segundo) {
    return primero.puntaje >= puntajeParaAdivinar;
  }

  let ventaja = primero.puntaje - segundo.puntaje;

  return primero.puntaje >= puntajeParaAdivinar && ventaja >= ventajaMinima;
}

function iniciarJuego() {
  cargarDatosAprendidos();

  preguntaActual = 0;
  respuestasUsuario = {};
  resultadoFinal = null;
  preguntaSeleccionada = null;
  preguntasRestantes = [...preguntas];

  mostrarPantalla("pantallaJuego");
  mostrarPregunta();
}

function mostrarPregunta() {
  if (preguntaActual >= maxPreguntas || preguntasRestantes.length === 0 || puedeAdivinar()) {
    mostrarResultado();
    return;
  }

  preguntaSeleccionada = elegirMejorPregunta();

  if (!preguntaSeleccionada) {
    mostrarResultado();
    return;
  }

  document.getElementById("preguntaTexto").textContent = preguntaSeleccionada.texto;

  document.getElementById("contadorPregunta").textContent =
    "Pregunta " + (preguntaActual + 1) + " de " + maxPreguntas;

  let ordenados = obtenerPersonajesOrdenados();

  let rama = "Rama inicial";

  if (respuestasUsuario.hombre === "si") {
    rama = "Rama de personajes hombres";
  } else if (respuestasUsuario.hombre === "no") {
    rama = "Rama de personajes mujeres";
  }

  document.getElementById("contadorCandidatos").textContent =
    rama + " | Posibilidades: " + ordenados.length;
}

function responder(respuesta) {
  if (!preguntaSeleccionada) {
    return;
  }

  respuestasUsuario[preguntaSeleccionada.atributo] = respuesta;

  preguntasRestantes = preguntasRestantes.filter(function(pregunta) {
    return pregunta.atributo !== preguntaSeleccionada.atributo;
  });

  preguntaActual++;
  mostrarPregunta();
}

function mostrarResultado() {
  let ordenados = obtenerPersonajesOrdenados();

  if (ordenados.length > 0) {
    resultadoFinal = ordenados[0];
  } else {
    resultadoFinal = {
      nombre: "No pude adivinarlo",
      descripcion: "No encontre un personaje con esas caracteristicas.",
      imagen: "",
      puntaje: 0
    };
  }

  document.getElementById("resultadoPersonaje").textContent = resultadoFinal.nombre;
  document.getElementById("resultadoDescripcion").textContent = resultadoFinal.descripcion;
  document.getElementById("resultadoPuntaje").textContent =
    "Puntaje obtenido: " + (resultadoFinal.puntaje || 0);

  let imagen = document.getElementById("imagenResultado");

  if (resultadoFinal.imagen) {
    imagen.src = resultadoFinal.imagen;
    imagen.style.display = "block";
  } else {
    imagen.style.display = "none";
  }

  imagen.onerror = function() {
    imagen.style.display = "none";
  };

  mostrarPantalla("pantallaResultado");
}

function acierto() {
  document.getElementById("mensajeFinal").textContent =
    "El sistema experto adivino correctamente usando preguntas, ramas y puntajes.";

  mostrarPantalla("pantallaFinal");
}

function fallo() {
  document.getElementById("nuevoPersonaje").value = "";
  document.getElementById("descripcionNuevo").value = "";
  document.getElementById("imagenNuevo").value = "";
  document.getElementById("preguntaUnicaTexto").value = "";

  document.getElementById("formularioAprendizaje").classList.remove("oculto");
  document.getElementById("preguntasAprendizaje").classList.add("oculto");
  document.getElementById("preguntaUnicaAprendizaje").classList.add("oculto");

  mostrarPantalla("pantallaAprendizaje");
}

function iniciarAprendizaje() {
  let nombre = document.getElementById("nuevoPersonaje").value.trim();
  let descripcion = document.getElementById("descripcionNuevo").value.trim();
  let archivoImagen = document.getElementById("imagenNuevo").files[0];

  if (nombre === "") {
    alert("Escribe el nombre del personaje.");
    return;
  }

  aprendizajeTemp = {
    nombre: nombre,
    descripcion: descripcion || "Personaje aprendido por el sistema.",
    imagen: "",
    atributos: {}
  };

  if (archivoImagen) {
    let lector = new FileReader();

    lector.onload = function(evento) {
      aprendizajeTemp.imagen = evento.target.result;
      comenzarPreguntasAprendizaje();
    };

    lector.readAsDataURL(archivoImagen);
  } else {
    comenzarPreguntasAprendizaje();
  }
}

function comenzarPreguntasAprendizaje() {
  preguntasAprendizaje = preguntas.filter(function(pregunta) {
    return pregunta.tipo !== "decisiva";
  });

  indiceAprendizaje = 0;

  document.getElementById("formularioAprendizaje").classList.add("oculto");
  document.getElementById("preguntasAprendizaje").classList.remove("oculto");

  mostrarPreguntaAprendizaje();
}

function mostrarPreguntaAprendizaje() {
  if (indiceAprendizaje >= preguntasAprendizaje.length) {
    document.getElementById("preguntasAprendizaje").classList.add("oculto");
    document.getElementById("preguntaUnicaAprendizaje").classList.remove("oculto");
    return;
  }

  let pregunta = preguntasAprendizaje[indiceAprendizaje];

  document.getElementById("contadorAprendizaje").textContent =
    "Aprendizaje " + (indiceAprendizaje + 1) + " de " + preguntasAprendizaje.length;

  document.getElementById("preguntaAprendizajeTexto").textContent = pregunta.texto;
}

function responderAprendizaje(respuesta) {
  let pregunta = preguntasAprendizaje[indiceAprendizaje];

  aprendizajeTemp.atributos[pregunta.atributo] = respuesta;

  indiceAprendizaje++;
  mostrarPreguntaAprendizaje();
}

function crearSlug(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

function guardarPersonajeAprendido() {
  let textoPreguntaUnica = document.getElementById("preguntaUnicaTexto").value.trim();

  if (textoPreguntaUnica === "") {
    alert("Escribe una pregunta unica para distinguir al personaje.");
    return;
  }

  let atributoUnico = "unico_" + crearSlug(aprendizajeTemp.nombre);

  aprendizajeTemp.atributos[atributoUnico] = "si";

  let nuevoPersonaje = crearPersonaje(
    aprendizajeTemp.nombre,
    aprendizajeTemp.descripcion,
    aprendizajeTemp.imagen,
    aprendizajeTemp.atributos
  );

  let nuevaPregunta = {
    texto: textoPreguntaUnica,
    atributo: atributoUnico,
    peso: 90,
    tipo: "decisiva",
    decisivoPara: aprendizajeTemp.nombre
  };

  let personajesAprendidos = leerLocalStorage(CLAVE_PERSONAJES);
  let preguntasAprendidas = leerLocalStorage(CLAVE_PREGUNTAS);

  let yaExiste = personajesAprendidos.some(function(personaje) {
    return personaje.nombre.toLowerCase() === nuevoPersonaje.nombre.toLowerCase();
  });

  if (!yaExiste) {
    personajesAprendidos.push(nuevoPersonaje);
  }

  let preguntaExiste = preguntasAprendidas.some(function(pregunta) {
    return pregunta.atributo === nuevaPregunta.atributo;
  });

  if (!preguntaExiste) {
    preguntasAprendidas.push(nuevaPregunta);
  }

  guardarLocalStorage(CLAVE_PERSONAJES, personajesAprendidos);
  guardarLocalStorage(CLAVE_PREGUNTAS, preguntasAprendidas);

  cargarDatosAprendidos();

  document.getElementById("mensajeFinal").textContent =
    "El sistema aprendio a " + aprendizajeTemp.nombre + ". En la siguiente partida ya podra usarlo como nuevo caso.";

  mostrarPantalla("pantallaFinal");
}

function leerLocalStorage(clave) {
  try {
    return JSON.parse(localStorage.getItem(clave)) || [];
  } catch (error) {
    return [];
  }
}

function guardarLocalStorage(clave, datos) {
  localStorage.setItem(clave, JSON.stringify(datos));
}

function cargarDatosAprendidos() {
  let personajesAprendidos = leerLocalStorage(CLAVE_PERSONAJES);
  let preguntasAprendidas = leerLocalStorage(CLAVE_PREGUNTAS);

  personajesAprendidos.forEach(function(personajeAprendido) {
    let existe = personajes.some(function(personaje) {
      return personaje.nombre.toLowerCase() === personajeAprendido.nombre.toLowerCase();
    });

    if (!existe) {
      personajes.push(personajeAprendido);
    }
  });

  preguntasAprendidas.forEach(function(preguntaAprendida) {
    let existe = preguntas.some(function(pregunta) {
      return pregunta.atributo === preguntaAprendida.atributo;
    });

    if (!existe) {
      preguntas.push(preguntaAprendida);
    }
  });
}

function reiniciarJuego() {
  mostrarPantalla("pantallaInicio");
}

cargarDatosAprendidos();