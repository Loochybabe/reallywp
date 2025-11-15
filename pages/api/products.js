import {
    getAllProducts,
    getFeaturedProducts,
    getProductById,
    getProductsByCluster,
    getProductsBySilo,
    searchProducts,
} from '../../lib/products'

export default function handler(req, res) {
  const { method, query } = req
  const { silo, cluster, id, search, featured } = query

  if (method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    let data

    // Get single product by ID
    if (id) {
      data = getProductById(id)
      if (!data) {
        return res.status(404).json({ error: 'Product not found' })
      }
    }
    // Get products by silo and cluster
    else if (silo && cluster) {
      data = getProductsByCluster(silo, cluster)
    }
    // Get all products by silo
    else if (silo) {
      data = getProductsBySilo(silo)
    }
    // Get featured products
    else if (featured) {
      const limit = parseInt(featured) || 6
      data = getFeaturedProducts(limit)
    }
    // Search products
    else if (search) {
      data = searchProducts(search)
    }
    // Get all products
    else {
      data = getAllProducts()
    }

    res.status(200).json({ success: true, data })
  } catch (error) {
    console.error('API error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
