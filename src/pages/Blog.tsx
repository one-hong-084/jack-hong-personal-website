import { useMemo } from 'react'
import Section from '../components/Section'

export default function Blog() {
    const posts = useMemo(() => [
        { title: '从零开始：我的个人站搭建记录', href: '#' },
        { title: '让阅读流动起来：动效与排版的节奏', href: '#' },
        { title: '把学习路线做成 Roadmap（含模板）', href: '#' },
    ], [])

    return (
        <Section id="blog" title="Blog">
            <div className="grid">
                {posts.map(p => (
                    <a key={p.title} href={p.href} className="post">
                        <h3 className="post__title">{p.title}</h3>
                    </a>
                ))}
            </div>
        </Section>
    )
}
