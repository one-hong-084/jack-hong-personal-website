export default function MediaCard({ title, cover }: { title: string; cover?: string }) {
    return (
        <div className="masonry-item">
            <div className="masonry-item-content">
                <div style={{ aspectRatio: '16/9', overflow: 'hidden', borderRadius: 12, background: '#f7fafc' }}>
                    {cover ? <img src={cover} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : null}
                </div>
                <div style={{ marginTop: 8, fontWeight: 600 }}>{title}</div>
            </div>
        </div>
    )
}
