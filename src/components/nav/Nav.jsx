import { HashLink } from 'react-router-hash-link';
import { useLocation } from "react-router-dom";

import './Nav.css'
function NavBar({ myItem }) {
    let location = useLocation();

    function MyLink({ item, children }) {

        let isActive = (location.pathname + location.hash) === item.newRoute;
        return (
            <HashLink
                className={isActive ? 'nav__a nav__a--active' : 'nav__a'}
                smooth
                to={item.newRoute}
                target={item.target ? item.target : ""}
            >
                {children}
            </HashLink>
        );
    }
    return (
        <nav className="nav">
            <ul>

                {myItem.map(item => (

                    <li key={item.text} >
                        <MyLink item={item}>
                            {item.text}
                        </MyLink>

                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavBar; 