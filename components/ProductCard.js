import Link from 'next/link'

/**
 * ProductCard component
 * Props:
 *  - id (string): product ID/slug
 *  - title (string): product name
 *  - category (string): pillar/cluster path (e.g., 'plugins/seo')
 *  - image (string): product image URL
 *  - rating (number): 1-5 star rating
 *  - price (string): price or "Free"
 *  - description (string): short description
 *  - affiliateLink (string): affiliate URL
 */
export default function ProductCard({ 
  id, 
  title, 
  category, 
  image, 
  rating = 0, 
  price, 
  description, 
  affiliateLink,
  clusterHref // optional: cluster-style URL to product
}){
  return (
    <div className="product-card" style={{
      border: '1px solid #ddd',
      borderRadius: 8,
      overflow: 'hidden',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'all 0.3s',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}>
      {/* Image */}
      {image && (
        <div style={{height: 180, overflow: 'hidden', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <img src={image} alt={title} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        </div>
      )}

      {/* Content */}
      <div style={{padding: 16, flex: 1, display: 'flex', flexDirection: 'column'}}>
        <h3 style={{margin: '0 0 8px 0', fontSize: 18, fontWeight: 600}}>{title}</h3>
        
        {/* Rating */}
        {rating > 0 && (
          <div style={{marginBottom: 8, fontSize: 14, color: '#f59e0b'}}>
            {'★'.repeat(Math.round(rating))} ({rating}/5)
          </div>
        )}

        {/* Price */}
        {price && (
          <div style={{marginBottom: 8, fontSize: 16, fontWeight: 600, color: '#667eea'}}>
            {price}
          </div>
        )}

        {/* Description */}
        <p style={{margin: '0 0 12px 0', fontSize: 14, color: '#666', lineHeight: 1.5, flex: 1}}>
          {description}
        </p>

        {/* CTA */}
        <div style={{display: 'flex', gap: 8}}>
          <Link href={clusterHref || `/products/${id}`} style={{flex: 1, padding: '8px 12px', background: '#667eea', color: '#fff', textDecoration: 'none', borderRadius: 4, textAlign: 'center', fontSize: 14, fontWeight: 500}}>
            Read Review
          </Link>
          {affiliateLink && (
            <a href={affiliateLink} target="_blank" rel="noopener noreferrer" style={{flex: 1, padding: '8px 12px', background: '#f59e0b', color: '#fff', textDecoration: 'none', borderRadius: 4, textAlign: 'center', fontSize: 14, fontWeight: 500}}>
              Visit Site
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
