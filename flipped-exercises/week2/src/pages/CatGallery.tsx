import { useEffect, useState } from 'react'

interface CatImage {
  id: string
  url: string
}

export function CatGallery() {
  const [cats, setCats] = useState<CatImage[]>([])

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
      .then((response) => response.json())
      .then((data) => setCats(data))
  }, [])

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cats.map((cat) => (
          <img
            key={cat.id}
            src={cat.url}
            alt="Cat"
            className="w-full h-64 object-cover rounded-xl"
          />
        ))}
      </div>
    </div>
  )
}

