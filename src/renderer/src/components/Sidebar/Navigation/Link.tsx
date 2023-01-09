import clsx from 'clsx'
import { DotsThree } from 'phosphor-react'
import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { isArgumentsObject } from 'util/types'

interface LinkProps {
  to: string
  children: ReactNode
}

export function Link({ children, to }: LinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return clsx(
          'flex items-center text-sm gap-2 text-notes-100 hover:text-notes-50 py-1 px-3 rounded group hover:bg-notes-700',
          {
            'bg-notes-700': isActive
          }
        )
      }}
    >
      <span className="truncate flex-1">{children}</span>

      <div className="flex items-center h-full group-hover:visible ml-auto text-notes-100">
        <button className="px-px rounded-sm hover:bg-notes-500">
          <DotsThree weight="bold" className="h-4 w-4" />
        </button>
      </div>
    </NavLink>
  )
}
