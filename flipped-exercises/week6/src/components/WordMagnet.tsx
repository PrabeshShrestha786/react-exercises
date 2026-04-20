import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import type { Magnet } from '../types/magnet.ts'

interface Props {
  magnet: Magnet
}

export default function WordMagnet({ magnet }: Props) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: magnet.id,
  })

  const onFridge = magnet.status === 'fridge'

  const style: React.CSSProperties = onFridge
    ? {
        position: 'absolute',
        left: magnet.x,
        top: magnet.y,
        transform: CSS.Translate.toString(transform),
        zIndex: isDragging ? 50 : 1,
      }
    : {
        transform: CSS.Translate.toString(transform),
        zIndex: isDragging ? 50 : 1,
      }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`
        select-none cursor-grab active:cursor-grabbing
        px-2 py-1 rounded
        bg-white border border-gray-300 shadow-sm
        text-sm font-medium text-gray-800
        transition-shadow
        ${isDragging ? 'shadow-lg opacity-80' : 'hover:shadow-md'}
        ${onFridge ? '' : 'inline-block m-1'}
      `}
    >
      {magnet.word}
    </div>
  )
}
