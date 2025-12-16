export type RawUser = {
  id: number
  firstName: string
  lastName: string
  age?: number
  university?: string
  image?: string
  company?: { name?: string }
}

export const rawUsers: RawUser[] = [
  { id: 1, firstName: 'Emma', lastName: 'Johnson', age: 15, university: 'Springfield High', image: '', company: { name: 'N/A' } },
  { id: 2, firstName: 'Michael', lastName: 'Chen', age: 16, university: 'Riverside High', image: '', company: { name: 'N/A' } },
  { id: 3, firstName: 'Sophia', lastName: 'Rodriguez', age: 14, university: 'Lincoln Prep', image: '', company: { name: 'N/A' } },
  { id: 4, firstName: 'James', lastName: 'Wilson', age: 17, university: 'Central High', image: '', company: { name: 'N/A' } },
  { id: 5, firstName: 'Olivia', lastName: 'Brown', age: 15, university: 'Westview High', image: '', company: { name: 'N/A' } },
  { id: 6, firstName: 'Liam', lastName: 'Patel', age: 16, university: 'Northwood High', image: '', company: { name: 'N/A' } },
]

export type Student = {
  id: number
  name: string
  grade: string
  status: 'Present' | 'Absent' | 'Late'
  initials: string
  image?: string
}

function initials(first: string, last: string) {
  return `${first[0] ?? ''}${last[0] ?? ''}`.toUpperCase()
}

const statuses: Student['status'][] = ['Present', 'Present', 'Present', 'Absent', 'Late']

export const students: Student[] = rawUsers.map((u, i) => ({
  id: u.id,
  name: `${u.firstName} ${u.lastName}`,
  grade: `${u.university}`,
  status: statuses[i % statuses.length],
  initials: initials(u.firstName, u.lastName),
  image: u.image,
}))
