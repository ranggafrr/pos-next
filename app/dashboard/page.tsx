"use client";
import DashboardLayout from "@/components/layout/dashboard-layout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="m-8">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <p className="text-xl font-semibold">
              Selamat Datang,Rangga Firmansyah!
            </p>
            <p className="text-zinc-600 text-sm">
              Start your day checking today`s tasks and updates.
            </p>
          </div>
          <div className="bg-sky-200 p-2 rounded-lg">
            <p className="text-sky-700 font-semibold">15 November 2025</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
