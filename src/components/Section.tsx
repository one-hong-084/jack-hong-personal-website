export default function Section({ id, title, children }: {
    id?: string; title: string; children: React.ReactNode
}) {
    return (
        <section id={id} className="section">
            <div className="section__header">
                <div className="section__dot" />
                <h2 className="section__title">{title}</h2>
            </div>
            {children}
        </section>
    )
}
