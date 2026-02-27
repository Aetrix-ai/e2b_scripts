import { NavLink, Outlet } from "react-router-dom"

import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "rounded-full px-3 py-1 text-sm font-medium transition-colors",
          isActive
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        )
      }
      end={to === "/"}
    >
      {label}
    </NavLink>
  )
}

export function RootLayout() {
  return (
    <div className="min-h-screen bg-transparent text-foreground relative">
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 relative">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
          <div className="text-sm font-semibold tracking-wide">Portfolio Starter</div>
          <div className="flex items-center gap-4">
            <nav className="flex items-center gap-2">
              <NavItem to="/" label="Portfolio" />
              <NavItem to="/components" label="Components" />
            </nav>
            <div className="h-6 w-px bg-border/50" />
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-5xl px-6 bg-background relative z-10">
        <Outlet />
      </main>
    </div>
  )
}
