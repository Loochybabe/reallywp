import Link from 'next/link'

export default function Footer(){
  const year = new Date().getFullYear()

  return (
    <footer style={{background: '#1f2937', color: '#fff', marginTop: 64, paddingTop: 48, paddingBottom: 24}}>
      <div style={{maxWidth: 1200, margin: '0 auto', padding: '0 24px'}}>
        {/* Footer Grid */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32, marginBottom: 48}}>
          {/* Column 1: About */}
          <div>
            <h4 style={{margin: '0 0 16px 0', fontSize: 16, fontWeight: 600}}>ReallyWP</h4>
            <p style={{margin: 0, fontSize: 14, color: '#d1d5db', lineHeight: 1.6}}>
              Your trusted resource for WordPress reviews, comparisons, and recommendations.
            </p>
          </div>

          {/* Column 2: Silos */}
          <div>
            <h4 style={{margin: '0 0 16px 0', fontSize: 16, fontWeight: 600}}>Browse</h4>
            <ul style={{listStyle: 'none', margin: 0, padding: 0}}>
              <li style={{marginBottom: 8}}>
                <Link href="/plugins" style={{color: '#93c5fd', textDecoration: 'none', fontSize: 14}}>Plugins</Link>
              </li>
              <li style={{marginBottom: 8}}>
                <Link href="/themes" style={{color: '#93c5fd', textDecoration: 'none', fontSize: 14}}>Themes</Link>
              </li>
              <li style={{marginBottom: 8}}>
                <Link href="/builders" style={{color: '#93c5fd', textDecoration: 'none', fontSize: 14}}>Builders</Link>
              </li>
              <li>
                <Link href="/blog" style={{color: '#93c5fd', textDecoration: 'none', fontSize: 14}}>Blog</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 style={{margin: '0 0 16px 0', fontSize: 16, fontWeight: 600}}>Company</h4>
            <ul style={{listStyle: 'none', margin: 0, padding: 0}}>
              <li style={{marginBottom: 8}}>
                <Link href="/about" style={{color: '#93c5fd', textDecoration: 'none', fontSize: 14}}>About</Link>
              </li>
              <li style={{marginBottom: 8}}>
                <Link href="/contact" style={{color: '#93c5fd', textDecoration: 'none', fontSize: 14}}>Contact</Link>
              </li>
              <li style={{marginBottom: 8}}>
                <Link href="/blog" style={{color: '#93c5fd', textDecoration: 'none', fontSize: 14}}>Blog</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 style={{margin: '0 0 16px 0', fontSize: 16, fontWeight: 600}}>Legal</h4>
            <ul style={{listStyle: 'none', margin: 0, padding: 0}}>
              <li style={{marginBottom: 8}}>
                <Link href="/privacy-policy" style={{color: '#93c5fd', textDecoration: 'none', fontSize: 14}}>Privacy Policy</Link>
              </li>
              <li style={{marginBottom: 8}}>
                <Link href="/terms" style={{color: '#93c5fd', textDecoration: 'none', fontSize: 14}}>Terms</Link>
              </li>
              <li>
                <Link href="/affiliate-disclosure" style={{color: '#93c5fd', textDecoration: 'none', fontSize: 14}}>Affiliate Disclosure</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{borderTop: '1px solid #374151', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 14, color: '#9ca3af'}}>
          <p style={{margin: 0}}>© {year} ReallyWP. All rights reserved.</p>
          <p style={{margin: 0}}>Made with ❤️ for WordPress lovers</p>
        </div>
      </div>
    </footer>
  )
}
