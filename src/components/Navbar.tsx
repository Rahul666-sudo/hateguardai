import { Shield } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto max-w-5xl px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Shield className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
            HateGuard AI
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#analyzer"
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Try It Now
          </a>
          <a
            href="#team"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Team
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
