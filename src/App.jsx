import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Auth from './pages/Auth.jsx'
import Checkout from './pages/Checkout.jsx'
import Navbar from './component/Navbar.jsx'
import './App.css'
import AuthProvider from './context/AuthContext.jsx'
import ProductDetail from './pages/Product.jsx'

function App() {

  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </AuthProvider>
  )
}

export default App
