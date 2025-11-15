
import Head from 'next/head'
import { useRouter } from 'next/router'

/**
 * CanonicalHead component
 * Props:
 *  - title (string)
 *  - description (string)
 *  - canonical (string) optional, will be constructed if missing
 *  - jsonLd (object) optional structured data to inject
 *  - noIndex (boolean) optional
 */
export default function CanonicalHead({ title, description, canonical, jsonLd, noIndex=false }){
  const router = useRouter();
  const siteUrl = 'https://reallywp.co.za';
  const path = router.asPath === '/' ? '' : router.asPath.split('?')[0];
  const canonicalUrl = canonical || (siteUrl + path);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="ReallyWP" />
      <meta name="twitter:card" content="summary_large_image" />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
    </Head>
  )
}
