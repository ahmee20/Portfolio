import React, { useMemo, useState } from "react";
import { ArrowUpRight, Check, Copy, Lock } from "lucide-react";
import { AboutContent } from "./AboutContent";
import {
  ALL_TAGS,
  CERTIFICATES,
  EDUCATION,
  EXPERIENCE,
  GROUPS,
  PROFILE,
  PROJECTS,
  QUOTE,
  RESUMES,
  SKILLS,
  STATS,
  TAG_LABELS,
} from "../data/portfolio";

const muted = { color: "var(--loft-muted)" };

function Header({ title, sub }) {
  return (
    <div className="pb-5">
      <h2 className="text-[22px] sm:text-[26px] font-semibold leading-tight">{title}</h2>
      {sub && (
        <p className="mt-2 text-[14px] sm:text-[15px]" style={muted}>
          {sub}
        </p>
      )}
      <div className="dashed-rule mt-5" />
    </div>
  );
}

function SectionLabel({ children }) {
  return <h3 className="text-[17px] sm:text-[19px] font-semibold">{children}</h3>;
}

function ExtLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className="link-px inline-flex items-center gap-1.5">
      {children}
      <ArrowUpRight size={11} aria-hidden="true" />
    </a>
  );
}

/* ---------------- PROJECTS ---------------- */
function ProjectCard({ project }) {
  return (
    <article className="card-px p-4 sm:p-5 flex flex-col" data-testid={`project-${project.id}`}>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.tags.map((t) => (
          <span key={t} className="chip" style={{ padding: "5px 7px", fontSize: 7 }}>
            {TAG_LABELS[t]}
          </span>
        ))}
        {project.confidential && (
          <span className="chip inline-flex items-center gap-1" style={{ padding: "5px 7px", fontSize: 7, background: "#e8e2d4" }}>
            <Lock size={9} aria-hidden="true" /> Confidential
          </span>
        )}
      </div>
      <h4 className="text-[16px] font-semibold leading-snug">{project.title}</h4>
      <p className="mt-3 text-[13px] leading-relaxed" style={muted}>
        {project.why}
      </p>
      <p className="mt-2 text-[13.5px] leading-relaxed">{project.what}</p>
      {project.impact && (
        <p className="mt-3 text-[13px] leading-relaxed border-l-2 pl-3" style={{ borderColor: "var(--loft-amber)" }}>
          {project.impact}
        </p>
      )}
      <div className="flex flex-wrap gap-1.5 mt-4">
        {project.tech.map((t) => (
          <span key={t} className="font-pixel text-[7px] px-2 py-1.5 border" style={{ borderColor: "var(--loft-line)" }}>
            {t}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 mt-auto pt-5">
        {project.repo && <ExtLink href={project.repo}>Repo</ExtLink>}
        {project.live && <ExtLink href={project.live}>{project.liveLabel || "Live"}</ExtLink>}
        {!project.repo && !project.live && (
          <span className="font-pixel text-[8px]" style={muted}>
            Source withheld
          </span>
        )}
      </div>
    </article>
  );
}

export function ProjectsContent() {
  const [active, setActive] = useState([]);
  const toggle = (tag) =>
    setActive((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  const filtered = useMemo(
    () => (active.length === 0 ? PROJECTS : PROJECTS.filter((p) => p.tags.some((t) => active.includes(t)))),
    [active],
  );

  return (
    <div>
      <Header
        title="Everything I have built."
        sub="Professional deployments, academic capstones, research and independent prototypes, grouped by discipline and filterable by type."
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-5">
        {STATS.map((s) => (
          <div key={s.label} className="border-2 p-3" style={{ borderColor: "var(--loft-ink)" }}>
            <p className="font-pixel text-[14px]">{s.value}</p>
            <p className="mt-2 text-[12px]" style={muted}>
              {s.label}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <p className="font-pixel text-[8px]" style={muted}>
          FILTER BY TYPE, MULTI-SELECT
        </p>
        <div className="flex flex-wrap gap-2 mt-3" role="group" aria-label="Filter projects">
          <button
            type="button"
            className="chip"
            aria-pressed={active.length === 0}
            onClick={() => setActive([])}
            data-testid="filter-all"
            style={active.length === 0 ? { background: "var(--loft-amber)" } : undefined}
          >
            All work
          </button>
          {ALL_TAGS.map((tag) => {
            const on = active.includes(tag);
            const count = PROJECTS.filter((p) => p.tags.includes(tag)).length;
            return (
              <button
                key={tag}
                type="button"
                className="chip"
                aria-pressed={on}
                onClick={() => toggle(tag)}
                data-testid={`filter-${tag}`}
                style={on ? { background: "var(--loft-amber)" } : undefined}
              >
                {TAG_LABELS[tag]} <span className="opacity-60 ml-1">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {GROUPS.map((group) => {
        const items = filtered.filter((p) => p.groups[0] === group.slug);
        if (items.length === 0) return null;
        return (
          <section key={group.slug} className="mt-8" id={`group-${group.slug}`}>
            <div className="dashed-rule" />
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 pt-6">
              <span className="font-pixel text-[9px]" style={{ color: "var(--loft-amber-2)" }}>
                {group.index}
              </span>
              <SectionLabel>{group.name}</SectionLabel>
              <span className="font-pixel text-[7px]" style={muted}>
                {group.count}
              </span>
            </div>
            <p className="mt-2 text-[14px]" style={muted}>
              {group.description}
            </p>
            <div className="grid gap-4 md:grid-cols-2 mt-5">
              {items.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

/* ---------------- EXPERIENCE ---------------- */
export function ExperienceContent() {
  return (
    <div>
      <Header title="Where the work happened." sub="Four desks, four chapters." />
      <div className="pt-2">
        {EXPERIENCE.map((job, i) => (
          <article key={job.company} className={`py-6 ${i > 0 ? "dashed-rule" : ""}`} data-testid={`job-${i}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <SectionLabel>{job.company}</SectionLabel>
              <span className="font-pixel text-[7px]" style={muted}>
                {job.period}
              </span>
            </div>
            <p className="font-pixel text-[8px] mt-2" style={{ color: "var(--loft-amber-2)" }}>
              {job.role}
            </p>
            <p className="mt-3 text-[14.5px] leading-relaxed">{job.summary}</p>
            <div className="grid gap-3 sm:grid-cols-3 mt-4">
              {job.impact.map((item) => (
                <p key={item} className="border-t-2 pt-3 text-[13px] leading-relaxed" style={{ borderColor: "var(--loft-line)", ...muted }}>
                  {item}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

/* ---------------- SKILLS ---------------- */
export function SkillsContent() {
  return (
    <div>
      <Header title="What's in the kit" sub="Grouped by what I use it for." />
      {SKILLS.map((block, i) => (
        <section key={block.area} className={`py-6 ${i > 0 ? "dashed-rule" : ""}`}>
          <div className="flex items-baseline justify-between">
            <SectionLabel>{block.area}</SectionLabel>
            <span className="font-pixel text-[8px]" style={muted}>
              {block.items.length}
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {block.items.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </section>
      ))}
      <div className="note-card p-5 mt-2">
        <p className="text-[15px] leading-relaxed font-medium">“{QUOTE}”</p>
        <p className="font-pixel text-[7px] mt-3">WORKING PRINCIPLE</p>
      </div>
    </div>
  );
}

/* ---------------- EDUCATION ---------------- */
export function EducationContent() {
  return (
    <div>
      <Header title="Formal grounding." sub="Where the fundamentals were built." />
      <div className="pt-5 grid gap-4">
        {EDUCATION.map((item) => (
          <div key={item.school} className="card-px p-6">
            <p className="font-pixel text-[8px]" style={muted}>
              {item.period}
            </p>
            <h3 className="text-[22px] font-semibold mt-3">{item.degree}</h3>
            <p className="mt-2 text-[15px]">{item.school}</p>
            <span className="chip inline-block mt-5" style={{ background: "var(--loft-amber)" }}>
              {item.note}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-6 dashed-rule pt-6">
        <SectionLabel>Focus areas during the degree</SectionLabel>
        <div className="flex flex-wrap gap-2 mt-4">
          {["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Operating Systems", "Data Warehousing", "Distributed Systems"].map((f) => (
            <span key={f} className="chip">
              {f}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- ACHIEVEMENTS ---------------- */
export function AchievementsContent() {
  return (
    <div>
      <Header
        title="Credentials and recognition."
        sub="Each entry links to the official issuer page for the award or certification."
      />
      <div className="pt-5 grid gap-4 sm:grid-cols-2">
        {CERTIFICATES.map((cert) => (
          <a
            key={cert.name}
            href={cert.href}
            target="_blank"
            rel="noreferrer noopener"
            className="card-px p-5 flex flex-col"
            data-testid={`cert-${cert.name.replace(/\W+/g, "-").toLowerCase()}`}
          >
            <span className="text-[16px] font-semibold leading-snug">{cert.name}</span>
            <span className="mt-2 text-[14px]" style={muted}>
              {cert.issuer}
            </span>
            <span className="link-px mt-auto pt-6 inline-flex items-center gap-1.5 self-start">
              {cert.hrefLabel} <ArrowUpRight size={11} aria-hidden="true" />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

/* ---------------- RESUME ---------------- */
export function ResumeContent() {
  return (
    <div>
      <Header title="Resumes, straight to PDF." sub="Two versions, depending on the role you have in mind." />
      <div className="pt-5 grid gap-4 sm:grid-cols-2">
        {RESUMES.map((doc) => (
          <a
            key={doc.title}
            href={doc.href}
            target="_blank"
            rel="noreferrer"
            className="card-px p-6 flex flex-col"
            data-testid={`resume-${doc.title.replace(/\W+/g, "-").toLowerCase()}`}
          >
            <span className="text-[19px] font-semibold">{doc.title}</span>
            <span className="mt-3 text-[14px] leading-relaxed" style={muted}>
              {doc.note}
            </span>
            <span className="link-px mt-auto pt-8 inline-flex items-center gap-1.5 self-start">
              Open PDF <ArrowUpRight size={11} aria-hidden="true" />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

/* ---------------- CONTACT ---------------- */
export function ContactContent() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };
  return (
    <div>
      <Header
        title="Tell me what should exist."
        sub="Best-fit work: an agent that needs to become reliable, a manual process that should run itself, or an ML system that has to make it to production."
      />
      <div className="pt-5 card-px p-6">
        <p className="font-pixel text-[8px]" style={muted}>
          EMAIL
        </p>
        <p className="mt-3 text-[17px] break-all font-medium" data-testid="contact-email">
          {PROFILE.email}
        </p>
        <div className="flex flex-wrap gap-3 mt-5">
          <a href={`mailto:${PROFILE.email}`} className="px-btn" data-testid="contact-compose">
            Compose
          </a>
          <button type="button" onClick={copy} className="px-btn inline-flex items-center gap-2" style={{ background: "#fbf9f4" }} data-testid="contact-copy">
            {copied ? <Check size={12} aria-hidden="true" /> : <Copy size={12} aria-hidden="true" />}
            {copied ? "Copied" : "Copy address"}
          </button>
        </div>
        <div className="dashed-rule mt-6 pt-5 space-y-3">
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-between text-[14px] hover:underline" data-testid="contact-linkedin">
            LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="flex items-center justify-between text-[14px] hover:underline" data-testid="contact-github">
            GitHub: ahmee20 <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
      <p className="mt-5 text-[13px]" style={muted}>
        {PROFILE.location}
      </p>
    </div>
  );
}

export const CONTENT = {
  about: AboutContent,
  projects: ProjectsContent,
  experience: ExperienceContent,
  skills: SkillsContent,
  education: EducationContent,
  achievements: AchievementsContent,
  resume: ResumeContent,
  contact: ContactContent,
};
