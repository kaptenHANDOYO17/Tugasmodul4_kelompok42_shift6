import { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Catalog from './pages/Catalog.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Cart from './pages/Cart.jsx'
import GUNS from './data/guns.js'
import useCart from './hooks/useCart.js'
import './App.css'

function App() {
  const [tab, setTab] = useState('Catalog')
  const cart = useCart(GUNS)

  return (
    <div className="shell">
      <Header tab={tab} onTab={setTab} cartCount={cart.count} />
      <main className="main">
        {tab === 'Catalog' && <Catalog cart={cart.cart} onAdd={cart.add} />}
        {tab === 'About' && <About />}
        {tab === 'Contact' && <Contact />}
        {tab === 'Cart' && (
          <Cart
            items={cart.items}
            total={cart.total}
            onQty={cart.setQty}
            onRemove={cart.remove}
            onClear={cart.clear}
            onShop={() => setTab('Catalog')}
          />
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
