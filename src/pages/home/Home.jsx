import './Home.css'
import Profile from "../../assets/Profile.png"
import { useState } from 'react';
function Home() {

    const [MousePosition, setMousePosition] = useState({
        left: 0,
        top: 0
    })

    function handleMouseMove(ev) { 
        setMousePosition({ left: ev.pageX, top: ev.pageY }); 
    }


    return (
        <>
            <section className='section--presentation' onMouseMove={handleMouseMove}>
                <div className='cursor' 
                    style={{ left: MousePosition.left, top: MousePosition.top }} />
                <article className='section__article--presentation'>
                    <img src={Profile} />
                    <h1>Kai Jauregi</h1>
                    <h2>Gameplay and Tools Programmer</h2>
                    <h2>Full stack Developer</h2>
                    
                </article>
            </section>
            <section className='section--projects'>

            </section>
        </>

    );
}

export default Home; 