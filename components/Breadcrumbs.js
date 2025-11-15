import Link from 'next/link'

export default function Breadcrumbs({ items = [] }){
  return (
    <nav aria-label="Breadcrumb" style={{fontSize:14,marginBottom:24,color:'#666'}}>
      {items.map((item, idx) => (
        <span key={idx}>
          {item.href ? (
            <Link href={item.href} style={{color:'#667eea',textDecoration:'none'}}>{item.label}</Link>
          ) : (
            <span>{item.label}</span>
          )}
          {idx < items.length - 1 && <span> / </span>}
        </span>
      ))}
    </nav>
  )
}
