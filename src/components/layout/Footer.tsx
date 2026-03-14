import { Link } from "react-router-dom";

const footerLinks = {
  Platform: [
    { label: "Services", path: "/services" },
    { label: "Sectors", path: "/sectors" },
    { label: "Intelligence", path: "/insights" },
    { label: "Case Studies", path: "/case-studies" },
  ],
  Company: [
    { label: "About", path: "/about" },
    { label: "Partnerships", path: "/contact" },
    { label: "Careers", path: "/contact" },
    { label: "Contact", path: "/contact" },
  ],
  Resources: [
    { label: "Reports", path: "/insights" },
    { label: "Atlas Media", path: "/insights" },
    { label: "Community", path: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="atlas-container py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                <span className="font-display text-sm font-bold text-primary-foreground">A</span>
              </div>
              <span className="font-display text-lg font-semibold text-foreground">Atlas Agency</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Strategic intelligence infrastructure for civilisation-scale problems.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display text-sm font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Atlas Agency. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Privacy</span>
            <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Terms</span>
            <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
