import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css" // 👈 This brings your Tailwind CSS back!

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TEMPLATE AI SaaS Platform",
  description: "The ultimate AI SaaS boilerplate.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // We add className="dark" so your premium dark mode works everywhere
    <html lang="en" className="dark"> 
      <body className={`${inter.className} bg-background text-foreground antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  )
}