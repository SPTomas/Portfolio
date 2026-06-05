export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Portfolio. Desarrollado con Next.js y Tailwind CSS.
          </p>
          <p className="text-sm text-muted-foreground">
            Suarez Paez, Tomas Ticiano
          </p>
        </div>
      </div>
    </footer>
  )
}
