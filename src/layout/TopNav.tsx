import { Link, NavLink } from 'react-router-dom'

export default function TopNav() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="font-semibold tracking-tight">BlinkSites</Link>
        <nav className="flex gap-4 text-sm">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'underline' : ''}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'underline' : ''}>About</NavLink>
        </nav>
      </div>
    </header>
  )
}


