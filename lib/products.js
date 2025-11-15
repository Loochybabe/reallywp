/**
 * Load all products from products.json.
 * fs/path are required lazily so this module can be imported in client bundles
 * without triggering a "Can't resolve 'fs'" error.
 */
export function getAllProducts() {
  try {
    // Avoid static import by using require inside try/catch for server-side only
    if (typeof window !== 'undefined') return []
    
    const fs = require('fs')
    const path = require('path')
    const productsPath = path.join(process.cwd(), 'products.json')
    const data = fs.readFileSync(productsPath, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    // When running in the browser bundler 'require' may throw; return empty list
    if (typeof window !== 'undefined') return []
    console.error('Error loading products.json:', error)
    return []
  }
}

/**
 * Get a single product by ID
 */
export function getProductById(id) {
  const products = getAllProducts()
  return products.find(p => p.id === parseInt(id))
}

/**
 * Map product categories to silos and clusters
 */
const categoryToSilo = {
  'SEO Plugins': { silo: 'plugins', cluster: 'seo' },
  'Security Plugins': { silo: 'plugins', cluster: 'security' },
  'Security & Backup': { silo: 'plugins', cluster: 'security' },
  'Membership Plugins': { silo: 'plugins', cluster: 'membership' },
  'Forms Plugins': { silo: 'plugins', cluster: 'forms' },
  'Donations Plugins': { silo: 'plugins', cluster: 'donations' },
  'Events Plugins': { silo: 'plugins', cluster: 'events' },
  'LMS Plugins': { silo: 'plugins', cluster: 'lms' },
  'Utilities': { silo: 'plugins', cluster: 'utilities' },
  'WooCommerce Addons': { silo: 'builders', cluster: 'woocommerce-builders' },
  'E-commerce Utilities': { silo: 'builders', cluster: 'woocommerce-builders' },
  'Themes': { silo: 'themes', cluster: 'multipurpose' },
  'Schema Plugins': { silo: 'plugins', cluster: 'utilities' },
  'Block Editor Tools': { silo: 'plugins', cluster: 'utilities' },
  'Page Builders': { silo: 'builders', cluster: 'page-builders' },
}

/**
 * Get products by silo and cluster
 */
export function getProductsByCluster(silo, cluster) {
  const products = getAllProducts()
  return products.filter(product => {
    const mapping = categoryToSilo[product.category]
    return mapping && mapping.silo === silo && mapping.cluster === cluster
  })
}

/**
 * Get all products for a silo (all clusters)
 */
export function getProductsBySilo(silo) {
  const products = getAllProducts()
  return products.filter(product => {
    const mapping = categoryToSilo[product.category]
    return mapping && mapping.silo === silo
  })
}

/**
 * Get featured products (first N products)
 */
export function getFeaturedProducts(limit = 6) {
  const products = getAllProducts()
  return products.slice(0, limit)
}

function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/^prod[_-]?/i, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Build a cluster-style URL for a product when possible.
 * Returns a string like `/plugins/seo/solid-security` or null if mapping not available.
 */
export function getProductClusterUrl(product) {
  if (!product) return null
  const mapping = categoryToSilo[product.category]
  if (!mapping) return null
  const silo = mapping.silo
  const cluster = mapping.cluster
  const slug = product.alias ? slugify(product.alias) : slugify(product.name || product.id)
  return `/${silo}/${cluster}/${slug}`
}

/**
 * Find a product by silo, cluster and slug (slug derived from alias or name)
 */
export function getProductByClusterSlug(silo, cluster, slug) {
  const products = getAllProducts()
  return products.find(p => {
    const mapping = categoryToSilo[p.category]
    if (!mapping) return false
    if (mapping.silo !== silo || mapping.cluster !== cluster) return false
    const candidate = p.alias ? slugify(p.alias) : slugify(p.name || p.id)
    return candidate === String(slug)
  }) || null
}

/**
 * Return an array of all cluster product path params: { silo, cluster, slug }
 */
export function getAllClusterProductPaths() {
  const products = getAllProducts()
  const paths = []
  for (const p of products) {
    const mapping = categoryToSilo[p.category]
    if (!mapping) continue
    const slug = p.alias ? slugify(p.alias) : slugify(p.name || p.id)
    paths.push({ silo: mapping.silo, cluster: mapping.cluster, slug })
  }
  return paths
}

/**
 * Search products by name or category
 */
export function searchProducts(query) {
  const products = getAllProducts()
  const lowerQuery = query.toLowerCase()
  return products.filter(p =>
    p.name.toLowerCase().includes(lowerQuery) ||
    p.category.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery)
  )
}
