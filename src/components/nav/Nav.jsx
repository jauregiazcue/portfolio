import { NavLink } from 'react-router-dom';
import Button from '../button/Button.jsx';

import './Nav.css'
function NavBar({classNames= "button",myItem, vertical = false }) {
    return (
        <nav className= {vertical ? "nav--vertical" : "nav"}>
            <ul>

                {myItem.map(item => (
                    
                    <li
                        key={item.text}
                    >
                        <NavLink 
                            to={item.newRoute}
                            target={item.target ? item.target : ""}
                            className={({ isActive }) => {
                                let classNames = isActive ? 'link active' : 'link';
                                classNames += vertical ? "" : " nav__a";
                                return classNames;
                            }}
                        >
                            <Button classNames={classNames}>{item.text}</Button>
                        </NavLink>

                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavBar; 