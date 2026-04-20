interface Props {
  onPrint: () => void
  onLoadExpansion: () => void
}

export default function Header({ onPrint, onLoadExpansion }: Props) {
  return (
    <div className="print:hidden bg-white rounded-2xl shadow px-8 py-5 mb-6 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold text-blue-600">Fridge poetry</h1>
        <p className="text-sm text-blue-400 italic">Drag words to fridge door and locate them freely.</p>
      </div>
      <div className="flex gap-3">
        <button
          onClick={onLoadExpansion}
          className="bg-amber-400 hover:bg-amber-500 text-black font-bold px-5 py-2 rounded-full transition-colors shadow text-sm"
        >
          Load extra words 📦
        </button>
        <button
          onClick={onPrint}
          className="bg-zinc-900 hover:bg-zinc-700 text-white font-bold px-5 py-2 rounded-full transition-colors shadow text-sm"
        >
          Print the poem 🖨️
        </button>
      </div>
    </div>
  )
}
