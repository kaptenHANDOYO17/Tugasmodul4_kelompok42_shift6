import { useState } from 'react'
import GUNS from '../data/guns.js'
import GunCard from '../components/GunCard.jsx'
import CatalogToolbar from '../components/CatalogToolbar.jsx'

function Catalog({ cart, onAdd }) {
  const [query, setQuery] = useState('')
  const [type, setType] = useState('All')
  const [sort, setSort] = useState({ key: null, dir: 'asc' })

  // Klik tombol yang sama membalik arah; klik tombol lain mulai dari asc
  const toggleSort = (key) =>
    setSort((s) =>
      s.key === key ? { key, dir: s.dir === 'asc' ? 'desc' : 'asc' } : { key, dir: 'asc' },
    )

  const keyword = query.trim().toLowerCase()
  const filtered = GUNS.filter(
    (g) => g.name.toLowerCase().includes(keyword) && (type === 'All' || g.type === type),
  )
  const shown = [...filtered].sort((a, b) => {
    if (!sort.key) return 0
    const diff =
      sort.key === 'price' ? a.price - b.price : a.name.localeCompare(b.name)
    return sort.dir === 'asc' ? diff : -diff
  })

  return (
    <>
      <section className="masthead">
        <h1 className="display">Hardware, by the spec sheet.</h1>
        <p className="lede">
          A small armory of pistols, rifles, and shotguns. Every piece listed with its
          type, caliber, and price — nothing else.
        </p>
      </section>
      <section>
        <div className="list-head">
          <h2>Current stock</h2>
          <span className="count">
            {shown.length} of {GUNS.length} pieces
          </span>
        </div>
        <CatalogToolbar
          query={query}
          onQuery={setQuery}
          type={type}
          onType={setType}
          sort={sort}
          onSort={toggleSort}
        />
        {shown.length === 0 ? (
          <p className="empty">No pieces match “{query}”{type !== 'All' && ` in ${type}`}.</p>
        ) : (
          <ul className="stock">
            {shown.map((gun) => (
              <GunCard key={gun.name} gun={gun} inCart={cart[gun.name] ?? 0} onAdd={onAdd} />
            ))}
          </ul>
        )}
      </section>
    </>
  )
}

export default Catalog
