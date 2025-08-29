import { Routes, Route } from 'react-router-dom'
import routes from './routes'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import "../App.css";

export default function App() {
    return (
        <div className="site">
            <NavBar />
            <main>
                <Routes>
                    {routes.map(r => (
                        <Route key={r.path} path={r.path} element={<r.component />} />
                    ))}
                </Routes>
            </main>
            <Footer />
        </div>
    )
}
