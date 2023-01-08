import { Header } from '../../src/components/Header'
import { Sidebar } from '../../src/components/Sidebar'
import { Outlet } from 'react-router-dom'

export function Default() {
  return (
    <div className="h-screen w-screen bg-notes-900 text-notes-100 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col max-h-screen">
        <Header />

        <Outlet />
      </div>
    </div>
  )
}
