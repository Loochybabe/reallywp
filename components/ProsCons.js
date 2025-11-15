/**
 * ProsCons component for product reviews
 * Props:
 *  - pros (array): list of pros
 *  - cons (array): list of cons
 */
export default function ProsCons({ pros = [], cons = [] }){
  return (
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24, marginBottom: 48}}>
      {/* Pros */}
      {pros.length > 0 && (
        <div style={{border: '2px solid #10b981', borderRadius: 8, padding: 24}}>
          <h3 style={{margin: '0 0 16px 0', fontSize: 18, fontWeight: 600, color: '#10b981'}}>✓ Pros</h3>
          <ul style={{margin: 0, paddingLeft: 20, listStyle: 'disc'}}>
            {pros.map((pro, idx) => (
              <li key={idx} style={{marginBottom: 8, color: '#374151', lineHeight: 1.6}}>
                {pro}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Cons */}
      {cons.length > 0 && (
        <div style={{border: '2px solid #ef4444', borderRadius: 8, padding: 24}}>
          <h3 style={{margin: '0 0 16px 0', fontSize: 18, fontWeight: 600, color: '#ef4444'}}>✗ Cons</h3>
          <ul style={{margin: 0, paddingLeft: 20, listStyle: 'disc'}}>
            {cons.map((con, idx) => (
              <li key={idx} style={{marginBottom: 8, color: '#374151', lineHeight: 1.6}}>
                {con}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
