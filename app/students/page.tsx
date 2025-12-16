import { DashboardHeader } from '@/components/dashboard-header'
import ClassList from '@/components/class-list'
import { classes } from '@/lib/classes'
import { RecentStudents } from '@/components/recent-students'

type ApiUser = {
  id: number
  firstName: string
  lastName: string
  age?: number
  email?: string
  image?: string
  company?: { name?: string }
}

export default async function StudentsPage() {
  const res = await fetch('https://dummyjson.com/users?limit=100')
  const json = await res.json()
  const apiUsers: ApiUser[] = json?.users ?? []

  const students = apiUsers.map((u) => ({
    id: u.id,
    name: `${u.firstName} ${u.lastName}`,
    age: u.age,
    email: u.email,
    image: u.image,
    company: u.company?.name,
  }))

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto p-6">
        <h1 className="mb-4 text-2xl font-semibold">Students</h1>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <RecentStudents students={students} />
          </div>

          <div className="md:col-span-1">
            <ClassList classes={classes} />
          </div>
        </div>
      </main>
    </div>
  )
}
