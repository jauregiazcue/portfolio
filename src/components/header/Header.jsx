
import Nav from "../nav/Nav.jsx"
import './Header.css'

function Header({ route }) {
    return (
        <header className="header">
            
            <Nav vertical={false} myItem={[
                { text: "Home", myClass: (route === "home" ? "active" : ""), newRoute: "" },
                { text: "Projects", myClass: (route === "services" ? "active" : ""), newRoute: "/es/servicio" },
                { text: "Contact", myClass: (route === "city" ? "active" : ""), newRoute: "/es/ciudad" } ]}
            />
        </header>
    );
}

export default Header; 