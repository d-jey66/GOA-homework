import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import { ReactNode } from "react"

export const metadata = {
  title: "GOA | Goal-Oriented Academy",
  description: "Best programming academy in Georgia",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-gradient-to-b from-slate-900 via-black to-gray-900 text-white min-h-screen flex items-center justify-center">
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
