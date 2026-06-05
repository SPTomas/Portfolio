import { ExternalLink } from "lucide-react"

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

const projects = [
  {
    title: "Sistema de Cuidado de Mascotas",
    description:
      "Proyecto final de carrera desarrollado con metodología Scrum. Sistema completo para gestión de cuidado de mascotas con calendario interactivo, mapas y notificaciones.",
    tags: ["React", "Node.js", "PostgreSQL", "Prisma ORM", "FullCalendar", "Leaflet", "NodeMailer"],
    context: "UTN FRC | Proyecto Final (Analista)",
    github: "https://github.com/tu-usuario/sistema-cuidado-mascotas",
    live: "https://www.linkedin.com/posts/tomas-ticiano-suarez-paez-22b5582b7_utnfrc-sistemas-fullstack-ugcPost-7435140018190331905-Qw6u/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEwT-EMBVpaVUtgL1RRuTZLmUJHZ-tf8R0I",
    features: [
      "Frontend con React y calendario interactivo (FullCalendar)",
      "Integración de mapas con Leaflet",
      "Backend con Node.js y Prisma ORM",
      "Base de datos PostgreSQL en Neon + Supabase",
      "Sistema de notificaciones por correo",
      "Documentación técnica completa",
    ],
  },
  {
    title: "Estudio Iriarte",
    description:
      "Landing page profesional para estudio de servicios, desarrollada con tecnologías modernas y enfoque en rendimiento y experiencia de usuario.",
    tags: ["Astro", "React", "Tailwind CSS", "Formspree"],
    context: "Proyecto Freelance",
    github: "https://github.com/SPTomas/landing-page-fausto",
    live: "https://estudioiriarte.vercel.app/",
    features: [
      "Sitio estático de alto rendimiento con Astro",
      "Componentes interactivos con React",
      "Diseño responsivo con Tailwind CSS",
      "Formulario de contacto con Formspree",
    ],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-foreground mb-2">Proyectos</h2>
        <p className="text-muted-foreground mb-12">
          Trabajos destacados que demuestran mis habilidades técnicas
        </p>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-mono text-primary mb-2 block">
                    {project.context}
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Ver código en GitHub"
                  >
                    <GithubIcon size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Ver proyecto"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">{project.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-foreground mb-3">
                  Características principales:
                </h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {project.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
