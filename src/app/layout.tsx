import FloatingMenu from '@/components/custom/floating-menu'
import Header from '@/components/custom/header'
import { Toaster } from '@/components/ui/sonner'
import { CommandProvider } from '@/contexts/command/CommandContext'
import type { Metadata } from 'next'
import { Suspense } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prato Fácil',
  description: 'Seu cardápio online'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header logo="/logo.png" />
        <main className="pb-24">
          <CommandProvider>
            <Suspense>{children}</Suspense>
          </CommandProvider>
        </main>
        <FloatingMenu />
        <Toaster />
      </body>
    </html>
  )
}
