import { GraduationCap, Calendar } from "lucide-react"

const education = [
  {
    degree: "Ingeniería en Sistemas de Información",
    institution: "UTN – Facultad Regional Córdoba",
    period: "Marzo 2023 – En curso",
    status: "En curso",
    description: "Formación continua en ingeniería de software, desarrollo de sistemas y gestión de proyectos tecnológicos.",
  },
  {
    degree: "Analista Desarrollador Universitario en Sistemas de Información",
    institution: "UTN – Facultad Regional Córdoba",
    period: "Marzo 2023 – Marzo 2026",
    status: "Completado",
    description: "Título universitario con enfoque en análisis, diseño y desarrollo de sistemas de información. Proyecto final desarrollado con metodología Scrum y tecnologías modernas.",
  },
]

const certifications = [
  {
    name: "Inglés Nivel B2",
    issuer: "EF Standard English Test",
    description: "Certificación internacional de nivel intermedio-alto en inglés",
  },
]

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-foreground mb-2">Educación</h2>
        <p className="text-muted-foreground mb-12">Mi formación académica y certificaciones</p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap className="text-primary" size={24} />
              Formación Académica
            </h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <article
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h4 className="text-lg font-medium text-foreground">{item.degree}</h4>
                    <span
                      className={`text-xs font-mono px-2 py-1 rounded ${
                        item.status === "Completado"
                          ? "bg-primary/20 text-primary"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="text-primary font-medium text-sm mb-2">{item.institution}</p>
                  <p className="text-muted-foreground text-sm flex items-center gap-2 mb-3">
                    <Calendar size={14} />
                    {item.period}
                  </p>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="text-primary text-2xl">📜</span>
              Certificaciones
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <article
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
                >
                  <h4 className="text-lg font-medium text-foreground mb-1">{cert.name}</h4>
                  <p className="text-primary font-medium text-sm mb-3">{cert.issuer}</p>
                  <p className="text-muted-foreground text-sm">{cert.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
