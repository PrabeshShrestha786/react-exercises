import { useDroppable } from '@dnd-kit/core'
import type { Magnet } from '../types/magnet.ts'
import WordMagnet from './WordMagnet.tsx'

interface Props {
  magnets: Magnet[]
}

export const FRIDGE_ID = 'fridge'

export default function FridgeDoor({ magnets }: Props) {
  const { setNodeRef, isOver } = useDroppable({ id: FRIDGE_ID })

  return (
    <div
      ref={setNodeRef}
      className={`relative flex-1 min-h-[500px] rounded-2xl shadow bg-white transition-colors ${isOver ? 'bg-blue-50' : 'bg-white'}`}
    >
      {magnets.length === 0 && (
        <p className="absolute inset-0 flex items-center justify-center text-gray-300 font-medium pointer-events-none select-none">
          Drop words here
        </p>
      )}
      {magnets.map((magnet) => (
        <WordMagnet key={magnet.id} magnet={magnet} />
      ))}
    </div>
  )
}
