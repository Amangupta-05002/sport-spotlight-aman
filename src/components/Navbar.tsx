import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sports = [
    { name: "Cricket", path: "/cricket" },
    { name: "Football", path: "/dashboard" },
    { name: "Hockey", path: "/dashboard" },
    { name: "Volleyball", path: "/dashboard" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <BarChart3 className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              SportStats Pro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-1">
                  Sports <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover z-50">
                {sports.map((sport) => (
                  <DropdownMenuItem key={sport.name} asChild>
                    <Link to={sport.path} className="cursor-pointer">
                      {sport.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
              Dashboard
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            
            <Button asChild className="bg-gradient-to-r from-primary to-primary-glow">
              <Link to="/dashboard">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 animate-fade-in">
            <Link
              to="/"
              className="block py-2 px-4 hover:bg-muted rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className="block py-2 px-4 hover:bg-muted rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            {sports.map((sport) => (
              <Link
                key={sport.name}
                to={sport.path}
                className="block py-2 px-4 hover:bg-muted rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {sport.name}
              </Link>
            ))}
            <Link
              to="/about"
              className="block py-2 px-4 hover:bg-muted rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
