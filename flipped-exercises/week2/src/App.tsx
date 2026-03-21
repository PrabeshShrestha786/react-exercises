import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import {DogGallery} from './pages/DogGallery'
import {CatGallery} from './pages/CatGallery'

function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/dogs">Dogs</Link>
        <Link to="/cats">Cats</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/dogs" element={<DogGallery />} />
        <Route path="/cats" element={<CatGallery />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App