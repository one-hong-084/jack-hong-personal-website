import { useMemo } from 'react'
import Section from '../components/Section'
import { Card } from '../components/Card'

export default function Projects() {
    const projects = useMemo(() => [
        { title: 'AI 体育训考一体机前端', desc: '用于中小学体育教学与测试的界面与可视化工具。', href: '#' },
        { title: '时间序列分类可视化', desc: '展示神经网络在动作识别中的过程与结果。', href: '#' },
        { title: '交互式个人站实验', desc: '探索动画、滚动节奏与交互边界。', href: '#' },
    ], [])

    return (
        <Section id="projects" title="Projects">
            <div className="grid">
                {projects.map(p => (
                    <Card key={p.title}>
                        <h3 className="card__title">{p.title}</h3>
                        <p className="card__desc">{p.desc}</p>
                        <a className="card__link" href={p.href}>Learn More →</a>
                    </Card>
                ))}
            </div>
        </Section>
    )
}
