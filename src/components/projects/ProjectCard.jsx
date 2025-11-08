import './ProjectCard.css'

function ProjectCard({ project }) {

    function getListTask(task) {
        if (typeof task == "string") {
            return <li key={task + (Math.random() + 1).toString(36)}>{task}</li>
        } else {
            return <ul key={task + (Math.random() + 1).toString(36)}>
                {task.map(actualTask => getListTask(actualTask))}
            </ul>
        }

    }
    
    return (
        <section className='project__card'>
            <div className='project__card--left'>
                <img src={project.image + "?raw=true"} />
            </div>
            <div className='project__card--right'>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <ul>
                    {project.listOfTasks.map((task) => {
                        return getListTask(task);
                    })}
                </ul>
                <section className='project__card--links'>
                    {project.buttons.map((b) => {
                        return <>
                            <a className="project__link" target="_blank" href={b[1]} >{b[0]}</a>
                            <br/>
                        </>

                    })}
                </section>
            </div>

        </section>

    );
}

export default ProjectCard; 