import { useMemo } from "react";
import "./App.css";

export default function App() {
  // 你的基本资料（先占位，后面你随时能改）
  const skills = useMemo(
    () => ["HTML", "CSS", "JavaScript", "TypeScript", "React", "可访问性", "响应式设计"],
    []
  );
  const projects = useMemo(
    () => [
      { title: "AI 体育训考一体机前端", desc: "用于中小学体育教学与测试的界面与可视化工具。", href: "#" },
      { title: "时间序列分类可视化", desc: "展示神经网络在动作识别中的过程与结果。", href: "#" },
      { title: "交互式个人站实验", desc: "探索动画、滚动节奏与交互边界。", href: "#" },
    ],
    []
  );
  const posts = useMemo(
    () => [
      { title: "从零开始：我的个人站搭建记录", href: "#" },
      { title: "让阅读流动起来：动效与排版的节奏", href: "#" },
      { title: "把学习路线做成 Roadmap（含模板）", href: "#" },
    ],
    []
  );
  const timeline = useMemo(
    () => [
      { year: "2023", text: "开始探索 AI 在体育教育中的应用" },
      { year: "2024", text: "构建 AI 体育训考一体机原型" },
      { year: "2025", text: "开发个人前端学习站点，公开学习成果" },
    ],
    []
  );

  return (
    <div className="site">
      {/* 顶部导航 */}
      <header className="nav">
        <div className="nav__brand">one先生 · Portfolio</div>
        <nav className="nav__links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#timeline">Timeline</a>
          <a href="#gallery">Gallery</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero">
        <h1>Hi, I&apos;m one先生</h1>
        <p>
          A learner, builder, and educator exploring the intersection of <b>AI</b>, <b>Frontend</b>, and <b>Education</b>.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#projects">查看项目</a>
          <a className="btn btn--ghost" href="#contact">联系我</a>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About">
        <p className="muted">
          我是一名致力于教育与前端结合的探索者。热爱通过视觉与交互技术让学习更有趣，
          也在构建 AI 驱动的体育训练与考试系统。这个站点既是个人展示，也是学习旅程的记录。
        </p>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <div className="chips">
          {skills.map((s) => (
            <span className="chip" key={s}>{s}</span>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="grid">
          {projects.map((p) => (
            <Card key={p.title}>
              <h3 className="card__title">{p.title}</h3>
              <p className="card__desc">{p.desc}</p>
              <a className="card__link" href={p.href}>Learn More →</a>
            </Card>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section id="timeline" title="Timeline">
        <ul className="timeline">
          {timeline.map((e) => (
            <li className="timeline__item" key={e.year}>
              <span className="timeline__year">{e.year}</span>
              <span className="timeline__text">{e.text}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Gallery */}
      <Section id="gallery" title="Gallery">
        <div className="grid">
          {[1, 2, 3].map((i) => (
            <div key={i} className="gallery__box">Image {i}</div>
          ))}
        </div>
      </Section>

      {/* Blog */}
      <Section id="blog" title="Blog">
        <div className="grid">
          {posts.map((p) => (
            <a key={p.title} href={p.href} className="post">
              <h3 className="post__title">{p.title}</h3>
            </a>
          ))}
        </div>
      </Section>

      {/* Footer / Contact */}
      <footer id="contact" className="footer">
        <div>
          <div className="footer__title">联系我！</div>
          <p className="muted">你可以通过以下方式找到我：</p>
          <div className="links">
            <a href="mailto:hello@example.com">hello@example.com</a>
            <a href="#">GitHub</a>
            <a href="#">更多链接</a>
          </div>
        </div>
        <div className="copyright">© {new Date().getFullYear()} one先生 · Build in public</div>
      </footer>
    </div>
  );
}

/** 复用组件：区块与卡片 */
function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="section">
      <div className="section__header">
        <div className="section__dot" />
        <h2 className="section__title">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return <div className="card">{children}</div>;
}
