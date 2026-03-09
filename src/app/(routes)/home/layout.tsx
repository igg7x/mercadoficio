"use client"
import type React from "react"
import { Header } from "./components/header"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "./components/side-bar"
import { SidebarInset } from "@/components/ui/sidebar"

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="flex min-h-screen">
          <AppSidebar />
          <SidebarInset className="flex-1">
            <Header />
            <main className="flex-1 overflow-auto">
              <div className="w-full max-w-5xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
                {children}
              </div>
            </main>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  )
}