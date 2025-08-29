import { useMemo } from 'react'
import Section from '../components/Section'
import TimelineItem from '../components/TimelineItem'

export default function Timeline() {
    const timeline = useMemo(
        () => [
            { year: '2023', text: '开始探索 AI 在体育教育中的应用' },
            { year: '2024', text: '构建 AI 体育训考一体机原型' },
            { year: '2025', text: '开发个人前端学习站点，公开学习成果', future: false },
            // 未来规划占位（Roadmap 融合）
            { year: '2026', text: 'AI 助教 Copilot 规模化落地（规划）', future: true },
        ],
        []
    )

    return (
        <Section id="timeline" title="Timeline">
            <ul className="timeline">
                {timeline.map((e) => (
                    <TimelineItem key={e.year} year={e.year} text={e.text} future={Boolean((e as any).future)} />
                ))}
            </ul>
        </Section>
    )
}
