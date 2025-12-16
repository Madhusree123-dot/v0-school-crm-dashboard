import { DashboardHeader } from '@/components/dashboard-header'
import ClassList from '@/components/class-list'
import { classes } from '@/lib/classes'

export default function ClassesPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto p-6">
        <h1 className="mb-4 text-2xl font-semibold">Classes</h1>

        <ClassList classes={classes} />
      </main>
    </div>
  )
}
