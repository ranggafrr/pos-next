"use client";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { Toaster } from "@/components/ui/toaster";
const queryClient = new QueryClient();
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sun } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <div className="flex h-screen overflow-hidden w-full">
          <AppSidebar />
          <SidebarInset className="flex-1 bg-gray-200/20">
            {/* Header dengan max-w-full agar tidak melebihi batas layar */}
            <header className="sticky h-20 max-w-full flex justify-between items-center px-6 border-b bg-zinc-100/50 w-full">
              {/* title page */}
              <p className="font-semibold text-zinc-800 text-lg md:text-2xl">
                Dashboard
              </p>
              {/* nav-desktop */}
              <div className="hidden xl:flex items-center me-5 gap-x-4">
                {/* Icon Tema (Light/Dark Mode) */}
                <div className="text-zinc-600 bg-zinc-200/50 rounded-full p-2 cursor-pointer hover:bg-zinc-300/50 hover:text-primary transition">
                  <Sun className="size-5" />
                </div>
                {/* Separator - Diperbaiki menjadi vertikal */}
                <Separator
                  orientation="vertical"
                  className="h-10 w-[1px] bg-zinc-400"
                />
                <DropdownMenu>
                  <DropdownMenuTrigger className="cursor-pointer">
                    <div className="border-2 border-primary p-1 rounded-full">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="me-5 w-[200px] border-none">
                    <DropdownMenuItem className="font-semibold text-dark">
                      Rangga Firmansyah
                    </DropdownMenuItem>
                    <DropdownMenuItem>Kelas Saya</DropdownMenuItem>
                    <DropdownMenuItem>Pengaturan</DropdownMenuItem>
                    <DropdownMenuItem variant="destructive">
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              {/* nav-mobile */}
              <div className="flex xl:hidden items-center gap-x-4">
                {/* Icon Tema (Light/Dark Mode) */}
                <div className="text-zinc-600 bg-zinc-200/50 rounded-full p-2 cursor-pointer hover:bg-zinc-300/50 hover:text-primary transition">
                  <Sun className="size-5" />
                </div>
                {/* Separator - Diperbaiki menjadi vertikal */}
                <Separator
                  orientation="vertical"
                  className="h-10 w-[1px] bg-zinc-400"
                />
                <SidebarTrigger />
              </div>
            </header>

            {/* Pastikan `main` juga mengikuti ukuran yang benar */}
            <main className="flex-1 overflow-y-hidden space-y-4 bg-zinc-100/50">
              <ScrollArea className="h-full">{children}</ScrollArea>
            </main>
          </SidebarInset>
        </div>
        {/* <Toaster /> */}
      </SidebarProvider>
    </QueryClientProvider>
  );
}
