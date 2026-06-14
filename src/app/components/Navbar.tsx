import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Experience", href: "#experience" },
  { label: "Organization", href: "#organization" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    document
      .querySelector(href)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-['Playfair_Display'] text-foreground tracking-wide hover:text-primary transition-colors duration-200"
            style={{ fontSize: "1.1rem", fontWeight: 600 }}
          >
            Ismi Anjar Farida, S.S.I
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                }}
              >
                {link.label.toUpperCase()}
              </button>
            ))}
            
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground p-1"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-card border-b border-border px-6 py-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-left text-foreground hover:text-primary transition-colors duration-200 py-1"
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 400,
                  letterSpacing: "0.05em",
                }}
              >
                {link.label}
              </button>
            ))}
            <a
              href="/cv-placeholder.pdf"
              download="Sari_Dewi_CV.pdf"
              className="flex items-center gap-2 mt-2 text-primary"
              style={{ fontSize: "0.9rem", fontWeight: 500 }}
            >
              <Download size={15} />
              Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}