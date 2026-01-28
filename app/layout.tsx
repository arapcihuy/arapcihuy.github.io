import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Rasyid Achmad - Frontend Developer",
  description: "Frontend Developer - UI/UX Designer. Passionate about creating beautiful and functional web experiences.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/logo.png?v=3" />
        <link rel="shortcut icon" type="image/png" href="/logo.png?v=3" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
