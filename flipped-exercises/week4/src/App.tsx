import { useState } from 'react'
import Modal from './components/Modal.tsx'

const CAMPING_GEAR = [
  { id: 1, name: 'Tent',          weight: 3500 },
  { id: 2, name: 'Sleeping Bag',  weight: 1200 },
  { id: 3, name: 'Camping Stove', weight: 800  },
]

export default function App() {
  // Warm-up: camping gear modal
  const [isOpen, setIsOpen] = useState(false)

  // Assignment: two separate modals using the same Modal component
  const [showFirst,  setShowFirst]  = useState(false)
  const [showSecond, setShowSecond] = useState(false)

  const totalWeight = CAMPING_GEAR.reduce((sum, item) => sum + item.weight, 0)

  return (
    <div className="p-8 bg-white min-h-screen font-sans">

      {/* ── Part 1: Warm-up ── */}
      <h2 className="text-2xl font-bold mb-2">Camping Trip Summary</h2>
      <p className="text-xl font-black text-blue-600 mb-4">
        Backpack weight: {totalWeight} g
      </p>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-zinc-800 text-white px-4 py-2 rounded shadow hover:bg-zinc-700 mb-10"
      >
        View Equipment
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h3 className="text-xl font-bold mb-4">Packed Items</h3>
        <ul className="mb-6 space-y-2">
          {CAMPING_GEAR.map((item) => (
            <li key={item.id} className="border-b pb-1 flex justify-between">
              <span>{item.name}</span>
              <span className="text-gray-500">{item.weight} g</span>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setIsOpen(false)}
          className="w-full bg-gray-200 text-gray-800 font-bold py-2 rounded hover:bg-gray-300"
        >
          Close Window
        </button>
      </Modal>

      {/* ── Part 2: Reusable Modal demo ── */}
      <h2 className="text-2xl font-bold mb-4">Modaalin testaus</h2>
      <div className="flex gap-3">
        <button
          onClick={() => setShowFirst(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
        >
          Näytä tiedot
        </button>
        <button
          onClick={() => setShowSecond(true)}
          className="bg-green-700 hover:bg-green-800 text-white font-semibold px-4 py-2 rounded"
        >
          Näytä tiedot
        </button>
      </div>

      <Modal isOpen={showFirst} onClose={() => setShowFirst(false)}>
        <h3 className="text-xl font-bold text-green-600 mb-3">
          First popup with same Modal component!!!
        </h3>
        <p className="text-gray-500">Content changes but the Modal is the same!</p>
      </Modal>

      <Modal isOpen={showSecond} onClose={() => setShowSecond(false)}>
        <h3 className="text-xl font-bold text-green-600 mb-3">
          Second popup with same Modal component!!!
        </h3>
        <p className="text-gray-500">Content changes but the Modal is the same!</p>
      </Modal>

    </div>
  )
}
