export default function Footer() {
    return (
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
    )
}
