// Dati dell'attività — TODO: sostituire i valori segnaposto con quelli reali.
export const wa = (text) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
export const chf = (n) => (n == null ? 'Prezzo su richiesta' : `CHF ${n.toLocaleString('de-CH')}.–`);

export const site = {
  name: 'Monopattini.ch',
  tagline: 'Monopattini elettrici usati, controllati e garantiti',
  phone: '+41 79 453 05 76',
  whatsapp: '41794530576', // numero senza "+" e spazi, per il link wa.me
  email: 'info@monopattini.ch', // TODO: verificare che la casella esista
  instagram: 'monopattini.ch', // TODO: nome Instagram reale
  hours: [
    ['Lun – Ven', '09:00 – 12:00 · 14:00 – 18:30'], // TODO
    ['Sabato', '09:00 – 16:00'],
    ['Domenica', 'Chiuso'],
  ],
};

// Monopattini usati in vendita — aggiungere, modificare o rimuovere voci qui.
// Ogni monopattino ha una pagina propria: /usato/<slug>
//   photos      file in src/assets/ — il primo è la foto principale
//   status      'disponibile' (verde), 'arrivo' (arancione), 'esaurito' (rosso)
//   year        anno di uscita del modello; year, km e condition sono facoltativi
//   price       prezzo di vendita in CHF; null = "Prezzo su richiesta"
//   diagnosi    dati letti dal monopattino (chip, batteria, cicli, tempi) — campi facoltativi
//   ricambi     ricambi sostituiti o migliorati: ['Nome', prezzo] (prezzo facoltativo)
//   punteggio   valutazione da 1 a 10: { totale, batteria, freni, gomme, estetica, elettronica }
//   velocita    velocità legale su strada (20 km/h in Svizzera); velocitaMax tra parentesi "strade private"
//   photoCredit autore e licenza della foto, se presa da internet
//   video       facoltativo: link YouTube oppure file in public/video/ (es. '/video/pro2.mp4')
//   specs       scheda tecnica [etichetta, valore] — dati del produttore, TODO: verificare
//   description, work (revisione effettuata), included — TODO: testi segnaposto
export const scooters = [
  {
    slug: 'xiaomi-essential', model: 'Xiaomi Essential', photos: ['xiaomi-essential-1.webp', 'xiaomi-essential-2.webp', 'xiaomi-essential-3.webp', 'xiaomi-essential-4.webp', 'xiaomi-essential-5.webp'], status: 'disponibile',
    year: 2022, km: 70, price: 140, condition: 'Come nuovo',
    velocita: 20, velocitaMax: '40 km/h', // 20 km/h = limite legale su strada; velocitaMax su strade private
    diagnosi: { chip: 'GD32E', dataBatteria: '01.11.2022', saluteBatteria: 98, cicliInteri: 8, cicliParziali: 14, tempoAcceso: '12 h 4 min', tempoGuida: '6 h 10 min' },
    specs: [
      ['Motore', '250 W'],
      ['Batteria', '36 V – 5100 mAh'],
      ['Autonomia dichiarata', '20 km'],
      ['Pneumatici', '8,5" con camera d’aria'],
      ['Freni', 'Disco posteriore + E-ABS anteriore'],
      ['Peso', '12 kg'],
      ['Carico massimo', '100 kg'],
      ['Dimensioni (aperto)', '108 × 43 × 114 cm'],
    ],
    // TODO: ricambi montati ['Nome', prezzo] e punteggio { totale, batteria, freni, gomme, estetica, elettronica }
    ricambi: [],
    punteggio: null,
    work: ['Controllo e regolazione freni', 'Controllo pneumatici', 'Serraggio di tutte le viti', 'Prova su strada'],
    included: ['Caricatore', '6 mesi di garanzia'],
    video: '',
  },
  {
    slug: 'xiaomi-1s', model: 'Xiaomi 1S', photos: ['xiaomi-1s-1.webp', 'xiaomi-1s-2.webp', 'xiaomi-1s-3.png', 'xiaomi-1s-4.png', 'xiaomi-1s-5.png', 'xiaomi-1s-6.png', 'xiaomi-1s-7.webp'], status: 'disponibile',
    year: 2020, km: 800, price: 150, condition: 'Molto buono',
    velocita: 20, velocitaMax: '40 km/h', // 20 km/h = limite legale su strada; velocitaMax su strade private
    diagnosi: { saluteBatteria: 92 } /* TODO: dati diagnosi reali */,
    specs: [
      ['Motore', '250 W'],
      ['Batteria', '36 V – 7650 mAh'],
      ['Autonomia dichiarata', '30 km'],
      ['Pneumatici', '8,5" con camera d’aria'],
      ['Freni', 'Disco posteriore + E-ABS anteriore'],
      ['Peso', '12,5 kg'],
      ['Carico massimo', '100 kg'],
      ['Dimensioni (aperto)', '108 × 43 × 114 cm'],
    ],
    // TODO: ricambi montati ['Nome', prezzo] e punteggio { totale, batteria, freni, gomme, estetica, elettronica }
    ricambi: [],
    punteggio: null,
    work: ['Controllo e regolazione freni', 'Controllo pneumatici', 'Serraggio di tutte le viti', 'Prova su strada'],
    included: ['Caricatore', '6 mesi di garanzia'],
    video: '',
  },
  {
    slug: 'xiaomi-pro', model: 'Xiaomi Pro', photos: ['xiaomi-pro-1.png', 'xiaomi-pro-2.png', 'xiaomi-pro-3.png', 'xiaomi-pro-4.png', 'xiaomi-pro-5.png', 'xiaomi-pro-6.png'], status: 'disponibile',
    year: 2019, km: 1115, price: 150, condition: 'Molto buono',
    velocita: 20, velocitaMax: '45 km/h', // 20 km/h = limite legale su strada; velocitaMax su strade private
    diagnosi: { chip: 'STM32F', dataBatteria: '30.05.2019', saluteBatteria: 98, cicliInteri: 55, cicliParziali: 148, tempoAcceso: '23 g 12 h 8 min', tempoGuida: '6 g 20 h 19 min' },
    specs: [
      ['Motore', '300 W'],
      ['Batteria', '36 V – 474 Wh'],
      ['Autonomia dichiarata', '45 km'],
      ['Pneumatici', '8,5" con camera d’aria'],
      ['Freni', 'Disco posteriore + E-ABS anteriore'],
      ['Peso', '14,2 kg'],
      ['Carico massimo', '100 kg'],
      ['Dimensioni (aperto)', '113 × 43 × 118 cm'],
    ],
    // TODO: ricambi montati ['Nome', prezzo] e punteggio { totale, batteria, freni, gomme, estetica, elettronica }
    ricambi: [],
    punteggio: null,
    work: ['Controllo e regolazione freni', 'Controllo pneumatici', 'Serraggio di tutte le viti', 'Prova su strada'],
    included: ['Caricatore', '6 mesi di garanzia'],
    video: '',
  },
  {
    slug: 'xiaomi-pro-2', model: 'Xiaomi Pro 2', photos: ['xiaomi-pro-1.png', 'xiaomi-pro-2.png', 'xiaomi-pro-3.png', 'xiaomi-pro-4.png', 'xiaomi-pro-5.png', 'xiaomi-pro-6.png'], status: 'disponibile',
    year: 2021, km: 900, price: 160, condition: 'Molto buono',
    velocita: 20, velocitaMax: '45 km/h', // 20 km/h = limite legale su strada; velocitaMax su strade private
    diagnosi: { chip: 'STM32F', dataBatteria: '04.10.2021', saluteBatteria: 98, cicliInteri: 92, cicliParziali: 252, tempoAcceso: '23 g 12 h 7 min', tempoGuida: '7 g 17 h 1 min' },
    specs: [
      ['Motore', '300 W (picco 600 W)'],
      ['Batteria', '36 V – 474 Wh'],
      ['Autonomia dichiarata', '45 km'],
      ['Pneumatici', '8,5" con camera d’aria'],
      ['Freni', 'Disco posteriore + E-ABS anteriore'],
      ['Peso', '14,2 kg'],
      ['Carico massimo', '100 kg'],
      ['Dimensioni (aperto)', '113 × 43 × 118 cm'],
    ],
    // TODO: ricambi montati ['Nome', prezzo] e punteggio { totale, batteria, freni, gomme, estetica, elettronica }
    ricambi: [],
    punteggio: null,
    work: ['Controllo e regolazione freni', 'Controllo pneumatici', 'Serraggio di tutte le viti', 'Prova su strada'],
    included: ['Caricatore', '6 mesi di garanzia'],
    video: '',
  },
  {
    slug: 'xiaomi-4-pro', model: 'Xiaomi 4 Pro (2nd Gen)', photos: ['xiaomi-4-pro-1.png', 'xiaomi-4-pro-2.png', 'xiaomi-4-pro-3.png', 'xiaomi-4-pro-4.png', 'xiaomi-4-pro-5.png', 'xiaomi-4-pro-6.png', 'xiaomi-4-pro-7.png', 'xiaomi-4-pro-8.webp'], status: 'disponibile',
    year: 2025, km: 1500, price: 200, condition: 'Molto buono',
    velocita: 20, velocitaMax: '30 km/h', // 20 km/h = limite legale su strada; velocitaMax su strade private
    diagnosi: { dataBatteria: '02.01.2024', saluteBatteria: 98, cicliInteri: 51, tempoUtilizzo: '562 giorni' },
    specs: [
      ['Motore', '400 W (picco 1000 W)'],
      ['Batteria', '48 V – 468 Wh'],
      ['Autonomia dichiarata', '60 km'],
      ['Pneumatici', '10" tubeless'],
      ['Freni', 'Tamburo + E-ABS'],
      ['Peso', '19 kg'],
      ['Carico massimo', '120 kg'],
    ],
    // TODO: ricambi montati ['Nome', prezzo] e punteggio { totale, batteria, freni, gomme, estetica, elettronica }
    ricambi: [],
    punteggio: null,
    work: ['Controllo e regolazione freni', 'Controllo pneumatici', 'Serraggio di tutte le viti', 'Prova su strada'],
    included: ['Caricatore', '6 mesi di garanzia'],
    video: '',
  },
  {
    slug: 'xiaomi-5', model: 'Xiaomi 5', photos: ['xiaomi-5-1.png', 'xiaomi-5-2.png', 'xiaomi-5-3.png', 'xiaomi-5-4.png', 'xiaomi-5-5.png', 'xiaomi-5-6.png'], status: 'disponibile',
    year: 2025, km: 2100, price: 300, condition: 'Come nuovo',
    velocita: 20, velocitaMax: '30 km/h', // 20 km/h = limite legale su strada; velocitaMax su strade private
    diagnosi: { dataBatteria: '26.02.2025', saluteBatteria: 98, cicliInteri: 55, tempoUtilizzo: '463 giorni' },
    specs: [
      ['Motore', '350 W (picco 700 W)'],
      ['Batteria', '477 Wh (10,2 Ah)'],
      ['Autonomia dichiarata', '60 km'],
      ['Pneumatici', '10" tubeless'],
      ['Freni', 'Tamburo + E-ABS'],
      ['Sospensioni', 'Anteriore'],
      ['Peso', '20,1 kg'],
      ['Carico massimo', '120 kg'],
      ['Dimensioni (aperto)', '114 × 57 × 128 cm'],
    ],
    // TODO: ricambi montati ['Nome', prezzo] e punteggio { totale, batteria, freni, gomme, estetica, elettronica }
    ricambi: [],
    punteggio: null,
    work: ['Controllo e regolazione freni', 'Controllo pneumatici', 'Serraggio di tutte le viti', 'Prova su strada'],
    included: ['Caricatore', '6 mesi di garanzia'],
    video: '',
  },
];

// "20 km/h (45 km/h strade private)"
export const speedLabel = (sc) => `${sc.velocita} km/h` + (sc.velocitaMax ? ` (${sc.velocitaMax} strade private)` : '');
export const statusLabel = { disponibile: 'Disponibile', arrivo: 'In arrivo', esaurito: 'Non disponibile' };

// Quanto paghiamo i monopattini usati: min = condizioni scarse, max = ottime condizioni (CHF).
// Ordine delle marche nella fisarmonica; una marca appare solo se ha almeno un modello.
export const buyBrands = ['Xiaomi', 'Ninebot', 'Kukirin', 'Navee'];

// Modelli mostrati nell'ordine di questa lista. brand deve essere uno di buyBrands.
export const buyPrices = [
  { brand: 'Xiaomi', model: 'Scooter 1', min: 50, max: 75 },
  { brand: 'Xiaomi', model: 'Scooter 2', min: 60, max: 80 },
  { brand: 'Xiaomi', model: 'Scooter 3', min: 65, max: 85 },
  { brand: 'Xiaomi', model: 'Scooter 4', min: 90, max: 130 },
  { brand: 'Xiaomi', model: 'Scooter 5', min: 180, max: 220 },
  { brand: 'Xiaomi', model: 'Scooter 6', min: 200, max: 250 },
  // TODO: modelli e prezzi segnaposto per mostrare le altre marche.
  { brand: 'Ninebot', model: 'Max G30', min: 100, max: 150 },
  { brand: 'Kukirin', model: 'G2', min: 80, max: 120 },
  { brand: 'Navee', model: 'N65', min: 90, max: 140 },
];

// Come funziona l'acquisto (home)
export const steps = [
  { title: 'Scegli', text: 'Guarda i monopattini disponibili, confrontali e scegli quello giusto.' },
  { title: 'Scrivici', text: 'Chiedi info su WhatsApp: ti rispondiamo e fissiamo un appuntamento.' },
  { title: 'Provalo', text: 'Vieni a vederlo e a provarlo prima di decidere.' },
  { title: 'Parti', text: 'Lo ritiri e parti, con 6 mesi di garanzia.' },
];

// Come funziona la vendita (pagina Vendi)
export const sellSteps = [
  { title: 'Valutazione', text: 'Mandaci modello, foto e km su WhatsApp: ti diamo una stima.' },
  { title: 'Controllo', text: 'Controlliamo il monopattino e confermiamo il prezzo.' },
  { title: 'Pagamento', text: "Se l'offerta ti va bene, ti paghiamo subito." }, // TODO: indicare i metodi di pagamento
];
