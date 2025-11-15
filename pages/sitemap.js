import Link from 'next/link'
import CanonicalHead from '../components/CanonicalHead'
import { getAllProducts, getProductClusterUrl } from '../lib/products'

export default function SitemapPage({ products = [] }){
  return (
    <>
      <CanonicalHead title="Sitemap — ReallyWP" description="Sitemap and important links for ReallyWP." />
      <main style={{maxWidth:1000, margin:'32px auto', padding:'0 18px'}}>
        <h1>Sitemap</h1>
        <h2>Site</h2>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          <li><Link href="/terms">Terms & Conditions</Link></li>
        </ul>

        <h2>Products</h2>
            <ul>
              {products.map(p => {
                const clusterUrl = getProductClusterUrl(p)
                return (
                  <li key={p.id}><Link href={clusterUrl || `/products/${p.id}`}>{p.name}</Link></li>
                )
              })}
            </ul>
      </main>
    </>
  )
}

export async function getStaticProps(){
  const products = getAllProducts()
  return { props: { products }, revalidate: 3600 }
}

