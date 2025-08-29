import { useEffect, useRef } from 'react'

export default function Masonry({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const grid = ref.current!
        const cs = getComputedStyle(grid)
        const rowH = parseInt(cs.gridAutoRows || '6', 10)
        const gap = parseInt(cs.gap || '16', 10)
        const resize = () => {
            Array.from(grid.children).forEach((el: any) => {
                const h = el.getBoundingClientRect().height
                const span = Math.ceil((h + gap) / (rowH + gap))
                el.style.gridRowEnd = `span ${span}`
            })
        }
        const ro = new ResizeObserver(resize)
        ro.observe(grid); Array.from(grid.children).forEach(c => ro.observe(c))
        setTimeout(resize, 0)
        return () => ro.disconnect()
    }, [])
    return <div ref={ref} style={{ display: 'grid', gridAutoRows: '6px', gap: '16px', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))' }}>{children}</div>
}
