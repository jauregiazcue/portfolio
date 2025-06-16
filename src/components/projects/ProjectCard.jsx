import './ProjectCard.css'

function ProjectCard({project}) {
    return (
        <section className='project__card'>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
        </section>

    );
}

export default ProjectCard; 