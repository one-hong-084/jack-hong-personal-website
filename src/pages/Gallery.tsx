import Section from '../components/Section'

export default function Gallery() {
    return (
        <Section id="gallery" title="Gallery">
            <div className="grid">
                {[1, 2, 3].map(i => (
                    <div key={i} className="gallery__box">Image {i}</div>
                ))}
            </div>
        </Section>
    )
}
