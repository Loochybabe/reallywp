import Link from 'next/link';
import nav from '../navigation.json';

export default function Header(){
  const primary = nav.primary || [];

  return (
    <header className="site-header" style={{borderBottom:'1px solid #eee',padding:'12px 24px'}}>
      <div className="nav-inner" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div className="site-branding">
          <Link href="/" style={{display:'flex',alignItems:'center',gap:12,textDecoration:'none',color:'inherit'}}>
            <img src="/Logo.webp" alt="ReallyWP" style={{height:40}} />
            <strong>ReallyWP</strong>
          </Link>
        </div>

        <nav aria-label="Primary navigation">
          <ul className="nav-list" style={{display:'flex',gap:16,listStyle:'none',margin:0,padding:0}}>
            {primary.map((item, idx) => (
              <li key={idx} style={{position:'relative'}}>
                <Link href={item.url} style={{textDecoration:'none',color:'#111'}}>{item.title}</Link>
                {item.children && (
                  <ul style={{position:'absolute',top:'100%',left:0,background:'#fff',border:'1px solid #eee',padding:8,display:'none'}} className="submenu">
                    {item.children.map((c, i) => (
                      <li key={i} style={{padding:'4px 8px'}}>
                        <Link href={c.url} style={{textDecoration:'none',color:'#111'}}>{c.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
