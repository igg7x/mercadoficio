"use client"
import type React from "react"
import { Header } from "./components/header"
interface AppLayoutProps {
  children: React.ReactNode
} 
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "./components/side-bar"

export  default function AppLayout({ children }: AppLayoutProps) {



  return (
    <SidebarProvider>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="flex  pt-16">
        <Header/>
        <AppSidebar />

        <main>
          <div className="p-3">
            {/* <Header/> */}
            {children}</div>
        </main>
      </div>
    </div>
    </SidebarProvider>
  )
}
