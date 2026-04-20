import { create } from 'zustand'
import type { Magnet } from '../types/magnet.ts'

interface MagnetStore {
  magnets: Magnet[]
  updateMagnet: (id: string, updates: Partial<Magnet>) => void
  loadExpansionPack: () => void
}

const initialMagnets: Magnet[] = [
  { id: '1',  word: 'the',      status: 'bank', x: 0, y: 0 },
  { id: '2',  word: 'cat',      status: 'bank', x: 0, y: 0 },
  { id: '3',  word: 'sits',     status: 'bank', x: 0, y: 0 },
  { id: '4',  word: 'on',       status: 'bank', x: 0, y: 0 },
  { id: '5',  word: 'cold',     status: 'bank', x: 0, y: 0 },
  { id: '6',  word: 'night',    status: 'bank', x: 0, y: 0 },
  { id: '7',  word: 'love',     status: 'bank', x: 0, y: 0 },
  { id: '8',  word: 'whispers', status: 'bank', x: 0, y: 0 },
  { id: '9',  word: 'dark',     status: 'bank', x: 0, y: 0 },
  { id: '10', word: 'dream',    status: 'bank', x: 0, y: 0 },
  { id: '11', word: 'above',    status: 'bank', x: 0, y: 0 },
  { id: '12', word: 'beneath',  status: 'bank', x: 0, y: 0 },
  { id: '13', word: 'sky',      status: 'bank', x: 0, y: 0 },
  { id: '14', word: 'always',   status: 'bank', x: 0, y: 0 },
  { id: '15', word: 'never',    status: 'bank', x: 0, y: 0 },
]

const expansionWords = ['moon', 'river', 'silent', 'storm', 'golden', 'shadow', 'fire', 'forever']

export const useMagnetStore = create<MagnetStore>((set) => ({
  magnets: initialMagnets,

  updateMagnet: (id, updates) =>
    set((state) => ({
      magnets: state.magnets.map((m) => (m.id === id ? { ...m, ...updates } : m)),
    })),

  loadExpansionPack: () =>
    set((state) => {
      const existing = new Set(state.magnets.map((m) => m.word))
      const newMagnets: Magnet[] = expansionWords
        .filter((w) => !existing.has(w))
        .map((word, i) => ({
          id: `exp-${Date.now()}-${i}`,
          word,
          status: 'bank',
          x: 0,
          y: 0,
        }))
      return { magnets: [...state.magnets, ...newMagnets] }
    }),
}))
