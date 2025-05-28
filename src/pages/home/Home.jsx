import './Home.css'
import Profile from "../../assets/Profile.png"
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const projectsContainer = useRef(null);
    const homeContainer = useRef(null);
    let navigate = useNavigate();
    const [MousePosition, setMousePosition] = useState({
        left: 0,
        top: 0
    })

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // you can find out easily if target is intersecting by inspecting `isIntersecting` property
                if (entry.isIntersecting) {
                    console.log(entry.target.id);
                    navigate("/#" + entry.target.id);
                }
            });
        }, { threshold: 0.5 });
        observer.observe(projectsContainer.current);
        observer.observe(homeContainer.current);
    }, [navigate, projectsContainer]);

    function handleMouseMove(ev) {
        setMousePosition({ left: ev.pageX, top: ev.pageY });
    }

    return (
        <>
            <section ref={homeContainer} id="top" className='section--presentation' onMouseMove={handleMouseMove}>
                <div className='cursor'
                    style={{ left: MousePosition.left, top: MousePosition.top }} />
                <article className='section__article--presentation'>
                    <img src={Profile} />
                    <h1>Kai Jauregi</h1>
                    <h2>Gameplay & Tools Programmer</h2>
                    <h2>Full stack Developer</h2>

                </article>
            </section>
            <section ref={projectsContainer} id="projects" className='section--projects'>
                <p>Juan Ramon</p>
            </section>
        </>

    );
}

export default Home; 