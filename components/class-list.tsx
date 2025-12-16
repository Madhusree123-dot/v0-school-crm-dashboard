import * as React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ClassInfo, getTotalStrength } from '@/lib/classes'

type Props = {
  classes: ClassInfo[]
}

export default function ClassList({ classes }: Props) {
  const total = getTotalStrength(classes)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Classes</CardTitle>
          <CardDescription>Overview of classes and total strength</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {classes.map((c) => (
              <Card key={c.id} className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-medium">{c.name}</div>
                    {c.teacher && (
                      <div className="text-muted-foreground text-xs">{c.teacher}</div>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="default">{c.strength} students</Badge>
                  </div>
                </div>
                <div className="mt-3 flex justify-end">
                  <Button variant="outline" size="sm">View</Button>
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-center justify-between">
            <div className="text-sm text-muted-foreground">Total strength</div>
            <div className="text-lg font-semibold">{total}</div>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
