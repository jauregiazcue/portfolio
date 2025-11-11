import './Home.css'
import Profile from "../../assets/Profile.jpg"
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Project from '../project/Project';

import Footer from "../../components/footer/Footer.jsx";
import Experience from '../../components/experience/Experience.jsx';

function Home() {
    const projectsContainer = useRef(null);
    const referenceContainer = useRef(null);
    const homeContainer = useRef(null);
    const footerContainer = useRef(null);
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
        observer.observe(referenceContainer.current);
        observer.observe(homeContainer.current);
        observer.observe(footerContainer.current);
        setMousePosition({ left: window.innerWidth / 2, top: window.innerHeight / 2 });

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [navigate, projectsContainer, homeContainer, referenceContainer, footerContainer]);

    function handleMouseMove(ev) {
        setMousePosition({ left: ev.pageX, top: ev.pageY });
    }

    return (
        <div className='aux'>
            <section ref={homeContainer} id="top" className='section--presentation' onMouseMove={handleMouseMove}>
                <div className='cursor'
                    style={{ left: MousePosition.left, top: MousePosition.top }} />
                <article className='section__article--presentation'>
                    <img src={Profile} />
                    <h1>Kai Jauregi</h1>
                    <h2>Gameplay & Tools Programmer</h2>
                    <h2>Full stack Developer</h2>
                    <div className='div--warning'>
                        <a href="/portfolio/Kai_Jauregi_Full_Stack_en.pdf"  
                        download="Kai_Jauregi_CV.pdf" target="_blank">
                            Download CV</a>
                            <p> |&nbsp;&nbsp; </p>
                        <a href="/portfolio/Kai_Jauregi_Full_Stack_es.pdf" 
                        download="Kai_Jauregi_CV.pdf" target="_blank">
                            Download CV in spanish</a>
                    </div>

                </article>
            </section>
            <section ref={projectsContainer} id="projects" className='section--projects'>
                <Project />
            </section>
            <section ref={referenceContainer} id="experience" className='section--experience'>
                <Experience />
            </section>
            <section ref={footerContainer} id="contact" >
                <Footer />
            </section>
        </div>

    );
}

export default Home; 