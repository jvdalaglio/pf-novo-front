import FloatingMenu from '@/components/custom/floating-menu'
import Header from '@/components/custom/header'
import { Toaster } from '@/components/ui/sonner'
import { CommandProvider } from '@/contexts/command/CommandContext'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header logo="/logo.png" />
        <main className="pb-24">
          <CommandProvider>
            {' '}
            {/* Adicione esta div wrapper */}
            {children}
          </CommandProvider>
        </main>
        <FloatingMenu />
        <Toaster />
      </body>
    </html>
  )
}
