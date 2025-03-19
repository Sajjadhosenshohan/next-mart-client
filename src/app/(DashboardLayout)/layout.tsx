
import { AppSidebar } from "@/components/modules/dashboard/sidebar/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { ReactNode } from "react"

export default function DashboardLayout({children}: {children: ReactNode}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div> */}
          <div className="min-h-[100vh] flex-1 p-10 rounded-xl bg-muted/50 md:min-h-min"> {children}</div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
