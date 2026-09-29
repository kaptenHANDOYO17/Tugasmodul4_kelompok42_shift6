import { useRef } from 'react'

function GunCard({ gun, inCart, onAdd }) {
  const popup = useRef(null)

  return (
    <li className="card">
      <button className="card-btn" onClick={() => popup.current.showModal()}>
        <div className="card-frame">
          <img className="card-img" src={gun.image} alt="" width="120" height="90" />
        </div>
        <span className="name display">{gun.name}</span>
        <span className="type">
          {gun.type} · {gun.caliber}
        </span>
        <span className="price">${gun.price.toLocaleString()}</span>
      </button>

      <button type="button" className="add-btn" onClick={() => onAdd(gun.name)}>
        {inCart > 0 ? `Add again (${inCart} in cart)` : 'Add to cart'}
      </button>

      <dialog
        className="popup"
        ref={popup}
        onClick={(e) => e.target === popup.current && popup.current.close()}
      >
        <div className="popup-frame">
          <img className="popup-img" src={gun.image} alt="" width="240" height="180" />
        </div>
        <h3 className="display">{gun.name}</h3>
        <p className="type">
          {gun.type} · {gun.caliber} · <span className="price">${gun.price.toLocaleString()}</span>
        </p>
        <p>{gun.description}</p>
        <form method="dialog">
          <button className="popup-close">Close</button>
        </form>
      </dialog>
    </li>
  )
}

export default GunCard
