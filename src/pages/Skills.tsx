import { useMemo } from 'react'
import Section from '../components/Section'
import SkillChip from '../components/SkillChip'

export default function Skills() {
    const skills = useMemo(
        () => [
            { name: 'HTML', level: 80 },
            { name: 'CSS', level: 75 },
            { name: 'JavaScript', level: 70 },
            { name: 'TypeScript', level: 60 },
            { name: 'React', level: 65 },
            { name: '可访问性', level: 40 },
            { name: '响应式设计', level: 70 },
        ],
        []
    )

    return (
        <Section id="skills" title="Skills">
            <div className="chips" style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {skills.map((s) => (
                    <SkillChip key={s.name} name={s.name} level={s.level} />
                ))}
            </div>
        </Section>
    )
}
