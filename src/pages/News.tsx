import { useMemo, useState } from 'react'
import Section from '../components/Section'
import SearchInput from '../components/SearchInput'
import Masonry from '../components/Masonry'
import MediaCard from '../components/MediaCard'

const NEWS = [
    { id: 'n1', title: '教育部发布新学期教学安排要点', source: '新华网教育', category: 'news' },
    { id: 'p1', title: '教育数字化行动最新通知', source: '教育部', category: 'policy' },
    { id: 'e1', title: '教育技术大会', source: '教技协', category: 'expo' },
]

export default function News() {
    const [kw, setKw] = useState('')
    const [cat, setCat] = useState<'all' | 'news' | 'policy' | 'expo'>('all')
    const list = useMemo(() => {
        let l = cat === 'all' ? NEWS : NEWS.filter(n => n.category === cat)
        if (kw) { const k = kw.toLowerCase(); l = l.filter(n => n.title.toLowerCase().includes(k)) }
        return l
    }, [kw, cat])
    return (
        <Section title="资讯中心（默认全部）">
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12, flexWrap: 'wrap' }}>
                {(['all', 'news', 'policy', 'expo'] as const).map(c => (
                    <button key={c} onClick={() => setCat(c)}>{c}</button>
                ))}
                <div style={{ flex: 1, minWidth: 220 }}><SearchInput value={kw} onChange={setKw} placeholder="关键字" /></div>
            </div>
            <Masonry>{list.map(n => (<MediaCard key={n.id} title={`${n.source} · ${n.title}`} />))}</Masonry>
        </Section>
    )
}
