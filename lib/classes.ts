export type ClassInfo = {
  id: string
  name: string
  strength: number
  teacher?: string
}

export const classes: ClassInfo[] = [
  { id: 'c1', name: 'Grade 1 - A', strength: 28, teacher: 'Ms. Patel' },
  { id: 'c2', name: 'Grade 2 - B', strength: 32, teacher: 'Mr. Singh' },
  { id: 'c3', name: 'Grade 3 - A', strength: 25, teacher: 'Ms. Rao' },
  { id: 'c4', name: 'Grade 4 - C', strength: 30, teacher: 'Mr. Kumar' },
]

export function getTotalStrength(list: ClassInfo[]) {
  return list.reduce((s, c) => s + c.strength, 0)
}
