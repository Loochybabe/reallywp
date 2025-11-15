import Link from 'next/link'
import CanonicalHead from '../../components/CanonicalHead'

const themeClusters = [
  { title: 'Multipurpose Themes', slug: 'multipurpose', desc: 'Versatile themes for any site' },
  { title: 'Performance Themes', slug: 'performance', desc: 'Fast and optimized themes' },
  { title: 'Gutenberg-Compatible Themes', slug: 'gutenberg', desc: 'Full Gutenberg block support' },
]

export default function ThemesPillar(){
  return (
    <>
      <CanonicalHead 
        title="WordPress Themes | ReallyWP" 
        description="Comprehensive reviews and comparisons of the best WordPress themes."
      />
      <div className="pillar-hero" style={{padding:'48px 24px',textAlign:'center',background:'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',color:'#fff',marginBottom:48}}>
        <h1 style={{margin:'0 0 12px 0',fontSize:48}}>WordPress Themes</h1>
        <p style={{margin:0,fontSize:18}}>Discover and compare the best WordPress themes</p>
      </div>

      <div style={{padding:'0 24px',marginBottom:48}}>
        <div className="grid" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))',gap:24}}>
          {themeClusters.map((cluster) => (
            <Link key={cluster.slug} href={`/themes/${cluster.slug}`} style={{textDecoration:'none',color:'inherit',display:'block'}}>
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
