import { useState } from 'react'
import { useMovieStore } from '../store/useMovieStore.ts'

type FilterType = 'all' | 'watched' | 'unwatched'

export function MovieList() {
  const movies = useMovieStore((state) => state.movies)
  const toggleWatched = useMovieStore((state) => state.toggleWatched)
  const [filterType, setFilterType] = useState<FilterType>('all')

  const filteredMovies =
    filterType === 'all'
      ? movies
      : filterType === 'watched'
      ? movies.filter((m) => m.watched)
      : movies.filter((m) => !m.watched)

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Movie library</h2>

      <div className="flex gap-6 border-b border-gray-200 mb-4">
        {(['all', 'watched', 'unwatched'] as FilterType[]).map((type) => (
          <button
            key={type}
            onClick={() => setFilterType(type)}
            className={`pb-2 text-sm font-semibold transition-colors ${
              filterType === type
                ? 'border-b-2 border-gray-800 text-gray-800'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {type === 'all' ? 'All movies' : type === 'watched' ? 'Watched movies' : 'Kesken'}
          </button>
        ))}
      </div>

      <div className="flex flex-col">
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0"
          >
            <span className="text-blue-500 font-medium w-44">{movie.title}</span>
            <span className="text-lg">{movie.watched ? '✅' : '⌛'}</span>
            <span className="text-sm text-gray-500 w-24">
              {movie.watched ? 'Watched' : 'Unwatched'}
            </span>
            <button
              onClick={() => toggleWatched(movie.id)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold px-4 py-1 rounded transition-colors"
            >
              Change state
            </button>
          </div>
        ))}
        {filteredMovies.length === 0 && (
          <p className="text-gray-400 italic py-4">No movies in this category.</p>
        )}
      </div>
    </div>
  )
}
