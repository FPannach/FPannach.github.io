import { ThemeToggle } from "./theme-toggle"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center mb-4">
            <div className="flex-1"></div>
            <p className="text-muted-foreground">© {currentYear} Dr. Franziska Pannach. All rights reserved.</p>
            <div className="flex-1 flex justify-end">
              <ThemeToggle />
            </div>
          </div>
          <p className="text-sm text-muted-foreground/80">
            Research Professor in Digital Humanities • Rijksuniversiteit Groningen
          </p>
        </div>
      </div>
    </footer>
  )
}
