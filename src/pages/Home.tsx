import Hero from '../components/Hero'
import Section from '../components/Section'
import { Card } from '../components/Card'

export default function Home() {
    return (
        <div>
            <Hero
                title={<>Hi, I&apos;m one先生</>}
                subtitle={
                    <>
                        A learner, builder, and educator exploring the intersection of <b>AI</b>, <b>Frontend</b>, and <b>Education</b>.
                    </>
                }
                actions={[
                    { label: '查看项目', to: '/projects', variant: 'primary' },
                    { label: '联系我', to: '/contact', variant: 'ghost' },
                ]}
            />

            <Section title="Quick Preview">
                <div className="grid">
                    <Card>AI 体育训考一体机前端</Card>
                    <Card>时间序列分类可视化</Card>
                    <Card>交互式个人站实验</Card>
                </div>
            </Section>
        </div>
    )
}
