import { NavLink } from 'react-router-dom';

import './Nav.css'
function NavBar({myItem}) {
    return (
        <nav className=  "nav">
            <ul>

                {myItem.map(item => (
                    
                    <li
                        key={item.text}
                    >
                        <NavLink 
                            to={item.newRoute}
                            target={item.target ? item.target : ""}
                            className={({ isActive }) => {
                                let classNames = isActive ? 'nav__a nav__a--active' : 'nav__a';
                                return classNames;
                            }}
                        >
                            {item.text}
                        </NavLink>

                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavBar; 