import { type LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from 'next/link'
import { cn } from "@/lib/utils";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavMain({
  items,
}: {
  items: {
    name?: string; // Untuk single links
    title?: string; // Untuk dropdowns
    url: string;
    icon?: LucideIcon | string;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const pathname = usePathname(); // Next.js: Ambil path saat ini

  return (
    <SidebarGroup>
      <SidebarMenu className="px-2 space-y-2  group-data-[collapsible=icon]:space-y-4">
        {items.map((item) => {
          const isActive =
            pathname === item.url ||
            (item.items &&
              item.items.some((subItem) => pathname === subItem.url));
          return (
            <SidebarMenuItem key={item.name || item.title}>
              <SidebarMenuButton
                asChild
                tooltip={item.name || item.title}
                className={cn(
                  "py-6 transition-colors duration-150 hover:cursor-pointer group-data-[collapsible=icon]:p-5",
                  isActive
                    ? "bg-primary text-white hover:bg-primary hover:text-white"
                    : "text-zinc-700 hover:text-zinc-700"
                )}
              >
                <Link href={item.url}>
                  {item.icon &&
                    (typeof item.icon === "string" ? (
                      <div
                        className="h-5 w-5 group-data-[collapsible=icon]:h-6 group-data-[collapsible=icon]:w-6 flex-shrink-0 stroke-[1.7px]"
                        dangerouslySetInnerHTML={{
                          __html: item.icon
                            .replace('className="size-6"', 'className="h-5 w-5 group-data-[collapsible=icon]:h-6 group-data-[collapsible=icon]:w-6"')
                            .replace('strokeWidth={2.5}', 'strokeWidth={3}'),
                        }}
                      />
                    ) : (
                      <item.icon strokeWidth={3} className="h-5 w-5 group-data-[collapsible=icon]:h-6 group-data-[collapsible=icon]:w-6 flex-shrink-0" />
                    ))}
                  <span
                    className={cn(
                      "ml-2 group-data-[collapsible=icon]:hidden",
                      isActive ? "text-white font-medium" : "text-dark"
                    )}
                  >
                    {item.name || item.title}
                  </span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
