import './Home.css'
import Profile from "../../assets/Profile.jpg"
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Project from '../project/Project';

function Home() {
    const projectsContainer = useRef(null);
    const homeContainer = useRef(null);
    let navigate = useNavigate();
    const [MousePosition, setMousePosition] = useState({
        left: 0,
        top: 0
    })

    useEffect(() => {
        const handleResize = () => {
            setMousePosition({ left: window.innerWidth / 2, top: window.innerHeight / 2 });
        };

        window.addEventListener("resize", handleResize);


        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navigate("/#" + entry.target.id);
                }
            });
        }, { threshold: 0.5 });
        observer.observe(projectsContainer.current);
        observer.observe(homeContainer.current);
        setMousePosition({ left: window.innerWidth / 2, top: window.innerHeight / 2 });

        return () => {
            window.removeEventListener("resize", handleResize);
        };
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
                <Project />
            </section>
        </>

    );
}

export default Home; 