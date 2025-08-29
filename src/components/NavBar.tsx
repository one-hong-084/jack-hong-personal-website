import { NavLink } from 'react-router-dom'

export default function NavBar() {
    const links = [
        ['/', 'Home'],
        ['/about', 'About'],
        ['/skills', 'Skills'],
        ['/projects', 'Projects'],
        ['/timeline', 'Timeline'],
        ['/gallery', 'Gallery'],
        ['/blog', 'Blog'],
        ['/contact', 'Contact'],
        ['/lab', 'Lab'],
    ] as const

    return (
        <header className="nav">
            <div className="nav__brand">
                <NavLink to="/" style={{ textDecoration: 'none', fontWeight: 700 }}>
                    one先生 · Portfolio
                </NavLink>
            </div>
            <nav className="nav__links">
                {links.map(([to, label]) => (
                    <NavLink key={to} to={to} style={({ isActive }) => ({ opacity: isActive ? 1 : 0.75, textDecoration: 'none' })}>
                        {label}
                    </NavLink>
                ))}
            </nav>
        </header>
    )
}
