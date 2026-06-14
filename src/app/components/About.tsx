import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const skills = [
  { category: "Document Management", items: ["Records Classification", "Digital Archiving", "SOP Development", "Filing Systems"] },
  { category: "Data & Reporting", items: ["MS Excel Advanced", "Google Workspace", "Data Entry & Validation", "Report Compilation"] },
  { category: "Administration", items: ["Correspondence Management", "Meeting Coordination", "Procurement Support", "Budget Tracking"] },
  { category: "Digital Tools", items: ["Microsoft Office", "Google Workspace", "FIGMA", "Database Management", "Canva"] },
];

const certifications = [
  { title: "Office Administration", issuer: "Indonesian Professional Certification Authority (BNSP)", year: "2024" },
  { title: "Data Analytics", issuer: " Mini Course by RevoU", year: "2025" },
  { title: "Predictive Maintenance", issuer: "Indonesian Professional Certification Authority (BNSP)", year: "2025" },
];

export function About() {
  return (
    <section id="about" className="py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-end justify-between border-b border-border pb-6"
        >
          <div>
            <p
              className="text-primary mb-2"
              style={{ fontSize: "0.7rem", fontFamily: "'DM Mono', monospace", letterSpacing: "0.15em" }}
            >
              01 — ABOUT
            </p>
            <h2
              className="text-foreground"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 600 }}
            >
              Professional Profile
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <p
              className="text-foreground"
              style={{ fontSize: "1.05rem", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
            >
              I am an Information Science professional with deep expertise in office administration,
              document management, and digital record-keeping systems. With a BNSP certification
              and years of hands-on experience in government and private sector environments,
              I help organizations build efficient, compliant, and well-documented administrative workflows.
            </p>
            <p
              className="text-muted-foreground"
              style={{ fontSize: "0.95rem", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
            >
              My approach combines systematic information organization with modern digital tools —
              ensuring that records are accessible, auditable, and secure. I am passionate about
              transforming chaotic administrative environments into structured, high-performing systems.
            </p>

            {/* Certifications */}
            <div className="mt-4">
              <p
                className="text-muted-foreground mb-4"
                style={{ fontSize: "0.7rem", fontFamily: "'DM Mono', monospace", letterSpacing: "0.12em" }}
              >
                CERTIFICATIONS
              </p>
              <div className="flex flex-col gap-3">
                {certifications.map((cert) => (
                  <div key={cert.title} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p
                        className="text-foreground"
                        style={{ fontSize: "0.875rem", fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
                      >
                        {cert.title}
                      </p>
                      <p
                        className="text-muted-foreground"
                        style={{ fontSize: "0.775rem", fontFamily: "'DM Mono', monospace" }}
                      >
                        {cert.issuer} · {cert.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skills.map((group) => (
              <div
                key={group.category}
                className="bg-card border border-border p-5 flex flex-col gap-3 hover:border-primary/30 transition-colors duration-300"
              >
                <p
                  className="text-primary"
                  style={{ fontSize: "0.7rem", fontFamily: "'DM Mono', monospace", letterSpacing: "0.1em" }}
                >
                  {group.category.toUpperCase()}
                </p>
                <ul className="flex flex-col gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-muted-foreground flex items-center gap-2"
                      style={{ fontSize: "0.85rem", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
