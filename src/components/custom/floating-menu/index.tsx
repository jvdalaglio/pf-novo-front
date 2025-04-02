'use client'

import { motion } from 'framer-motion'
import { ClipboardList, DollarSign, SquareMenu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const FloatingMenu = () => {
  const [isClient, setIsClient] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsClient(true)
  }, [])

  const menuItems = [
    { name: 'Cardápio', path: '/', icon: <SquareMenu /> },
    { name: 'Comanda', path: '/comanda', icon: <ClipboardList /> },
    { name: 'Conta', path: '/conta', icon: <DollarSign /> }
  ]

  if (!isClient) {
    return null
  }

  return (
    <div
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex bg-white rounded-3xl shadow-lg p-3 z-50
                   max-[425px]:scale-95 max-[425px]:p-2 max-[425px]:bottom-4"
    >
      {menuItems.map(item => (
        <Link
          key={item.path}
          href={item.path}
          className={`relative px-6 py-3 mx-1 rounded-2xl cursor-pointer font-medium transition-all duration-300
                     max-[425px]:px-10 max-[425px]:py-3.5 max-[425px]:text-2xl max-[349px]:px-8 max-[300px]:px-6
                     ${
                       pathname === item.path
                         ? 'text-white'
                         : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                     }`}
        >
          {/* Efeito de fundo animado */}
          {pathname === item.path && (
            <motion.span
              layoutId="activeMenuItem"
              className="absolute inset-0 bg-red-400 rounded-2xl z-0"
              initial={false}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30
              }}
            />
          )}

          {/* Texto do item (sobreposto) */}
          <span className="relative z-10 min-[425px]:block max-[425px]:hidden">
            {item.name}
          </span>
          <span className="relative z-10 min-[425px]:hidden max-[425px]:block">
            {item.icon}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default FloatingMenu
