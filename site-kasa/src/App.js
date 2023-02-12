import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/fiche-logement/:id" element={<ProductDetail />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
export default App
