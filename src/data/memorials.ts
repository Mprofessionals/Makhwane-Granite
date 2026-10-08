import { TombstoneProduct, StoneFinish } from '../types';
import imgHero from '../assets/images/hero_memorial_granite_1791487391002.jpg';
import imgDouble from '../assets/images/tombstone_executive_double_1791487400027.jpg';
import imgModern from '../assets/images/tombstone_sculpted_modern_1791487409025.jpg';
import imgKitchen from '../assets/images/granite_kitchen_countertops_1791487417602.jpg';
import imgCraftsman from '../assets/images/craftsman_granite_masonry_1791487428806.jpg';

export const STONE_ASSETS = {
  hero: imgHero,
  executiveDouble: imgDouble,
  sculptedModern: imgModern,
  kitchenCountertops: imgKitchen,
  craftsman: imgCraftsman,
};

export const AVAILABLE_STONES: { name: StoneFinish; origin: string; colorHex: string; description: string }[] = [
  {
    name: 'Zimbabwe Absolute Black',
    origin: 'Mutoko, Zimbabwe',
    colorHex: '#141416',
    description: 'The global benchmark for deep, jet-black granite. Mirror-grade reflection with virtually zero porosity.',
  },
  {
    name: 'Rustenburg African Impala',
    origin: 'North West, South Africa',
    colorHex: '#2b2d33',
    description: 'Renowned dark charcoal with delicate silver-grey crystalline flecks, exceptionally weather-resistant.',
  },
  {
    name: 'African Red Granite',
    origin: 'Parys / Free State',
    colorHex: '#5c2225',
    description: 'Warm, majestic mahogany and crimson mineral swirls offering an illustrious regal appearance.',
  },
  {
    name: 'Blue Pearl Granite',
    origin: 'Larvik / Special Import',
    colorHex: '#253549',
    description: 'Luminous iridescent feldspar crystals that shimmer like midnight sea pearls under natural sunlight.',
  },
  {
    name: 'Kashmir White Granite',
    origin: 'Southern Quarry Reserve',
    colorHex: '#d8d9de',
    description: 'Pristine light stone with burgundy garnet flecks, ideal for contemporary monuments and bright interiors.',
  },
];

export const MEMORIAL_PRODUCTS: TombstoneProduct[] = [
  {
    id: 'makhwane-royal-double',
    code: 'PBH-EXE-01',
    name: 'The Makhwane Royal Double Executive Memorial',
    category: 'executive-double',
    headline: 'Supreme Dual Headstone with Full Ledger & Fluted Vases',
    description: 'A monument of commanding dignity honoring united lives. Features twin arched headstones with a central fluted pillar, full solid granite ledger slab, double turned flower vases, and robust stepped perimeter kerbing.',
    image: imgDouble,
    priceZAR: 28500,
    laybyDeposit: 3500,
    monthlyFrom: 2200,
    dimensions: {
      headstone: '1200mm (H) x 1000mm (W) x 80mm (T)',
      base: '1100mm (W) x 250mm (D) x 100mm (H)',
      ledger: '1800mm (L) x 900mm (W) x 60mm (T)',
      kerbing: '2000mm x 1000mm full perimeter enclosure',
    },
    features: [
      'Twin arched headstones for joint or family commemorations',
      'Solid granite ledger cover keeping grave immaculate and weed-free',
      'Two hand-turned polished stone flower urns included',
      'Includes 120 free engraved gold-leaf letters',
      'Heavy-duty reinforced concrete subterranean foundation beam',
    ],
    recommendedStone: 'Zimbabwe Absolute Black',
    popular: true,
  },
  {
    id: 'makhwane-angel-wings',
    code: 'PBH-MOD-04',
    name: 'Seraphic Wings Sculpted Modern Monument',
    category: 'modern-sculpted',
    headline: 'Curved Wing Headstone with Precision Bevel & Mirror Polish',
    description: 'A contemporary masterwork sculpted with graceful aerodynamic wings rising from a solid rustic rock-pitch base. Sandblasted with reflective gold lettering and custom memorial emblem.',
    image: imgModern,
    priceZAR: 19800,
    laybyDeposit: 2500,
    monthlyFrom: 1600,
    dimensions: {
      headstone: '950mm (H) x 650mm (W) x 80mm (T)',
      base: '800mm (W) x 250mm (D) x 120mm (H) Rock-pitched',
      ledger: 'Optional matching top slab available',
    },
    features: [
      'Artisan-sculpted curved wing silhouettes with hand-chamfered edges',
      'Rock-pitched split-face rustic base for natural stability',
      'Free dove or cross emblem engraving',
      'High-gloss 12-stage diamond wet polish finish',
      'Guaranteed weather-resistant gold leaf infill',
    ],
    recommendedStone: 'Zimbabwe Absolute Black',
    popular: true,
  },
  {
    id: 'makhwane-cathedral-arch',
    code: 'PBH-SNG-02',
    name: 'The Cathedral Arched Classic Headstone',
    category: 'single-memorial',
    headline: 'Timeless Solitary Monument with Bevelled Crown & Lantern Pillar',
    description: 'A stately, timeless memorial featuring an elevated cathedral arch crown, bevelled border frame, and integrated memorial flower vase. Clean, solemn, and built to withstand centuries.',
    image: imgHero,
    priceZAR: 14500,
    laybyDeposit: 2000,
    monthlyFrom: 1100,
    dimensions: {
      headstone: '850mm (H) x 600mm (W) x 75mm (T)',
      base: '750mm (W) x 250mm (D) x 100mm (H)',
      kerbing: 'Optional matching border available',
    },
    features: [
      'Graceful cathedral apex top silhouette',
      'Up to 80 free engraved letters included',
      'Integrated brass or black granite flower urn',
      'Permanent cemetery leveling foundation installation',
    ],
    recommendedStone: 'Rustenburg African Impala',
  },
  {
    id: 'makhwane-open-book-scroll',
    code: 'PBH-MOD-07',
    name: 'The Sacred Chronicle Open-Book Memorial',
    category: 'modern-sculpted',
    headline: 'Carved Bible / Open Book Headstone with Sculpted Tassels',
    description: 'Designed as an open scripture volume, allowing dual pages for scripture, family lineage, and heartfelt farewell poems. Often paired with polished granite book stand.',
    image: imgModern,
    priceZAR: 22000,
    laybyDeposit: 3000,
    monthlyFrom: 1750,
    dimensions: {
      headstone: '750mm (H) x 900mm (W) x 80mm (T) carved book shape',
      base: '1000mm (W) x 300mm (D) x 120mm (H)',
    },
    features: [
      'Fully carved 3D book spine and curved stone pages',
      'Separated dual columns for verse and biography',
      'Deep V-cut lettering with lifetime inking guarantee',
    ],
    recommendedStone: 'African Red Granite',
  },
  {
    id: 'makhwane-architectural-kitchen',
    code: 'PBH-ARC-10',
    name: 'Bespoke Architectural Granite Countertops',
    category: 'granite-countertops',
    headline: 'Precision CNC-Cut Slab Fabrication for Kitchens & Bathrooms',
    description: 'Direct quarry-to-home luxury granite fabrication. Custom templated and laser-cut for seamless kitchen islands, waterfall edges, undermount sink cutouts, and outdoor braai areas.',
    image: imgKitchen,
    priceZAR: 3200, // per linear meter starting
    laybyDeposit: 1500,
    monthlyFrom: 850,
    dimensions: {
      headstone: 'Custom slab sizes up to 3200mm x 1800mm',
      base: 'Standard 20mm & 30mm thickness available',
    },
    features: [
      'Precision on-site laser templating & measurement',
      'Full choice of edge profiles: Double Bevel, Full Bullnose, Pencil Round',
      'Stain-resistant fluoropolymer penetrating seal applied',
      'Heavy heat and scratch resistance for everyday luxury cooking',
    ],
    recommendedStone: 'Zimbabwe Absolute Black',
  },
  {
    id: 'makhwane-traditional-ledger',
    code: 'PBH-TRD-03',
    name: 'Full Granite Sarcophagus Ledger Memorial',
    category: 'traditional-ledger',
    headline: 'Complete Solid Ground Slab with Elevated Head Tablet',
    description: 'The gold standard in memorial permanence. Completely seals the resting site with a polished slab, preventing ground collapse and grass maintenance while preserving dignified remembrance.',
    image: imgDouble,
    priceZAR: 24500,
    laybyDeposit: 3000,
    monthlyFrom: 1900,
    dimensions: {
      headstone: '700mm (H) x 600mm (W) x 70mm (T)',
      base: '700mm (W) x 250mm (D) x 100mm (H)',
      ledger: '1900mm (L) x 850mm (W) x 75mm (T) solid slab',
      kerbing: 'Raised 150mm granite kerbing box',
    },
    features: [
      'Full protective coverage across entire grave length',
      'Custom inscription on both head tablet and top ledger surface',
      'Reinforced steel mesh sub-base to prevent uneven subsidence',
    ],
    recommendedStone: 'Rustenburg African Impala',
  },
];

export const CRAFTSMANSHIP_PILLARS = [
  {
    title: 'Direct Quarry Sourcing',
    description: 'We select block-grade natural granite directly from premier geological deposits in Zimbabwe and South Africa, ensuring unblemished density and crystalline purity.',
  },
  {
    title: 'Diamond Wet-Cut & Multi-Stage Polish',
    description: 'Every monument undergoes progressive 7-grit diamond wet polishing, culminating in a natural mirror glaze that never dulls or requires artificial wax.',
  },
  {
    title: 'V-Cut Sandblast & 24k Gold Inscriptions',
    description: 'High-pressure computerized abrasive blasting engraves deep, crisp glyphs filled with industrial memorial enamels or genuine gold leafing.',
  },
  {
    title: 'Engineered Cemetery Sub-Foundations',
    description: 'No sinking, tilting, or cracking. We pour reinforced concrete footings and apply structural epoxy dowels to anchor headstones permanently.',
  },
];

export const TESTIMONIALS = [
  {
    author: 'Kgomotso M. Phiri',
    location: 'Polokwane Cemetery',
    text: 'Makhwane Granite handled my father\'s memorial with profound respect and punctuality. The Zimbabwe black stone is flawless, and the unveiling ceremony on December 14 was magnificent. God bless your team.',
    date: 'February 2026',
    model: 'Executive Double Memorial',
  },
  {
    author: 'Thabo & Joyce Sithole',
    location: 'Zandfontein Cemetery, Pretoria',
    text: 'Their 12-month lay-by option took all the financial stress away during a very difficult loss. When we came to inspect the stone in their workshop before delivery, we were moved to tears. Truly professional stonemasons.',
    date: 'January 2026',
    model: 'Cathedral Arch Headstone',
  },
  {
    author: 'Adv. L. R. Modise',
    location: 'Lebowakgomo Memorial Park',
    text: 'Superb craftsmanship and genuine stone. We had our family coat of arms sandblasted on the granite and the detail is crisp. Their installation crew was polite and left the cemetery spotless.',
    date: 'November 2025',
    model: 'Seraphic Wings Monument',
  },
];
