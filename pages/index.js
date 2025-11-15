import Link from 'next/link'
import CanonicalHead from '../components/CanonicalHead'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import { getFeaturedProducts, getProductClusterUrl } from '../lib/products'

export default function Home({ featured = [] }){
  return (
    <>
      <CanonicalHead title="ReallyWP — WordPress product reviews & guides" description="In-depth reviews, comparisons and guides for WordPress plugins, themes and builders." />

      <Hero title="ReallyWP" subtitle="Honest WordPress product reviews, comparisons and recommendations" background="linear-gradient(135deg, #0f172a 0%, #0ea5a3 100%)" />

      <section style={{padding: '0 24px', maxWidth: 1200, margin: '0 auto 48px'}}>
        <h2 style={{fontSize: 28, marginBottom: 16}}>Featured Products</h2>
        <p style={{marginTop: 0, color: '#6b7280', marginBottom: 24}}>Hand-picked products and tools we recommend across plugins, themes and builders.</p>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24}}>
          {featured.map(p => (
            <ProductCard key={p.id} id={p.id} title={p.name} image={p.image || '/Logo.webp'} price={p.price || ''} description={p.description} affiliateLink={p.affiliate_link} rating={p.rating || 0} clusterHref={getProductClusterUrl(p)} />
          ))}
        </div>
      </section>

      <section style={{padding: '0 24px', maxWidth: 1200, margin: '0 auto 48px'}}>
        <h2 style={{fontSize: 28, marginBottom: 16}}>Explore Our SILOs</h2>
        <p style={{marginTop: 0, color: '#6b7280', marginBottom: 24}}>Browse our main content pillars to find curated product reviews and guides.</p>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20}}>
          <Link href="/plugins">
            <div className="card" style={{padding: 24, border: '1px solid #e5e7eb', borderRadius: 8, textDecoration: 'none', color: 'inherit'}}>
              <h3 style={{marginTop: 0}}>Plugins</h3>
              <p style={{color: '#6b7280'}}>Reviews and comparisons of the best WordPress plugins for SEO, security, memberships and more.</p>
              <div style={{marginTop: 12}}><button style={{padding: '8px 14px', background: '#0ea5a3', color: '#fff', border: 'none', borderRadius: 6}}>Explore Plugins</button></div>
            </div>
          </Link>

          <Link href="/themes">
            <div className="card" style={{padding: 24, border: '1px solid #e5e7eb', borderRadius: 8, textDecoration: 'none', color: 'inherit'}}>
              <h3 style={{marginTop: 0}}>Themes</h3>
              <p style={{color: '#6b7280'}}>In-depth theme reviews focusing on performance, accessibility and customisation.</p>
              <div style={{marginTop: 12}}><button style={{padding: '8px 14px', background: '#f97316', color: '#fff', border: 'none', borderRadius: 6}}>Explore Themes</button></div>
            </div>
          </Link>

          <Link href="/builders">
            <div className="card" style={{padding: 24, border: '1px solid #e5e7eb', borderRadius: 8, textDecoration: 'none', color: 'inherit'}}>
              <h3 style={{marginTop: 0}}>Builders</h3>
              <p style={{color: '#6b7280'}}>Compare page builders and site builders to choose the right design workflow for your project.</p>
              <div style={{marginTop: 12}}><button style={{padding: '8px 14px', background: '#6366f1', color: '#fff', border: 'none', borderRadius: 6}}>Explore Builders</button></div>
            </div>
          </Link>
        </div>
      </section>

      <section style={{padding:'0 24px', maxWidth:1200, margin:'0 auto 96px'}}>
        <div style={{padding:32, borderRadius:8, background: 'linear-gradient(90deg,#06b6d4, #7c3aed)', color:'#fff', textAlign:'center'}}>
          <h3 style={{margin:'0 0 8px 0'}}>Want product recommendations tailored to your site?</h3>
          <p style={{margin:'0 0 16px 0'}}>Sign up to our newsletter for monthly roundups, deals and how-tos.</p>
          <div style={{display:'flex', justifyContent:'center', gap:8}}>
            <input placeholder="Enter email" style={{padding:'10px 12px', borderRadius:6, border:'none', width:320}} />
            <button style={{padding:'10px 16px', borderRadius:6, border:'none', background:'#111827', color:'#fff'}}>Subscribe</button>
          </div>
        </div>
      </section>
    </>
  )
}

export async function getStaticProps(){
  // Featured products come from products.json — include additional review metadata where available
  const featuredRaw = getFeaturedProducts(6)
  // Attempt to merge rating/price from reviews if present (optional)
  const featured = featuredRaw.map(p => ({
    ...p,
    // fallback values — front-end components can handle missing fields
  }))

  return { props: { featured }, revalidate: 3600 }
}
