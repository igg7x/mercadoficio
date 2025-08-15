"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "./components/header"
import { Sidebar } from "./components/side-bar"
import { cn } from "@/lib/utils"

interface AppLayoutProps {
  children: React.ReactNode
} 

export  default function AppLayout({ children }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onToggleSidebar={toggleSidebar} />
      <div className="flex pt-16">
        <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />

        {/* Main content */}
        <main
          className={cn(
            "flex-1 transition-all duration-300  overflow-y-auto ease-in-out ",
            // Desktop: adjust margin based on sidebar state
            "lg:ml-0",
            // sidebarOpen ? "lg:ml-64" : "lg:ml-16",
          )}
        >
          <div className="p-6">{children}</div>
        </main>
      </div>
    </div>
  )
}
