
/**
 * ComparisonTable.js - React component for Next.js
 * Props:
 *  - columns: [{key:'', title:''}]
 *  - rows: [{feature:'', values:{colKey1:'Yes', colKey2:'No'}}]
 *
 * Usage: <ComparisonTable columns={cols} rows={rows} />
 */
export default function ComparisonTable({ columns = [], rows = [] }){
  return (
    <div className="card">
      <table className="table-compare" role="table" aria-label="Comparison table">
        <thead>
          <tr>
            <th>Feature</th>
            {columns.map(c => <th key={c.key}>{c.title}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, idx) => (
            <tr key={idx}>
              <td>{r.feature}</td>
              {columns.map(c => <td key={c.key}>{r.values[c.key] ?? ''}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
