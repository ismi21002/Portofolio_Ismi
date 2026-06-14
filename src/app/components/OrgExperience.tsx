import { motion } from "motion/react";
import { Users } from "lucide-react";

const orgExperiences = [
  {
    role: "Head of Information & Communication Division",
    organization: "Himpunan Mahasiswa Ilmu Perpustakaan (HIMAPI) — Padjadjaran University",
    period: "Mar 2022 — Mar 2023",
    location: "Sumedang, West Java",
    description:
      "Led the Information & Communication Division within the Library Science student association. Managed internal communications, designed informational content, maintained the organization's social media presence, and coordinated inter-division knowledge-sharing sessions.",
    achievements: [
      "Grew the organization's Instagram account from 600 to 1,400+ followers through consistent, professional content strategy",
      "Produced 30+ informational posts and event recaps distributed to 400+ student members",
      "Coordinated communication between 5 divisions to ensure timely information flow during major annual events",
      "Designed the visual identity materials (banner, poster, digital assets) for the 2022 HIMAPI Study Tour",
    ],
  },
  {
    role: "Event Documentation Coordinator",
    organization: "Komunitas Mahasiswa Banyumas (KOMAS) — Padjadjaran University",
    period: "Aug 2021 — Aug 2022",
    location: "Sumedang, West Java",
    description:
      "Managed all documentation and administrative records for KOMAS events and activities. Responsible for meeting minutes, formal correspondence, archive organization, and end-of-period accountability reports submitted to the university's student affairs office.",
    achievements: [
      "Produced comprehensive activity reports for 12 organizational events submitted to university administration",
      "Maintained a structured digital archive of all organizational documents using Google Drive with standardized naming conventions",
      "Facilitated 3 inter-regional student coordination meetings between Banyumas student communities across different universities",
      "Compiled and edited a 40-page annual yearbook documenting KOMAS activities throughout the academic year",
    ],
  },
  {
    role: "Volunteer — Library Literacy Program",
    organization: "Relawan Literasi Perpustakaan Daerah Banyumas",
    period: "Jun 2020 — Dec 2020",
    location: "Banyumas, Central Java",
    description:
      "Participated as a volunteer in a regional public library literacy initiative aimed at increasing reading engagement among elementary and junior high school students. Activities included storytelling sessions, reading guides, and basic information literacy workshops.",
    achievements: [
      "Facilitated weekly reading sessions for 30–50 children aged 8–14 at the Banyumas Regional Public Library",
      "Developed 5 age-appropriate reading activity modules adopted by the library for ongoing use",
      "Supported the library's Summer Reading Challenge, resulting in a 25% increase in youth library card registrations",
      "Assisted in cataloging and shelving approximately 300 newly donated books to improve collection accessibility",
    ],
  },
  {
    role: "Staff — Academic & Research Affairs",
    organization: "Badan Eksekutif Mahasiswa (BEM) Fakultas Ilmu Komunikasi — Padjadjaran University",
    period: "Apr 2023 — Apr 2024",
    location: "Sumedang, West Java",
    description:
      "Served in the Academic & Research division of the Faculty of Communication Sciences' student executive body. Focused on supporting academic advocacy, facilitating research publication workshops, and maintaining documentation of faculty-level student activities.",
    achievements: [
      "Organized 2 academic writing workshops attended by 120+ students, with post-event satisfaction ratings above 90%",
      "Maintained an archive of student research proposals, journal submissions, and competition entries for faculty reporting",
      "Assisted in the publication of BEM's academic bulletin, coordinating submissions from 8 contributors across departments",
      "Represented student academic interests in 4 meetings with faculty academic committee, resulting in updated research mentorship guidelines",
    ],
  },
];

export function OrgExperience() {
  return (
    <section id="organization" className="py-28 bg-card">
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
            style={{ fontSize: "0.7rem", fontFamily: "'DM Mono', monospace", letterSpacing: "0.15em" }}
          >
            04 — ORGANIZATION
          </p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2
              className="text-foreground"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 600 }}
            >
              Organizational Experience
            </h2>
            <span
              className="text-muted-foreground"
              style={{ fontSize: "0.75rem", fontFamily: "'DM Mono', monospace" }}
            >
              {orgExperiences.length} ROLES
            </span>
          </div>
        </motion.div>

        {/* Cards grid — 2 columns on large screens */}
        <div className="grid lg:grid-cols-2 gap-6">
          {orgExperiences.map((org, i) => (
            <motion.div
              key={org.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background border border-border p-7 flex flex-col gap-5 hover:border-primary/30 transition-colors duration-300"
            >
              {/* Top row */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-border flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                  <Users size={17} />
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <h3
                    className="text-foreground"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.975rem", fontWeight: 600, lineHeight: 1.35 }}
                  >
                    {org.role}
                  </h3>
                  <p
                    className="text-primary"
                    style={{ fontSize: "0.82rem", fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
                  >
                    {org.organization}
                  </p>
                </div>
              </div>

              {/* Meta */}
              <div className="flex flex-wrap gap-2">
                <span
                  className="px-3 py-1 border border-border text-muted-foreground"
                  style={{ fontSize: "0.67rem", fontFamily: "'DM Mono', monospace", letterSpacing: "0.07em" }}
                >
                  {org.period}
                </span>
                <span
                  className="px-3 py-1 border border-border text-muted-foreground"
                  style={{ fontSize: "0.67rem", fontFamily: "'DM Mono', monospace" }}
                >
                  {org.location}
                </span>
              </div>

              {/* Description */}
              <p
                className="text-muted-foreground"
                style={{ fontSize: "0.875rem", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.75, fontWeight: 300 }}
              >
                {org.description}
              </p>

              {/* Divider */}
              <div className="border-t border-border" />

              {/* Achievements */}
              <div className="flex flex-col gap-2.5">
                <p
                  className="text-muted-foreground"
                  style={{ fontSize: "0.65rem", fontFamily: "'DM Mono', monospace", letterSpacing: "0.12em" }}
                >
                  KEY CONTRIBUTIONS
                </p>
                <ul className="flex flex-col gap-2">
                  {org.achievements.map((a) => (
                    <li
                      key={a}
                      className="flex items-start gap-2 text-muted-foreground"
                      style={{ fontSize: "0.845rem", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6 }}
                    >
                      <span className="text-primary mt-1.5 flex-shrink-0" style={{ fontSize: "0.6rem" }}>◆</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
