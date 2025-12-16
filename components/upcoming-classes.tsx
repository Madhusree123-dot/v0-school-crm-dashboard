import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin } from "lucide-react"

const classes = [
  {
    name: "Advanced Mathematics",
    time: "09:00 AM",
    teacher: "Dr. Sarah Mitchell",
    room: "Room 301",
  },
  {
    name: "Biology Lab",
    time: "11:00 AM",
    teacher: "Prof. John Davis",
    room: "Lab 2B",
  },
  {
    name: "English Literature",
    time: "01:30 PM",
    teacher: "Ms. Emily Parker",
    room: "Room 205",
  },
  {
    name: "World History",
    time: "03:00 PM",
    teacher: "Mr. Robert Lee",
    room: "Room 410",
  },
]

export function UpcomingClasses() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Classes</CardTitle>
        <CardDescription>Today's schedule</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {classes.map((classItem) => (
            <div
              key={classItem.name}
              className="flex items-start justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <div className="space-y-1">
                <p className="text-sm font-semibold text-foreground">{classItem.name}</p>
                <p className="text-xs text-muted-foreground">{classItem.teacher}</p>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {classItem.time}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {classItem.room}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
