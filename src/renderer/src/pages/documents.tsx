import { Link } from 'react-router-dom'

export function Document() {
  return (
    <main className="flex-1 flex items-center justify-center text-notes-400">
      Document
      <Link to="/">Acessar documentos</Link>
    </main>
  )
}
