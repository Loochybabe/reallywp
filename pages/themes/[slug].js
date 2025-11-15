import Link from 'next/link'
import { useRouter } from 'next/router'
import CanonicalHead from '../../../components/CanonicalHead'

export default function ThemeCluster(){
  const router = useRouter()
  const { slug } = router.query

  const clusterMap = {
    multipurpose: { title: 'Multipurpose Themes', desc: 'Versatile themes suitable for any type of WordPress site.' },
    performance: { title: 'Performance Themes', desc: 'Fast and optimized themes for better site performance.' },
    gutenberg: { title: 'Gutenberg-Compatible Themes', desc: 'Themes with full support for the Gutenberg block editor.' },
  }

  const cluster = clusterMap[slug] || {}

  return (
    <>
      <CanonicalHead 
        title={`${cluster.title} | ReallyWP`}
        description={cluster.desc}
      />
      <nav style={{fontSize:14,marginBottom:24,color:'#666'}}>
        <Link href="/themes" style={{color:'#f5576c',textDecoration:'none'}}>Themes</Link>
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
