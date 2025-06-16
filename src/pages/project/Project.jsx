import './Project.css'
import ProjectCard from "../../components/projects/ProjectCard"
import ProjectList from "../../components/projects/ProjectList"
import projects from "../../assets/projectData.json"
import { useState } from 'react';

function Project() {
    const [activeId,setActiveId] = useState(0);

    return (
        <section className='project'>
            <ProjectCard project= {projects[activeId]} />
            <ProjectList setActiveObjectId={setActiveId} projects={projects} />
        </section>

    );
}

export default Project; 