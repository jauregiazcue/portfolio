import Hero, { HeroType } from "@components/Hero/Hero";
import HeroImage from "@assets/Profile.jpg";
import Link, { type LinkPayload, LinkType } from "@components/Links/Link";
import "@style/vars.scss";
import CardGenerator, { CardGenType } from "./components/CardGenerator/CardGenerator";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import type { CardPayload } from "./components/Card/Card";
function App() {
  const [isActive, setActive] = useState(true);
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
    href: "/portfolio/Kai_Jauregi_Full_Stack_en.pdf",
    download: "",
    target: "_blank",
    text: "Download CV"
  });

  data.push({
    href: "/portfolio/Kai_Jauregi_Full_Stack_en.pdf",
    download: "",
    target: "_blank",
    text: "Download CV in spanish"
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

  const listData: CardPayload[] = [];
  listData.push({
    title: "Title Ipsum",
    year: "0000",
    subtitle: "Mew Mew Ipsum",
    description: "Lorem Ipsum dolores fermin weruoifberoiugfbwe ruigbweriugbweroi gbweiourgboiweq"
  });
  listData.push({
    title: "Title Ipsum",
    year: "0000",
    subtitle: "Mew Mew Ipsum",
    description: "Lorem Ipsum dolores fermin weruoifberoiugfbwe ruigbweriugbweroi gbweiourgboiweq"
  });
  listData.push({
    title: "Title Ipsum",
    year: "0000",
    subtitle: "Mew Mew Ipsum",
    description: "Lorem Ipsum dolores fermin weruoifberoiugfbwe ruigbweriugbweroi gbweiourgboiweq"
  });
  listData.push({
    title: "Title Ipsum",
    year: "0000",
    subtitle: "Mew Mew Ipsum",
    description: "Lorem Ipsum dolores fermin weruoifberoiugfbwe ruigbweriugbweroi gbweiourgboiweq"
  });
  listData.push({
    title: "Title Ipsum",
    year: "0000",
    subtitle: "Mew Mew Ipsum",
    description: "Lorem Ipsum dolores fermin weruoifberoiugfbwe ruigbweriugbweroi gbweiourgboiweq"
  });
  listData.push({
    title: "Title Ipsum",
    year: "0000",
    subtitle: "Mew Mew Ipsum",
    description: "Lorem Ipsum dolores fermin weruoifberoiugfbwe ruigbweriugbweroi gbweiourgboiweq"
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
      {/* <CardGenerator id="project" csv='Portfolio_Data.csv' type={CardGenType.grid} />
      <CardGenerator id="experience" csv='Portfolio_Experience.csv' type={CardGenType.list} />
 */}
      <CardGenerator id="project" csv='new-portfolio/Portfolio_Data.csv' type={CardGenType.grid} />
      <CardGenerator id="experience" csv='new-portfolio/Portfolio_Experience.csv' type={CardGenType.list} />
      <Footer id="contact"
        links={{ list: footerData, type: LinkType.simple }}
        owner={"Kai Jauregi Azcue"}
        email={"kai.jauregi@proton.me"} />
    </>
  )
}


export default App;