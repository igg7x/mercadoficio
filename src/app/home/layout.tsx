import React from "react";
import AppSideBar from "./components/side-bar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import {  Bell, Briefcase, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
      <div>
      <SidebarProvider defaultOpen >
          <AppSideBar />
        <main>
                  <header className="bg-white border-b w-full border-slate-200 shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                              <Briefcase className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-slate-900">MercadOficio</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Button variant="ghost" size="sm" className="relative">
                            <Bell className="w-5 h-5" />
                            <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-emerald-500 text-xs">
                              3
                            </Badge>
                          </Button>
                          <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-emerald-600" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </header>
        {children}
        </main>
      </SidebarProvider>
    </div>
  );
}