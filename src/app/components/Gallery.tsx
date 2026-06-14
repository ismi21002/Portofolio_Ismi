import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type Category = "All" | "Document Management" | "Data Analysis" | "Administrative Reports" | "Digital Workflows" | "Presentations";

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  category: Exclude<Category, "All">;
  images: string[];   // first image = thumbnail
  tags: string[];
  year: string;
}

const items: GalleryItem[] = [
  {
    id: 1,
    title: "Records Classification System",
    description: "Designed and implemented a comprehensive records classification system for a regional government office serving 500+ employees. The system standardized subject headings, retention schedules, and physical/digital filing conventions across all departments.",
    category: "Document Management",
    images: [
      "https://images.unsplash.com/photo-1768158989131-64cbff67f292?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=900&h=600&fit=crop&auto=format",
    ],
    tags: ["Classification", "SOP", "Government"],
    year: "2024",
  },
  {
    id: 2,
    title: "Digital Archive Migration",
    description: "Led the migration of 10,000+ physical documents to a structured digital archive system with metadata tagging and full-text search indexing. Included quality-control auditing and staff training on retrieval workflows.",
    category: "Document Management",
    images: [
      "https://images.unsplash.com/photo-1758876201660-103984519266?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=900&h=600&fit=crop&auto=format",
    ],
    tags: ["Digitization", "Metadata", "Archiving"],
    year: "2023",
  },
  {
    id: 3,
    title: "HR Data Dashboard",
    description: "Built an interactive HR analytics dashboard tracking attendance, payroll, and performance metrics for 200+ staff members. Automated monthly summaries cut reporting time by 60%.",
    category: "Data Analysis",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=900&h=600&fit=crop&auto=format",
    ],
    tags: ["Excel", "Dashboard", "HR Analytics"],
    year: "2024",
  },
  {
    id: 4,
    title: "Budget Expenditure Analysis",
    description: "Quarterly analysis of departmental expenditures with variance reporting and forecasting for executive leadership review. Identified a 12% budget overrun three months before year-end, enabling corrective action.",
    category: "Data Analysis",
    images: [
      "https://images.unsplash.com/photo-1686061593213-98dad7c599b9?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=900&h=600&fit=crop&auto=format",
    ],
    tags: ["Finance", "Reporting", "Forecasting"],
    year: "2023",
  },
  {
    id: 5,
    title: "Annual Performance Report 2023",
    description: "Compiled and formatted the organization's annual performance report, integrating data from 8 departments into a cohesive 60-page document. Delivered two weeks ahead of the government submission deadline.",
    category: "Administrative Reports",
    images: [
      "https://images.unsplash.com/photo-1735825764485-93a381fd5779?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=900&h=600&fit=crop&auto=format",
    ],
    tags: ["Annual Report", "Multi-department", "Publishing"],
    year: "2023",
  },
  {
    id: 6,
    title: "Procurement Audit Summary",
    description: "Structured audit report covering procurement compliance across 12 procurement cycles, identifying 3 cost-saving opportunities and 2 process gaps flagged for corrective action.",
    category: "Administrative Reports",
    images: [
      "https://images.unsplash.com/photo-1761735486587-bcac08b15c79?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&h=600&fit=crop&auto=format",
    ],
    tags: ["Audit", "Compliance", "Procurement"],
    year: "2024",
  },
  {
    id: 7,
    title: "e-Office Implementation",
    description: "Coordinated the rollout of a paperless office system integrating e-signatures, digital workflows, and cloud document storage across 5 divisions. Reduced paper usage by 70% in the first quarter.",
    category: "Digital Workflows",
    images: [
      "https://images.unsplash.com/photo-1762341112610-58061dbace4e?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&h=600&fit=crop&auto=format",
    ],
    tags: ["e-Office", "Automation", "Cloud"],
    year: "2024",
  },
  {
    id: 8,
    title: "Standard Operating Procedures",
    description: "Developed a suite of 25 SOPs for administrative processes, reducing onboarding time for new staff by 40% and establishing consistent quality standards across departments.",
    category: "Digital Workflows",
    images: [
      "https://images.unsplash.com/photo-1762341116319-05a8355fcfc9?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&h=600&fit=crop&auto=format",
    ],
    tags: ["SOP", "Process Design", "Training"],
    year: "2022",
  },
  {
    id: 9,
    title: "Leadership Training Deck",
    description: "Designed a 45-slide presentation for executive leadership training on organizational change management and administrative reform, delivered to 60 department heads.",
    category: "Presentations",
    images: [
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=900&h=600&fit=crop&auto=format",
    ],
    tags: ["Training", "Deck Design", "Leadership"],
    year: "2023",
  },
  {
    id: 10,
    title: "Strategic Planning Workshop",
    description: "Facilitated documentation and visual materials for a 3-day strategic planning workshop attended by 60 department heads. Produced a final synthesis report adopted as the basis for the 2024–2026 roadmap.",
    category: "Presentations",
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900&h=600&fit=crop&auto=format",
    ],
    tags: ["Workshop", "Strategy", "Facilitation"],
    year: "2024",
  },
];

const categories: Category[] = ["All", "Document Management", "Data Analysis", "Administrative Reports", "Digital Workflows", "Presentations"];

function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div className="relative overflow-hidden bg-secondary" style={{ height: 320 }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src={images[current]}
            alt={`${title} — photo ${current + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Controls — only show if more than 1 image */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/70 backdrop-blur-sm flex items-center justify-center text-foreground hover:text-primary hover:bg-background/90 transition-all duration-150"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/70 backdrop-blur-sm flex items-center justify-center text-foreground hover:text-primary hover:bg-background/90 transition-all duration-150"
          >
            <ChevronRight size={16} />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="w-1.5 h-1.5 rounded-full transition-all duration-200"
                style={{
                  background: i === current ? "var(--primary)" : "rgba(255,255,255,0.35)",
                  width: i === current ? "20px" : "6px",
                }}
              />
            ))}
          </div>

          {/* Counter */}
          <span
            className="absolute top-3 right-3 bg-background/70 backdrop-blur-sm px-2 py-0.5 text-muted-foreground"
            style={{ fontSize: "0.65rem", fontFamily: "'DM Mono', monospace" }}
          >
            {current + 1} / {images.length}
          </span>
        </>
      )}
    </div>
  );
}

export function Gallery() {
  const [active, setActive] = useState<Category>("All");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <section id="portfolio" className="py-28 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 border-b border-border pb-6"
        >
          <p
            className="text-primary mb-2"
            style={{ fontSize: "0.7rem", fontFamily: "'DM Mono', monospace", letterSpacing: "0.15em" }}
          >
            02 — PORTFOLIO
          </p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2
              className="text-foreground"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 600 }}
            >
              Selected Work
            </h2>
            <span
              className="text-muted-foreground"
              style={{ fontSize: "0.75rem", fontFamily: "'DM Mono', monospace" }}
            >
              {filtered.length} PROJECT{filtered.length !== 1 ? "S" : ""}
            </span>
          </div>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-4 py-2 transition-all duration-200"
              style={{
                fontSize: "0.75rem",
                fontFamily: "'DM Mono', monospace",
                letterSpacing: "0.07em",
                border: "1px solid",
                borderColor: active === cat ? "var(--primary)" : "var(--border)",
                color: active === cat ? "var(--primary)" : "var(--muted-foreground)",
                background: active === cat ? "rgba(201,169,110,0.08)" : "transparent",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                onClick={() => setSelected(item)}
                className="group cursor-pointer bg-background border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden"
              >
                {/* Thumbnail — always first image */}
                <div className="relative overflow-hidden bg-secondary" style={{ height: 220 }}>
                  <ImageWithFallback
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    style={{ background: "rgba(8,8,9,0.5)" }}
                  />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5">
                    <ExternalLink size={14} className="text-primary" />
                  </div>
                  {/* Photo count badge */}
                  {item.images.length > 1 && (
                    <span
                      className="absolute bottom-3 right-3 bg-background/80 backdrop-blur-sm px-2 py-0.5 text-primary flex items-center gap-1"
                      style={{ fontSize: "0.65rem", fontFamily: "'DM Mono', monospace" }}
                    >
                      ⬛ {item.images.length} photos
                    </span>
                  )}
                  <span
                    className="absolute top-3 left-3 px-2 py-1 bg-background/80 backdrop-blur-sm text-muted-foreground"
                    style={{ fontSize: "0.62rem", fontFamily: "'DM Mono', monospace", letterSpacing: "0.07em" }}
                  >
                    {item.category.slice(0, 14).toUpperCase()}
                  </span>
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col gap-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3
                      className="text-foreground"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", fontWeight: 500, lineHeight: 1.4 }}
                    >
                      {item.title}
                    </h3>
                    <span
                      className="text-muted-foreground flex-shrink-0"
                      style={{ fontSize: "0.7rem", fontFamily: "'DM Mono', monospace" }}
                    >
                      {item.year}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 border border-border text-muted-foreground"
                        style={{ fontSize: "0.65rem", fontFamily: "'DM Mono', monospace", letterSpacing: "0.06em" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Detail modal with carousel */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.28 }}
              className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-card border border-border"
              style={{ maxHeight: "92vh", overflowY: "auto", margin: "0 1rem" }}
            >
              {/* Carousel header */}
              <div className="relative">
                <ImageCarousel images={selected.images} title={selected.title} />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 left-3 w-8 h-8 bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:text-primary transition-colors"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Text content */}
              <div className="p-8 flex flex-col gap-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <span
                    className="text-primary"
                    style={{ fontSize: "0.7rem", fontFamily: "'DM Mono', monospace", letterSpacing: "0.12em" }}
                  >
                    {selected.category.toUpperCase()}
                  </span>
                  <span className="text-border">·</span>
                  <span
                    className="text-muted-foreground"
                    style={{ fontSize: "0.7rem", fontFamily: "'DM Mono', monospace" }}
                  >
                    {selected.year}
                  </span>
                  <span className="text-border">·</span>
                  <span
                    className="text-muted-foreground"
                    style={{ fontSize: "0.7rem", fontFamily: "'DM Mono', monospace" }}
                  >
                    {selected.images.length} documentation photo{selected.images.length !== 1 ? "s" : ""}
                  </span>
                </div>
                <h3
                  className="text-foreground"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 600, lineHeight: 1.3 }}
                >
                  {selected.title}
                </h3>
                <p
                  className="text-muted-foreground"
                  style={{ fontSize: "0.95rem", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.8, fontWeight: 300 }}
                >
                  {selected.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 border border-primary/40 text-primary"
                      style={{ fontSize: "0.7rem", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
