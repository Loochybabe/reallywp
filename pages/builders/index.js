import Link from 'next/link'
import CanonicalHead from '../../components/CanonicalHead'

const builderClusters = [
  { title: 'Page Builders', slug: 'page-builders', desc: 'Visual page builder plugins' },
  { title: 'Site Builders', slug: 'site-builders', desc: 'Complete site builder solutions' },
  { title: 'WooCommerce Builders', slug: 'woocommerce-builders', desc: 'E-commerce builder plugins' },
]

export default function BuildersPillar(){
  return (
    <>
      <CanonicalHead 
        title="WordPress Builders | ReallyWP" 
        description="Comprehensive reviews and comparisons of the best WordPress page builders."
      />
      <div className="pillar-hero" style={{padding:'48px 24px',textAlign:'center',background:'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',color:'#fff',marginBottom:48}}>
        <h1 style={{margin:'0 0 12px 0',fontSize:48}}>WordPress Builders</h1>
        <p style={{margin:0,fontSize:18}}>Discover and compare the best WordPress builders</p>
      </div>

      <div style={{padding:'0 24px',marginBottom:48}}>
        <div className="grid" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))',gap:24}}>
          {builderClusters.map((cluster) => (
            <Link key={cluster.slug} href={`/builders/${cluster.slug}`} style={{textDecoration:'none',color:'inherit',display:'block'}}>
              <div className="card" style={{border:'1px solid #ddd',padding:24,borderRadius:8,cursor:'pointer',transition:'all 0.3s',minHeight:120}}>
                <h2 style={{margin:'0 0 8px 0',fontSize:20}}>{cluster.title}</h2>
                <p style={{margin:0,color:'#666'}}>{cluster.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
