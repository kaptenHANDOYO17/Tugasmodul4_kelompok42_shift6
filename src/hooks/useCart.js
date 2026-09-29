import { useEffect, useState } from 'react'

const KEY = 'bore-barrel-cart'

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) ?? {}
  } catch {
    return {}
  }
}

// Menyimpan isi keranjang dalam bentuk { namaProduk: jumlah }
function useCart(products) {
  const [cart, setCart] = useState(loadCart)

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(cart))
  }, [cart])

  const add = (name) => setCart((c) => ({ ...c, [name]: (c[name] ?? 0) + 1 }))

  const setQty = (name, qty) =>
    setCart((c) => {
      const next = { ...c }
      if (qty <= 0) delete next[name]
      else next[name] = qty
      return next
    })

  const remove = (name) => setQty(name, 0)
  const clear = () => setCart({})

  const items = products
    .filter((p) => cart[p.name])
    .map((p) => ({ ...p, qty: cart[p.name], subtotal: p.price * cart[p.name] }))

  const count = items.reduce((sum, i) => sum + i.qty, 0)
  const total = items.reduce((sum, i) => sum + i.subtotal, 0)

  return { cart, items, count, total, add, setQty, remove, clear }
}

export default useCart
