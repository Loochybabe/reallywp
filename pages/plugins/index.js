import Link from 'next/link'
import CanonicalHead from '../../components/CanonicalHead'

const pluginClusters = [
  { title: 'SEO Plugins', slug: 'seo', desc: 'Optimize your site for search engines' },
  { title: 'Security Plugins', slug: 'security', desc: 'Protect your WordPress site' },
  { title: 'Membership Plugins', slug: 'membership', desc: 'Create membership communities' },
  { title: 'Forms Plugins', slug: 'forms', desc: 'Build powerful forms' },
  { title: 'LMS Plugins', slug: 'lms', desc: 'Create online courses' },
  { title: 'Donations Plugins', slug: 'donations', desc: 'Accept donations' },
  { title: 'Events Plugins', slug: 'events', desc: 'Manage events' },
  { title: 'Utilities Plugins', slug: 'utilities', desc: 'Essential utilities' },
]

export default function PluginsPillar(){
  return (
    <>
      <CanonicalHead 
        title="WordPress Plugins | ReallyWP" 
        description="Comprehensive reviews and comparisons of the best WordPress plugins."
      />
      <div className="pillar-hero" style={{padding:'48px 24px',textAlign:'center',background:'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',color:'#fff',marginBottom:48}}>
        <h1 style={{margin:'0 0 12px 0',fontSize:48}}>WordPress Plugins</h1>
        <p style={{margin:0,fontSize:18}}>Discover and compare the best WordPress plugins for your site</p>
      </div>

      <div style={{padding:'0 24px',marginBottom:48}}>
        <div className="grid" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))',gap:24}}>
          {pluginClusters.map((cluster) => (
            <Link key={cluster.slug} href={`/plugins/${cluster.slug}`} style={{textDecoration:'none',color:'inherit',display:'block'}}>
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
