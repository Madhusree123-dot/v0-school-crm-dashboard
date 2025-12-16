import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

type Student = {
  id: number
  name: string
  age?: number
  email?: string
  image?: string
  company?: string
}

type Props = {
  students?: Student[]
}

function initials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export function RecentStudents({ students = [] }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Students</CardTitle>
        <CardDescription>Latest student list</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {students.map((s) => (
            <div key={s.id} className="flex items-center justify-between gap-4 py-2">
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9">
                  {s.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={s.image} alt={s.name} className="h-9 w-9 rounded-full object-cover" />
                  ) : (
                    <AvatarFallback className="bg-primary/10 text-primary font-medium">{initials(s.name)}</AvatarFallback>
                  )}
                </Avatar>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{s.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{s.email ?? s.company}</p>
                </div>
              </div>

              <div className="text-right">
                <div className="text-sm font-medium">{s.age ?? '-'}</div>
                <div className="text-xs text-muted-foreground">{s.company ?? ''}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
