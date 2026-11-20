export const imageRoot = 'https://image.qwenlm.ai/public_source/ded14d86-c531-40b8-9e16-a33de8055630/'

export const images = {
  hero: imageRoot + '11701b352-5bfd-40ff-85a2-b32a9550f215.png',
  construction: imageRoot + '1c9afc894-c5eb-476e-9f42-06ac4f1230a5.png',
  industrial: imageRoot + '11e262662-3249-4792-800d-c5cbb4960db7.png',
  parts: imageRoot + '12ba7f022-1e1f-4202-88dd-f4c93e92a93d.png',
  genset: imageRoot + '1d56fb7d4-912f-46a0-9cf2-ea9ca5de86d1.png',
  engine: imageRoot + '111a2aa96-06d2-4a65-a528-22698346998e.png',
  radiator: imageRoot + '1d67117cc-ac43-4b10-89be-7b7a5e9e48aa.png',
  genend: imageRoot + '1e0816f05-0a4a-4c0f-b2da-81edf12e782c.png',
  power: imageRoot + '16bb8f5dc-756c-4f36-8766-c21bd3b1f105.png',
  marine: imageRoot + '1329c8b85-c72f-4461-8ef4-7f444a4f3132.png',
  logistics: imageRoot + '135f650c0-6e62-4986-8f07-4fff6f3f085b.png',
}

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Online Stores', href: '/online-stores' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const PHONE_DISPLAY = '+1 (516) 395-9535'
export const PHONE_HREF = 'tel:+15163959535'
export const EMAIL = 'contact@thebasetrading.com'
export const WEB = 'www.thebasetrading.com'
export const WEB_HREF = 'https://www.thebasetrading.com'
export const ADDRESS = (
  <>
    Hicksville, New York 11801, USA
  </>
)

export const categories = [
  { group: 'equip', tag: 'New and used', title: 'Earth-moving machinery', quoteCategory: 'Earth-moving machinery', image: images.construction,
    items: ['Excavators', 'Bulldozers', 'Wheel loaders', 'Backhoe loaders', 'Motor graders', 'Cranes', 'Dump trucks', 'Compactors', 'Skid steers'],
    note: 'Condition details supplied for used machinery' },
  { group: 'equip', tag: 'Plant and workshop', title: 'Industrial machines', quoteCategory: 'Industrial machines', image: images.industrial,
    items: ['Machine tools', 'Processing machinery', 'Compressors', 'Pumps', 'Radiators & cooling systems', 'Industrial tools', 'Electrical equipment'],
    note: 'Industrial plant and workshop supply' },
  { group: 'equip', tag: 'New and used', title: 'Commercial generators', quoteCategory: 'Commercial generators', image: images.genset,
    items: ['Diesel generator sets', 'Gas generator sets', 'Standby units', 'Prime-duty units', 'Alternators', 'Complete power packages'],
    note: 'Standby and prime power' },
  { group: 'equip', tag: 'Instruments', title: 'Test and measurement equipment', quoteCategory: 'Test and measurement equipment', image: null,
    items: ['Multimeters', 'Oscilloscopes', 'Power analyzers', 'Calibration tools', 'Insulation & earth testers', 'Thermal & flow instruments'],
    note: 'Lab and field instruments' },
  { group: 'equip', tag: 'Parts', title: 'Spare parts and attachments', quoteCategory: 'Spare parts and attachments', image: images.parts,
    items: ['Hydraulic attachments', 'Undercarriage parts', 'Engine components', 'Filters', 'Wear parts', 'Genuine & OEM-equivalent parts'],
    note: 'Equipment maintenance and replacement' },
  { group: 'goods', tag: 'Wholesale and online', title: 'Household and daily-use items', quoteCategory: 'Household items', image: null,
    items: ['Kitchen & home essentials', 'Cleaning supplies', 'Storage', 'Personal care', 'General merchandise'],
    note: 'Wholesale and online sales' },
  { group: 'goods', tag: 'Wholesale and online', title: 'Dry pet food', quoteCategory: 'Dry pet food', image: null,
    items: ['Dry kibble for dogs', 'Shelf-stable dry dog food', 'Dry kibble for cats', 'Shelf-stable dry cat food'],
    note: 'Dry products only · No refrigeration or temperature-controlled storage' },
]

export const industries = [
  { title: 'Construction and infrastructure', desc: 'Earth-movers, cranes, generators and site equipment.', icon: 'HardHat' },
  { title: 'Manufacturing', desc: 'Industrial machines, tools, cooling systems and spare parts.', icon: 'Factory' },
  { title: 'Energy and utilities', desc: 'Standby and continuous power, plus test instruments.', icon: 'Zap' },
  { title: 'Oil, gas and mining', desc: 'Heavy-duty machinery, power packages and haulers.', icon: 'Flame' },
  { title: 'Labs, telecom and engineering', desc: 'Test, calibration and measurement equipment.', icon: 'Globe2' },
  { title: 'Retail, wholesale and e-commerce', desc: 'Household goods and dry pet food for stores, importers and online sellers.', icon: 'Store' },
]

export const inventory = [
  { cat: 'gensets', label: 'Generator Sets', title: 'Diesel Generator Set', status: 'Like New', image: images.genset, desc: 'Like-new standby power package with a diesel engine and generator end.', specs: [['Fuel', 'Diesel'], ['Configuration', 'Standby'], ['Cooling', 'Radiator cooled']], notes: 'Autostart and safety shutdown panel · sound-attenuated enclosure.', apps: 'data centers · healthcare · construction · oil & gas · mining · emergency power' },
  { cat: 'engines', label: 'Industrial Engines', title: 'Industrial Diesel Engine', status: 'Low Hour', image: images.engine, desc: 'Low-hour heavy-duty diesel engine suited to demanding industrial and marine projects.', specs: [['Fuel', 'Diesel'], ['Governor', 'Electronic'], ['Cooling', 'Radiator cooled']], notes: 'Dyno tested · ready for industrial installation.', apps: 'power generation · construction · marine · mining · oil & gas' },
  { cat: 'radiators', label: 'Industrial Radiators', title: 'Industrial Radiator Assembly', status: 'Good Used', image: images.radiator, desc: 'Good-used radiator assembly for large industrial generator sets.', specs: [['Type', 'Industrial cooling'], ['Fan', 'Included'], ['Fan Drive', 'Engine driven']], notes: 'Industrial cooling assembly with fan and core.', apps: 'heavy generator sets · industrial engines · power plants' },
  { cat: 'genends', label: 'Generator Ends', title: 'Generator End / Alternator', status: 'Like New', image: images.genend, desc: 'Like-new high-voltage generator end for standby power generation systems.', specs: [['Excitation', 'Brushless'], ['Drive', 'Single bearing'], ['Phase', 'Three phase']], notes: 'Standby rating · SAE flywheel housing.', apps: 'power generation · data centers · emergency power' },
  { cat: 'powerunits', label: 'Power Units', title: 'Diesel Power Unit', status: 'Rebuilt', image: images.power, desc: 'Rebuilt diesel power unit configured for dependable industrial operation.', specs: [['Fuel', 'Diesel'], ['Cooling', 'Radiator cooled'], ['Governor', 'Electronic']], notes: '24-volt alternator and electric starter · dyno tested.', apps: 'industrial pumps · heavy compressors · agricultural machinery' },
  { cat: 'marine', label: 'Marine Engines', title: 'Marine Diesel Engine', status: 'Ready to Ship', image: images.marine, desc: 'Commercial marine diesel engine, dyno tested and ready to ship.', specs: [['Fuel', 'Diesel'], ['Cooling', 'Keel cooled'], ['Condition', 'Good used']], notes: '24-volt alternator and electric starter · engine gauges included.', apps: 'marine vessels · dredging · auxiliary power · propulsion' },
]

export const inventoryCategories = [
  ['Generator Sets', 'Diesel and natural-gas packages', 'gensets'],
  ['Industrial Engines', 'Heavy-duty power for industrial applications', 'engines'],
  ['Radiators', 'Industrial cooling assemblies and components', 'radiators'],
  ['Generator Ends', 'New and used alternators across power ranges', 'genends'],
  ['Power Units', 'Packaged engines for pumps and machinery', 'powerunits'],
  ['Marine Engines', 'Commercial marine propulsion and auxiliary power', 'marine'],
]

export const stockTabs: [string, string][] = [
  ['all', 'All Units'],
  ['gensets', 'Generator Sets'],
  ['engines', 'Industrial Engines'],
  ['radiators', 'Radiators'],
  ['genends', 'Generator Ends'],
  ['powerunits', 'Power Units'],
  ['marine', 'Marine Engines'],
]

export const servicesList: [string, string, string][] = [
  ['Global product sourcing', 'Verified manufacturers and suppliers worldwide for single units or bulk orders', 'Globe2'],
  ['New and used equipment supply', 'Machinery with condition details shared before commitment', 'Check'],
  ['Import and export support', 'Documentation, shipping coordination and delivery', 'Ship'],
  ['Wholesale and bulk supply', 'Household goods and dry pet food for retailers and distributors', 'PackageCheck'],
  ['Online marketplace selling', 'Amazon, Walmart, eBay and TikTok Shop', 'Store'],
  ['Brand partnership', 'Represent and sell your brand through major online marketplaces', 'Star'],
  ['OEM and private label', 'Custom sourcing and branding for selected product lines', 'Star'],
  ['Industrial procurement', 'End-to-end procurement for industrial projects', 'PackageCheck'],
  ['Supply chain solutions', 'Logistics and inventory coordination', 'Truck'],
]

export const trustItems: [string, string, string][] = [
  ['New and used', 'Options for every budget', 'Check'],
  ['Verified sourcing', 'Suppliers checked before quoting', 'ShieldCheck'],
  ['4 marketplaces', 'Amazon, Walmart, eBay, TikTok Shop', 'Store'],
  ['Worldwide shipping', 'Paperwork and delivery handled', 'Globe2'],
]

export const whyItems: [string, string, string][] = [
  ['A1', 'New and used options', 'Equipment options for different project budgets'],
  ['A2', 'Supplier verification', 'Suppliers checked before quotation'],
  ['A3', 'Single units or bulk orders', 'Support for individual units and container-size requirements'],
  ['A4', 'Worldwide delivery', 'Documentation, shipping coordination and delivery'],
  ['B1', 'Industrial equipment sourcing', 'Machinery, generators, spare parts and test instruments'],
  ['B2', 'Wholesale goods', 'Household essentials and shelf-stable dry pet food'],
  ['B3', 'Online marketplace sales', 'Amazon, Walmart, eBay and TikTok Shop'],
  ['B4', 'One team and process', 'From sourcing and quotation to order handling'],
]

export const valuesList: [string, string, string][] = [
  ['Verified sourcing', 'Suppliers checked before quoting', 'ShieldCheck'],
  ['Condition transparency', 'Used equipment quoted with condition details', 'Check'],
  ['Worldwide delivery', 'Documentation and shipment coordination', 'Globe2'],
  ['Marketplace operations', 'Listings, fulfillment and customer returns support', 'Store'],
]

export const logiPoints: [string, string, string][] = [
  ['Worldwide sourcing', 'Verified manufacturers and suppliers worldwide', 'Globe2'],
  ['Import and export support', 'Documentation and international shipping coordination', 'PackageCheck'],
  ['Bulk orders', 'Procurement for single units, bulk and container-size orders', 'Truck'],
  ['Delivery coordination', 'From quotation and approval to worldwide delivery', 'Ship'],
]

export const servicesTeaser: [string, string, string][] = [
  ['Global product sourcing', 'Verified manufacturers and suppliers worldwide', 'Globe2'],
  ['New and used equipment', 'Condition details provided before commitment', 'Check'],
  ['Import and export', 'International documentation and shipping coordination', 'Ship'],
  ['Wholesale and bulk supply', 'Household goods and dry pet food for retail', 'PackageCheck'],
  ['Marketplace selling', 'Amazon, Walmart, eBay and TikTok Shop', 'Store'],
  ['Brand partnership', 'Sell your brand across major online marketplaces', 'Star'],
]

export const servicesDetailed: { title: string; description: string; includes: string[]; icon: string }[] = [
  { title: 'Global product sourcing', description: 'Verified manufacturers and suppliers worldwide, for single units or bulk orders.', includes: ['Worldwide sourcing', 'Single units', 'Bulk orders'], icon: 'Globe2' },
  { title: 'New and used equipment supply', description: 'Machinery with condition details shared before you commit.', includes: ['New equipment', 'Used equipment', 'Condition details'], icon: 'Check' },
  { title: 'Import and export support', description: 'Documentation, shipping coordination and delivery to your destination.', includes: ['Trade documentation', 'Shipping coordination', 'Worldwide delivery'], icon: 'Ship' },
  { title: 'Wholesale and bulk supply', description: 'Household goods and dry pet food for retailers and distributors.', includes: ['Household items', 'Dry pet food', 'Bulk supply'], icon: 'PackageCheck' },
  { title: 'Online marketplace selling', description: 'Branded products sold on Amazon, Walmart, eBay and TikTok Shop.', includes: ['Marketplace listings', 'Inventory and orders', 'Fulfillment and returns'], icon: 'Store' },
  { title: 'Brand partnership', description: 'We represent and sell your brand across major online marketplaces.', includes: ['Listings and pricing', 'Fulfillment', 'Customer support'], icon: 'Star' },
  { title: 'OEM and private label', description: 'Custom sourcing and branding for selected product lines.', includes: ['Custom sourcing', 'Selected product lines', 'Private label'], icon: 'Star' },
  { title: 'Industrial procurement', description: 'End-to-end procurement management for industrial projects.', includes: ['Industrial project procurement', 'Supplier verification', 'Order processing'], icon: 'PackageCheck' },
  { title: 'Supply chain solutions', description: 'Logistics and inventory coordination to keep supply steady.', includes: ['Logistics coordination', 'Inventory coordination', 'Supply continuity'], icon: 'Truck' },
]

export const processStepsDetailed: [string, string][] = [
  ['Request a Quote', 'Share your requirements — models, quantities, and destination.'],
  ['Product Consultation', 'Our team advises on the best options for your application.'],
  ['Supplier Verification', 'We qualify suppliers and confirm availability and pricing.'],
  ['Quotation & Approval', 'You receive a formal quotation for your approval.'],
  ['Order Processing', 'We manage procurement, inspection, and documentation.'],
  ['Worldwide Delivery', 'Your equipment ships and is delivered to your site.'],
]

export const aboutStats: [string, string][] = [
  ['USA-based', 'Hicksville, New York'],
  ['New and used', 'Machinery and commercial generators'],
  ['Four marketplaces', 'Amazon · Walmart · eBay · TikTok Shop'],
  ['Worldwide delivery', 'Documentation and shipping coordination'],
]

export const homeIndustries = industries.slice(0, 6)

export const sourcingSteps: [string, string, string][] = [
  ['01', 'Tell Us What You Need', 'Models, quantities, destination port and target timelines.'],
  ['02', 'We Verify & Quote', 'Suppliers qualified, availability confirmed, formal quotation sent.'],
  ['03', 'We Deliver Worldwide', 'Procurement, documentation and shipment to your site.'],
]

export const whatsNextSteps: [string, string, string][] = [
  ['01', 'We Review Your Request', 'Our team reviews your requirements and destination details.'],
  ['02', 'Availability & Quotation', 'We confirm availability and send a formal quotation.'],
  ['03', 'Delivery & Support', 'We manage logistics and support you through handover.'],
]
