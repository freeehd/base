export const products = [
  {
    "group": "equip",
    "tag": "New and used",
    "title": "Earth-moving machinery",
    "description": "Excavators, bulldozers, wheel loaders, backhoe loaders, motor graders, cranes, dump trucks, compactors and skid steers.",
    "category": "Earth-moving machinery"
  },
  {
    "group": "equip",
    "tag": "Plant and workshop",
    "title": "Industrial machines",
    "description": "Machine tools, processing machinery, compressors, pumps, radiators and cooling systems, industrial tools and electrical equipment.",
    "category": "Industrial machines"
  },
  {
    "group": "equip",
    "tag": "New and used",
    "title": "Commercial generators",
    "description": "Diesel and gas generator sets, standby and prime-duty units, alternators and complete power packages.",
    "category": "Commercial generators"
  },
  {
    "group": "equip",
    "tag": "Instruments",
    "title": "Test and measurement equipment",
    "description": "Multimeters, oscilloscopes, power analyzers, calibration tools, insulation and earth testers, thermal and flow instruments.",
    "category": "Test and measurement equipment"
  },
  {
    "group": "equip",
    "tag": "Parts",
    "title": "Spare parts and attachments",
    "description": "Hydraulic attachments, undercarriage parts, engine components, filters and wear parts, genuine and OEM-equivalent.",
    "category": "Spare parts and attachments"
  },
  {
    "group": "goods",
    "tag": "Wholesale and online",
    "title": "Household and daily-use items",
    "description": "Kitchen and home essentials, cleaning supplies, storage, personal care and general merchandise.",
    "category": "Household items"
  },
  {
    "group": "goods",
    "tag": "Wholesale and online",
    "title": "Dry pet food",
    "description": "Dry kibble and shelf-stable dry food for dogs and cats. Dry products only, so no refrigeration or temperature-controlled storage is needed.",
    "category": "Dry pet food"
  }
] as const

export const serviceCopy = [
  [
    "Global product sourcing",
    "Verified manufacturers and suppliers worldwide, for single units or bulk orders."
  ],
  [
    "New and used equipment supply",
    "Machinery with condition details shared before you commit."
  ],
  [
    "Import and export support",
    "Documentation, shipping coordination and delivery to your destination."
  ],
  [
    "Wholesale and bulk supply",
    "Household goods and dry pet food for retailers and distributors."
  ],
  [
    "Online marketplace selling",
    "Branded products sold on Amazon, Walmart, eBay and TikTok Shop."
  ],
  [
    "Brand partnership",
    "We represent and sell your brand across major online marketplaces."
  ],
  [
    "OEM and private label",
    "Custom sourcing and branding for selected product lines."
  ],
  [
    "Industrial procurement",
    "End-to-end procurement management for industrial projects."
  ],
  [
    "Supply chain solutions",
    "Logistics and inventory coordination to keep supply steady."
  ]
] as const

export const industryCopy = [
  [
    "Construction and infrastructure",
    "Earth-movers, cranes, generators and site equipment."
  ],
  [
    "Manufacturing",
    "Industrial machines, tools, cooling systems and spare parts."
  ],
  [
    "Energy and utilities",
    "Standby and continuous power, plus test instruments."
  ],
  [
    "Oil, gas and mining",
    "Heavy-duty machinery, power packages and haulers."
  ],
  [
    "Labs, telecom and engineering",
    "Test, calibration and measurement equipment."
  ],
  [
    "Retail, wholesale and e-commerce",
    "Household goods and dry pet food for stores, importers and online sellers."
  ]
] as const

export const marketplaces = [
  [
    "Amazon",
    "Household essentials, dry pet food and general merchandise."
  ],
  [
    "Walmart Marketplace",
    "Daily-use products at competitive prices."
  ],
  [
    "eBay",
    "New and select pre-owned products, including tools and equipment."
  ],
  [
    "TikTok Shop",
    "Trending products reaching new audiences through social commerce."
  ]
] as const

export const partnership = [
  "Want your brand on Amazon, Walmart, eBay and TikTok?",
  "If you own or make a brand and want a stronger US marketplace presence, we can sell it for you, handling listings, pricing, fulfillment and customer support."
] as const

export const marketplaceIntro = "We run an online retail operation selling a variety of brands on the major marketplaces, and we handle everything from sourcing to returns." as const

export const marketplaceTasks = [
  "Product sourcing",
  "Listing creation and optimization",
  "Inventory and orders",
  "Fast fulfillment",
  "Customer service and returns"
] as const

export const faq = [
  [
    "Do you sell used equipment?",
    "Yes. We supply both new and used machinery and generators. Used items are quoted with condition details before you commit."
  ],
  [
    "Do you ship internationally?",
    "Yes. We coordinate documentation, shipping and delivery to destinations worldwide."
  ],
  [
    "Can I order small quantities?",
    "Yes. We handle single units as well as bulk and container-size orders."
  ],
  [
    "What pet food do you supply?",
    "Dry pet food only. It needs no refrigeration or temperature-controlled storage."
  ],
  [
    "Can you sell my brand online?",
    "Yes. We list, price, fulfill and support brands on Amazon, Walmart, eBay and TikTok Shop. Send us your details through the quote form."
  ]
] as const

export const aboutCopy = [
  "Base Trading is a USA-based international trading company in Hicksville, New York. We supply new and used earth-moving machinery, industrial machines, commercial generators and test and measurement instruments, as well as household items and dry pet food.",
  "We are also an active online seller across Amazon, Walmart, eBay and TikTok Shop. Whatever you need, you deal with one team and one process."
] as const

export const heroCopy = [
  "One trusted partner for machinery, power, instruments and everyday goods",
  "We source and supply new and used earth-moving machinery, industrial equipment, commercial generators and test and measurement equipment. We also sell household items and dry pet food in bulk and through Amazon, Walmart, eBay and TikTok Shop."
] as const

export const facts = [
  [
    "New and used",
    "Options for every budget"
  ],
  [
    "Verified sourcing",
    "Suppliers checked before quoting"
  ],
  [
    "4 marketplaces",
    "Amazon, Walmart, eBay, TikTok Shop"
  ],
  [
    "Worldwide shipping",
    "Paperwork and delivery handled"
  ]
] as const

export const description = "USA-based trading company supplying new and used earth-moving machinery, industrial equipment, commercial generators, test and measurement equipment, household goods and dry pet food, plus online sales on Amazon, Walmart, eBay and TikTok Shop." as const

export const quoteCategories = [...products.map(product => product.category), 'Brand partnership', 'Other']

export function quoteHref(category: string) {
  return `/contact?category=${encodeURIComponent(category)}#quote`
}
