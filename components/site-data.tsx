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
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
    { label: 'About Us', href: '/about' },

  { label: 'Contact', href: '/contact' },
]

export const PHONE_DISPLAY = '+1 (657) 289-4747'
export const PHONE_HREF = 'tel:+16572894747'
export const EMAIL = 'info@thebasetrading.com'
export const WEB = 'www.thebasetrading.com'
export const WEB_HREF = 'https://www.thebasetrading.com'
export const ADDRESS = (
  <>
    1801 E. Katella Ave, Suite 500
    <br />
    Anaheim, CA 92805, USA
  </>
)

export const categories = [
  { tag: 'Heavy Construction', title: 'Heavy Construction Equipment', image: images.construction, items: ['Excavators', 'Bulldozers', 'Wheel Loaders', 'Cranes', 'Motor Graders', 'Dump Trucks'], note: 'From leading global manufacturers' },
  { tag: 'Industrial', title: 'Industrial Equipment', image: images.industrial, items: ['All Types of Radiators', 'Mechanical Equipment', 'Industrial Tools', 'Generators', 'All Types of Generators', 'Electrical Equipments'], note: 'Built for performance & durability' },
  { tag: 'Spare Parts', title: 'Spare Parts', image: images.parts, items: ['Hydraulic Attachments', 'Undercarriage Parts', 'Engine Components', 'Wear Parts & Filters'], note: 'Genuine & OEM-equivalent parts' },
]

export const industries = [
  { title: 'Construction', desc: 'Earth-moving machinery, excavators, loaders, cranes & site equipment', icon: 'HardHat' },
  { title: 'Manufacturing', desc: 'Industrial machinery, tools, radiators, mechanical systems & spare parts', icon: 'Factory' },
  { title: 'Energy & Utilities', desc: 'Standby & continuous power generation, gensets, alternators & power units', icon: 'Zap' },
  { title: 'Oil & Gas', desc: 'Heavy-duty power packages, prime engines, pumps & offshore power systems', icon: 'Flame' },
  { title: 'Agriculture', desc: 'Industrial engines, power units, generators & heavy utility equipment', icon: 'Tractor' },
  { title: 'Mining', desc: 'Heavy earth-movers, high-horsepower engines, haulers & cooling systems', icon: 'Mountain' },
  { title: 'Commercial Facilities', desc: 'Facility emergency standby power, electrical equipment & HVAC solutions', icon: 'Building2' },
  { title: 'Government & Municipal', desc: 'Municipal utility equipment, emergency backup power & infrastructure supply', icon: 'Landmark' },
  { title: 'Wholesale & Retail', desc: 'Bulk machinery distribution, OEM equipment & international trade supply', icon: 'Store' },
  { title: "Int'l Trading & Logistics", desc: 'Cross-border equipment sourcing, import/export logistics & supply chain', icon: 'Globe2' },
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
  ['Global Product Sourcing', 'Connecting businesses with trusted manufacturers worldwide', 'Globe2'],
  ['Import & Export', 'Reliable international shipping and documentation support', 'Ship'],
  ['Industrial Procurement', 'End-to-end procurement management for industrial projects', 'PackageCheck'],
  ['OEM & Private Label', 'Custom branding and manufacturing solutions tailored to your business', 'Star'],
  ['Supply Chain Solutions', 'Efficient logistics and inventory management worldwide', 'Truck'],
]

export const trustItems: [string, string, string][] = [
  ['Trust & Reliability', 'Reliable products and services you can count on', 'ShieldCheck'],
  ['Quality Assurance', 'Only high-quality products from trusted makers', 'Check'],
  ['Strong Partnerships', 'Long-term relationships with industry leaders', 'Globe2'],
  ['Customer Focus', 'Your success is our top priority in everything', 'CircleDot'],
]

export const whyItems: [string, string, string][] = [
  ['A1', 'Global Supplier Network', 'Access to trusted manufacturers worldwide'],
  ['A2', 'International Quality Standards', 'Products meeting global quality benchmarks'],
  ['A3', 'Competitive Wholesale Pricing', 'Best value with transparent pricing'],
  ['A4', 'Worldwide Logistics', 'Efficient global shipping and supply chains'],
  ['B1', 'Reliable Customer Support', 'Dedicated support team at every step'],
  ['B2', 'Trusted Manufacturing Partners', 'Strong ties with leading manufacturers'],
  ['B3', 'Customized Procurement', 'Tailored solutions for unique business needs'],
  ['B4', 'Fast Delivery', 'Timely delivery to keep projects on track'],
]

export const valuesList: [string, string, string][] = [
  ['Quality', 'Premium quality in every product', 'Star'],
  ['Reliability', 'Consistent & dependable service', 'CircleDot'],
  ['Integrity', 'Transparent business practices', 'ShieldCheck'],
  ['Growth', 'Helping your business grow', 'Zap'],
]

export const logiPoints: [string, string, string][] = [
  ['Global Supplier Network', 'Access to trusted manufacturers worldwide', 'Globe2'],
  ['Import & Export Documentation', 'Reliable international shipping and documentation support', 'PackageCheck'],
  ['Efficient Logistics & Inventory Management', 'Supply chain solutions that keep projects on track', 'Truck'],
  ['Fast Delivery', 'Timely delivery to keep projects on track', 'Zap'],
]

export const servicesTeaser: [string, string, string][] = [
  ['Global Product Sourcing', 'Verified manufacturers worldwide — single units to bulk orders', 'Globe2'],
  ['Industrial Procurement', 'End-to-end procurement management for industrial projects', 'PackageCheck'],
  ['Supply Chain Solutions', 'Efficient logistics and inventory management worldwide', 'Truck'],
]

export const servicesDetailed: { title: string; description: string; includes: string[]; icon: string }[] = [
  {
    title: 'Global Product Sourcing',
    description: 'We connect you directly with trusted manufacturers and verified suppliers worldwide — from single units to bulk orders, across machinery, industrial equipment, generators and spare parts.',
    includes: ['Verified global supplier network', 'Single units or bulk orders', 'Transparent pricing & quotations', 'Quality checks before shipping'],
    icon: 'Globe2',
  },
  {
    title: 'Import & Export',
    description: 'Full-service international trade: documentation, customs and shipment handling so your equipment moves across borders without friction — from origin port to your site.',
    includes: ['Import & export documentation', 'Customs & compliance handling', 'Incoterms guidance', 'Freight coordination & tracking'],
    icon: 'Ship',
  },
  {
    title: 'Industrial Procurement',
    description: 'End-to-end procurement management for industrial projects. We manage the supplier, the specification and the schedule — from inquiry to handover, so your team can focus on operations.',
    includes: ['Requirement analysis & spec matching', 'Supplier shortlisting & verification', 'Order management & follow-up', 'Project-scale coordination'],
    icon: 'PackageCheck',
  },
  {
    title: 'OEM & Private Label',
    description: 'Custom branding and manufacturing solutions tailored to your business — build your own product line with our manufacturing partners, with quality and compliance controlled throughout.',
    includes: ['Custom branding & packaging', 'Private label manufacturing', 'Quality & compliance control', 'Flexible order quantities'],
    icon: 'Star',
  },
  {
    title: 'Supply Chain Solutions',
    description: 'Efficient logistics and inventory management worldwide, keeping your projects on track with reliable delivery timelines and a dedicated account team at every step.',
    includes: ['Worldwide logistics coordination', 'Inventory planning support', 'Delivery timeline management', 'Dedicated account support'],
    icon: 'Truck',
  },
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
  ['USA-Based', 'Head office in Anaheim, California'],
  ['Global Network', 'Verified suppliers worldwide'],
  ['End-to-End', 'Sourcing through to delivery'],
  ['Dedicated Support', 'One team from quote to handover'],
]

export const homeIndustries = industries.slice(0, 6)

export const sourcingSteps: [string, string, string][] = [
  ['01', 'Tell Us What You Need', 'Models, quantities, destination port and target timelines.'],
  ['02', 'We Verify & Quote', 'Suppliers qualified, availability confirmed, formal quotation sent.'],
  ['03', 'We Deliver Worldwide', 'Procurement, documentation and shipment to your site.'],
]

export const whatsNextSteps: [string, string, string][] = [
  ['01', 'We Review Your Request', 'Our team reviews your requirements within one business day.'],
  ['02', 'Availability & Quotation', 'We confirm availability and send a formal quotation.'],
  ['03', 'Delivery & Support', 'We manage logistics and support you through handover.'],
]
