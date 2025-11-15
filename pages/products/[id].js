import CanonicalHead from '../../components/CanonicalHead'
import FeatureList from '../../components/FeatureList'
import ProsCons from '../../components/ProsCons'
import { getProductById } from '../../lib/products'
import { getProductReview } from '../../lib/reviews'

export default function ProductReview({ product, review }) {
  if (!product || !review) {
    return <div style={{padding: 24, textAlign: 'center'}}>Product not found</div>
  }

  return (
    <>
      <CanonicalHead
        title={`${product.name} Review | ReallyWP`}
        description={`In-depth review of ${product.name}. Pros, cons, features, and rating to help you decide.`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Review',
          'name': `${product.name} Review`,
          'reviewBody': review.summary,
          'reviewRating': {
            '@type': 'Rating',
            'ratingValue': review.rating,
            'bestRating': 5,
            'worstRating': 1,
          },
          'author': {
            '@type': 'Organization',
            'name': 'ReallyWP',
          },
        }}
      />

      {/* Breadcrumb */}
      <nav style={{fontSize: 14, marginBottom: 24, color: '#666'}}>
        <a href="/" style={{color: '#667eea', textDecoration: 'none', cursor: 'pointer'}}>Home</a>
        {' / '}
        <span style={{color: '#667eea'}}>{product.category}</span>
        {' / '}
        <span>{product.name}</span>
      </nav>

      {/* Hero */}
      <div style={{padding: '32px 0', marginBottom: 48, borderBottom: '1px solid #eee'}}>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start'}}>
          {/* Left: Product Image & Rating */}
          <div style={{textAlign: 'center'}}>
            <img src={product.image} alt={product.name} style={{maxHeight: 300, maxWidth: '100%', borderRadius: 8, marginBottom: 16}} />
            <div style={{fontSize: 24, color: '#f59e0b', marginBottom: 8}}>
              {'★'.repeat(Math.round(review.rating))}
              <span style={{marginLeft: 8, fontSize: 16, color: '#666'}}>
                {review.rating}/5
              </span>
            </div>
            <div style={{fontSize: 18, fontWeight: 600, color: '#667eea', marginBottom: 16}}>
              {review.price}
            </div>
            <a href={product.affiliate_link} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-block',
              padding: '12px 24px',
              background: '#667eea',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: 4,
              fontWeight: 600,
            }}>
              View Official Site →
            </a>
          </div>

          {/* Right: Product Info */}
          <div>
            <h1 style={{margin: '0 0 16px 0', fontSize: 36}}>{product.name}</h1>
            <p style={{fontSize: 16, color: '#666', lineHeight: 1.8, marginBottom: 16}}>
              {review.summary}
            </p>
            <div style={{background: '#f0f4ff', padding: 16, borderRadius: 8, marginBottom: 16}}>
              <h3 style={{margin: '0 0 8px 0', fontSize: 14, fontWeight: 600}}>Best For</h3>
              <p style={{margin: 0, fontSize: 14, color: '#374151'}}>
                {review.bestFor}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pros & Cons */}
      <h2 style={{marginBottom: 24, fontSize: 28}}>Pros & Cons</h2>
      <ProsCons pros={review.pros} cons={review.cons} />

      {/* Features */}
      <h2 style={{marginBottom: 24, fontSize: 28}}>Key Features</h2>
      <FeatureList features={review.features} columns={2} />

      {/* Detailed Review */}
      <h2 style={{marginBottom: 24, fontSize: 28}}>Detailed Review</h2>
      <div style={{
        fontSize: 16,
        lineHeight: 1.8,
        color: '#374151',
        marginBottom: 48,
        maxWidth: '100%',
        whiteSpace: 'pre-wrap',
      }}>
        {review.detailedReview}
      </div>

      {/* CTA */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: '#fff',
        padding: 48,
        borderRadius: 8,
        textAlign: 'center',
        marginBottom: 48,
      }}>
        <h2 style={{margin: '0 0 16px 0'}}>Ready to Get Started?</h2>
        <p style={{margin: '0 0 24px 0', fontSize: 18}}>
          Visit the official site to learn more and get started.
        </p>
        <a href={product.affiliate_link} target="_blank" rel="noopener noreferrer" style={{
          display: 'inline-block',
          padding: '14px 32px',
          background: '#fff',
          color: '#667eea',
          textDecoration: 'none',
          borderRadius: 4,
          fontWeight: 600,
          fontSize: 16,
        }}>
          Visit {product.name} →
        </a>
      </div>
    </>
  )
}

export async function getStaticProps({ params }) {
  const { id } = params
  const product = getProductById(id)
  const review = getProductReview(parseInt(id))

  if (!product || !review) {
    return { notFound: true }
  }

  return {
    props: { product, review },
    revalidate: 3600, // ISR: revalidate every hour
  }
}

export async function getStaticPaths() {
  // Build paths for all reviewed products
  const reviewedIds = [1, 2, 5, 10] // Product IDs with reviews
  const paths = reviewedIds.map(id => ({
    params: { id: id.toString() },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}
