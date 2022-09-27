
import "./styles.css"
import { Link } from "react-router-dom"

export default function Navbar(){
    return (
        <nav className="navbar">
            <div>
                <Link className="logo" href="/meu" >
                <h3> Fármacias Erechim</h3>
                </Link>
            </div>
            <div>
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/Linkbout">Sobre</Link>
            <Link className="nav-link" to="/contact">Contato</Link>
            <Link className="nav-link" to="/culture">Cultura</Link>
            </div>
        </nav>
    )
}