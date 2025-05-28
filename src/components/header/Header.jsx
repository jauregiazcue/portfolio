
import Nav from "../nav/Nav.jsx"
import './Header.css'

function Header({ route }) {
    return (
        <header className="header">
            
            <Nav vertical={false} myItem={[
                { text: "Home", myClass: (route === "home" ? "active" : ""), newRoute: "/#top" },
                { text: "Projects", myClass: (route === "projects" ? "active" : ""), newRoute: "/#projects" },
                { text: "Contact", myClass: (route === "city" ? "active" : ""), newRoute: "/#contact" } ]}
            />
        </header>
    );
}

export default Header; 