import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const students = [
  {
    name: "Emma Johnson",
    grade: "10th Grade",
    status: "Present",
    initials: "EJ",
  },
  {
    name: "Michael Chen",
    grade: "11th Grade",
    status: "Present",
    initials: "MC",
  },
  {
    name: "Sophia Rodriguez",
    grade: "9th Grade",
    status: "Absent",
    initials: "SR",
  },
  {
    name: "James Wilson",
    grade: "12th Grade",
    status: "Present",
    initials: "JW",
  },
  {
    name: "Olivia Brown",
    grade: "10th Grade",
    status: "Late",
    initials: "OB",
  },
]

export function RecentStudents() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Students</CardTitle>
        <CardDescription>Latest student activity</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {students.map((student) => (
            <div key={student.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-primary/10 text-primary font-medium">{student.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-foreground">{student.name}</p>
                  <p className="text-xs text-muted-foreground">{student.grade}</p>
                </div>
              </div>
              <Badge
                variant={
                  student.status === "Present" ? "default" : student.status === "Absent" ? "destructive" : "secondary"
                }
                className={student.status === "Present" ? "bg-accent text-accent-foreground" : ""}
              >
                {student.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
