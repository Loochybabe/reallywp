import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/reallywp.css'

export default function App({ Component, pageProps }){
  return (
    <>
      <Header />
      <main style={{padding: '24px', maxWidth: 1200, margin: '0 auto'}}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
