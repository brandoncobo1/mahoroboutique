import type { Lang } from './lang'

const en = {
  nav: {
    home: 'Home', rooms: 'Rooms', about: 'About', gallery: 'Gallery',
    reviews: 'Reviews', location: 'Location', faq: 'FAQ',
    reserve: 'Reserve', reserveNow: 'Reserve Now', phone: '+355 69 606 0522',
  },
  hero: {
    tagline: 'Vlorë, Albania · Est. 2023',
    h1a: 'Where the sea',
    h1b: 'finds stillness.',
    sub: 'Boutique Hotel · Rooftop Pool · 400m from the Beach',
    cta1: 'Reserve Now',
    cta2: 'Explore Rooms',
  },
  stats: [
    { num: '400', label: 'Metres', desc: 'To Vlore Beach' },
    { num: '11', label: 'Rooms', desc: 'Each one different' },
    { num: 'Rooftop', label: 'Pool & Bar', desc: 'With panoramic sea views' },
    { num: '4.6', label: 'Rating', desc: 'Booking.com · 31 reviews' },
  ],
  manifesto: {
    label: 'The Mahoro Story',
    h2a: 'A place that belongs',
    h2b: 'to the Adriatic coast.',
    p1: 'Mahoro arrived quietly in Vlorë in 2023 — eleven rooms, a rooftop pool, and a conviction that the Albanian Riviera deserved a hotel that actually looked like it belonged here. Warm timber ceilings, rattan pendant lights, rooms that open onto sea air. The kind of place where the design decisions are invisible until you realise you\'ve been exhaling since you arrived.',
    p2: 'Vlorë has long been one of the Adriatic\'s best-kept secrets. The Lungomare stretches south in both directions. The sea is the colour of something you haven\'t quite seen before. We built Mahoro for guests who travel to feel somewhere rather than see something — who understand that the right room, the right light, and the right view are worth more than five amenity checkboxes.',
  },
  rooms: {
    label: 'Accommodation',
    h2a: 'Six rooms.',
    h2b: 'Every one different.',
    viewAll: 'View All Rooms',
    discover: 'Discover',
  },
  amenities: {
    label: 'What We Offer',
    h2: 'What\nawaits\nyou.',
    items: [
      { name: 'Rooftop Pool', desc: 'An infinity-edge pool on the roof, framing a 180° panorama of the Ionian Sea.' },
      { name: 'Buffet Breakfast', desc: 'A generous morning spread of local and continental fare, served daily.' },
      { name: 'Sea View Rooms', desc: 'Every balcony faces the water. Wake to the Lungomare below and mountains beyond.' },
      { name: 'Bar & Restaurant', desc: 'Fresh Adriatic cuisine. Local wine. Room service available throughout the day.' },
      { name: 'Free Parking', desc: 'Private on-site parking at no extra charge — a genuine rarity in central Vlorë.' },
      { name: '24h Front Desk', desc: 'The team is always on. Late arrivals, early departures, local recommendations.' },
    ],
  },
  pool: {
    quote: 'The rooftop is where Vlorë reveals itself.',
    cta: 'Reserve Your Stay',
  },
  reviews: {
    label: 'Guest Voices',
    h2: 'What our guests say.',
    viewAll: 'Read All Reviews',
  },
  gallery: {
    label: 'Visual Story',
    h2: 'A hotel you need to see.',
    viewAll: 'Explore the Gallery',
  },
  location: {
    label: 'Where We Are',
    h2: 'The heart of Vlorë.',
    address: 'Rruga Duro Shaska, Vlorë 9401, Albania — close to everything, far from the noise.',
    directions: 'Full Directions',
  },
  cta: {
    label: 'Begin Your Stay',
    h2a: 'Your stay begins',
    h2b: 'with one decision.',
    p: 'Reserve directly for the guaranteed best rate — no fees, no intermediaries, just you and the Adriatic.',
    btn: 'Reserve Directly',
  },
}

type Translation = typeof en

const t: Record<Lang, Translation> = {
  en,

  sq: {
    nav: {
      home: 'Kryefaqja', rooms: 'Dhoma', about: 'Rreth Nesh', gallery: 'Galeria',
      reviews: 'Vlerësimet', location: 'Vendndodhja', faq: 'Pyetje',
      reserve: 'Rezervo', reserveNow: 'Rezervo Tani', phone: '+355 69 606 0522',
    },
    hero: {
      tagline: 'Vlorë, Shqipëri · Est. 2023',
      h1a: 'Ku deti gjen',
      h1b: 'qetësinë e tij.',
      sub: 'Hotel Butik · Pishinë në Çati · 400m nga Plazhi',
      cta1: 'Rezervo Tani',
      cta2: 'Shfleto Dhomat',
    },
    stats: [
      { num: '400', label: 'Metra', desc: 'Deri në Plazhin e Vlorës' },
      { num: '11', label: 'Dhoma', desc: 'Secila ndryshe' },
      { num: 'Çati', label: 'Pishinë & Bar', desc: 'Me panoramë detare 180°' },
      { num: '4.6', label: 'Vlerësim', desc: 'Booking.com · 31 komente' },
    ],
    manifesto: {
      label: 'Historia e Mahoros',
      h2a: 'Një vend që i përket',
      h2b: 'bregdetit Adriatik.',
      p1: 'Mahoro erdhi qetësisht në Vlorë në vitin 2023 — njëmbëdhjetë dhoma, një pishinë në çati, dhe bindja se Riviera Shqiptare meritonte një hotel që dukej sikur vërtet i përkiste këtu. Tavanet e ngrohta të drunjta, llambat varëse të ratanit, dhoma që hapen drejt ajrit të detit. Lloji i vendit ku vendimet e dizajnit janë të padukshme, derisa të kuptosh se ke qenë duke marrë frymë thellë që kur ke arritur.',
      p2: 'Vlora ka qenë gjithmonë një nga sekretet më të ruajtura të Adriatikut. Lungomare shtrihet nga të dyja anët. Deti është ngjyrë e diçkaje që nuk e ke parë kurrë më parë. Ndërtuam Mahoro për mysafirë që udhëtojnë për të ndjerë një vend, jo vetëm për ta parë — që kuptojnë se dhoma e duhur, drita e duhur dhe pamja e duhur vlen më shumë se pesë opsione komoditeti.',
    },
    rooms: {
      label: 'Akomodim',
      h2a: 'Gjashtë dhoma.',
      h2b: 'Secila ndryshe.',
      viewAll: 'Shiko Të Gjitha Dhomat',
      discover: 'Zbulo',
    },
    amenities: {
      label: 'Çfarë Ofrojmë',
      h2: 'Çfarë\nju\npret.',
      items: [
        { name: 'Pishinë në Çati', desc: 'Pishinë me pamje të detit Jon 180°, mbi çatinë e hotelit.' },
        { name: 'Mëngjes Bufe', desc: 'Mëngjes i pasur me produkte lokale dhe kontinentale, çdo ditë.' },
        { name: 'Dhoma me Pamje Deti', desc: 'Çdo ballkon drejtohet nga deti. Zgjohuni me Lungomare poshtë dhe male përtej.' },
        { name: 'Bar & Restorant', desc: 'Kuzhinë e freskët Adriatike. Verë lokale. Shërbim dhome gjatë gjithë ditës.' },
        { name: 'Parkim Falas', desc: 'Parkim privat pa pagesë shtesë — diçka e rrallë në qendër të Vlorës.' },
        { name: 'Recepsion 24h', desc: 'Ekipi është gjithmonë në punë. Mbërritje të vonë, nisje të hershme, rekomandime lokale.' },
      ],
    },
    pool: {
      quote: 'Çatia është vendi ku Vlora zbulohet vetë.',
      cta: 'Rezervo Qëndrimin Tuaj',
    },
    reviews: {
      label: 'Zërat e Mysafirëve',
      h2: 'Çfarë thonë mysafirët tanë.',
      viewAll: 'Lexo Të Gjitha Vlerësimet',
    },
    gallery: {
      label: 'Historia Vizuale',
      h2: 'Një hotel që duhet ta shihni.',
      viewAll: 'Eksploroni Galerinë',
    },
    location: {
      label: 'Ku Jemi',
      h2: 'Zemra e Vlorës.',
      address: 'Rruga Duro Shaska, Vlorë 9401, Shqipëri — afër gjithçkaje, larg zhurmës.',
      directions: 'Udhëzimet e Plota',
    },
    cta: {
      label: 'Filloni Qëndrimin Tuaj',
      h2a: 'Qëndrimi juaj fillon',
      h2b: 'me një vendim.',
      p: 'Rezervoni drejtpërdrejt për çmimin më të mirë të garantuar — pa tarifa, pa ndërmjetës, vetëm ju dhe Adriatiku.',
      btn: 'Rezervo Drejtpërdrejt',
    },
  },

  it: {
    nav: {
      home: 'Home', rooms: 'Camere', about: 'Chi Siamo', gallery: 'Galleria',
      reviews: 'Recensioni', location: 'Posizione', faq: 'FAQ',
      reserve: 'Prenota', reserveNow: 'Prenota Ora', phone: '+355 69 606 0522',
    },
    hero: {
      tagline: 'Vlorë, Albania · Est. 2023',
      h1a: 'Dove il mare',
      h1b: 'trova la quiete.',
      sub: 'Hotel Boutique · Piscina sul Tetto · 400m dalla Spiaggia',
      cta1: 'Prenota Ora',
      cta2: 'Scopri le Camere',
    },
    stats: [
      { num: '400', label: 'Metri', desc: 'Dalla spiaggia di Vlorë' },
      { num: '11', label: 'Camere', desc: 'Ognuna diversa' },
      { num: 'Rooftop', label: 'Piscina & Bar', desc: 'Con vista panoramica sul mare' },
      { num: '4.6', label: 'Valutazione', desc: 'Booking.com · 31 recensioni' },
    ],
    manifesto: {
      label: 'La Storia di Mahoro',
      h2a: 'Un luogo che appartiene',
      h2b: 'alla costa adriatica.',
      p1: 'Mahoro è arrivato silenziosamente a Vlorë nel 2023 — undici camere, una piscina sul tetto e la convinzione che la Riviera Albanese meritasse un hotel che sembrasse davvero di appartenere qui. Soffitti in legno caldo, lampade in rattan, camere che si aprono sull\'aria di mare. Il tipo di posto dove le scelte di design sono invisibili finché non ti rendi conto che stai respirando lentamente dall\'istante in cui sei arrivato.',
      p2: 'Vlorë è da sempre uno dei segreti meglio custoditi dell\'Adriatico. Il Lungomare si estende verso sud in entrambe le direzioni. Il mare ha il colore di qualcosa che non avete mai visto prima. Abbiamo costruito Mahoro per gli ospiti che viaggiano per sentire un luogo piuttosto che vederlo — che capiscono che la camera giusta, la luce giusta e la vista giusta valgono più di cinque opzioni di comfort.',
    },
    rooms: {
      label: 'Alloggio',
      h2a: 'Sei camere.',
      h2b: 'Ognuna diversa.',
      viewAll: 'Vedi Tutte le Camere',
      discover: 'Scopri',
    },
    amenities: {
      label: 'Cosa Offriamo',
      h2: 'Cosa vi\naspetta\nqui.',
      items: [
        { name: 'Piscina sul Tetto', desc: 'Una piscina a sfioro sul tetto con un panorama a 180° sul Mar Ionio.' },
        { name: 'Colazione a Buffet', desc: 'Una ricca colazione con prodotti locali e continentali, servita ogni giorno.' },
        { name: 'Camere Vista Mare', desc: 'Ogni balcone dà sul mare. Svegliatevi con il Lungomare sotto e le montagne oltre.' },
        { name: 'Bar & Ristorante', desc: 'Cucina adriatica fresca. Vini locali. Servizio in camera disponibile tutto il giorno.' },
        { name: 'Parcheggio Gratuito', desc: 'Parcheggio privato senza costi aggiuntivi — una rarità nel centro di Vlorë.' },
        { name: 'Reception 24h', desc: 'Il team è sempre disponibile. Arrivi tardivi, partenze anticipate, consigli locali.' },
      ],
    },
    pool: {
      quote: 'Il rooftop è dove Vlorë si rivela.',
      cta: 'Prenota il Tuo Soggiorno',
    },
    reviews: {
      label: 'Voci degli Ospiti',
      h2: 'Cosa dicono i nostri ospiti.',
      viewAll: 'Leggi Tutte le Recensioni',
    },
    gallery: {
      label: 'Storia Visiva',
      h2: 'Un hotel che devi vedere.',
      viewAll: 'Esplora la Galleria',
    },
    location: {
      label: 'Dove Siamo',
      h2: 'Il cuore di Vlorë.',
      address: 'Rruga Duro Shaska, Vlorë 9401, Albania — vicino a tutto, lontano dal rumore.',
      directions: 'Indicazioni Complete',
    },
    cta: {
      label: 'Inizia il Tuo Soggiorno',
      h2a: 'Il tuo soggiorno',
      h2b: 'inizia con una scelta.',
      p: 'Prenota direttamente per la tariffa migliore garantita — nessuna commissione, nessun intermediario, solo tu e l\'Adriatico.',
      btn: 'Prenota Direttamente',
    },
  },
}

export function useT(lang: Lang): Translation {
  return t[lang]
}
