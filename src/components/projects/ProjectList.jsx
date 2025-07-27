import './ProjectList.css'

function ProjectListCard({ title = "Title", description = "Small Description",handleClick }) {
    return (
        <div className='project__list__card' onClick={handleClick}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>

    );
}

function ProjectList({ setActiveObjectId, projects }) {
    return (
        <section className='project__list' >
            {projects.map(({ title, smallDescription }, index) => {
                return <ProjectListCard key={title} title={title} description={smallDescription} handleClick={() => { 
                        console.clear();
                        setActiveObjectId(index)}
                    } />;
            })}


        </section>

    );
}

export default ProjectList; 