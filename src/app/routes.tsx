import Home from '../pages/Home'
import About from '../pages/About'
import Skills from '../pages/Skills'
import Projects from '../pages/Projects'
import Timeline from '../pages/Timeline'
import Gallery from '../pages/Gallery'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import Lab from '../pages/Lab'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/skills', component: Skills },
    { path: '/projects', component: Projects },
    { path: '/timeline', component: Timeline },
    { path: '/gallery', component: Gallery },
    { path: '/blog', component: Blog },
    { path: '/contact', component: Contact },
    { path: '/lab', component: Lab },
] as const

export default routes
