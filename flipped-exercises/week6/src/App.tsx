import { DndContext, type DragEndEvent } from '@dnd-kit/core'
import { useMagnetStore } from './store/useMagnetStore.ts'
import Header from './components/Header.tsx'
import WordBank from './components/WordBank.tsx'
import FridgeDoor, { FRIDGE_ID } from './components/FridgeDoor.tsx'

export default function App() {
  const { magnets, updateMagnet, loadExpansionPack } = useMagnetStore()

  const bankMagnets = magnets.filter((m) => m.status === 'bank')
  const fridgeMagnets = magnets.filter((m) => m.status === 'fridge')

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (!over) return

    const translated = active.rect.current.translated
    if (!translated) return

    if (over.id === FRIDGE_ID) {
      const x = translated.left - over.rect.left
      const y = translated.top - over.rect.top

      updateMagnet(active.id as string, {
        status: 'fridge',
        x: Math.max(0, x),
        y: Math.max(0, y),
      })
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="min-h-screen bg-slate-100 p-8 font-sans">
        <Header onPrint={() => window.print()} onLoadExpansion={loadExpansionPack} />

        <div className="flex gap-6 items-start">
          <WordBank magnets={bankMagnets} />
          <FridgeDoor magnets={fridgeMagnets} />
        </div>
      </div>
    </DndContext>
  )
}
