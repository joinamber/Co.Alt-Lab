
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";

const NavLink = ({ to, children, className }: { to: string; children: React.ReactNode; className?: string }) => (
  <Link
    to={to}
    className={cn(
      "relative px-4 py-2 text-foreground/80 transition-colors",
      "hover:text-foreground hover:bg-accent",
      "focus:outline-none focus:text-foreground focus:bg-accent",
      "rounded-md",
      "before:absolute before:inset-x-0 before:bottom-0 before:h-[2px]",
      "before:scale-x-0 hover:before:scale-x-100",
      "before:transition-transform before:bg-primary",
      className
    )}
  >
    {children}
  </Link>
);

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/privacy">Privacy</NavLink>
          <NavLink to="/terms">Terms</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
