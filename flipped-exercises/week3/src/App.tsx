import { AppleButton } from './components/AppleButton.tsx'
import { AppleBasket } from './components/AppleBasket.tsx'
import { MovieList } from './components/MovieList.tsx'

function App() {
  return (
    <div className="max-w-2xl mx-auto p-8 font-sans">
      <AppleButton />
      <AppleBasket />
      <MovieList />
    </div>
  )
}

export default App
