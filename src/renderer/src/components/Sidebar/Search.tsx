import { MagnifyingGlass } from 'phosphor-react'

export function Search() {
  return (
    <button className="flex mx-5 items-center gap-2 text-notes-100 text-sm hover:text-notes-50">
      <MagnifyingGlass className="w-5 h-5" />
      Busca rápida
    </button>
  )
}
