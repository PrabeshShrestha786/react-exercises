import type { Magnet } from '../types/magnet.ts'
import WordMagnet from './WordMagnet.tsx'

interface Props {
  magnets: Magnet[]
}

export default function WordBank({ magnets }: Props) {
  return (
    <div className="print:hidden bg-zinc-900 rounded-2xl p-5 w-[260px] min-h-[400px] flex flex-col gap-3">
      <h2 className="text-xs font-bold text-white tracking-widest uppercase border-b border-zinc-700 pb-2">
        Word Bank
      </h2>
      <div className="flex flex-wrap gap-2">
        {magnets.map((magnet) => (
          <WordMagnet key={magnet.id} magnet={magnet} />
        ))}
        {magnets.length === 0 && (
          <p className="text-xs text-zinc-500 italic">All words on the fridge!</p>
        )}
      </div>
    </div>
  )
}
