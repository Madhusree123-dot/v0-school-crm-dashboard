import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, BookOpen, GraduationCap, TrendingUp } from "lucide-react"

export function StatsCards() {
  const stats = [
    {
      title: "Total Students",
      value: "2,847",
      change: "+12%",
      icon: Users,
      trend: "up",
    },
    {
      title: "Active Classes",
      value: "156",
      change: "+3",
      icon: BookOpen,
      trend: "up",
    },
    {
      title: "Teachers",
      value: "89",
      change: "+5",
      icon: GraduationCap,
      trend: "up",
    },
    {
      title: "Avg. Attendance",
      value: "94.2%",
      change: "+2.1%",
      icon: TrendingUp,
      trend: "up",
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            <stat.icon className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">{stat.value}</div>
            <p className="text-sm text-accent mt-1">{stat.change} from last month</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
