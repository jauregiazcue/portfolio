import './Project.css'
import ProjectCard from "../../components/projects/ProjectCard"
import ProjectList from "../../components/projects/ProjectList"
import projects from "../../assets/projectData.json"
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive'

function Project() {
    const [activeId, setActiveId] = useState(0);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return !isTabletOrMobile ?
        (

            <section className='project'>
                <ProjectCard project={projects[activeId]} />
                <ProjectList setActiveObjectId={setActiveId} projects={projects} />
            </section>

        ) :
        (
            <>
                {projects.map((element) => {
                    return <>
                        <section className='project'>
                            <ProjectCard project={element} />

                        </section>
                        <hr />
                    </>
                })}
            </>
        )
}

export default Project; 