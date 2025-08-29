export default function TimelineItem({
    year,
    text,
    future = false,
}: {
    year: string
    text: string
    future?: boolean
}) {
    // future=true 可用于 Roadmap（未来规划）占位，样式用透明度/虚线自区分
    return (
        <li
            className="timeline__item"
            style={future ? { opacity: 0.7, borderStyle: 'dashed' } : undefined}
        >
            <span className="timeline__year">{year}</span>
            <span className="timeline__text">{text}</span>
        </li>
    )
}
