import './Project.css'
import ProjectCard from "../../components/projects/ProjectCard"
import ProjectList from "../../components/projects/ProjectList"
function Project() {
    return (
        <section className='project'>
            <ProjectCard/>
            <ProjectList/>
        </section>

    );
}

export default Project; 