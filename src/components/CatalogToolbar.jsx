const TYPES = ['All', 'Pistol', 'Rifle', 'Shotgun']

const SORTS = [
  { key: 'name', label: 'Name', asc: 'A–Z', desc: 'Z–A' },
  { key: 'price', label: 'Price', asc: 'Low–High', desc: 'High–Low' },
]

function CatalogToolbar({ query, onQuery, type, onType, sort, onSort }) {
  return (
    <div className="toolbar">
      <input
        className="search"
        type="search"
        placeholder="Search by name…"
        value={query}
        onChange={(e) => onQuery(e.target.value)}
        aria-label="Search products by name"
      />

      <div className="chips" role="group" aria-label="Filter by type">
        {TYPES.map((t) => (
          <button
            key={t}
            type="button"
            className={type === t ? 'chip active' : 'chip'}
            aria-pressed={type === t}
            onClick={() => onType(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="chips" role="group" aria-label="Sort">
        <span className="chips-label">Sort by</span>
        {SORTS.map((s) => {
          const active = sort.key === s.key
          return (
            <button
              key={s.key}
              type="button"
              className={active ? 'chip active' : 'chip'}
              aria-pressed={active}
              onClick={() => onSort(s.key)}
            >
              {s.label}
              {active && <span className="dir"> {sort.dir === 'asc' ? `↑ ${s.asc}` : `↓ ${s.desc}`}</span>}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default CatalogToolbar
