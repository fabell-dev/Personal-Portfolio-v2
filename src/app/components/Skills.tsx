import { motion } from "motion/react";
import { Palette, Cpu, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Palette,
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "Tailwind CSS", level: 88 },
    ],
  },
  {
    title: "Backend",
    icon: Cpu,
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "Python / Django", level: 75 },
      { name: "REST APIs", level: 92 },
      { name: "GraphQL", level: 70 },
      { name: "JWT / OAuth", level: 82 },
      { name: "WebSockets", level: 72 },
    ],
  },
  {
    title: "Bases de Datos",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 95 },
      { name: "Mongoose", level: 89 },
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 78 },
      { name: "Prisma ORM", level: 82 },
    ],
  },
  {
    title: "DevOps & Herramientas",
    icon: Wrench,
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "Docker", level: 75 },
      { name: "AWS (EC2, S3)", level: 68 },
      { name: "CI/CD Pipelines", level: 70 },
      { name: "Linux / Bash", level: 80 },
      { name: "Nginx", level: 65 },
    ],
  },
];

const techBadges = [
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS",
  "Git",
  "GraphQL",
  "Tailwind CSS",
  "Prisma",
  "REST API",
  "WebSockets",
  "Linux",
];

function SkillBar({
  name,
  level,
  delay,
}: {
  name: string;
  level: number;
  delay: number;
}) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span style={{ color: "#e2e8f0", fontSize: "0.875rem" }}>{name}</span>
        <span style={{ color: "#8b5cf6", fontSize: "0.8rem" }}>{level}%</span>
      </div>
      <div
        className="w-full h-1.5 rounded-full overflow-hidden"
        style={{ background: "rgba(139, 92, 246, 0.1)" }}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg, #8b5cf6, #06b6d4)" }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24" style={{ background: "#080d1a" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="text-sm uppercase tracking-widest"
            style={{ color: "#8b5cf6" }}
          >
            Mis Habilidades
          </span>
          <h2
            className="mt-2"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              color: "#f1f5f9",
            }}
          >
            Stack Tecnológico
          </h2>
          <div
            className="w-16 h-1 mx-auto mt-4 rounded-full"
            style={{ background: "linear-gradient(90deg, #8b5cf6, #06b6d4)" }}
          />
        </motion.div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {skillCategories.map(({ title, icon: Icon, skills }, catIdx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="rounded-2xl p-6 border"
              style={{
                background: "rgba(13, 20, 40, 0.8)",
                borderColor: "rgba(139, 92, 246, 0.15)",
              }}
            >
              <h3
                className="mb-6 flex items-center gap-2"
                style={{
                  color: "#e2e8f0",
                  fontWeight: 600,
                  fontSize: "1.05rem",
                }}
              >
                <Icon size={18} style={{ color: "#8b5cf6" }} />
                {title}
              </h3>
              {skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={catIdx * 0.1 + i * 0.05}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p
            style={{
              color: "#64748b",
              fontSize: "0.85rem",
              marginBottom: "1rem",
            }}
          >
            También trabajo con
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full border text-sm transition-all duration-200 hover:scale-105 cursor-default"
                style={{
                  color: "#a78bfa",
                  borderColor: "rgba(139, 92, 246, 0.25)",
                  background: "rgba(139, 92, 246, 0.05)",
                  fontSize: "0.8rem",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
