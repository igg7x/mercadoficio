"use client";
import React from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
  SidebarHeader
} from "@/components/ui/sidebar"
import { NavMain } from "./nav-main"
import { NavUser } from './nav-user'
import { Home ,User ,SearchIcon  , Workflow , Network, Briefcase } from 'lucide-react'

const data = {
  user: {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/diverse-user-avatars.png",
  },
  navMain: [
    {
      title: "Inicio",
      url: "/home",
      icon: Home,
      isActive: true,
    },
    {
      title: "Buscar",
      url: "/home/search",
      icon: SearchIcon,
      // items: [
      //   {
      //     title: "History",
      //     url: "#",
      //   },
      //   {
      //     title: "Starred",
      //     url: "#",
      //   },
      //   {
      //     title: "Settings",
      //     url: "#",
      //   },
      // ],
    },
    {
      title: "Trabajos",
      url: "/home/jobs",
      icon: Workflow,
      // items: [
      //   {
      //     title: "Genesis",
      //     url: "#",
      //   },
      //   {
      //     title: "Explorer",
      //     url: "#",
      //   },
      //   {
      //     title: "Quantum",
      //     url: "#",
      //   },
      // ],
    },
    {
      title: "Publicar",
      url: "/home/post-jobs",
      icon: Network,
      // items: [
      //   {
      //     title: "Introduction",
      //     url: "#",
      //   },
      //   {
      //     title: "Get Started",
      //     url: "#",
      //   },
      //   {
      //     title: "Tutorials",
      //     url: "#",
      //   },
      //   {
      //     title: "Changelog",
      //     url: "#",
      //   },
      // ],
    },
    {
      title: "Perfil",
      url: "/home/profile",
      icon: User ,
      // items: [
      //   {
      //     title: "General",
      //     url: "#",
      //   },
      //   {
      //     title: "Team",
      //     url: "#",
      //   },
      //   {
      //     title: "Billing",
      //     url: "#",
      //   },
      //   {
      //     title: "Limits",
      //     url: "#",
      //   },
      // ],
    }
  ]
  // teams: [
  //   {
  //     name: "Acme Inc",
  //     logo: GalleryVerticalEnd,
  //     plan: "Enterprise",
  //   },
  //   {
  //     name: "Acme Corp.",
  //     logo: AudioWaveform,
  //     plan: "Startup",
  //   },
  //   {
  //     name: "Evil Corp.",
  //     logo: Command,
  //     plan: "Free",
  //   },
  // ],
  // projects: [
  //   {
  //     name: "Design Engineering",
  //     url: "#",
  //     icon: Frame,
  //   },
  //   {
  //     name: "Sales & Marketing",
  //     url: "#",
  //     icon: PieChart,
  //   },
  //   {
  //     name: "Travel",
  //     url: "#",
  //     icon: Map,
  //   },
  // ],
}

const AppSideBar = ({...props} : React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar  collapsible='icon'  variant='sidebar'  {...props}>
      <SidebarHeader>
   
           <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
           <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                           <Briefcase className="w-5 h-5 text-white" />
                         </div>
              </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter className='mt-auto'>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail/>
    </Sidebar>
  )
}

export default AppSideBar