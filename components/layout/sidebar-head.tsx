// sidebar-head.tsx
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import Link from "next/link";
export default function SidebarHeader() {
  return (
    <SidebarMenu>
      <SidebarMenuItem className="inline-flex justify-center items-center h-18 border-b">
        <Link href="/">
          <div className="flex items-center gap-x-2 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
            <div className="flex aspect-square size-10 items-center justify-center rounded-lg text-sidebar-primary-foreground">
              dada
            </div>
            <p className="font-semibold text-dark text-sm group-data-[collapsible=icon]:hidden">
              Sharingacademy.id
            </p>
          </div>
        </Link>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
