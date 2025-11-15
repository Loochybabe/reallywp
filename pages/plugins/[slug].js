import Link from 'next/link'
import { useRouter } from 'next/router'
import CanonicalHead from '../../../components/CanonicalHead'
import ProductCard from '../../../components/ProductCard'
import { getProductClusterUrl, getProductsByCluster } from '../../../lib/products'

export default function PluginCluster({ products = [] }){
  const router = useRouter()
  const { slug } = router.query

  const clusterMap = {
    seo: { title: 'SEO Plugins', desc: 'Optimize your WordPress site for search engines.' },
    security: { title: 'Security Plugins', desc: 'Protect your site from threats and vulnerabilities.' },
    membership: { title: 'Membership Plugins', desc: 'Build and manage membership communities.' },
    forms: { title: 'Forms Plugins', desc: 'Create and manage powerful forms.' },
    lms: { title: 'LMS Plugins', desc: 'Create and sell online courses.' },
    donations: { title: 'Donations Plugins', desc: 'Accept donations on your site.' },
    events: { title: 'Events Plugins', desc: 'Manage and promote events.' },
    utilities: { title: 'Utilities Plugins', desc: 'Essential utility plugins.' },
  }

  const cluster = clusterMap[slug] || {}

  return (
    <>
      <CanonicalHead 
        title={`${cluster.title} | ReallyWP`}
        description={cluster.desc}
      />
      <nav style={{fontSize:14,marginBottom:24,color:'#666'}}>
        <Link href="/plugins" style={{color:'#667eea',textDecoration:'none'}}>Plugins</Link>
        <span> / {cluster.title}</span>
      </nav>

      <div className="cluster-hero" style={{padding:'32px 0',marginBottom:48}}>
        <h1 style={{margin:'0 0 8px 0',fontSize:36}}>{cluster.title}</h1>
        <p style={{margin:0,color:'#666',fontSize:16}}>{cluster.desc}</p>
      </div>

      {products.length > 0 ? (
        <div className="products-grid" style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))',gap:24,marginBottom:48}}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.name}
              category={`plugins/${slug}`}
              clusterHref={getProductClusterUrl(product)}
              image={product.image}
              price="View Details"
              description={product.description}
              affiliateLink={product.affiliate_link}
            />
          ))}
        </div>
      ) : (
        <div style={{padding:'24px',border:'1px solid #ddd',borderRadius:8,background:'#f9f9f9',textAlign:'center'}}>
          <p style={{margin:0,color:'#999'}}>No products found in this category.</p>
        </div>
      )}
    </>
  )
}

export async function getStaticProps({ params }) {
  const products = getProductsByCluster('plugins', params.slug)
  return {
    props: { products },
    revalidate: 3600, // ISR: revalidate every hour
  }
}

export async function getStaticPaths() {
  const clusters = ['seo', 'security', 'membership', 'forms', 'lms', 'donations', 'events', 'utilities']
  const paths = clusters.map(slug => ({ params: { slug } }))
  return {
    paths,
    fallback: 'blocking',
  }
}
