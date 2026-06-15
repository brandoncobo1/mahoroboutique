export interface Room {
  slug: string
  badge: string
  name: string
  beds: string
  capacity: string
  view: string
  balcony: string
  desc: string
  longDesc: string[]
  tags: string[]
  heroImage: string
  heroLabel: string
  photos: { src: string; alt: string; wide?: boolean; tall?: boolean }[]
  stripPhotos: { src: string; alt: string }[]
  specs: { label: string; val: string }[]
  amenities: string[]
}

export const rooms: Room[] = [
  {
    slug: 'sea-view',
    badge: 'Sea View',
    name: 'Deluxe Double Room with Sea View',
    beds: '1 Queen Bed',
    capacity: '2 Adults',
    view: 'Direct Sea View',
    balcony: 'Yes, private',
    heroImage: '/images/694870449.jpg',
    heroLabel: 'Deluxe Room · Sea View',
    desc: 'The private balcony looks directly out over the Ionian Sea. Wake to that horizon every morning.',
    longDesc: [
      'The Deluxe Double Room with Sea View is where Vlorë\'s coastline becomes part of your daily rhythm. The private balcony looks directly out over the Ionian Sea — coffee in the morning with that horizon, and the glow of last light on the water in the evening.',
      'Inside, the queen bed faces the balcony doors so the view is the first thing you see when you wake. The room is finished in the hotel\'s signature palette: warm honey-toned walls, rattan pendant lights, wooden ceiling beams that catch the afternoon light. The bathroom features a walk-in glass shower, stone tile, and a rainfall showerhead.',
    ],
    tags: ['Direct Sea View', 'Private Balcony', 'Queen Bed'],
    photos: [
      { src: '/images/694870449.jpg', alt: 'Deluxe Sea View Room with balcony overlooking the Ionian Sea', wide: true, tall: true },
      { src: '/images/694870453.jpg', alt: 'Queen bed with rattan headboard and sea view window' },
      { src: '/images/694870460.jpg', alt: 'Balcony with wrought iron chairs and sea panorama' },
      { src: '/images/694870464.jpg', alt: 'Room interior with warm honey walls and pendant light' },
      { src: '/images/694870474.jpg', alt: 'Bathroom with glass shower and stone tile' },
      { src: '/images/694870481.jpg', alt: 'Sea view from the private balcony' },
      { src: '/images/694870489.jpg', alt: 'Wide room view showing full sea view balcony', wide: true },
      { src: '/images/694870497.jpg', alt: 'Bedside table with lamp detail' },
      { src: '/images/694870501.jpg', alt: 'Bathroom vanity with marble finish' },
    ],
    stripPhotos: [
      { src: '/images/694870506.jpg', alt: 'Evening sea view from balcony' },
      { src: '/images/694870509.jpg', alt: 'Morning light in the room' },
      { src: '/images/694870513.jpg', alt: 'Balcony detail at dusk' },
      { src: '/images/694870517.jpg', alt: 'Room overview' },
      { src: '/images/694870518.jpg', alt: 'Shower details' },
    ],
    specs: [
      { label: 'Room type', val: 'Deluxe Double' },
      { label: 'Bed', val: '1 Queen Bed' },
      { label: 'Capacity', val: '2 Adults' },
      { label: 'View', val: 'Direct Sea View' },
      { label: 'Balcony', val: 'Yes, private' },
      { label: 'Breakfast', val: 'Available' },
      { label: 'Rooftop pool', val: 'Complimentary' },
    ],
    amenities: ['Queen bed', 'Direct sea view balcony', 'Air conditioning', 'Smart TV (40")', 'Walk-in glass shower', 'Rain showerhead', 'Complimentary Wi-Fi', 'Hairdryer', 'Bathrobe & slippers', 'Minibar', 'Safe deposit box', 'Daily housekeeping', 'Blackout curtains', 'Desk & chair'],
  },
  {
    slug: 'side-sea-view',
    badge: 'Side Sea View',
    name: 'Deluxe Double Room with Side Sea View',
    beds: '1 Queen Bed',
    capacity: '2 Adults',
    view: 'Side Sea View',
    balcony: 'Yes, private',
    heroImage: '/images/694857450.jpg',
    heroLabel: 'Deluxe Room · Side Sea View',
    desc: 'The Ionian caught at a diagonal — a glimpse of blue between the hillside and the sky.',
    longDesc: [
      'The Ionian caught at a diagonal — a glimpse of blue between the hillside and the sky. The balcony angles toward the water, drawing you back throughout the day.',
      'The room carries the same warmth as its sea-facing counterpart: rattan pendant lighting, honey-toned walls, a queen bed positioned to catch the afternoon light. The stone-tiled bathroom has a walk-in glass shower with a rainfall head.',
    ],
    tags: ['Side Sea View', 'Private Balcony', 'Queen Bed'],
    photos: [
      { src: '/images/694857450.jpg', alt: 'Side sea view room with rattan interiors', wide: true, tall: true },
      { src: '/images/694857460.jpg', alt: 'Balcony angled toward the sea' },
      { src: '/images/694857468.jpg', alt: 'Queen bed facing the balcony' },
      { src: '/images/694857472.jpg', alt: 'Room interior detail' },
      { src: '/images/694848115.jpg', alt: 'Side sea view from balcony' },
      { src: '/images/694848135.jpg', alt: 'Bathroom with stone tile' },
      { src: '/images/694848159.jpg', alt: 'Wide balcony perspective', wide: true },
    ],
    stripPhotos: [
      { src: '/images/694848301.jpg', alt: 'Room atmosphere' },
      { src: '/images/694848406.jpg', alt: 'Balcony evening' },
      { src: '/images/694848424.jpg', alt: 'Rattan pendant light' },
      { src: '/images/694848445.jpg', alt: 'Room overview' },
    ],
    specs: [
      { label: 'Room type', val: 'Deluxe Double' },
      { label: 'Bed', val: '1 Queen Bed' },
      { label: 'Capacity', val: '2 Adults' },
      { label: 'View', val: 'Side Sea View' },
      { label: 'Balcony', val: 'Yes, private' },
      { label: 'Breakfast', val: 'Available' },
      { label: 'Rooftop pool', val: 'Complimentary' },
    ],
    amenities: ['Queen bed', 'Side sea view balcony', 'Air conditioning', 'Smart TV (40")', 'Walk-in glass shower', 'Rain showerhead', 'Complimentary Wi-Fi', 'Hairdryer', 'Bathrobe & slippers', 'Minibar', 'Safe deposit box', 'Daily housekeeping'],
  },
  {
    slug: 'sea-view-family',
    badge: 'Sea View — Family',
    name: 'Deluxe Double Room with Sea View — Family',
    beds: '1 Full Bed + 2 Sofa Beds',
    capacity: 'Up to 4 Guests',
    view: 'Direct Sea View',
    balcony: 'Yes, private',
    heroImage: '/images/694842267.jpg',
    heroLabel: 'Sea View · Family Room',
    desc: 'Our most spacious room: a full bed plus two sofa beds, all opening onto a direct sea view balcony.',
    longDesc: [
      'Our most spacious room: a full bed plus two sofa beds, all opening onto a direct sea view balcony. The layout gives every guest room to breathe without compromising on the view.',
      'The family room retains the same warm aesthetic — rattan pendants, honey walls, warm timber ceiling. The balcony is wide enough for a table and chairs, making it a natural gathering point at the start and end of each day.',
    ],
    tags: ['Direct Sea View', 'Family Room', 'Full + 2 Sofa Beds'],
    photos: [
      { src: '/images/694842267.jpg', alt: 'Spacious sea view family room', wide: true, tall: true },
      { src: '/images/694842331.jpg', alt: 'Private balcony table with sea view' },
      { src: '/images/694842518.jpg', alt: 'Balcony with loungers and sea panorama' },
      { src: '/images/694848301.jpg', alt: 'Warm room interior with ceiling beams' },
      { src: '/images/694848424.jpg', alt: 'Rattan pendant detail' },
      { src: '/images/694848445.jpg', alt: 'Full bed with rattan headboard', wide: true },
    ],
    stripPhotos: [
      { src: '/images/694848115.jpg', alt: 'Room at golden hour' },
      { src: '/images/694848135.jpg', alt: 'Bathroom detail' },
      { src: '/images/694848159.jpg', alt: 'Wide balcony view' },
      { src: '/images/694848406.jpg', alt: 'Evening atmosphere' },
    ],
    specs: [
      { label: 'Room type', val: 'Deluxe Family' },
      { label: 'Beds', val: '1 Full Bed + 2 Sofa Beds' },
      { label: 'Capacity', val: 'Up to 4 Guests' },
      { label: 'View', val: 'Direct Sea View' },
      { label: 'Balcony', val: 'Yes, private' },
      { label: 'Breakfast', val: 'Available' },
      { label: 'Rooftop pool', val: 'Complimentary' },
    ],
    amenities: ['Full bed + 2 sofa beds', 'Direct sea view balcony', 'Air conditioning', 'Smart TV (40")', 'Walk-in glass shower', 'Rain showerhead', 'Complimentary Wi-Fi', 'Hairdryer', 'Bathrobe & slippers', 'Minibar', 'Safe deposit box', 'Daily housekeeping', 'Baby cot on request'],
  },
  {
    slug: 'mountain-view',
    badge: 'Mountain View',
    name: 'Double Room with Mountain View',
    beds: '1 Queen Bed + 1 Sofa Bed',
    capacity: '2 Adults, 1 Child',
    view: 'Mountain View',
    balcony: 'Yes, private',
    heroImage: '/images/694848445.jpg',
    heroLabel: 'Double Room · Mountain View',
    desc: 'The layered silhouette of the Albanian hills — a quieter, greener prospect that rewards early risers.',
    longDesc: [
      'The layered silhouette of the Albanian hills — a quieter, greener prospect that rewards early risers. A queen bed and sofa bed for two adults and a child.',
      'The room shares the same warm interior language as the rest of the hotel: rattan pendant lights, honey-toned plaster walls, warm timber ceiling. The mountain view balcony is quieter and cooler in the mornings.',
    ],
    tags: ['Mountain View', 'Private Balcony', 'Queen + Sofa Bed'],
    photos: [
      { src: '/images/694848445.jpg', alt: 'Mountain view room with private balcony', wide: true, tall: true },
      { src: '/images/694848424.jpg', alt: 'Queen bed with rattan pendant' },
      { src: '/images/694848406.jpg', alt: 'Balcony with mountain backdrop' },
      { src: '/images/694848301.jpg', alt: 'Room interior with warm ceiling' },
      { src: '/images/694848159.jpg', alt: 'Balcony view toward the hills' },
      { src: '/images/694848135.jpg', alt: 'Bathroom with stone tile', wide: true },
    ],
    stripPhotos: [
      { src: '/images/694848115.jpg', alt: 'Mountain morning light' },
      { src: '/images/694842331.jpg', alt: 'Balcony detail' },
      { src: '/images/694842518.jpg', alt: 'Room overview' },
      { src: '/images/694842267.jpg', alt: 'Bed detail' },
    ],
    specs: [
      { label: 'Room type', val: 'Double' },
      { label: 'Beds', val: '1 Queen + 1 Sofa Bed' },
      { label: 'Capacity', val: '2 Adults, 1 Child' },
      { label: 'View', val: 'Mountain View' },
      { label: 'Balcony', val: 'Yes, private' },
      { label: 'Breakfast', val: 'Available' },
      { label: 'Rooftop pool', val: 'Complimentary' },
    ],
    amenities: ['Queen bed + sofa bed', 'Mountain view balcony', 'Air conditioning', 'Smart TV (40")', 'Walk-in glass shower', 'Rain showerhead', 'Complimentary Wi-Fi', 'Hairdryer', 'Bathrobe & slippers', 'Minibar', 'Safe deposit box', 'Daily housekeeping'],
  },
  {
    slug: 'deluxe-family',
    badge: 'Deluxe Family',
    name: 'Deluxe Double Room (2 Adults + 1 Child)',
    beds: '1 Queen Bed + 1 Sofa Bed',
    capacity: '2 Adults, 1 Child',
    view: 'Balcony View',
    balcony: 'Yes, private',
    heroImage: '/images/694871306.jpg',
    heroLabel: 'Deluxe Room · Family',
    desc: 'The sofa bed unfolds beside the private balcony, giving the youngest guest their own corner.',
    longDesc: [
      'The sofa bed unfolds beside the private balcony, giving the youngest guest their own corner. Queen bed, rattan pendant and warm wooden ceiling make the space feel generous and intimate.',
      'A family room designed with thought for every occupant. The balcony catches the morning light. The bathroom — stone tile, walk-in glass shower — is generous for a boutique property of this size.',
    ],
    tags: ['Private Balcony', 'Queen + Sofa Bed', 'Family Room'],
    photos: [
      { src: '/images/694871306.jpg', alt: 'Deluxe family room with warm rattan decor', wide: true, tall: true },
      { src: '/images/694871309.jpg', alt: 'Queen bed with rattan pendant light' },
      { src: '/images/694871314.jpg', alt: 'Balcony with morning light' },
      { src: '/images/694871320.jpg', alt: 'Room interior with honey walls' },
      { src: '/images/694871324.jpg', alt: 'Bathroom with double mirrors' },
      { src: '/images/694871330.jpg', alt: 'Sofa bed area beside balcony', wide: true },
    ],
    stripPhotos: [
      { src: '/images/694871339.jpg', alt: 'Room atmosphere' },
      { src: '/images/694871343.jpg', alt: 'Balcony chairs' },
      { src: '/images/694871347.jpg', alt: 'Shower detail' },
      { src: '/images/694871352.jpg', alt: 'Evening light' },
    ],
    specs: [
      { label: 'Room type', val: 'Deluxe Double' },
      { label: 'Beds', val: '1 Queen + 1 Sofa Bed' },
      { label: 'Capacity', val: '2 Adults, 1 Child' },
      { label: 'View', val: 'Balcony View' },
      { label: 'Balcony', val: 'Yes, private' },
      { label: 'Breakfast', val: 'Available' },
      { label: 'Rooftop pool', val: 'Complimentary' },
    ],
    amenities: ['Queen bed + sofa bed', 'Private balcony', 'Air conditioning', 'Smart TV (40")', 'Walk-in glass shower', 'Rain showerhead', 'Complimentary Wi-Fi', 'Hairdryer', 'Bathrobe & slippers', 'Minibar', 'Safe deposit box', 'Daily housekeeping', 'Baby cot on request'],
  },
  {
    slug: 'deluxe-queen',
    badge: 'Deluxe Queen',
    name: 'Deluxe Double Room (2 Adults + 1 Child)',
    beds: '1 Queen Bed',
    capacity: '2 Adults, 1 Child',
    view: 'Balcony View',
    balcony: 'Yes, private',
    heroImage: '/images/694847940.jpg',
    heroLabel: 'Deluxe Room · Queen',
    desc: 'Boutique quality without compromise. Queen bed, warm rattan interiors, private balcony and the full Mahoro experience.',
    longDesc: [
      'Boutique quality without compromise. A queen bed, warm rattan interiors, private balcony and the full Mahoro experience — honey walls, wooden beams, stone bathroom.',
      'The Deluxe Queen is where the hotel\'s design philosophy is at its most distilled. Everything chosen for a reason, nothing extraneous. The bathroom is clean stone and glass; the ceiling is warm timber; the light from the balcony in the late afternoon makes the room look like somewhere you would never want to leave.',
    ],
    tags: ['Private Balcony', 'Queen Bed', 'Rattan Interiors'],
    photos: [
      { src: '/images/694847940.jpg', alt: 'Deluxe queen room with rattan decor', wide: true, tall: true },
      { src: '/images/694847993.jpg', alt: 'Queen bed facing balcony doors' },
      { src: '/images/694848115.jpg', alt: 'Balcony with sea glimpse' },
      { src: '/images/694848135.jpg', alt: 'Rattan pendant lamp detail' },
      { src: '/images/694848159.jpg', alt: 'Private balcony view' },
      { src: '/images/694848301.jpg', alt: 'Warm wooden ceiling beams', wide: true },
    ],
    stripPhotos: [
      { src: '/images/694848406.jpg', alt: 'Room at evening' },
      { src: '/images/694848424.jpg', alt: 'Bathroom detail' },
      { src: '/images/694848445.jpg', alt: 'Room overview' },
      { src: '/images/694855692.jpg', alt: 'Walk-in shower' },
    ],
    specs: [
      { label: 'Room type', val: 'Deluxe Double' },
      { label: 'Bed', val: '1 Queen Bed' },
      { label: 'Capacity', val: '2 Adults, 1 Child' },
      { label: 'View', val: 'Balcony View' },
      { label: 'Balcony', val: 'Yes, private' },
      { label: 'Breakfast', val: 'Available' },
      { label: 'Rooftop pool', val: 'Complimentary' },
    ],
    amenities: ['Queen bed', 'Private balcony', 'Air conditioning', 'Smart TV (40")', 'Walk-in glass shower', 'Rain showerhead', 'Complimentary Wi-Fi', 'Hairdryer', 'Bathrobe & slippers', 'Minibar', 'Safe deposit box', 'Daily housekeeping'],
  },
]

export function getRoomBySlug(slug: string) {
  return rooms.find((r) => r.slug === slug)
}
