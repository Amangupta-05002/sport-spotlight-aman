import { Link } from "react-router-dom";
import { BarChart3, Mail, Twitter, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-card mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                SportStats Pro
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your comprehensive platform for sports analytics across multiple sports.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary">
                Home
              </Link>
              <Link to="/dashboard" className="block text-sm text-muted-foreground hover:text-primary">
                Dashboard
              </Link>
              <Link to="/cricket" className="block text-sm text-muted-foreground hover:text-primary">
                Cricket Analytics
              </Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary">
                About Us
              </Link>
            </div>
          </div>

          {/* Sports */}
          <div>
            <h3 className="font-semibold mb-4">Sports</h3>
            <div className="space-y-2">
              <Link to="/cricket" className="block text-sm text-muted-foreground hover:text-primary">
                Cricket
              </Link>
              <Link to="/dashboard" className="block text-sm text-muted-foreground hover:text-primary">
                Football
              </Link>
              <Link to="/dashboard" className="block text-sm text-muted-foreground hover:text-primary">
                Hockey
              </Link>
              <Link to="/dashboard" className="block text-sm text-muted-foreground hover:text-primary">
                Volleyball
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to get the latest stats and updates
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="h-9"
              />
              <Button size="sm" className="shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 SportStats Pro. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
