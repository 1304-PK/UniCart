import { Outlet, Link } from "react-router-dom"
import { useState } from "react"
import "./App.css"

function App() {

  const [cartList, setCartList] = useState([])

  return (
    <div>
      <header>
        <h1>Logo</h1>
        <nav>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/">ABOUT</Link></li>
          </ul>
        </nav>
        <h2><Link to="cart">Cart</Link></h2>
      </header >
      <Outlet context={{cartList, setCartList}}/>
    </div>

  )
}

export default App