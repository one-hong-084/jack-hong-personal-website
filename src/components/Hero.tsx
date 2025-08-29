import { Link } from 'react-router-dom'

type Action =
    | { label: string; to: string; variant?: 'primary' | 'ghost' }   // 内部路由
    | { label: string; href: string; variant?: 'primary' | 'ghost' } // 外部链接

function renderAction(a: Action) {
    const className =
        'btn ' + (a.variant === 'ghost' ? 'btn--ghost' : 'btn--primary')
    if ('to' in a) return <Link className={className} to={a.to}>{a.label}</Link>
    return <a className={className} href={a.href} target="_blank" rel="noreferrer">{a.label}</a>
}

export default function Hero({
    title,
    subtitle,
    actions = [],
}: {
    title: React.ReactNode
    subtitle?: React.ReactNode
    actions?: Action[]
}) {
    return (
        <section className="hero">
            <h1>{title}</h1>
            {subtitle ? <p>{subtitle}</p> : null}
            {actions.length > 0 && (
                <div className="hero__actions">
                    {actions.map((a, i) => (
                        <span key={i} style={{ display: 'inline-flex' }}>
                            {renderAction(a)}
                        </span>
                    ))}
                </div>
            )}
        </section>
    )
}
