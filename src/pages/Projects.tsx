//-------------------------------------------------
//---------------------IMPORTS---------------------
//--react > interface > tools > components > scss--

import ProjectCardGroup from "@/components/CardGroup/ProjectCardGroup";
import { CardGenType } from "@/PalacePackage/utils/interfaces/payload";




//---------------------COMPONENT---------------------
function Projects() {
    const dataPath = `/Portfolio_Data_namecheap.csv`;

  return (
    <>
        <ProjectCardGroup title="Projects" id="project"
        csv={dataPath} type={CardGenType.grid} />
    </>
  )
}


export default Projects;

