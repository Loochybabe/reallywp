import CanonicalHead from '../components/CanonicalHead'

export default function About() {
  return (
    <>
      <CanonicalHead title="About — ReallyWP" description="About ReallyWP — our mission, editorial approach and team." />

      <main style={{maxWidth: 900, margin: '32px auto', padding: '0 18px'}}>
        <h1>About ReallyWP</h1>
        <p style={{color:'#555', lineHeight:1.8}}>
          ReallyWP publishes independent reviews, comparisons and practical guides for WordPress plugins, themes and site builders. Our goal is to help site owners choose tools that match their needs for performance, accessibility and value.
        </p>

        <h2>Our Editorial Approach</h2>
        <p style={{color:'#555', lineHeight:1.8}}>
          We test tools on real sites, report pros and cons, and provide transparent affiliate links where applicable. Reviews are updated regularly.
        </p>

        <h2>Contact & Contributions</h2>
        <p style={{color:'#555', lineHeight:1.8}}>
          Want to contribute, suggest a product, or request a review? Use the contact page to reach our editorial team.
        </p>
      </main>
    </>
  )
}
