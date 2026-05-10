var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var traveloop_1_exports = {};
__export(traveloop_1_exports, {
  default: () => App
});
module.exports = __toCommonJS(traveloop_1_exports);
var import_react = __toESM(require("react"));
const COLORS = {
  primary: "#E8A838",
  primaryDark: "#C8881A",
  primaryLight: "#FFF3DC",
  bg: "#FAFAF8",
  card: "#FFFFFF",
  text: "#1A1A18",
  muted: "#7A7A72",
  border: "#E8E8E0",
  success: "#2E9E6A",
  danger: "#D84040",
  info: "#2A72C3"
};
const ALL_TRIPS = [
  {
    id: 1,
    name: "Euro Summer 2025",
    start: "Jun 10",
    end: "Jun 28",
    stops: 4,
    budget: 12e4,
    spent: 89500,
    cover: "\u{1F30D}",
    status: "Upcoming",
    desc: "4-city European adventure \u2014 Paris, Rome, Barcelona & Amsterdam.",
    countries: ["France", "Italy", "Spain", "Netherlands"],
    cities: ["Paris \u{1F5FC}", "Rome \u{1F3DB}\uFE0F", "Barcelona \u{1F3D6}\uFE0F", "Amsterdam \u{1F337}"],
    itinerary: [
      { day: "Day 1", date: "Jun 10", city: "Paris \u{1F5FC}", activities: [{ time: "10am", name: "Eiffel Tower Visit", cost: 2e3, type: "Sightseeing" }, { time: "2pm", name: "Louvre Museum", cost: 1400, type: "Culture" }, { time: "7pm", name: "Seine River Dinner Cruise", cost: 4200, type: "Food" }] },
      { day: "Day 2", date: "Jun 11", city: "Paris \u{1F5FC}", activities: [{ time: "9am", name: "Montmartre Walking Tour", cost: 0, type: "Sightseeing" }, { time: "1pm", name: "Caf\xE9 de Flore Lunch", cost: 1800, type: "Food" }, { time: "4pm", name: "Mus\xE9e d'Orsay", cost: 1200, type: "Culture" }] },
      { day: "Day 3", date: "Jun 13", city: "Rome \u{1F3DB}\uFE0F", activities: [{ time: "9am", name: "Colosseum & Roman Forum", cost: 1600, type: "Culture" }, { time: "2pm", name: "Vatican Museums & Sistine Chapel", cost: 2e3, type: "Culture" }, { time: "7pm", name: "Trastevere Food Walk", cost: 3200, type: "Food" }] },
      { day: "Day 4", date: "Jun 14", city: "Rome \u{1F3DB}\uFE0F", activities: [{ time: "10am", name: "Trevi Fountain & Spanish Steps", cost: 0, type: "Sightseeing" }, { time: "2pm", name: "Pasta Making Class", cost: 5500, type: "Food" }] },
      { day: "Day 5", date: "Jun 16", city: "Barcelona \u{1F3D6}\uFE0F", activities: [{ time: "10am", name: "Sagrada Fam\xEDlia", cost: 2600, type: "Culture" }, { time: "3pm", name: "Park G\xFCell", cost: 1e3, type: "Sightseeing" }, { time: "8pm", name: "La Boqueria Night Market", cost: 2e3, type: "Food" }] },
      { day: "Day 6", date: "Jun 19", city: "Amsterdam \u{1F337}", activities: [{ time: "9am", name: "Anne Frank House", cost: 1400, type: "Culture" }, { time: "1pm", name: "Canal Boat Tour", cost: 1800, type: "Sightseeing" }, { time: "5pm", name: "Rijksmuseum", cost: 1600, type: "Culture" }] }
    ],
    budget_breakdown: [
      { name: "Flights", amount: 32e3, icon: "\u2708\uFE0F", color: "#4A90D9" },
      { name: "Stay", amount: 28e3, icon: "\u{1F3E8}", color: "#E8A838" },
      { name: "Activities", amount: 14500, icon: "\u{1F3AF}", color: "#2E9E6A" },
      { name: "Food", amount: 1e4, icon: "\u{1F37D}\uFE0F", color: "#D84040" },
      { name: "Transport", amount: 5e3, icon: "\u{1F686}", color: "#9B59B6" }
    ],
    packing: [
      { id: 1, name: "Passport", category: "Documents", packed: true },
      { id: 2, name: "EU Travel Insurance", category: "Documents", packed: true },
      { id: 3, name: "Schengen Visa Copy", category: "Documents", packed: false },
      { id: 4, name: "iPhone + Charger", category: "Electronics", packed: true },
      { id: 5, name: "Power Bank 20000mAh", category: "Electronics", packed: false },
      { id: 6, name: "Universal Adapter", category: "Electronics", packed: true },
      { id: 7, name: "Light Jackets (2)", category: "Clothing", packed: true },
      { id: 8, name: "Formal Shirt (1)", category: "Clothing", packed: false },
      { id: 9, name: "Comfortable Shoes", category: "Clothing", packed: true },
      { id: 10, name: "Sunscreen SPF 50", category: "Toiletries", packed: false }
    ],
    notes: [
      { id: 1, note: "Paris hotel check-in after 3pm \u2014 contact: +33 1 23 45 67 89. Keep confirmation email ready.", date: "Jun 5" },
      { id: 2, note: "Book Sagrada Fam\xEDlia tickets online at least 2 weeks in advance \u2014 sells out fast!", date: "Jun 3" },
      { id: 3, note: "Rome \u2192 Barcelona by Vueling Airlines. Web check-in opens 48hrs before. Print boarding pass.", date: "May 28" },
      { id: 4, note: "Amsterdam canal cruise: take the one from Centraal Station pier \u2014 best value at \u20AC18.", date: "May 20" }
    ]
  },
  {
    id: 2,
    name: "Southeast Asia Backpack",
    start: "Aug 5",
    end: "Aug 25",
    stops: 5,
    budget: 75e3,
    spent: 44800,
    cover: "\u{1F30F}",
    status: "Upcoming",
    desc: "Budget backpacking across Thailand, Vietnam, Cambodia, Malaysia & Singapore.",
    countries: ["Thailand", "Vietnam", "Cambodia", "Malaysia", "Singapore"],
    cities: ["Bangkok \u{1F3EF}", "Hanoi \u{1F35C}", "Siem Reap \u{1F3DB}\uFE0F", "Kuala Lumpur \u{1F306}", "Singapore \u{1F981}"],
    itinerary: [
      { day: "Day 1", date: "Aug 5", city: "Bangkok \u{1F3EF}", activities: [{ time: "9am", name: "Grand Palace & Wat Phra Kaew", cost: 500, type: "Culture" }, { time: "2pm", name: "Wat Arun Temple", cost: 200, type: "Sightseeing" }, { time: "6pm", name: "Khao San Road Street Food", cost: 800, type: "Food" }] },
      { day: "Day 2", date: "Aug 6", city: "Bangkok \u{1F3EF}", activities: [{ time: "10am", name: "Chatuchak Weekend Market", cost: 0, type: "Sightseeing" }, { time: "2pm", name: "Thai Cooking Class", cost: 2200, type: "Food" }, { time: "7pm", name: "Chao Phraya River Dinner Cruise", cost: 1800, type: "Food" }] },
      { day: "Day 3", date: "Aug 8", city: "Hanoi \u{1F35C}", activities: [{ time: "8am", name: "Hoan Kiem Lake & Ngoc Son Temple", cost: 100, type: "Sightseeing" }, { time: "11am", name: "Hanoi Old Quarter Walk", cost: 0, type: "Sightseeing" }, { time: "7pm", name: "Pho & Banh Mi Street Food Tour", cost: 600, type: "Food" }] },
      { day: "Day 4", date: "Aug 9", city: "Hanoi \u{1F35C}", activities: [{ time: "6am", name: "Ha Long Bay Full-Day Cruise", cost: 4500, type: "Adventure" }, { time: "7pm", name: "Bia Hoi Corner (Street Beer)", cost: 300, type: "Food" }] },
      { day: "Day 5", date: "Aug 12", city: "Siem Reap \u{1F3DB}\uFE0F", activities: [{ time: "5am", name: "Angkor Wat Sunrise Tour", cost: 3700, type: "Culture" }, { time: "1pm", name: "Bayon Temple & Ta Prohm", cost: 0, type: "Culture" }, { time: "6pm", name: "Pub Street Night Market", cost: 700, type: "Food" }] },
      { day: "Day 6", date: "Aug 15", city: "Kuala Lumpur \u{1F306}", activities: [{ time: "9am", name: "Petronas Twin Towers Skybridge", cost: 800, type: "Sightseeing" }, { time: "2pm", name: "Batu Caves", cost: 0, type: "Culture" }, { time: "7pm", name: "Jalan Alor Street Food Night", cost: 900, type: "Food" }] },
      { day: "Day 7", date: "Aug 19", city: "Singapore \u{1F981}", activities: [{ time: "10am", name: "Gardens by the Bay", cost: 2800, type: "Sightseeing" }, { time: "3pm", name: "Sentosa Island & Universal Studios", cost: 7500, type: "Adventure" }, { time: "8pm", name: "Marina Bay Sands Light Show", cost: 0, type: "Sightseeing" }] },
      { day: "Day 8", date: "Aug 20", city: "Singapore \u{1F981}", activities: [{ time: "9am", name: "Hawker Centre Breakfast (Kaya Toast)", cost: 200, type: "Food" }, { time: "11am", name: "Little India & Chinatown Walk", cost: 0, type: "Sightseeing" }, { time: "4pm", name: "Singapore Zoo", cost: 4500, type: "Adventure" }] }
    ],
    budget_breakdown: [
      { name: "Flights", amount: 18e3, icon: "\u2708\uFE0F", color: "#4A90D9" },
      { name: "Stay", amount: 12e3, icon: "\u{1F3E8}", color: "#E8A838" },
      { name: "Activities", amount: 8800, icon: "\u{1F3AF}", color: "#2E9E6A" },
      { name: "Food", amount: 4e3, icon: "\u{1F35C}", color: "#D84040" },
      { name: "Transport", amount: 2e3, icon: "\u{1F68C}", color: "#9B59B6" }
    ],
    packing: [
      { id: 1, name: "Passport", category: "Documents", packed: true },
      { id: 2, name: "Cambodia e-Visa Printout", category: "Documents", packed: false },
      { id: 3, name: "Travel Insurance Card", category: "Documents", packed: true },
      { id: 4, name: "Phone + Charger", category: "Electronics", packed: true },
      { id: 5, name: "Power Bank", category: "Electronics", packed: false },
      { id: 6, name: "Local SIM Card (Thailand)", category: "Electronics", packed: false },
      { id: 7, name: "Lightweight Backpack 40L", category: "Clothing", packed: true },
      { id: 8, name: "Quick-dry T-Shirts (5)", category: "Clothing", packed: true },
      { id: 9, name: "Shorts (3)", category: "Clothing", packed: true },
      { id: 10, name: "Sandals + Sneakers", category: "Clothing", packed: false },
      { id: 11, name: "Mosquito Repellent", category: "Toiletries", packed: false },
      { id: 12, name: "Sunscreen SPF 50", category: "Toiletries", packed: false },
      { id: 13, name: "Water Purification Tablets", category: "Toiletries", packed: false },
      { id: 14, name: "Diarrhea / Travel Meds", category: "Toiletries", packed: false }
    ],
    notes: [
      { id: 1, note: "Bangkok hostel: The Yard Hostel, Phahon Yothin. Dorm bed \u20B9800/night. Breakfast included!", date: "Jul 25" },
      { id: 2, note: "Angkor Wat 3-day pass is best value \u2014 $62 USD. Buy at the gate, not from touts!", date: "Jul 22" },
      { id: 3, note: "Vietnam: only use Grab app for rides, never bargain with metered taxis. GrabBike is cheapest.", date: "Jul 18" },
      { id: 4, note: "Singapore is expensive \u2014 eat at hawker centres (Maxwell, Lau Pa Sat). Avoid restaurants.", date: "Jul 15" },
      { id: 5, note: "Currency tips: USD works everywhere in Cambodia. Exchange THB in Bangkok airport for better rates.", date: "Jul 10" },
      { id: 6, note: "Ha Long Bay: book 1-day cruise only \u2014 sleeping on boat not worth the extra cost.", date: "Jul 5" }
    ]
  },
  {
    id: 3,
    name: "Japan Cherry Blossom",
    start: "Mar 20",
    end: "Apr 5",
    stops: 3,
    budget: 16e4,
    spent: 158500,
    cover: "\u{1F5FE}",
    status: "Completed",
    desc: "Chasing sakura across Tokyo, Kyoto & Osaka during peak cherry blossom season.",
    countries: ["Japan"],
    cities: ["Tokyo \u26E9\uFE0F", "Kyoto \u{1F338}", "Osaka \u{1F3EE}"],
    itinerary: [
      { day: "Day 1", date: "Mar 20", city: "Tokyo \u26E9\uFE0F", activities: [{ time: "10am", name: "Shinjuku Gyoen Cherry Blossom Walk", cost: 500, type: "Sightseeing" }, { time: "2pm", name: "Shibuya Crossing & Harajuku", cost: 0, type: "Sightseeing" }, { time: "7pm", name: "Ramen at Ichiran (Private Booth)", cost: 1200, type: "Food" }] },
      { day: "Day 2", date: "Mar 21", city: "Tokyo \u26E9\uFE0F", activities: [{ time: "9am", name: "Senso-ji Temple, Asakusa", cost: 0, type: "Culture" }, { time: "12pm", name: "TeamLab Borderless Digital Art", cost: 3600, type: "Culture" }, { time: "6pm", name: "Tsukiji Outer Market Sushi", cost: 2800, type: "Food" }] },
      { day: "Day 3", date: "Mar 23", city: "Tokyo \u26E9\uFE0F", activities: [{ time: "8am", name: "Akihabara Electronics & Anime", cost: 0, type: "Sightseeing" }, { time: "2pm", name: "Tokyo Skytree Observatory", cost: 2100, type: "Sightseeing" }, { time: "7pm", name: "Izakaya Dinner in Shinjuku", cost: 2500, type: "Food" }] },
      { day: "Day 4", date: "Mar 25", city: "Kyoto \u{1F338}", activities: [{ time: "7am", name: "Fushimi Inari Taisha (Early Morning)", cost: 0, type: "Culture" }, { time: "12pm", name: "Arashiyama Bamboo Grove", cost: 1e3, type: "Sightseeing" }, { time: "5pm", name: "Gion Geisha District Walk", cost: 0, type: "Culture" }, { time: "7pm", name: "Kaiseki Dinner (Traditional)", cost: 8500, type: "Food" }] },
      { day: "Day 5", date: "Mar 26", city: "Kyoto \u{1F338}", activities: [{ time: "9am", name: "Philosopher's Path Cherry Blossom", cost: 0, type: "Sightseeing" }, { time: "1pm", name: "Kinkaku-ji Golden Pavilion", cost: 500, type: "Culture" }, { time: "4pm", name: "Nishiki Market Street Food", cost: 1500, type: "Food" }] },
      { day: "Day 6", date: "Mar 29", city: "Osaka \u{1F3EE}", activities: [{ time: "10am", name: "Osaka Castle Park", cost: 600, type: "Culture" }, { time: "2pm", name: "Dotonbori Street Food Crawl", cost: 2200, type: "Food" }, { time: "5pm", name: "Umeda Sky Building Sunset", cost: 1500, type: "Sightseeing" }] },
      { day: "Day 7", date: "Mar 30", city: "Osaka \u{1F3EE}", activities: [{ time: "9am", name: "Kuromon Ichiba Market", cost: 0, type: "Sightseeing" }, { time: "12pm", name: "Namba & Shinsaibashi Shopping", cost: 0, type: "Sightseeing" }, { time: "6pm", name: "Takoyaki & Okonomiyaki Dinner", cost: 1800, type: "Food" }] }
    ],
    budget_breakdown: [
      { name: "Flights", amount: 55e3, icon: "\u2708\uFE0F", color: "#4A90D9" },
      { name: "Stay", amount: 42e3, icon: "\u{1F3E8}", color: "#E8A838" },
      { name: "Activities", amount: 28e3, icon: "\u{1F3AF}", color: "#2E9E6A" },
      { name: "Food", amount: 22e3, icon: "\u{1F363}", color: "#D84040" },
      { name: "Transport", amount: 11500, icon: "\u{1F685}", color: "#9B59B6" }
    ],
    packing: [
      { id: 1, name: "Passport", category: "Documents", packed: true },
      { id: 2, name: "Japan Rail Pass (14-day)", category: "Documents", packed: true },
      { id: 3, name: "Travel Insurance", category: "Documents", packed: true },
      { id: 4, name: "Pocket WiFi Rental Voucher", category: "Documents", packed: true },
      { id: 5, name: "Phone + Charger", category: "Electronics", packed: true },
      { id: 6, name: "IC Card (Suica) for trains", category: "Electronics", packed: true },
      { id: 7, name: "Warm Jacket (Spring nights are cold)", category: "Clothing", packed: true },
      { id: 8, name: "Comfortable Walking Shoes", category: "Clothing", packed: true },
      { id: 9, name: "Slip-on Shoes (for temples)", category: "Clothing", packed: true },
      { id: 10, name: "Formal Dinner Outfit (Kaiseki)", category: "Clothing", packed: true },
      { id: 11, name: "Hand Sanitizer", category: "Toiletries", packed: true },
      { id: 12, name: "Allergy Medicine (Pollen season!)", category: "Toiletries", packed: true }
    ],
    notes: [
      { id: 1, note: "COMPLETED \u2705 Best trip ever! Cherry blossoms at Maruyama Park, Kyoto were absolutely unreal.", date: "Apr 6" },
      { id: 2, note: "JR Pass totally worth it \u2014 saved at least \xA540,000 on Shinkansen alone. Buy before you land!", date: "Mar 19" },
      { id: 3, note: "Pocket WiFi from Ninja WiFi \u2014 \xA5500/day, unlimited data, worked even in rural areas.", date: "Mar 18" },
      { id: 4, note: "Cash is still king in Japan. Carry \xA520,000 always. 7-Eleven ATMs accept foreign cards.", date: "Mar 17" },
      { id: 5, note: "Kyoto: Gion Hatanaka ryokan \u2014 expensive but sleeping on tatami was magical.", date: "Mar 10" }
    ]
  }
];
const ALL_CITIES = [
  { id: 1, name: "Paris", country: "France", cost: "High", pop: "\u2B50 Very Popular", emoji: "\u{1F5FC}", desc: "City of Light, Art & Romance" },
  { id: 2, name: "Bangkok", country: "Thailand", cost: "Low", pop: "\u2B50 Very Popular", emoji: "\u{1F3EF}", desc: "Temples, Street Food & Chaos" },
  { id: 3, name: "Tokyo", country: "Japan", cost: "Medium", pop: "\u2B50 Very Popular", emoji: "\u26E9\uFE0F", desc: "Futuristic meets Traditional" },
  { id: 4, name: "Bali", country: "Indonesia", cost: "Low", pop: "\u2B50 Popular", emoji: "\u{1F334}", desc: "Beaches, Rice Fields & Temples" },
  { id: 5, name: "Rome", country: "Italy", cost: "Medium", pop: "\u2B50 Popular", emoji: "\u{1F3DB}\uFE0F", desc: "Eternal City of History" },
  { id: 6, name: "Singapore", country: "Singapore", cost: "High", pop: "\u2B50 Very Popular", emoji: "\u{1F981}", desc: "Ultra-modern City-State" },
  { id: 7, name: "Hanoi", country: "Vietnam", cost: "Low", pop: "\u2B50 Popular", emoji: "\u{1F35C}", desc: "Ancient Capital & Street Food" },
  { id: 8, name: "Kyoto", country: "Japan", cost: "Medium", pop: "\u2B50 Very Popular", emoji: "\u{1F338}", desc: "Temples, Geisha & Bamboo" },
  { id: 9, name: "Barcelona", country: "Spain", cost: "Medium", pop: "\u2B50 Popular", emoji: "\u{1F3D6}\uFE0F", desc: "Gaud\xED, Beach & Tapas" },
  { id: 10, name: "Siem Reap", country: "Cambodia", cost: "Low", pop: "\u2B50 Popular", emoji: "\u{1F3DB}\uFE0F", desc: "Gateway to Angkor Wat" },
  { id: 11, name: "Kuala Lumpur", country: "Malaysia", cost: "Low", pop: "\u2B50 Popular", emoji: "\u{1F306}", desc: "Petronas Towers & Multiculture" },
  { id: 12, name: "Amsterdam", country: "Netherlands", cost: "High", pop: "\u2B50 Popular", emoji: "\u{1F337}", desc: "Canals, Bikes & Museums" },
  { id: 13, name: "Osaka", country: "Japan", cost: "Medium", pop: "\u2B50 Popular", emoji: "\u{1F3EE}", desc: "Japan's Food Capital" },
  { id: 14, name: "Maldives", country: "Maldives", cost: "High", pop: "\u2B50 Popular", emoji: "\u{1F3DD}\uFE0F", desc: "Crystal Waters & Overwater Villas" }
];
const ALL_ACTIVITIES = [
  { id: 1, name: "City Walking Tour", type: "Sightseeing", cost: 20, duration: "3h", emoji: "\u{1F6B6}", city: "Any" },
  { id: 2, name: "Street Food Tour", type: "Food", cost: 35, duration: "2h", emoji: "\u{1F35C}", city: "Any" },
  { id: 3, name: "Museum Visit", type: "Culture", cost: 25, duration: "4h", emoji: "\u{1F3DB}\uFE0F", city: "Any" },
  { id: 4, name: "Sunset Boat Ride", type: "Adventure", cost: 60, duration: "2h", emoji: "\u26F5", city: "Any" },
  { id: 5, name: "Cooking Class", type: "Food", cost: 80, duration: "3h", emoji: "\u{1F468}\u200D\u{1F373}", city: "Any" },
  { id: 6, name: "Mountain Hike", type: "Adventure", cost: 15, duration: "6h", emoji: "\u{1F3D4}\uFE0F", city: "Any" },
  { id: 7, name: "Angkor Wat Sunrise", type: "Culture", cost: 62, duration: "Full day", emoji: "\u{1F305}", city: "Siem Reap" },
  { id: 8, name: "Ha Long Bay Cruise", type: "Adventure", cost: 55, duration: "Full day", emoji: "\u{1F6A2}", city: "Hanoi" },
  { id: 9, name: "Fushimi Inari Hike", type: "Sightseeing", cost: 0, duration: "3h", emoji: "\u26E9\uFE0F", city: "Kyoto" },
  { id: 10, name: "Sagrada Fam\xEDlia Tour", type: "Culture", cost: 32, duration: "2h", emoji: "\u26EA", city: "Barcelona" },
  { id: 11, name: "Gardens by the Bay", type: "Sightseeing", cost: 34, duration: "3h", emoji: "\u{1F33F}", city: "Singapore" },
  { id: 12, name: "Thai Massage", type: "Wellness", cost: 12, duration: "1h", emoji: "\u{1F486}", city: "Bangkok" },
  { id: 13, name: "Scuba Diving", type: "Adventure", cost: 90, duration: "4h", emoji: "\u{1F93F}", city: "Bali" },
  { id: 14, name: "Eiffel Tower Night View", type: "Sightseeing", cost: 28, duration: "1h", emoji: "\u{1F5FC}", city: "Paris" },
  { id: 15, name: "Canal Bike Tour", type: "Adventure", cost: 22, duration: "3h", emoji: "\u{1F6B2}", city: "Amsterdam" }
];
const Btn = ({ children, onClick, variant = "primary", small, style }) => {
  const base = { padding: small ? "6px 14px" : "10px 20px", borderRadius: 10, fontSize: small ? 13 : 14, fontWeight: 600, cursor: "pointer", border: "none", fontFamily: "inherit", ...style };
  const variants = { primary: { background: COLORS.primary, color: "#fff" }, outline: { background: "transparent", color: COLORS.primary, border: `1.5px solid ${COLORS.primary}` }, ghost: { background: COLORS.primaryLight, color: COLORS.primaryDark }, danger: { background: COLORS.danger, color: "#fff" } };
  return /* @__PURE__ */ import_react.default.createElement("button", { onClick, style: { ...base, ...variants[variant] } }, children);
};
const Card = ({ children, style, onClick }) => /* @__PURE__ */ import_react.default.createElement("div", { onClick, style: { background: COLORS.card, borderRadius: 16, border: `1px solid ${COLORS.border}`, padding: "16px 18px", cursor: onClick ? "pointer" : "default", ...style } }, children);
const Tag = ({ children, color = COLORS.primaryLight, textColor = COLORS.primaryDark }) => /* @__PURE__ */ import_react.default.createElement("span", { style: { background: color, color: textColor, borderRadius: 20, padding: "3px 10px", fontSize: 12, fontWeight: 600, whiteSpace: "nowrap" } }, children);
const Input = ({ label, type = "text", placeholder, value, onChange }) => /* @__PURE__ */ import_react.default.createElement("div", { style: { marginBottom: 14 } }, label && /* @__PURE__ */ import_react.default.createElement("label", { style: { fontSize: 13, color: COLORS.muted, display: "block", marginBottom: 4 } }, label), /* @__PURE__ */ import_react.default.createElement(
  "input",
  {
    type,
    placeholder,
    value,
    onChange,
    style: { width: "100%", padding: "10px 12px", borderRadius: 10, border: `1px solid ${COLORS.border}`, fontSize: 14, outline: "none", fontFamily: "inherit", background: "#fff", color: COLORS.text, boxSizing: "border-box" }
  }
));
const BackHeader = ({ title, onBack }) => /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 20 } }, /* @__PURE__ */ import_react.default.createElement("button", { onClick: onBack, style: { background: "none", border: "none", fontSize: 22, cursor: "pointer" } }, "\u2190"), /* @__PURE__ */ import_react.default.createElement("h2", { style: { fontSize: 20, fontWeight: 800, margin: 0 } }, title));
const TripBadge = ({ trip }) => /* @__PURE__ */ import_react.default.createElement(Card, { style: { background: COLORS.primaryLight, border: "none", marginBottom: 16 } }, /* @__PURE__ */ import_react.default.createElement("p", { style: { fontWeight: 700, fontSize: 15, margin: "0 0 2px" } }, trip.cover, " ", trip.name), /* @__PURE__ */ import_react.default.createElement("p", { style: { fontSize: 12, color: COLORS.muted, margin: 0 } }, trip.start, " \u2013 ", trip.end, " \xB7 ", trip.countries.join(", ")));
function LoginScreen({ onLogin }) {
  const [tab, setTab] = (0, import_react.useState)("login");
  return /* @__PURE__ */ import_react.default.createElement("div", { style: { minHeight: "100vh", background: "linear-gradient(135deg,#FFF8EC,#FFF3DC 60%,#FFE8B0)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { width: "100%", maxWidth: 380 } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { textAlign: "center", marginBottom: 32 } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { fontSize: 52, marginBottom: 8 } }, "\u2708\uFE0F"), /* @__PURE__ */ import_react.default.createElement("h1", { style: { fontSize: 34, fontWeight: 900, color: COLORS.text, margin: 0 } }, "Traveloop"), /* @__PURE__ */ import_react.default.createElement("p", { style: { color: COLORS.muted, margin: "6px 0 0" } }, "Plan trips. Live adventures.")), /* @__PURE__ */ import_react.default.createElement(Card, null, /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", gap: 4, marginBottom: 20, background: COLORS.bg, borderRadius: 10, padding: 4 } }, ["login", "signup"].map((t) => /* @__PURE__ */ import_react.default.createElement("button", { key: t, onClick: () => setTab(t), style: { flex: 1, padding: "8px", borderRadius: 8, border: "none", fontWeight: 600, fontSize: 14, cursor: "pointer", background: tab === t ? "#fff" : "transparent", color: tab === t ? COLORS.text : COLORS.muted, fontFamily: "inherit" } }, t === "login" ? "Log In" : "Sign Up"))), tab === "signup" && /* @__PURE__ */ import_react.default.createElement(Input, { label: "Full Name", placeholder: "Anbu Kumar" }), /* @__PURE__ */ import_react.default.createElement(Input, { label: "Email", type: "email", placeholder: "you@example.com" }), /* @__PURE__ */ import_react.default.createElement(Input, { label: "Password", type: "password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" }), tab === "login" && /* @__PURE__ */ import_react.default.createElement("p", { style: { textAlign: "right", fontSize: 13, color: COLORS.info, cursor: "pointer", margin: "-6px 0 14px" } }, "Forgot password?"), /* @__PURE__ */ import_react.default.createElement(Btn, { onClick: onLogin, style: { width: "100%", padding: "12px" } }, tab === "login" ? "Log In \u2192" : "Create Account \u2192"), /* @__PURE__ */ import_react.default.createElement("p", { style: { textAlign: "center", fontSize: 12, color: COLORS.muted, marginTop: 14 } }, tab === "login" ? "No account? " : "Already a member? ", /* @__PURE__ */ import_react.default.createElement("span", { onClick: () => setTab(tab === "login" ? "signup" : "login"), style: { color: COLORS.primary, cursor: "pointer", fontWeight: 600 } }, tab === "login" ? "Sign up free" : "Log in")))));
}
function DashboardScreen({ onNavigate }) {
  const featured = ALL_TRIPS.find((t) => t.status === "Upcoming") || ALL_TRIPS[0];
  return /* @__PURE__ */ import_react.default.createElement("div", { style: { padding: "20px 16px", paddingBottom: 90 } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 } }, /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("p", { style: { color: COLORS.muted, fontSize: 13, margin: 0 } }, "Good morning \u{1F44B}"), /* @__PURE__ */ import_react.default.createElement("h2", { style: { fontSize: 22, fontWeight: 800, margin: "2px 0 0" } }, "Anbu Kumar")), /* @__PURE__ */ import_react.default.createElement("div", { style: { width: 42, height: 42, borderRadius: "50%", background: COLORS.primary, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 16 } }, "AK")), /* @__PURE__ */ import_react.default.createElement(Card, { style: { background: "linear-gradient(135deg,#E8A838,#C8881A)", border: "none", marginBottom: 20 } }, /* @__PURE__ */ import_react.default.createElement("p", { style: { color: "rgba(255,255,255,0.8)", fontSize: 12, margin: 0 } }, "Next Upcoming Trip"), /* @__PURE__ */ import_react.default.createElement("h3", { style: { color: "#fff", fontSize: 18, fontWeight: 700, margin: "4px 0 2px" } }, featured.cover, " ", featured.name), /* @__PURE__ */ import_react.default.createElement("p", { style: { color: "rgba(255,255,255,0.85)", fontSize: 13, margin: 0 } }, featured.start, " \u2013 ", featured.end, " \xB7 ", featured.stops, " cities"), /* @__PURE__ */ import_react.default.createElement("p", { style: { color: "rgba(255,255,255,0.75)", fontSize: 12, margin: "2px 0 12px" } }, featured.countries.join(" \xB7 ")), /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", gap: 8 } }, /* @__PURE__ */ import_react.default.createElement(Btn, { onClick: () => onNavigate("itinerary", featured.id), small: true, style: { background: "rgba(255,255,255,0.25)", color: "#fff", border: "1px solid rgba(255,255,255,0.4)" } }, "View Plan"), /* @__PURE__ */ import_react.default.createElement(Btn, { onClick: () => onNavigate("budget", featured.id), small: true, style: { background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" } }, "Budget"), /* @__PURE__ */ import_react.default.createElement(Btn, { onClick: () => onNavigate("packing", featured.id), small: true, style: { background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" } }, "Packing"))), /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 } }, /* @__PURE__ */ import_react.default.createElement("h3", { style: { fontSize: 16, fontWeight: 700, margin: 0 } }, "All Trips (", ALL_TRIPS.length, ")"), /* @__PURE__ */ import_react.default.createElement("span", { onClick: () => onNavigate("trips"), style: { fontSize: 13, color: COLORS.primary, fontWeight: 600, cursor: "pointer" } }, "See all")), /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", gap: 10, overflowX: "auto", paddingBottom: 6, marginBottom: 20 } }, ALL_TRIPS.map((trip) => {
    const pct = Math.round(trip.spent / trip.budget * 100);
    const over = pct >= 100;
    return /* @__PURE__ */ import_react.default.createElement(Card, { key: trip.id, style: { minWidth: 160, flexShrink: 0, cursor: "pointer" }, onClick: () => onNavigate("itinerary", trip.id) }, /* @__PURE__ */ import_react.default.createElement("div", { style: { fontSize: 32, marginBottom: 6 } }, trip.cover), /* @__PURE__ */ import_react.default.createElement("p", { style: { fontWeight: 700, fontSize: 13, margin: "0 0 2px", lineHeight: 1.3 } }, trip.name), /* @__PURE__ */ import_react.default.createElement("p", { style: { color: COLORS.muted, fontSize: 11, margin: "0 0 4px" } }, trip.stops, " cities \xB7 ", trip.start), /* @__PURE__ */ import_react.default.createElement(Tag, { color: trip.status === "Completed" ? "#E8F8EF" : COLORS.primaryLight, textColor: trip.status === "Completed" ? COLORS.success : COLORS.primaryDark }, trip.status), /* @__PURE__ */ import_react.default.createElement("div", { style: { background: "#F0F0EB", borderRadius: 4, height: 4, marginTop: 8 } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { background: over ? COLORS.danger : COLORS.primary, width: `${Math.min(pct, 100)}%`, height: 4, borderRadius: 4 } })), /* @__PURE__ */ import_react.default.createElement("p", { style: { fontSize: 11, color: over ? COLORS.danger : COLORS.muted, margin: "3px 0 0" } }, pct, "% budget used"));
  }), /* @__PURE__ */ import_react.default.createElement(Card, { style: { minWidth: 110, flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: "pointer", border: `2px dashed ${COLORS.border}`, background: "transparent" }, onClick: () => onNavigate("create") }, /* @__PURE__ */ import_react.default.createElement("span", { style: { fontSize: 24 } }, "\uFF0B"), /* @__PURE__ */ import_react.default.createElement("p", { style: { fontSize: 12, color: COLORS.muted, margin: "4px 0 0", textAlign: "center" } }, "New Trip"))), /* @__PURE__ */ import_react.default.createElement("h3", { style: { fontSize: 16, fontWeight: 700, marginBottom: 12 } }, "Recommended"), /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 } }, [{ name: "Santorini", country: "Greece", emoji: "\u{1F30A}", tag: "Trending" }, { name: "Dubai", country: "UAE", emoji: "\u{1F3D9}\uFE0F", tag: "Luxury" }, { name: "Maldives", country: "Maldives", emoji: "\u{1F3DD}\uFE0F", tag: "Relaxing" }].map((d, i) => /* @__PURE__ */ import_react.default.createElement(Card, { key: i, style: { display: "flex", alignItems: "center", gap: 14 } }, /* @__PURE__ */ import_react.default.createElement("span", { style: { fontSize: 28 } }, d.emoji), /* @__PURE__ */ import_react.default.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ import_react.default.createElement("p", { style: { fontWeight: 700, fontSize: 14, margin: 0 } }, d.name), /* @__PURE__ */ import_react.default.createElement("p", { style: { color: COLORS.muted, fontSize: 12, margin: "2px 0 0" } }, d.country)), /* @__PURE__ */ import_react.default.createElement(Tag, null, d.tag)))), /* @__PURE__ */ import_react.default.createElement("h3", { style: { fontSize: 15, fontWeight: 700, marginBottom: 12 } }, "Quick Access"), /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 } }, [
    { label: "SEA Budget", icon: "\u{1F4B0}", s: "budget", t: 2 },
    { label: "SEA Packing", icon: "\u{1F392}", s: "packing", t: 2 },
    { label: "SEA Notes", icon: "\u{1F4DD}", s: "notes", t: 2 },
    { label: "Euro Budget", icon: "\u{1F4B6}", s: "budget", t: 1 },
    { label: "Japan Notes", icon: "\u{1F338}", s: "notes", t: 3 },
    { label: "Admin", icon: "\u{1F4CA}", s: "admin" }
  ].map((item, i) => /* @__PURE__ */ import_react.default.createElement(Card, { key: i, onClick: () => onNavigate(item.s, item.t), style: { display: "flex", alignItems: "center", gap: 10, cursor: "pointer" } }, /* @__PURE__ */ import_react.default.createElement("span", { style: { fontSize: 22 } }, item.icon), /* @__PURE__ */ import_react.default.createElement("span", { style: { fontWeight: 600, fontSize: 13 } }, item.label)))));
}
function TripsScreen({ onNavigate }) {
  const [filter, setFilter] = (0, import_react.useState)("All");
  const filtered = filter === "All" ? ALL_TRIPS : ALL_TRIPS.filter((t) => t.status === filter);
  return /* @__PURE__ */ import_react.default.createElement("div", { style: { padding: "20px 16px", paddingBottom: 90 } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 } }, /* @__PURE__ */ import_react.default.createElement("h2", { style: { fontSize: 20, fontWeight: 800, margin: 0 } }, "My Trips \u{1F9F3}"), /* @__PURE__ */ import_react.default.createElement(Btn, { onClick: () => onNavigate("create"), small: true }, "+ New")), /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", gap: 8, marginBottom: 16 } }, ["All", "Upcoming", "Completed"].map((f) => /* @__PURE__ */ import_react.default.createElement(Btn, { key: f, small: true, onClick: () => setFilter(f), variant: filter === f ? "primary" : "ghost" }, f))), filtered.map((trip) => {
    const pct = Math.round(trip.spent / trip.budget * 100);
    const over = pct >= 100;
    return /* @__PURE__ */ import_react.default.createElement(Card, { key: trip.id, style: { marginBottom: 14, cursor: "pointer" }, onClick: () => onNavigate("itinerary", trip.id) }, /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", gap: 14 } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { fontSize: 44 } }, trip.cover), /* @__PURE__ */ import_react.default.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 2, flexWrap: "wrap" } }, /* @__PURE__ */ import_react.default.createElement("h3", { style: { fontSize: 15, fontWeight: 700, margin: 0 } }, trip.name), /* @__PURE__ */ import_react.default.createElement(Tag, { color: trip.status === "Completed" ? "#E8F8EF" : COLORS.primaryLight, textColor: trip.status === "Completed" ? COLORS.success : COLORS.primaryDark }, trip.status)), /* @__PURE__ */ import_react.default.createElement("p", { style: { color: COLORS.muted, fontSize: 12, margin: "0 0 6px" } }, trip.start, " \u2192 ", trip.end, " \xB7 ", trip.stops, " cities"), /* @__PURE__ */ import_react.default.createElement("p", { style: { color: COLORS.muted, fontSize: 12, margin: "0 0 8px" } }, trip.desc), /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", gap: 4, flexWrap: "wrap", marginBottom: 8 } }, trip.countries.map((c) => /* @__PURE__ */ import_react.default.createElement(Tag, { key: c, color: "#F4F4F0", textColor: COLORS.muted }, c))), /* @__PURE__ */ import_react.default.createElement("div", { style: { background: "#F0F0EB", borderRadius: 6, height: 6, marginBottom: 4 } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { background: over ? COLORS.danger : COLORS.primary, width: `${Math.min(pct, 100)}%`, height: 6, borderRadius: 6 } })), /* @__PURE__ */ import_react.default.createElement("p", { style: { fontSize: 12, color: over ? COLORS.danger : COLORS.muted, margin: 0 } }, "\u20B9", trip.spent.toLocaleString(), " / \u20B9", trip.budget.toLocaleString(), " (", pct, "%) ", over ? "\u26A0\uFE0F Over" : ""))), /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", gap: 8, marginTop: 12, justifyContent: "flex-end", flexWrap: "wrap" } }, /* @__PURE__ */ import_react.default.createElement(Btn, { small: true, variant: "ghost", onClick: (e) => {
      e.stopPropagation();
      onNavigate("budget", trip.id);
    } }, "\u{1F4B0}"), /* @__PURE__ */ import_react.default.createElement(Btn, { small: true, variant: "ghost", onClick: (e) => {
      e.stopPropagation();
      onNavigate("packing", trip.id);
    } }, "\u{1F392}"), /* @__PURE__ */ import_react.default.createElement(Btn, { small: true, variant: "ghost", onClick: (e) => {
      e.stopPropagation();
      onNavigate("notes", trip.id);
    } }, "\u{1F4DD}"), /* @__PURE__ */ import_react.default.createElement(Btn, { small: true, variant: "ghost", onClick: (e) => {
      e.stopPropagation();
      onNavigate("shared", trip.id);
    } }, "\u{1F517}"), /* @__PURE__ */ import_react.default.createElement(Btn, { small: true, variant: "outline", onClick: (e) => {
      e.stopPropagation();
      onNavigate("itinerary", trip.id);
    } }, "View \u2192")));
  }));
}
function ItineraryViewScreen({ onBack, tripId }) {
  const trip = ALL_TRIPS.find((t) => t.id === tripId) || ALL_TRIPS[0];
  const typeColors = { Sightseeing: ["#EEF3FF", COLORS.info], Food: ["#FFF3DC", COLORS.primaryDark], Culture: ["#F0FFF6", COLORS.success], Adventure: ["#FFF0F0", COLORS.danger], Wellness: ["#F5F0FF", "#7B52D3"] };
  const totalCost = trip.itinerary.flatMap((d) => d.activities).reduce((s, a) => s + a.cost, 0);
  return /* @__PURE__ */ import_react.default.createElement("div", { style: { padding: "20px 16px", paddingBottom: 90 } }, /* @__PURE__ */ import_react.default.createElement(BackHeader, { title: trip.name, onBack }), /* @__PURE__ */ import_react.default.createElement(Card, { style: { marginBottom: 16, background: "linear-gradient(135deg,#FFF8EC,#FFF3DC)", border: "none" } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", gap: 16 } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ import_react.default.createElement("p", { style: { fontSize: 12, color: COLORS.muted, margin: 0 } }, "Duration"), /* @__PURE__ */ import_react.default.createElement("p", { style: { fontWeight: 700, fontSize: 15, margin: 0 } }, trip.start, " \u2013 ", trip.end)), /* @__PURE__ */ import_react.default.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ import_react.default.createElement("p", { style: { fontSize: 12, color: COLORS.muted, margin: 0 } }, "Cities"), /* @__PURE__ */ import_react.default.createElement("p", { style: { fontWeight: 700, fontSize: 15, margin: 0 } }, trip.stops, " stops")), /* @__PURE__ */ import_react.default.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ import_react.default.createElement("p", { style: { fontSize: 12, color: COLORS.muted, margin: 0 } }, "Est. Activities"), /* @__PURE__ */ import_react.default.createElement("p", { style: { fontWeight: 700, fontSize: 15, margin: 0 } }, "\u20B9", totalCost.toLocaleString())))), /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 } }, trip.cities.map((c) => /* @__PURE__ */ import_react.default.createElement(Tag, { key: c }, c))), trip.itinerary.map((day, i) => /* @__PURE__ */ import_react.default.createElement("div", { key: i, style: { marginBottom: 16 } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 8 } }, /* @__PURE__ */ import_react.default.createElement(Tag, { color: COLORS.primary, textColor: "#fff" }, day.day), /* @__PURE__ */ import_react.default.createElement("span", { style: { fontWeight: 700, fontSize: 14 } }, day.city), /* @__PURE__ */ import_react.default.createElement("span", { style: { fontSize: 12, color: COLORS.muted, marginLeft: "auto" } }, day.date)), day.activities.map((act, j) => {
    const [bgC, txC] = typeColors[act.type] || ["#F4F4F0", COLORS.muted];
    return /* @__PURE__ */ import_react.default.createElement(Card, { key: j, style: { marginBottom: 8, display: "flex", alignItems: "center", gap: 12 } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { background: COLORS.primaryLight, borderRadius: 8, padding: "5px 8px", fontSize: 11, color: COLORS.primaryDark, fontWeight: 700, minWidth: 40, textAlign: "center", flexShrink: 0 } }, act.time), /* @__PURE__ */ import_react.default.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ import_react.default.createElement("p", { style: { margin: "0 0 3px", fontWeight: 600, fontSize: 13 } }, act.name), /* @__PURE__ */ import_react.default.createElement(Tag, { color: bgC, textColor: txC }, act.type)), /* @__PURE__ */ import_react.default.createElement(Tag, { color: "#F0F4FF", textColor: COLORS.info, style: { flexShrink: 0 } }, act.cost === 0 ? "Free" : `\u20B9${act.cost}`));
  }))));
}
function BudgetScreen({ onBack, tripId }) {
  const trip = ALL_TRIPS.find((t) => t.id === tripId) || ALL_TRIPS[1];
  const total = trip.budget_breakdown.reduce((s, c) => s + c.amount, 0);
  const pct = Math.round(total / trip.budget * 100);
  const over = total > trip.budget;
  return /* @__PURE__ */ import_react.default.createElement("div", { style: { padding: "20px 16px", paddingBottom: 90 } }, /* @__PURE__ */ import_react.default.createElement(BackHeader, { title: "Budget", onBack }), /* @__PURE__ */ import_react.default.createElement(TripBadge, { trip }), /* @__PURE__ */ import_react.default.createElement(Card, { style: { marginBottom: 20, textAlign: "center" } }, /* @__PURE__ */ import_react.default.createElement("p", { style: { color: COLORS.muted, fontSize: 13, margin: 0 } }, "Total Estimated Cost"), /* @__PURE__ */ import_react.default.createElement("h1", { style: { fontSize: 34, fontWeight: 900, color: COLORS.text, margin: "8px 0" } }, "\u20B9", total.toLocaleString()), /* @__PURE__ */ import_react.default.createElement("p", { style: { color: COLORS.muted, fontSize: 13, margin: "0 0 14px" } }, "of \u20B9", trip.budget.toLocaleString(), " budget"), /* @__PURE__ */ import_react.default.createElement("div", { style: { background: "#E8E8E0", borderRadius: 8, height: 10, marginBottom: 8 } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { background: over ? COLORS.danger : COLORS.primary, width: `${Math.min(pct, 100)}%`, height: 10, borderRadius: 8 } })), /* @__PURE__ */ import_react.default.createElement("p", { style: { fontSize: 13, color: over ? COLORS.danger : COLORS.success, fontWeight: 600, margin: 0 } }, pct, "% used \xB7 ", over ? `\u20B9${(total - trip.budget).toLocaleString()} over budget \u26A0\uFE0F` : `\u20B9${(trip.budget - total).toLocaleString()} remaining \u2705`)), /* @__PURE__ */ import_react.default.createElement("h3", { style: { fontSize: 15, fontWeight: 700, marginBottom: 12 } }, "Cost Breakdown"), trip.budget_breakdown.map((cat) => {
    const p = Math.round(cat.amount / total * 100);
    return /* @__PURE__ */ import_react.default.createElement(Card, { key: cat.name, style: { display: "flex", alignItems: "center", gap: 14, marginBottom: 10 } }, /* @__PURE__ */ import_react.default.createElement("span", { style: { fontSize: 22 } }, cat.icon), /* @__PURE__ */ import_react.default.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 6 } }, /* @__PURE__ */ import_react.default.createElement("span", { style: { fontWeight: 600, fontSize: 14 } }, cat.name), /* @__PURE__ */ import_react.default.createElement("span", { style: { fontWeight: 700, fontSize: 14 } }, "\u20B9", cat.amount.toLocaleString())), /* @__PURE__ */ import_react.default.createElement("div", { style: { background: "#F0F0EB", borderRadius: 6, height: 6 } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { background: cat.color, width: `${p}%`, height: 6, borderRadius: 6 } })), /* @__PURE__ */ import_react.default.createElement("p", { style: { color: COLORS.muted, fontSize: 12, margin: "4px 0 0" } }, p, "% of total")));
  }), over && /* @__PURE__ */ import_react.default.createElement(Card, { style: { background: "#FFF0F0", border: `1px solid #F5CCCC`, marginTop: 6 } }, /* @__PURE__ */ import_react.default.createElement("p", { style: { color: COLORS.danger, fontWeight: 700, fontSize: 14, margin: "0 0 4px" } }, "\u26A0\uFE0F Over Budget"), /* @__PURE__ */ import_react.default.createElement("p", { style: { color: "#C03030", fontSize: 13, margin: 0 } }, "Exceeded by \u20B9", (total - trip.budget).toLocaleString(), ". Consider reducing activity or food costs.")));
}
function PackingScreen({ onBack, tripId }) {
  const trip = ALL_TRIPS.find((t) => t.id === tripId) || ALL_TRIPS[1];
  const [items, setItems] = (0, import_react.useState)([...trip.packing]);
  const [newItem, setNewItem] = (0, import_react.useState)("");
  const toggle = (id) => setItems(items.map((i) => i.id === id ? { ...i, packed: !i.packed } : i));
  const add = () => {
    if (!newItem.trim()) return;
    setItems([...items, { id: Date.now(), name: newItem, category: "Other", packed: false }]);
    setNewItem("");
  };
  const categories = [...new Set(items.map((i) => i.category))];
  const packed = items.filter((i) => i.packed).length;
  return /* @__PURE__ */ import_react.default.createElement("div", { style: { padding: "20px 16px", paddingBottom: 90 } }, /* @__PURE__ */ import_react.default.createElement(BackHeader, { title: "Packing Checklist \u{1F392}", onBack }), /* @__PURE__ */ import_react.default.createElement(TripBadge, { trip }), /* @__PURE__ */ import_react.default.createElement(Card, { style: { marginBottom: 16, textAlign: "center" } }, /* @__PURE__ */ import_react.default.createElement("p", { style: { fontWeight: 700, fontSize: 16, margin: 0 } }, packed, " / ", items.length, " items packed"), /* @__PURE__ */ import_react.default.createElement("div", { style: { background: "#E8E8E0", borderRadius: 6, height: 8, margin: "10px 0 0" } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { background: packed === items.length ? COLORS.success : COLORS.primary, width: `${Math.round(packed / items.length * 100)}%`, height: 8, borderRadius: 6 } })), packed === items.length && /* @__PURE__ */ import_react.default.createElement("p", { style: { color: COLORS.success, fontWeight: 700, fontSize: 13, margin: "8px 0 0" } }, "\u2705 All packed! Ready to go!")), /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", gap: 8, marginBottom: 16 } }, /* @__PURE__ */ import_react.default.createElement(
    "input",
    {
      value: newItem,
      onChange: (e) => setNewItem(e.target.value),
      placeholder: "Add item...",
      onKeyDown: (e) => e.key === "Enter" && add(),
      style: { flex: 1, padding: "10px 12px", borderRadius: 10, border: `1px solid ${COLORS.border}`, fontSize: 14, fontFamily: "inherit" }
    }
  ), /* @__PURE__ */ import_react.default.createElement(Btn, { onClick: add }, "Add")), categories.map((cat) => /* @__PURE__ */ import_react.default.createElement("div", { key: cat, style: { marginBottom: 14 } }, /* @__PURE__ */ import_react.default.createElement("p", { style: { fontWeight: 700, fontSize: 12, color: COLORS.muted, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 } }, cat, " (", items.filter((i) => i.category === cat && i.packed).length, "/", items.filter((i) => i.category === cat).length, ")"), items.filter((i) => i.category === cat).map((item) => /* @__PURE__ */ import_react.default.createElement(Card, { key: item.id, style: { marginBottom: 8, display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }, onClick: () => toggle(item.id) }, /* @__PURE__ */ import_react.default.createElement("div", { style: { width: 22, height: 22, borderRadius: 6, border: `2px solid ${item.packed ? COLORS.success : COLORS.border}`, background: item.packed ? COLORS.success : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 } }, item.packed && /* @__PURE__ */ import_react.default.createElement("span", { style: { color: "#fff", fontSize: 12, fontWeight: 900 } }, "\u2713")), /* @__PURE__ */ import_react.default.createElement("p", { style: { margin: 0, fontSize: 14, textDecoration: item.packed ? "line-through" : "none", color: item.packed ? COLORS.muted : COLORS.text } }, item.name))))));
}
function NotesScreen({ onBack, tripId }) {
  const trip = ALL_TRIPS.find((t) => t.id === tripId) || ALL_TRIPS[1];
  const [notes, setNotes] = (0, import_react.useState)([...trip.notes]);
  const [newNote, setNewNote] = (0, import_react.useState)("");
  const add = () => {
    if (!newNote.trim()) return;
    setNotes([{ id: Date.now(), note: newNote, date: "Today" }, ...notes]);
    setNewNote("");
  };
  return /* @__PURE__ */ import_react.default.createElement("div", { style: { padding: "20px 16px", paddingBottom: 90 } }, /* @__PURE__ */ import_react.default.createElement(BackHeader, { title: "Trip Notes \u{1F4DD}", onBack }), /* @__PURE__ */ import_react.default.createElement(TripBadge, { trip }), /* @__PURE__ */ import_react.default.createElement("div", { style: { marginBottom: 14 } }, /* @__PURE__ */ import_react.default.createElement(
    "textarea",
    {
      value: newNote,
      onChange: (e) => setNewNote(e.target.value),
      placeholder: "Add a note, tip, or reminder...",
      rows: 3,
      style: { width: "100%", padding: "10px 12px", borderRadius: 10, border: `1px solid ${COLORS.border}`, fontSize: 14, resize: "none", fontFamily: "inherit", boxSizing: "border-box" }
    }
  ), /* @__PURE__ */ import_react.default.createElement(Btn, { onClick: add, style: { marginTop: 8, width: "100%" } }, "Save Note")), /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, notes.map((note) => /* @__PURE__ */ import_react.default.createElement(Card, { key: note.id }, /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 6 } }, /* @__PURE__ */ import_react.default.createElement(Tag, null, trip.cover, " ", trip.name), /* @__PURE__ */ import_react.default.createElement("span", { style: { fontSize: 12, color: COLORS.muted } }, note.date)), /* @__PURE__ */ import_react.default.createElement("p", { style: { fontSize: 14, margin: 0, lineHeight: 1.6 } }, note.note)))));
}
function SharedScreen({ onBack, tripId }) {
  const trip = ALL_TRIPS.find((t) => t.id === tripId) || ALL_TRIPS[0];
  return /* @__PURE__ */ import_react.default.createElement("div", { style: { padding: "20px 16px", paddingBottom: 90 } }, /* @__PURE__ */ import_react.default.createElement(BackHeader, { title: "Shared Itinerary", onBack }), /* @__PURE__ */ import_react.default.createElement(Card, { style: { marginBottom: 14, background: "#F0FFF6", border: `1px solid #A8E6C3` } }, /* @__PURE__ */ import_react.default.createElement("p", { style: { fontSize: 12, color: COLORS.success, fontWeight: 700, margin: "0 0 4px" } }, "\u{1F517} Public Link Active"), /* @__PURE__ */ import_react.default.createElement("p", { style: { fontSize: 13, color: COLORS.muted, margin: 0 } }, "traveloop.app/share/", trip.name.toLowerCase().replace(/ /g, "-"))), /* @__PURE__ */ import_react.default.createElement(Card, { style: { marginBottom: 14 } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { fontSize: 36, marginBottom: 8 } }, trip.cover), /* @__PURE__ */ import_react.default.createElement("h3", { style: { fontSize: 17, fontWeight: 800, margin: "0 0 4px" } }, trip.name), /* @__PURE__ */ import_react.default.createElement("p", { style: { color: COLORS.muted, fontSize: 13, margin: "0 0 8px" } }, trip.start, " \u2013 ", trip.end, " \xB7 ", trip.stops, " cities"), /* @__PURE__ */ import_react.default.createElement("p", { style: { fontSize: 13, margin: "0 0 12px", lineHeight: 1.5 } }, trip.desc), /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", gap: 6, flexWrap: "wrap" } }, trip.cities.map((c) => /* @__PURE__ */ import_react.default.createElement(Tag, { key: c }, c)))), /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", gap: 10, marginBottom: 16 } }, /* @__PURE__ */ import_react.default.createElement(Btn, { style: { flex: 1 } }, "\u{1F4CB} Copy Trip"), /* @__PURE__ */ import_react.default.createElement(Btn, { variant: "outline", style: { flex: 1 } }, "\u{1F4E4} Share")), /* @__PURE__ */ import_react.default.createElement(Card, { style: { background: "#F8F8F4" } }, /* @__PURE__ */ import_react.default.createElement("p", { style: { fontWeight: 700, fontSize: 13, margin: "0 0 12px" } }, "Preview (Read-only)"), trip.itinerary.slice(0, 5).map((day, i) => /* @__PURE__ */ import_react.default.createElement("div", { key: i, style: { borderBottom: i < 4 ? `1px solid ${COLORS.border}` : "none", padding: "8px 0" } }, /* @__PURE__ */ import_react.default.createElement("span", { style: { color: COLORS.primary, fontWeight: 700, fontSize: 13 } }, day.day, " \xB7 ", day.city), /* @__PURE__ */ import_react.default.createElement("p", { style: { color: COLORS.muted, margin: "2px 0 0", fontSize: 12 } }, day.activities.map((a) => a.name).join(" \xB7 ")))), trip.itinerary.length > 5 && /* @__PURE__ */ import_react.default.createElement("p", { style: { color: COLORS.muted, fontSize: 12, margin: "8px 0 0" } }, "+", trip.itinerary.length - 5, " more days...")));
}
function CitySearchScreen({ onBack }) {
  const [query, setQuery] = (0, import_react.useState)("");
  const [filter, setFilter] = (0, import_react.useState)("All");
  const filtered = ALL_CITIES.filter((c) => (c.name.toLowerCase().includes(query.toLowerCase()) || c.country.toLowerCase().includes(query.toLowerCase())) && (filter === "All" || c.cost === filter));
  return /* @__PURE__ */ import_react.default.createElement("div", { style: { padding: "20px 16px", paddingBottom: 90 } }, /* @__PURE__ */ import_react.default.createElement(BackHeader, { title: "Find Cities", onBack }), /* @__PURE__ */ import_react.default.createElement(Input, { placeholder: "\u{1F50D}  Search cities or countries...", value: query, onChange: (e) => setQuery(e.target.value) }), /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", gap: 8, marginBottom: 12 } }, ["All", "Low", "Medium", "High"].map((f) => /* @__PURE__ */ import_react.default.createElement(Btn, { key: f, small: true, onClick: () => setFilter(f), variant: filter === f ? "primary" : "ghost" }, f))), /* @__PURE__ */ import_react.default.createElement("p", { style: { fontSize: 13, color: COLORS.muted, marginBottom: 10 } }, filtered.length, " cities"), filtered.map((city) => /* @__PURE__ */ import_react.default.createElement(Card, { key: city.id, style: { display: "flex", alignItems: "center", gap: 14, marginBottom: 10 } }, /* @__PURE__ */ import_react.default.createElement("span", { style: { fontSize: 28 } }, city.emoji), /* @__PURE__ */ import_react.default.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ import_react.default.createElement("p", { style: { fontWeight: 700, margin: 0, fontSize: 14 } }, city.name), /* @__PURE__ */ import_react.default.createElement("p", { style: { color: COLORS.muted, fontSize: 12, margin: "2px 0 0" } }, city.country, " \xB7 ", city.desc)), /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-end", flexShrink: 0 } }, /* @__PURE__ */ import_react.default.createElement(Tag, { color: city.cost === "Low" ? "#EDFFF5" : city.cost === "High" ? "#FFF0F0" : "#FFF8EC", textColor: city.cost === "Low" ? COLORS.success : city.cost === "High" ? COLORS.danger : COLORS.primaryDark }, city.cost), /* @__PURE__ */ import_react.default.createElement(Btn, { small: true, variant: "ghost" }, "+ Add")))));
}
function ActivitySearchScreen({ onBack }) {
  const [query, setQuery] = (0, import_react.useState)("");
  const [filter, setFilter] = (0, import_react.useState)("All");
  const filtered = ALL_ACTIVITIES.filter((a) => a.name.toLowerCase().includes(query.toLowerCase()) && (filter === "All" || a.type === filter));
  return /* @__PURE__ */ import_react.default.createElement("div", { style: { padding: "20px 16px", paddingBottom: 90 } }, /* @__PURE__ */ import_react.default.createElement(BackHeader, { title: "Discover Activities", onBack }), /* @__PURE__ */ import_react.default.createElement(Input, { placeholder: "\u{1F50D}  Search activities...", value: query, onChange: (e) => setQuery(e.target.value) }), /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", gap: 8, marginBottom: 12, overflowX: "auto", paddingBottom: 4 } }, ["All", "Sightseeing", "Food", "Culture", "Adventure", "Wellness"].map((t) => /* @__PURE__ */ import_react.default.createElement(Btn, { key: t, small: true, onClick: () => setFilter(t), variant: filter === t ? "primary" : "ghost", style: { flexShrink: 0 } }, t))), filtered.map((act) => /* @__PURE__ */ import_react.default.createElement(Card, { key: act.id, style: { display: "flex", alignItems: "center", gap: 14, marginBottom: 10 } }, /* @__PURE__ */ import_react.default.createElement("span", { style: { fontSize: 28 } }, act.emoji), /* @__PURE__ */ import_react.default.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ import_react.default.createElement("p", { style: { fontWeight: 700, margin: 0, fontSize: 14 } }, act.name), /* @__PURE__ */ import_react.default.createElement("p", { style: { color: COLORS.muted, fontSize: 12, margin: "3px 0 0" } }, act.type, " \xB7 \u23F1 ", act.duration, act.city !== "Any" ? ` \xB7 ${act.city}` : "")), /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-end", flexShrink: 0 } }, /* @__PURE__ */ import_react.default.createElement(Tag, { color: "#F0F4FF", textColor: COLORS.info }, act.cost === 0 ? "Free" : `$${act.cost}`), /* @__PURE__ */ import_react.default.createElement(Btn, { small: true, variant: "ghost" }, "+ Add")))));
}
function ItineraryBuilderScreen({ onBack, onNavigate, tripId }) {
  const trip = ALL_TRIPS.find((t) => t.id === tripId) || ALL_TRIPS[1];
  const [stops] = (0, import_react.useState)(trip.cities.map((city, i) => ({ id: i + 1, city, acts: trip.itinerary.filter((d) => d.city === city).flatMap((d) => d.activities.map((a) => a.name)).slice(0, 2) })));
  return /* @__PURE__ */ import_react.default.createElement("div", { style: { padding: "20px 16px", paddingBottom: 90 } }, /* @__PURE__ */ import_react.default.createElement(BackHeader, { title: "Itinerary Builder", onBack }), /* @__PURE__ */ import_react.default.createElement(TripBadge, { trip }), /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", gap: 8, marginBottom: 16 } }, /* @__PURE__ */ import_react.default.createElement(Btn, { onClick: () => onNavigate("citySearch"), small: true }, "\u{1F50D} Add City"), /* @__PURE__ */ import_react.default.createElement(Btn, { onClick: () => onNavigate("itinerary", trip.id), small: true, variant: "outline" }, "\u{1F441}\uFE0F View Plan")), stops.map((stop, idx) => /* @__PURE__ */ import_react.default.createElement(Card, { key: stop.id, style: { marginBottom: 12 } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 10 } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { width: 28, height: 28, borderRadius: "50%", background: COLORS.primary, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13, flexShrink: 0 } }, idx + 1), /* @__PURE__ */ import_react.default.createElement("p", { style: { fontWeight: 700, margin: 0, fontSize: 15, flex: 1 } }, stop.city), /* @__PURE__ */ import_react.default.createElement("button", { style: { background: "none", border: "none", color: COLORS.danger, cursor: "pointer", fontSize: 16 } }, "\u{1F5D1}")), /* @__PURE__ */ import_react.default.createElement("div", { style: { paddingLeft: 38 } }, stop.acts.map((act, i) => /* @__PURE__ */ import_react.default.createElement("div", { key: i, style: { fontSize: 13, marginBottom: 5 } }, "\u2022 ", act)), /* @__PURE__ */ import_react.default.createElement(Btn, { onClick: () => onNavigate("activitySearch"), small: true, variant: "ghost" }, "+ Add Activity")))), /* @__PURE__ */ import_react.default.createElement("button", { style: { width: "100%", padding: 14, borderRadius: 14, border: `2px dashed ${COLORS.primary}`, background: COLORS.primaryLight, color: COLORS.primaryDark, fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" } }, "+ Add Stop"));
}
function CreateTripScreen({ onBack, onSave }) {
  return /* @__PURE__ */ import_react.default.createElement("div", { style: { padding: "20px 16px", paddingBottom: 90 } }, /* @__PURE__ */ import_react.default.createElement(BackHeader, { title: "Plan New Trip", onBack }), /* @__PURE__ */ import_react.default.createElement("div", { style: { fontSize: 56, textAlign: "center", marginBottom: 4 } }, "\u{1F5FA}\uFE0F"), /* @__PURE__ */ import_react.default.createElement("p", { style: { textAlign: "center", color: COLORS.muted, fontSize: 14, marginBottom: 24 } }, "Where to next?"), /* @__PURE__ */ import_react.default.createElement(Input, { label: "Trip Name", placeholder: "e.g. Rajasthan Road Trip 2025" }), /* @__PURE__ */ import_react.default.createElement(Input, { label: "Start Date", type: "date" }), /* @__PURE__ */ import_react.default.createElement(Input, { label: "End Date", type: "date" }), /* @__PURE__ */ import_react.default.createElement("div", { style: { marginBottom: 14 } }, /* @__PURE__ */ import_react.default.createElement("label", { style: { fontSize: 13, color: COLORS.muted, display: "block", marginBottom: 4 } }, "Description"), /* @__PURE__ */ import_react.default.createElement("textarea", { placeholder: "Write something about your trip...", rows: 3, style: { width: "100%", padding: "10px 12px", borderRadius: 10, border: `1px solid ${COLORS.border}`, fontSize: 14, resize: "none", fontFamily: "inherit", boxSizing: "border-box" } })), /* @__PURE__ */ import_react.default.createElement(Input, { label: "Budget (\u20B9)", type: "number", placeholder: "e.g. 50000" }), /* @__PURE__ */ import_react.default.createElement(Btn, { onClick: onSave, style: { width: "100%", padding: "13px", marginTop: 8 } }, "Create Trip \u2708\uFE0F"));
}
function ProfileScreen({ onLogout }) {
  const completed = ALL_TRIPS.filter((t) => t.status === "Completed").length;
  const countries = [...new Set(ALL_TRIPS.flatMap((t) => t.countries))].length;
  const totalSpent = ALL_TRIPS.reduce((s, t) => s + t.spent, 0);
  return /* @__PURE__ */ import_react.default.createElement("div", { style: { padding: "20px 16px", paddingBottom: 90 } }, /* @__PURE__ */ import_react.default.createElement("h2", { style: { fontSize: 20, fontWeight: 800, marginBottom: 20 } }, "Profile \u2699\uFE0F"), /* @__PURE__ */ import_react.default.createElement(Card, { style: { textAlign: "center", marginBottom: 20 } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { width: 64, height: 64, borderRadius: "50%", background: COLORS.primary, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 22, margin: "0 auto 12px" } }, "AK"), /* @__PURE__ */ import_react.default.createElement("h3", { style: { margin: "0 0 4px", fontSize: 18 } }, "Anbu Kumar"), /* @__PURE__ */ import_react.default.createElement("p", { style: { color: COLORS.muted, fontSize: 13, margin: 0 } }, "anbu@example.com \xB7 Coimbatore, India \u{1F1EE}\u{1F1F3}"), /* @__PURE__ */ import_react.default.createElement(Btn, { small: true, variant: "ghost", style: { marginTop: 10 } }, "Edit Profile")), [
    { label: "Total Trips", icon: "\u{1F9F3}", val: ALL_TRIPS.length },
    { label: "Trips Completed", icon: "\u2705", val: completed },
    { label: "Countries Visited", icon: "\u{1F30D}", val: countries },
    { label: "Cities Explored", icon: "\u{1F3D9}\uFE0F", val: [...new Set(ALL_TRIPS.flatMap((t) => t.cities))].length },
    { label: "Total Spent", icon: "\u{1F4B0}", val: `\u20B9${totalSpent.toLocaleString()}` },
    { label: "Language", icon: "\u{1F310}", val: "English / Tamil" }
  ].map((row, i) => /* @__PURE__ */ import_react.default.createElement(Card, { key: i, style: { display: "flex", alignItems: "center", gap: 14, marginBottom: 10 } }, /* @__PURE__ */ import_react.default.createElement("span", { style: { fontSize: 22 } }, row.icon), /* @__PURE__ */ import_react.default.createElement("span", { style: { flex: 1, fontSize: 14, fontWeight: 600 } }, row.label), /* @__PURE__ */ import_react.default.createElement("span", { style: { fontSize: 14, color: COLORS.muted, fontWeight: 700 } }, row.val))), /* @__PURE__ */ import_react.default.createElement("div", { style: { marginTop: 20 } }, /* @__PURE__ */ import_react.default.createElement(Btn, { onClick: onLogout, variant: "danger", style: { width: "100%" } }, "Log Out")));
}
function AdminScreen({ onBack }) {
  return /* @__PURE__ */ import_react.default.createElement("div", { style: { padding: "20px 16px", paddingBottom: 90 } }, /* @__PURE__ */ import_react.default.createElement(BackHeader, { title: "Admin Dashboard \u{1F4CA}", onBack }), /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 } }, [{ label: "Total Users", val: "2,841", icon: "\u{1F465}" }, { label: "Trips Created", val: "7,293", icon: "\u{1F9F3}" }, { label: "Top City", val: "Bangkok", icon: "\u{1F3EF}" }, { label: "Avg Trip Days", val: "14.2", icon: "\u{1F4C5}" }].map((s, i) => /* @__PURE__ */ import_react.default.createElement(Card, { key: i, style: { textAlign: "center" } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { fontSize: 28, marginBottom: 4 } }, s.icon), /* @__PURE__ */ import_react.default.createElement("p", { style: { fontSize: 20, fontWeight: 800, margin: 0 } }, s.val), /* @__PURE__ */ import_react.default.createElement("p", { style: { fontSize: 12, color: COLORS.muted, margin: "2px 0 0" } }, s.label)))), /* @__PURE__ */ import_react.default.createElement("h3", { style: { fontSize: 15, fontWeight: 700, marginBottom: 12 } }, "Top Cities"), [["Bangkok \u{1F3EF}", 1240, "#4A90D9"], ["Paris \u{1F5FC}", 980, COLORS.primary], ["Tokyo \u26E9\uFE0F", 870, COLORS.success], ["Bali \u{1F334}", 720, "#9B59B6"], ["Singapore \u{1F981}", 610, COLORS.danger]].map(([city, count, color]) => /* @__PURE__ */ import_react.default.createElement("div", { key: city, style: { marginBottom: 12 } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 4 } }, /* @__PURE__ */ import_react.default.createElement("span", { style: { fontSize: 14, fontWeight: 600 } }, city), /* @__PURE__ */ import_react.default.createElement("span", { style: { fontSize: 13, color: COLORS.muted } }, count, " trips")), /* @__PURE__ */ import_react.default.createElement("div", { style: { background: "#F0F0EB", borderRadius: 6, height: 8 } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { background: color, width: `${Math.round(count / 1240 * 100)}%`, height: 8, borderRadius: 6 } })))), /* @__PURE__ */ import_react.default.createElement("h3", { style: { fontSize: 15, fontWeight: 700, margin: "20px 0 12px" } }, "Recent Activity"), [{ user: "Priya S.", action: "Created trip: Bali Retreat", time: "2m ago" }, { user: "Rahul M.", action: "Added activities to Tokyo trip", time: "15m ago" }, { user: "Karthik V.", action: "Shared: Southeast Asia Backpack", time: "1h ago" }, { user: "Sneha R.", action: "Completed Japan packing list", time: "3h ago" }].map((row, i) => /* @__PURE__ */ import_react.default.createElement(Card, { key: i, style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 8 } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { width: 36, height: 36, borderRadius: "50%", background: COLORS.primaryLight, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13, color: COLORS.primaryDark, flexShrink: 0 } }, row.user[0]), /* @__PURE__ */ import_react.default.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ import_react.default.createElement("p", { style: { fontWeight: 600, margin: 0, fontSize: 13 } }, row.user), /* @__PURE__ */ import_react.default.createElement("p", { style: { color: COLORS.muted, margin: 0, fontSize: 12 } }, row.action)), /* @__PURE__ */ import_react.default.createElement("span", { style: { fontSize: 11, color: COLORS.muted } }, row.time))));
}
function BottomNav({ screen, onNavigate }) {
  const tabs = [{ id: "dashboard", label: "Home", icon: "\u{1F3E0}" }, { id: "trips", label: "Trips", icon: "\u{1F9F3}" }, { id: "builder", label: "Plan", icon: "\u270F\uFE0F" }, { id: "profile", label: "Profile", icon: "\u{1F464}" }];
  return /* @__PURE__ */ import_react.default.createElement("div", { style: { position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 430, background: "#fff", borderTop: `1px solid ${COLORS.border}`, display: "flex", zIndex: 100 } }, tabs.map((tab) => /* @__PURE__ */ import_react.default.createElement("button", { key: tab.id, onClick: () => onNavigate(tab.id), style: { flex: 1, padding: "12px 0 10px", background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 2 } }, /* @__PURE__ */ import_react.default.createElement("span", { style: { fontSize: 20 } }, tab.icon), /* @__PURE__ */ import_react.default.createElement("span", { style: { fontSize: 10, color: screen === tab.id ? COLORS.primary : COLORS.muted, fontWeight: screen === tab.id ? 700 : 400 } }, tab.label))));
}
function App() {
  const [loggedIn, setLoggedIn] = (0, import_react.useState)(false);
  const [screen, setScreen] = (0, import_react.useState)("dashboard");
  const [prevScreen, setPrev] = (0, import_react.useState)("dashboard");
  const [activeTripId, setActiveTripId] = (0, import_react.useState)(2);
  const nav = (s, tripId) => {
    setPrev(screen);
    if (tripId) setActiveTripId(tripId);
    setScreen(s);
  };
  const back = () => setScreen(prevScreen);
  if (!loggedIn) return /* @__PURE__ */ import_react.default.createElement(LoginScreen, { onLogin: () => setLoggedIn(true) });
  const p = { onBack: back, tripId: activeTripId, onNavigate: nav };
  const screens = {
    dashboard: /* @__PURE__ */ import_react.default.createElement(DashboardScreen, { onNavigate: nav }),
    create: /* @__PURE__ */ import_react.default.createElement(CreateTripScreen, { onBack: back, onSave: () => nav("trips") }),
    trips: /* @__PURE__ */ import_react.default.createElement(TripsScreen, { onNavigate: nav }),
    builder: /* @__PURE__ */ import_react.default.createElement(ItineraryBuilderScreen, { ...p }),
    itinerary: /* @__PURE__ */ import_react.default.createElement(ItineraryViewScreen, { ...p }),
    citySearch: /* @__PURE__ */ import_react.default.createElement(CitySearchScreen, { onBack: back }),
    activitySearch: /* @__PURE__ */ import_react.default.createElement(ActivitySearchScreen, { onBack: back }),
    budget: /* @__PURE__ */ import_react.default.createElement(BudgetScreen, { ...p }),
    packing: /* @__PURE__ */ import_react.default.createElement(PackingScreen, { ...p }),
    shared: /* @__PURE__ */ import_react.default.createElement(SharedScreen, { ...p }),
    notes: /* @__PURE__ */ import_react.default.createElement(NotesScreen, { ...p }),
    profile: /* @__PURE__ */ import_react.default.createElement(ProfileScreen, { onLogout: () => setLoggedIn(false) }),
    admin: /* @__PURE__ */ import_react.default.createElement(AdminScreen, { onBack: back })
  };
  return /* @__PURE__ */ import_react.default.createElement("div", { style: { maxWidth: 430, margin: "0 auto", minHeight: "100vh", background: COLORS.bg, fontFamily: "'Segoe UI', system-ui, sans-serif" } }, screens[screen] || screens.dashboard, ["dashboard", "trips", "builder", "profile"].includes(screen) && /* @__PURE__ */ import_react.default.createElement(BottomNav, { screen, onNavigate: nav }));
}
