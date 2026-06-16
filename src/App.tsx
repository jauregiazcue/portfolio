import Hero, { HeroType } from "@components/Hero/Hero";
import HeroImage from "@assets/Profile.jpg";
import Link, { type LinkPayload, LinkType } from "@components/Links/Link";
import "@style/vars.scss";
import CardGenerator, { CardGenType } from "./components/CardGenerator/CardGenerator";
import pdf_en from "@assets/Kai_Jauregi_CV_en.pdf";
import pdf_es from "@assets/Kai_Jauregi_CV_es.pdf";
import { useState } from "react";
import Footer from "./components/Footer/Footer";

function App() {
  const [isActive, setActive] = useState(true);
  const debug = false;
  const pathString = debug ? "portfolio/" : "";
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
    href: "https://www.linkedin.com/in/jauregiazcue/",
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
      <CardGenerator title="Project" id="project" csv={`${pathString}Portfolio_Data.csv`} type={CardGenType.grid} />
      <CardGenerator title="Experience" id="experience" csv={`${pathString}Portfolio_Experience.csv`} type={CardGenType.list} />
      <CardGenerator title="Studies" id="Studies" csv={`${pathString}Portfolio_Studies.csv`} type={CardGenType.list} />
      <Footer id="contact"
        links={{ list: footerData, type: LinkType.simple }}
        owner={"Kai Jauregi Azcue"}
        email={"kai.jauregi@proton.me"} />
    </>
  )
}


export default App;

