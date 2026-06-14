import { motion } from "motion/react";

const experiences = [
  {
    role: "Open Journal Systems (OJS) Administrator Intern",
    organization: "Informatio Journal Padjadjaran University",
    location: "Sumedang, West Java",
    period: "Jul 2022 — Oct 2022",
     description:
      "As an OJS Administrator Intern, I was responsible for supporting the technical and administrative operations of an academic journal platform. My work focused on user management, metadata maintenance, and ensuring efficient editorial workflows to support scholarly communication and publication activities..",
    highlights: [
      "Managed user accounts and resolved access-related issues to ensure uninterrupted platform functionality",
      "Successfully registered and configured accounts for 18 interns within a single day accelerating the onboarding process",
      "Maintained and updated journal metadata to improve database accuracy, discoverability, and search performance",
      "Supported editors and users in navigating the Open Journal Systems platform effectively",
    ],
  },
  {
    role: "Library Assistant Intern",
    organization: "Kandaga Unpad (Central Library, Padjadjaran University)",
    location: "Sumedang, West Java",
    period: "Jan 2024 — Feb 2024",
    description:
      "During my internship at the Central Library of Padjadjaran University, I contributed to library operations, metadata management, collection organization, and information literacy initiatives. I played a key role in maintaining operational continuity during system disruptions while supporting the library's commitment to delivering reliable information services to academic users.",
    highlights: [
      "Developed a temporary metadata management workflow using Google Sheets to maintain processing activities for over 50 specialized academic collections during system downtime",
      "Preserved 100% data integrity and ensured seamless migration back to the library management system once services were restored",
      "Conducted a rapid inventory audit of reference collections and synchronized digital gallery databases within five business days",
      "Produced information literacy materials and curated bibliographies to support students in developing independent research and information-seeking skills",
    ],
  },
  {
    role: "Journal Management Intern",
    organization: "LLDIKTI Region III Jakarta",
    location: "East Jakarta",
    period: "Sep 2024 — Des 2024",
    description:
      "As a Journal Management Intern under the MSIB Program, I supported the administration of scholarly publications, research documentation, and institutional knowledge management initiatives within one of Indonesia's higher education service institutions. My role involved ensuring the continuity of publication workflows, managing large-scale research archives, coordinating academic programs, and facilitating communication among universities, government agencies, and external stakeholders.",
    highlights: [
      "Ensured editorial workflow continuity during a nationwide Open Journal Systems (OJS) outage by conducting manual quality screenings and compliance checks for incoming journal submissions",
      "Managed and organized hundreds of research and community service contracts, maintaining data integrity and improving retrieval efficiency for institutional reporting purposes",
      "Coordinated the publication process of a four-chapter technical book within a one-month deadline, ensuring compliance with official publication standards",
      "Supported the implementation of the Smart Village program through documentation management, stakeholder coordination, and official correspondence handling",
      "Assisted in organizing academic literacy webinars on scholarly article writing for more than 100 lecturers across LLDIKTI Region III",
      "Coordinated podcast and webinar activities with external partners to ensure smooth event execution and resource fulfillment",
    ],
  },
   {
    role: "Personal Research Assistant to Senior Lecturer",
    organization: "Padjadjaran University",
    location: "Sumedang, West Java",
    period: "Mar 2026 — Now",
    description:
      "Provided direct, high-level research and administrative support to a Senior Lecturer, managing private research data workflows and departmental project logistics.",
    highlights: [
      "Served as the primary Data Steward for the lecturer's independent research projects, responsible for collecting, cleaning, and structuring raw datasets",
      "Maintained advanced spreadsheets and developed data visualizations using R Studio to support the lecturer's academic presentations and analysis",
      "Conducted comprehensive literature reviews, citation auditing, and manuscript formatting to align draft papers with institutional standards",
      "Managed the lecturer's academic scheduling, digital correspondence, and research documentation with strict confidentiality and organization",
    ],
  },
];

const education = [
  {
    degree:
      "S1 — Library and Information Science (Perpustakaan dan Sains Informasi)",
    institution: "Padjadjaran University",
    location: "Sumedang",
    year: "2026",
    gpa: "3.74",
  },
  {
    degree:
      "Publication ISSN",
    institution: "Kebijakan/Regulasi yang Dilakukan oleh Petugas Museum Geologi Bandung",
    location: "Published in Buletin Perpustakaan Journal UII, Vol. 6 No. 1",
    year: "2023",
    gpa: "",
  },
  {
    degree:
      "Publication Scopus Q3",
    institution: "A systematic review of the application of augmented reality (AR) technology for the visualization and management of digital assets in libraries",
    location: "Published in Record and Library Journal (RLJ) Vol.11 No.2",
    year: "2025",
    gpa: "",
  },
  {
    degree:
      "Undergraduate Thesis",
    institution: "Augmented Reality Publication Trends in Libraries (A Bibliometric Study of Scopus-Indexed Publications 2014-2024)",
    location: "Padjadjaran University",
    year: "2026",
    gpa: "",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 border-b border-border pb-6"
        >
          <p
            className="text-primary mb-2"
            style={{
              fontSize: "0.7rem",
              fontFamily: "'DM Mono', monospace",
              letterSpacing: "0.15em",
            }}
          >
            03 — EXPERIENCE
          </p>
          <h2
            className="text-foreground"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 600,
            }}
          >
            Career History
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2 flex flex-col gap-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Vertical line */}
                {i < experiences.length - 1 && (
                  <div className="absolute left-[7px] top-6 bottom-0 w-px bg-border" />
                )}
                {/* Dot */}
                <div
                  className="absolute left-0 top-1.5 w-3.5 h-3.5 border-2 border-primary bg-background"
                  style={{ borderRadius: "50%" }}
                />

                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <span
                    className="text-muted-foreground"
                    style={{
                      fontSize: "0.7rem",
                      fontFamily: "'DM Mono', monospace",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {exp.period}
                  </span>
                  <span
                    className="px-2 py-0.5 border border-border text-muted-foreground"
                    style={{
                      fontSize: "0.65rem",
                      fontFamily: "'DM Mono', monospace",
                    }}
                  >
                    {exp.location}
                  </span>
                </div>

                <h3
                  className="text-foreground mb-0.5"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                  }}
                >
                  {exp.role}
                </h3>
                <p
                  className="text-primary mb-3"
                  style={{
                    fontSize: "0.85rem",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  {exp.organization}
                </p>
                <p
                  className="text-muted-foreground mb-4 text-justify"
                  style={{
                    fontSize: "0.9rem",
                    fontFamily: "'DM Sans', sans-serif",
                    lineHeight: 1.7,
                    fontWeight: 300,
                  }}
                >
                  {exp.description}
                </p>
                <ul className="flex flex-col gap-2">
                  {exp.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-muted-foreground"
                      style={{
                        fontSize: "0.83rem",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      <span className="text-primary mt-1.5 flex-shrink-0">
                        —
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Education sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <p
              className="text-muted-foreground mb-2"
              style={{
                fontSize: "0.7rem",
                fontFamily: "'DM Mono', monospace",
                letterSpacing: "0.12em",
              }}
            >
              EDUCATION
            </p>
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="bg-card border border-border p-5 flex flex-col gap-2 hover:border-primary/30 transition-colors duration-300"
              >
                <p
                  className="text-foreground"
                  style={{
                    fontSize: "0.875rem",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                    lineHeight: 1.4,
                  }}
                >
                  {edu.degree}
                </p>
                <p
                  className="text-primary"
                  style={{
                    fontSize: "0.8rem",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {edu.institution}
                </p>
                <div className="flex items-center gap-3">
                  <span
                    className="text-muted-foreground"
                    style={{
                      fontSize: "0.7rem",
                      fontFamily: "'DM Mono', monospace",
                    }}
                  >
                    {edu.location} · {edu.year}
                  </span>
                  {edu.gpa && (
                    <span
                      className="px-2 py-0.5 border border-primary/30 text-primary"
                      style={{
                        fontSize: "0.65rem",
                        fontFamily: "'DM Mono', monospace",
                      }}
                    >
                      GPA {edu.gpa}
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Languages */}
            <div className="mt-6">
              <p
                className="text-muted-foreground mb-4"
                style={{
                  fontSize: "0.7rem",
                  fontFamily: "'DM Mono', monospace",
                  letterSpacing: "0.12em",
                }}
              >
                LANGUAGES
              </p>
              {[
                {
                  lang: "Bahasa Indonesia",
                  level: "Native",
                  pct: 100,
                },
                {
                  lang: "English",
                  level: "Professional",
                  pct: 80,
                },
              ].map((l) => (
                <div key={l.lang} className="mb-4">
                  <div className="flex justify-between mb-1.5">
                    <span
                      style={{
                        fontSize: "0.85rem",
                        fontFamily: "'DM Sans', sans-serif",
                        color: "var(--foreground)",
                      }}
                    >
                      {l.lang}
                    </span>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontFamily: "'DM Mono', monospace",
                        color: "var(--muted-foreground)",
                      }}
                    >
                      {l.level}
                    </span>
                  </div>
                  <div className="h-px w-full bg-border overflow-hidden">
                    <div
                      className="h-px bg-primary"
                      style={{ width: `${l.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}