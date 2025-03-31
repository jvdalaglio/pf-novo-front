import Image from 'next/image'
import { JSX } from 'react'
import SearchInput from '../search-input'
import { headerStyle } from './style'

interface HeaderProps {
  logo: string
}

export default function Header({ logo }: HeaderProps): JSX.Element {
  const { container, logoStyle } = headerStyle
  return (
    <div className={container}>
      <SearchInput />
      <Image
        className={logoStyle}
        src={logo}
        alt="Logo"
        width={50}
        height={50}
      />
    </div>
  )
}
