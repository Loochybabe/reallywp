/**
 * Hero component
 * Props:
 *  - title (string): main heading
 *  - subtitle (string): subheading
 *  - background (string): gradient or color background
 *  - height (number): height in pixels (default 400)
 */
export default function Hero({ 
  title, 
  subtitle, 
  background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  height = 400
}){
  return (
    <div style={{
      padding: '48px 24px',
      textAlign: 'center',
      background,
      color: '#fff',
      marginBottom: 48,
      minHeight: height,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <h1 style={{margin: '0 0 12px 0', fontSize: 48, fontWeight: 700}}>{title}</h1>
      {subtitle && <p style={{margin: 0, fontSize: 18, opacity: 0.95}}>{subtitle}</p>}
    </div>
  )
}
