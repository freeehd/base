import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    { url: 'https://www.thebasetrading.com', lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: 'https://www.thebasetrading.com/about', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.thebasetrading.com/services', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.thebasetrading.com/products', lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://www.thebasetrading.com/contact', lastModified, changeFrequency: 'yearly', priority: 0.7 },
  ]
}
