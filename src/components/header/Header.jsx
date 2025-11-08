
import Nav from "../nav/Nav.jsx"
import { useMediaQuery } from 'react-responsive'
import './Header.css'


function Header() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
    return !isTabletOrMobile ?
        <header className="header">

            <Nav vertical={false} myItem={[
                { text: "Home", myClass: "", newRoute: "/#top" },
                { text: "Projects", myClass: "", newRoute: "/#projects" },
                { text: "Experience", myClass: "", newRoute: "/#experience" },
                { text: "Contact", myClass: "", newRoute: "/#contact" }]}
            />
        </header>
        :

        <header className="header">
            <Nav vertical={false} myItem={[
                { text: "", myClass: "fa-solid fa-house", newRoute: "/#top" },
                { text: "", myClass: "fa-solid fa-file", newRoute: "/#projects" },
                { text: "", myClass: "fa-solid fa-handshake", newRoute: "/#experience" },
                { text: "", myClass: "fa-solid fa-address-book", newRoute: "/#contact" }]}
            />
        </header>;
}
export default Header; 