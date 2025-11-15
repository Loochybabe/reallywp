import Link from 'next/link'
import { useRouter } from 'next/router'
import CanonicalHead from '../../../components/CanonicalHead'

export default function BuilderCluster(){
  const router = useRouter()
  const { slug } = router.query

  const clusterMap = {
    'page-builders': { title: 'Page Builders', desc: 'Visual page builder plugins for WordPress.' },
    'site-builders': { title: 'Site Builders', desc: 'Complete site builder solutions for WordPress.' },
    'woocommerce-builders': { title: 'WooCommerce Builders', desc: 'E-commerce builder plugins for WooCommerce.' },
  }

  const cluster = clusterMap[slug] || {}

  return (
    <>
      <CanonicalHead 
        title={`${cluster.title} | ReallyWP`}
        description={cluster.desc}
      />
      <nav style={{fontSize:14,marginBottom:24,color:'#666'}}>
        <Link href="/builders" style={{color:'#00f2fe',textDecoration:'none'}}>Builders</Link>
        <span> / {cluster.title}</span>
      </nav>

      <div className="cluster-hero" style={{padding:'32px 0',marginBottom:48}}>
        <h1 style={{margin:'0 0 8px 0',fontSize:36}}>{cluster.title}</h1>
        <p style={{margin:0,color:'#666',fontSize:16}}>{cluster.desc}</p>
      </div>

      <div style={{padding:'24px',border:'1px solid #ddd',borderRadius:8,background:'#f9f9f9',textAlign:'center'}}>
        <p style={{margin:0,color:'#999'}}>Product reviews for this category coming soon...</p>
      </div>
    </>
  )
}
