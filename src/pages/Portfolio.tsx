//-------------------------------------------------
//---------------------IMPORTS---------------------
//--react > interface > tools > components > scss--
import { useState } from "react";

import {
  CardGenType,
  HeroType,
  LinkType,
  type LinkPayload
} from "@/PalacePackage/utils/interfaces/payload";

import HeroImage from "@assets/Profile.jpg";
import pdf_en from "@assets/Kai_Jauregi_CV_en.pdf";
import pdf_es from "@assets/Kai_Jauregi_CV_es.pdf";

import Hero from "@/PalacePackage/components/Hero/Hero";
import Link from "@/PalacePackage/components/Link/Link";
import ProjectCardGroup from "@/components/CardGroup/ProjectCardGroup";
import StudiesCardGroup from "@/components/CardGroup/StudiesCardGroup";
import ExperiencesCardGroup from "@/components/CardGroup/ExperiencesCardGroup";


//---------------------COMPONENT---------------------
function Portfolio() {
  const [isActive, setActive] = useState(true);

  const debug = false;
  const pathString = debug ? "portfolio/" : "";
  const dataPath = `${pathString}Portfolio_Data_namecheap.csv`;
  const experiencePath = `${pathString}Portfolio_Experience.csv`;
  const studiesPath = `${pathString}Portfolio_Studies.csv`;


  const handleToggle = () => {
    if (!isActive) {
      document.body.classList.remove("dark-mode");
      setActive(!isActive);
      return;
    }

    document.body.classList.add("dark-mode");
    setActive(!isActive);
  };
  const data: LinkPayload[] = [];
  data.push({
    href: pdf_en,
    download: "Kai_Jauregi_English.pdf",
    target: "_blank",
    text: "Download CV",
    textClassname: "fi fi-gb",
  });

  data.push({
    href: pdf_es,
    download: "Kai_Jauregi_Spanish.pdf",
    target: "_blank",
    text: "Descargar CV",
    textClassname: "fi fi-es",
  });

  const footerData: LinkPayload[] = [];
  footerData.push({
    href: "https://www.linkedin.com/in/kaijauregi/",
    target: "_blank",
    textClassname: "fa-brands fa-linkedin",
  });
  footerData.push({
    href: "https://github.com/jauregiazcue",
    target: "_blank",
    textClassname: "fa-brands fa-square-github",
  });



  return (
    <>
      <Link type={LinkType.navbar} list={[
        { href: "#hero", textClassname: "fa-solid fa-house" },
        { href: "#project", textClassname: "fa-solid fa-file" },
        { href: "#experience", textClassname: "fa-solid fa-handshake" },
        { href: "#contact", textClassname: "fa-solid fa-address-book" },
        { onClick: handleToggle, textClassname: "fa-solid fa-circle-half-stroke" }
      ]} />

      <Hero title="Kai Jauregi" url={HeroImage}
        alt="Profile photo of Kai Jauregi" type={HeroType.centerFocus} id="hero">
        <h2> Gameplay & Tools Programmer </h2>
        <h2> Full stack Developer </h2>
        <Link list={data} type={LinkType.simple} />
      </Hero>

      <ProjectCardGroup title="Projects" id="project" quantity={8} linkToMore="/about/projects"
        csv={dataPath} type={CardGenType.grid} />

      <ExperiencesCardGroup title="Professional Experiences" id="experience"
        csv={experiencePath} type={CardGenType.list} />

      <StudiesCardGroup title="Studies" id="Studies"
        csv={studiesPath} type={CardGenType.list} />
    </>
  )
}


export default Portfolio;

