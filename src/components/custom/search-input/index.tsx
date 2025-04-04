import { Input } from '@/components/ui/input'
import React from 'react'

export default function SearchInput({
  ...props
}: React.ComponentProps<'input'>) {
  return (
    <div className="flex w-full max-w-sm items-center border border-gray-300 rounded-lg px-2.5 py-1.5 gap-2">
      <SearchIcon className="h-4 w-4 mr-2.5" />
      <Input
        type={props.type ?? 'search'}
        placeholder={props.placeholder ?? 'Pesquisar'}
        className="w-full border-0"
      />
    </div>
  )
}

function SearchIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
