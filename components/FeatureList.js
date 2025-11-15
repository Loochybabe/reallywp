/**
 * FeatureList component
 * Props:
 *  - features (array): list of feature strings
 *  - columns (number): number of columns (default 2)
 */
export default function FeatureList({ features = [], columns = 2 }){
  return (
    <div style={{
      marginBottom: 48,
      border: '1px solid #ddd',
      borderRadius: 8,
      padding: 24,
      background: '#f9fafb'
    }}>
      <h3 style={{margin: '0 0 16px 0', fontSize: 18, fontWeight: 600}}>Key Features</h3>
      <div style={{display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: 16}}>
        {features.map((feature, idx) => (
          <div key={idx} style={{display: 'flex', alignItems: 'flex-start', gap: 8}}>
            <span style={{color: '#667eea', fontSize: 20, marginTop: 2}}>✓</span>
            <span style={{color: '#374151', lineHeight: 1.6}}>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
