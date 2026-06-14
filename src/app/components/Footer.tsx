import { Download, Linkedin, Instagram, Github, Mail } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <span
              className="text-foreground"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 600 }}
            >
              Ismi Anjar Farida, S.S.I
            </span>
            <p
              className="text-muted-foreground"
              style={{ fontSize: "0.85rem", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7, fontWeight: 300 }}
            >
              Information Science professional.
              <br />
              BNSP Certified — Office Administration.
            </p>
            {/* Social links */}
            <div className="flex gap-3 mt-1">
              {[
                { icon: <Linkedin size={15} />, href: "https://www.linkedin.com/in/ismi-anjar-farida-792393313/", label: "LinkedIn" },
                { icon: <Instagram size={15} />, href: "https://www.instagram.com/iss_anf/", label: "Instagram" },
                { icon: <Mail size={15} />, href: "ismi.anjar@gmail.com", label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <p
              className="text-muted-foreground mb-1"
              style={{ fontSize: "0.65rem", fontFamily: "'DM Mono', monospace", letterSpacing: "0.14em" }}
            >
              NAVIGATION
            </p>
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-left text-muted-foreground hover:text-primary transition-colors duration-200"
                style={{ fontSize: "0.875rem", fontFamily: "'DM Sans', sans-serif" }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CV download */}
          
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-wrap items-center justify-between gap-3">
          <p
            className="text-muted-foreground"
            style={{ fontSize: "0.72rem", fontFamily: "'DM Mono', monospace" }}
          >
            © 2026 Ismi Anjar Farida. All rights reserved.
          </p>
          <p
            className="text-muted-foreground"
            style={{ fontSize: "0.72rem", fontFamily: "'DM Mono', monospace" }}
          >
            Banyumas · Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
