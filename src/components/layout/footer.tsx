import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
    product: [
        { title: "Features", href: "#" },
        { title: "Pricing", href: "#" },
        { title: "Documentation", href: "#" },
        { title: "API Reference", href: "#" },
    ],
    company: [
        { title: "About Us", href: "#" },
        { title: "Careers", href: "#" },
        { title: "Blog", href: "#" },
        { title: "Contact", href: "#" },
    ],
    legal: [
        { title: "Privacy Policy", href: "#" },
        { title: "Terms of Service", href: "#" },
        { title: "Cookie Policy", href: "#" },
    ],
}

export function Footer() {
    return (
        <footer className="w-full border-t bg-secondary/10 py-12 md:py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
                    {/* Branding Section */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                                <span className="text-primary-foreground font-bold text-xl">A</span>
                            </div>
                            <span className="font-bold text-xl uppercase tracking-tighter">AuthStarter</span>
                        </Link>
                        <p className="text-muted-foreground text-sm max-w-xs mb-6">
                            The ultimate authentication starter kit for Next.js.
                            Modern, secure, and ready for production.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Github className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div>
                        <h3 className="font-semibold text-sm mb-4 uppercase tracking-wider">Product</h3>
                        <ul className="space-y-2">
                            {footerLinks.product.map((link) => (
                                <li key={link.title}>
                                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-sm mb-4 uppercase tracking-wider">Company</h3>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.title}>
                                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-sm mb-4 uppercase tracking-wider">Legal</h3>
                        <ul className="space-y-2">
                            {footerLinks.legal.map((link) => (
                                <li key={link.title}>
                                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <Separator className="my-8 md:my-12 opacity-50" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>© {new Date().getFullYear()} AuthStarter. All rights reserved.</p>
                    <div className="flex items-center gap-2">
                        <Mail className="h-3 w-3" />
                        <span>hello@authstarter.dev</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
