//-------------------------------------------------
//---------------------IMPORTS---------------------
//--react > interface > tools > components > scss--
import {
  LinkType,
} from "@/utils/interfaces/payload";

import { useNavigate, useOutlet } from "react-router";
import Header from "@/components/Header/Header";
import { Link as RouterLink } from 'react-router';
import Link from "@/components/Link/Link";

//---------------------COMPONENT---------------------
function PageHeader() {
  // force to go somewhere else if no outlet is present, 
  // this is to avoid the user seeing a blank page when going to /about
  const navigate = useNavigate();
  const outlet = useOutlet();
  if (!outlet) navigate("/about/tools");

  const headerLeft = <RouterLink to={{ pathname: "/", hash: "#hero" }}>
    <h1>Kai Jauregi</h1>
  </RouterLink>;

  const headerCenter = <>
    <ol>
      <li><RouterLink to={"/tools"}>
        <h3>Tools</h3>
      </RouterLink></li>
      <li>
        <RouterLink to={"/projects"}>
          <h3>Projects</h3>
        </RouterLink>
      </li>
    </ol>
  </>;

  const headerRight = <Link type={LinkType.header} list={[
    { href: "#contact", textClassname: "fa-solid fa-address-book" },
  ]} />;

  return (
    <>
      <Header left={headerLeft} center={headerCenter} right={headerRight} id="header">

      </Header>

      {outlet}
    </>
  )
}


export default PageHeader;

