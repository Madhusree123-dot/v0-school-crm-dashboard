import { DashboardHeader } from "@/components/dashboard-header"
import { StatsCards } from "@/components/stats-cards"
import { AttendanceChart } from "@/components/attendance-chart"
import { RecentStudents } from "@/components/recent-students"
import { UpcomingClasses } from "@/components/upcoming-classes"
import { PerformanceChart } from "@/components/performance-chart"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto p-6 space-y-6">
        <StatsCards />

        <div className="grid gap-6 md:grid-cols-2">
          <AttendanceChart />
          <PerformanceChart />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <RecentStudents />
          <UpcomingClasses />
        </div>
      </main>
    </div>
  )
}
