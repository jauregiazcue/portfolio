import { HashLink } from 'react-router-hash-link';
import { useLocation } from "react-router-dom";

import './Nav.css'
function NavBar({ myItem }) {
    let location = useLocation();
    let aux = 0;
    function MyLink({ item, children }) {

        let isActive = (location.pathname + location.hash) === item.newRoute;
        return (
            <HashLink
                className={isActive ? 'nav__a nav__a--active' + " " + item.myClass : 'nav__a' + " " + item.myClass}
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
            {console.log(myItem)}
            <ul>

                {myItem.map(item => (

                    <li key={item.text + aux++} >
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