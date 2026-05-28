import { useState } from "react";
import { Menu, X, Shield } from "lucide-react";

const navItems = [
  { label: "Beranda", href: "/#beranda" },
  { label: "Profil", href: "/#profil" },
  { label: "Artikel", href: "/#artikel" },
  { label: "RFC2350", href: "/rfc2350" },
  { label: "Layanan", href: "/#layanan" },
  { label: "Panduan", href: "/panduan" },
  { label: "Kontak", href: "/#kontak" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-nav/95 backdrop-blur-md border-b border-nav-foreground/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#beranda" className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-accent" />
          <span className="text-lg font-bold text-nav-foreground">KARIMUN-CSIRT</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-nav-foreground/80 hover:text-accent transition-colors rounded-md"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-nav-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-nav border-t border-nav-foreground/10">
          <ul className="flex flex-col py-2">
            {navItems.map((item, i) => (
              <li key={item.label} className="animate-slide-in" style={{ animationDelay: `${i * 50}ms` }}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-3 text-sm font-medium text-nav-foreground/80 hover:text-accent hover:bg-nav-foreground/5 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
