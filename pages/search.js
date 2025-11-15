import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import CanonicalHead from '../components/CanonicalHead'
import ProductCard from '../components/ProductCard'
import { getProductClusterUrl } from '../lib/products'

export default function SearchPage({ initialQuery = '', initialSilo = '', initialResults = [] }){
  const router = useRouter()
  const [q, setQ] = useState(initialQuery)
  const [silo, setSilo] = useState(initialSilo)
  const [results, setResults] = useState(initialResults)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // keep results in sync when router query changes (client-side navigation)
    const { q: rq, silo: rs } = router.query
    if ((rq || rs) && (rq !== q || rs !== silo)) {
      setQ(rq || '')
      setSilo(rs || '')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query])

  async function doSearch(e){
    if (e) e.preventDefault()
    const params = new URLSearchParams()
    if (q) params.set('search', q)
    if (silo) params.set('silo', silo)

    // Update URL (server-side rendering will handle initial load), and fetch client-side for instant results
    router.push(`/search?${params.toString()}`, undefined, { shallow: true })

    setLoading(true)
    try {
      const resp = await fetch(`/api/products?${params.toString()}`)
      const json = await resp.json()
      setResults(json.data || [])
    } catch (err) {
      console.error('Search error', err)
      setResults([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <CanonicalHead title="Search products — ReallyWP" description="Search and filter WordPress products reviewed on ReallyWP." />

      <main style={{maxWidth:1200, margin:'24px auto', padding:'0 18px'}}>
        <h1 style={{marginTop: 0}}>Search Products</h1>

        <form onSubmit={doSearch} style={{display:'flex', gap:8, marginBottom:18, alignItems:'center'}}>
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search by name or description" style={{flex:1, padding:'10px 12px', borderRadius:6, border:'1px solid #d1d5db'}} />

          <select value={silo} onChange={e=>setSilo(e.target.value)} style={{padding:'10px 12px', borderRadius:6, border:'1px solid #d1d5db'}}>
            <option value="">All SILOs</option>
            <option value="plugins">Plugins</option>
            <option value="themes">Themes</option>
            <option value="builders">Builders</option>
          </select>

          <button type="submit" style={{padding:'10px 14px', borderRadius:6, border:'none', background:'#0ea5a3', color:'#fff'}}>Search</button>
        </form>

        <div style={{marginBottom: 12, color:'#6b7280'}}>{loading ? 'Searching…' : `${results.length} result${results.length === 1 ? '' : 's'}`}</div>

        <div style={{display:'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px,1fr))', gap:20}}>
          {results.map(p => (
            <ProductCard key={p.id} id={p.id} title={p.name} image={p.image} price={p.price} description={p.description} affiliateLink={p.affiliate_link} rating={p.rating || 0} category={'products'} clusterHref={getProductClusterUrl(p)} />
          ))}
        </div>
      </main>
    </>
  )
}

// Server-side initial search so results are crawlable and fast for first load
import { getAllProducts, getProductsBySilo, searchProducts } from '../lib/products'

export async function getServerSideProps({ query }){
  const q = query.search || ''
  const silo = query.silo || ''
  let data = []

  if (q) {
    data = searchProducts(q)
  } else if (silo) {
    data = getProductsBySilo(silo)
  } else {
    data = getAllProducts()
  }

  return { props: { initialQuery: q, initialSilo: silo, initialResults: data } }
}
