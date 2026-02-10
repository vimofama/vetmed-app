"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-360 mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <span className="material-symbols-outlined text-white">pets</span>
            </div>
            <h1 className="text-xl font-extrabold tracking-tight text-primary">
              VetMed Supply
            </h1>
          </div>
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              className={
                pathname === "/dashboard"
                  ? "text-sm font-semibold text-primary transition-colors"
                  : "text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
              }
              href="/dashboard"
            >
              Dashboard
            </Link>
            <Link
              className={
                pathname === "/dashboard/veterinarias"
                  ? "text-sm font-semibold text-primary transition-colors"
                  : "text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
              }
              href="/dashboard/veterinarias"
            >
              Veterinaries
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 pr-4 border-r border-slate-200 dark:border-slate-800">
            <div className="text-right">
              <p className="text-sm font-bold leading-none">
                Distribuidora FarmaVet Cía. Ltda.
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Quito, Ecuador
              </p>
            </div>
            <div
              className="size-10 rounded-full bg-slate-200 overflow-hidden border border-slate-300 dark:border-slate-700"
              data-alt="User profile picture for distributor"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB5O6S7FOssumDLub-8rKONXA1-J99tVbN_q4tQL9sa3riEswhR8pCSGdnXOWsbQHxj1UD17oBc553z8As2znMvyxXqt2EgxE_vC9XCjUshfWrP9CCdM563_pcmalTm7QLffKVmu7CMa2CnD0843Ik94kIaD5mZUxTS7JiQT7mKWr0UR8ZBeAEF2hVC3bcvU9CcwrU-4jLwGcL20PdClQLDdQ0DQlFF3kOi6rXyihrf-bmHv72WEmrOkqiEEWU_b4J5G3OixYBTupc")',
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <button className="material-symbols-outlined text-slate-500 dark:text-slate-400 hover:text-primary transition-colors cursor-pointer">
            settings
          </button>
        </div>
      </div>
    </header>
  );
}
