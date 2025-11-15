import CanonicalHead from '../components/CanonicalHead'

export default function PrivacyPolicy(){
  return (
    <>
      <CanonicalHead title="Privacy Policy — ReallyWP" description="Privacy policy for ReallyWP." />

      <main style={{maxWidth:900, margin:'32px auto', padding:'0 18px'}}>
        <h1>Privacy Policy</h1>
        <p style={{color:'#555', lineHeight:1.8}}>This is a simple privacy notice for ReallyWP. We collect minimal usage data to improve the site, and we use cookies only where necessary (analytics, session management, and affiliate tracking when you click external links). We do not sell personal data. Contact <a href="mailto:privacy@reallywp.co.za">privacy@reallywp.co.za</a> for questions.</p>

        <h2>Cookies</h2>
        <p style={{color:'#555', lineHeight:1.8}}>We use cookies for analytics and to remember preferences. You can control cookies through your browser settings.</p>

        <h2>Affiliate Links</h2>
        <p style={{color:'#555', lineHeight:1.8}}>Some links on this site are affiliate links — we may earn a small commission if you purchase through them, at no extra cost to you. Our reviews are editorial and independent.</p>
      </main>
    </>
  )
}
