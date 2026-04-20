import { expect, test } from 'vitest'
import { calculateSum } from './math.ts'

test('calculates correct sum for items', () => {
  const mockCart = [{ price: 10 }, { price: 5 }]
  expect(calculateSum(mockCart)).toBe(15)
})

test('returns 0 for empty array', () => {
  expect(calculateSum([])).toBe(0)
})
