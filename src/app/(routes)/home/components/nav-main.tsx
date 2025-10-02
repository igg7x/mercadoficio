"use client";
import { ChevronRight,Layers ,type LucideIcon } from "lucide-react"

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import Link from "next/link";


interface NavMainProps {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
  }[]
}


export function NavMain({
  items,
}: NavMainProps) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-lg flex items-center gap-1   font-semibold text-center">
        <Layers/>
        Menu</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible key={item.title} asChild defaultOpen={item.isActive} className="group/collapsible">
                  <Link   href={item.url}>
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  {/* {item.items && (
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  )} */}
                </SidebarMenuButton>
              </CollapsibleTrigger>
            </SidebarMenuItem>
                    </Link>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
