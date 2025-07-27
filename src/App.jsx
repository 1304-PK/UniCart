import { Outlet } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <div>
      <header>
        <h1>Logo</h1>
        <nav>
          <ul>
            <li>HOME</li>
            <li>CATEGORIES</li>
            <li>ABOUT</li>
          </ul>
        </nav>
        <h2>Cart</h2>
      </header >
      <Outlet />
    </div>

  )
}

export default App