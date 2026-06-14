import image_Foto_Profil_Ismi_1 from '@/imports/Foto_Profil_Ismi-1.png'
import { motion } from "motion/react";
import { Download, ArrowDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToPortfolio = () => {
    document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,169,110,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(201,169,110,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-16 items-center w-full">
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-3">
            <span
              className="px-3 py-1 border border-primary text-primary tracking-widest uppercase"
              style={{ fontSize: "0.7rem", fontWeight: 600, fontFamily: "'DM Mono', monospace" }}
            >
              BNSP Certified
            </span>
          </div>

          <h1
            className="text-foreground"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
            }}
          >
            Ismi Anjar
            <br />
            <span style={{ color: "var(--primary)", fontStyle: "italic" }}>Farida</span>
          </h1>

          <p
            className="text-muted-foreground"
            style={{
              fontSize: "1.05rem",
              fontWeight: 300,
              lineHeight: 1.75,
              maxWidth: "480px",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Information Science professional specializing in document management,
            digital workflows, and administrative excellence. Certified by BNSP
            in Office Administration.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 px-6 py-3 border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-200 text-[#f5f0f4]"
              style={{ fontSize: "0.85rem", fontWeight: 500, letterSpacing: "0.06em" }}
            >
              CONTACT ME
            </button>
          </div>

          {/* Stats row */}
          <div className="flex gap-8 mt-4 pt-6 border-t border-border">
            {[
              { value: "3", label: "Certifications" },
              { value: "10+", label: "Projects Done" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.6rem",
                    fontWeight: 600,
                    color: "var(--primary)",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-muted-foreground"
                  style={{ fontSize: "0.75rem", fontFamily: "'DM Mono', monospace", letterSpacing: "0.06em" }}
                >
                  {stat.label.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — photo */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative">
            {/* Gold frame accent */}
            <div
              className="absolute -top-4 -left-4 w-full h-full border border-primary pointer-events-none"
              style={{ opacity: 0.3 }}
            />
            <div className="relative overflow-hidden bg-secondary" style={{ width: 340, height: 420 }}>
              <ImageWithFallback
                src={image_Foto_Profil_Ismi_1}
                alt="Ismi Anjar Farida — professional portrait"
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay */}
              
            </div>

            {/* Floating credential card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-4 -right-4 bg-card border border-border px-5 py-4"
              style={{ minWidth: 190 }}
            >
              <p
                className="text-muted-foreground"
                style={{ fontSize: "0.65rem", fontFamily: "'DM Mono', monospace", letterSpacing: "0.1em" }}
              >
                Information Management Specialist | Digital Asset & Research Data Enthusiast | Library and Information Science Graduate
              </p>
              
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={scrollToPortfolio}
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors duration-200 flex flex-col items-center gap-1"
      >
        <span
          style={{ fontSize: "0.65rem", fontFamily: "'DM Mono', monospace", letterSpacing: "0.12em" }}
        >
          SCROLL
        </span>
        <ArrowDown size={16} />
      </motion.button>
    </section>
  );
}
