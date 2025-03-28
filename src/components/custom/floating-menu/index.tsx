'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const FloatingMenu = () => {
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const menuItems = [
    { name: 'Cardápio', path: '/' },
    { name: 'Comanda', path: '/comanda' },
    { name: 'Conta', path: '/conta' },
  ];

  if (!isClient) {
    return null;
  }

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex bg-white rounded-3xl shadow-lg p-3 z-50
                   max-[425px]:scale-[0.95] max-[425px]:p-2.5 max-[425px]:bottom-7">
      {menuItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={`px-6 py-3 mx-1 rounded-2xl cursor-pointer font-medium transition-all duration-300
                     max-[425px]:px-5 max-[425px]:py-2.5 max-[425px]:text-[0.9375rem]
                     ${pathname === item.path
                        ? 'bg-red-400 text-white'
                        : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                     }`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default FloatingMenu;