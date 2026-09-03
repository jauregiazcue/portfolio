//-------------------------------------------------
//---------------------IMPORTS---------------------
//--react > interface > tools > components > scss--
import {
  LinkType,
} from "@/PalacePackage/utils/interfaces/payload";

import { useNavigate, useOutlet } from "react-router";
import Link from "@/PalacePackage/components/Link/Link";

//---------------------COMPONENT---------------------
function PageHeader() {
  // force to go somewhere else if no outlet is present, 
  // this is to avoid the user seeing a blank page when going to /about
  const navigate = useNavigate();
  const outlet = useOutlet();
  if (!outlet) navigate("/about/tools");

  
  return (
    <>
      <Link type={LinkType.header} list={[
        { href: { pathname: "/", hash: "#hero" }, textClassname: "fa-solid fa-house" },
        { href: "#contact", textClassname: "fa-solid fa-address-book" },
      ]} />;
      {outlet}
    </>
  )
}


export default PageHeader;

