export default function SkillChip({
    name,
    level, // 0-100，若不传则只展示标签
}: {
    name: string
    level?: number
}) {
    return (
        <div className="chip" style={{ display: 'inline-flex', gap: 8, alignItems: 'center' }}>
            <span>{name}</span>
            {typeof level === 'number' && (
                <span
                    aria-label={`${name} 掌握度 ${level}%`}
                    title={`${level}%`}
                    style={{
                        width: 72,
                        height: 6,
                        background: '#e5e7eb',
                        borderRadius: 999,
                        overflow: 'hidden',
                        display: 'inline-block',
                    }}
                >
                    <span
                        style={{
                            display: 'block',
                            height: '100%',
                            width: `${Math.max(0, Math.min(100, level))}%`,
                            background: '#111827',
                        }}
                    />
                </span>
            )}
        </div>
    )
}
