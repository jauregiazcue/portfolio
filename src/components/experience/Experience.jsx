import './Experience.css'


function Position({ title, where, when, info }) {
  return <>
    <h1>{title}</h1>
    <h2><em>{where}</em> {when}</h2>
    <p>{info}</p>
  </>
}

function Experience() {

  return <section className='experience'>
    <div className='positions'>
      <h1 className='positions--title '>Profesional Experience</h1>
      <Position
        title="Programmer"
        where="Talio"
        when="| jul. 2025 | oct. 2025 | Remote"
        info="I cleaned up a Unity Project, created a build for web, making the videos work by link so that the build was not as big. On October I fix a bit more, and added a way to skip the videos."
      />
      <Position
        title="Tools Programmer"
        where="Zarautz Police Department"
        when="| sep. 2024 - jan. 2025 | Zarautz"
        info="Developed  a program aimed at showcasing traffic accidents. For this purpose the user can draw, add images and text, customize the previous functionalities and take screenshots."
      />

      <Position
        title="Full Stack Developer"
        where="Zarautz Police Department"
        when="| apr. 2025 - may. 2025 | Zarautz"
        info="Create a proof of concept for the lost and found website while updating Zarautz City Hall website.."
      />
    </div>
    <div className='positions'>
      <h1 className='positions--title '>Studies</h1>
      <Position
        title="Full Stack Development"
        where="The Bridge"
        when="| mar. 2025 - now | Bilbao"
        info="I improved MySQL and JavaScript skills while I learned Docker and React. Throughout the learning experience I develop multiple websites such as my new portfolio, an updated website for my hometown, a playable sudoku web and more."
      />

      <Position
        title="BSc (Honours) in Computer Science for Games"
        where="Sheffield Hallam University"
        when="| sep. 2023 - may. 2024 | Sheffield"
        info="In SHU I enhanced my gameplay coding abilities and my collaborative skills by making a first person horror puzzle game for PS5, in a team of six, using my own level editor and entity component architecture base PS5 engine."
      />

      <Position
        title="Higher National Diploma in Computing"
        where="ESAT"
        when="| oct. 2020 - jul. 2023 | Valencia"
        info="ESAT is the institution where I learned to work with Unreal Engine 4 and Unity, apart from acquiring a strong knowledge in standardised Artificial Intelligence techniques such as A* or Behaviour Trees and I have grown a solid base in graphics programming creating my own engine in C++ using OpenGL."
      />
    </div>
  </section>
}

export default Experience; 