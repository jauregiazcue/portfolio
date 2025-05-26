
import Nav from "../nav/Nav.jsx"
import './Header.css'

function Header({ route }) {
    return (
        <header className="header">
            
            <Nav classNames="button" vertical={false} myItem={[
                { text: "Work", myClass: (route === "home" ? "active" : ""), newRoute: "" },
                { text: "Archive", myClass: (route === "services" ? "active" : ""), newRoute: "/es/servicio" },
                { text: "About", myClass: (route === "city" ? "active" : ""), newRoute: "/es/ciudad" } ]}
            />
        </header>
    );
}

export default Header; 