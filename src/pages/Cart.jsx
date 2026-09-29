function Cart({ items, total, onQty, onRemove, onClear, onShop }) {
  if (items.length === 0) {
    return (
      <div className="page">
        <h1 className="display">Your cart is empty.</h1>
        <p className="lede">Pick something from the catalog and it will show up here.</p>
        <button type="button" className="ghost-btn" onClick={onShop}>
          Back to catalog
        </button>
      </div>
    )
  }

  return (
    <div className="page">
      <h1 className="display">Your cart.</h1>
      <ul className="cart-list">
        {items.map((item) => (
          <li key={item.name} className="cart-row">
            <img className="cart-thumb" src={item.image} alt="" width="80" height="60" />
            <div className="cart-info">
              <span className="name display">{item.name}</span>
              <span className="type">${item.price.toLocaleString()} each</span>
            </div>
            <div className="qty" role="group" aria-label={`Quantity of ${item.name}`}>
              <button type="button" onClick={() => onQty(item.name, item.qty - 1)} aria-label="Decrease">
                −
              </button>
              <span className="qty-value">{item.qty}</span>
              <button type="button" onClick={() => onQty(item.name, item.qty + 1)} aria-label="Increase">
                +
              </button>
            </div>
            <span className="price line-total">${item.subtotal.toLocaleString()}</span>
            <button type="button" className="remove" onClick={() => onRemove(item.name)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <button type="button" className="ghost-btn" onClick={onClear}>
          Clear cart
        </button>
        <p>
          Total <strong className="price">${total.toLocaleString()}</strong>
        </p>
      </div>
    </div>
  )
}

export default Cart
