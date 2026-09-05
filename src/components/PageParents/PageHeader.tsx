//-------------------------------------------------
//---------------------IMPORTS---------------------
//--react > interface > tools > components > scss--
import {
  LinkType,
} from "@/PalacePackage/utils/interfaces/payload";

import { Outlet } from "react-router";
import Link from "@/PalacePackage/components/Link/Link";

//---------------------COMPONENT---------------------
function PageHeader() {
  
  return (
    <>
      <Link type={LinkType.header} list={[
        { href: { pathname: "/", hash: "#hero" }, textClassname: "fa-solid fa-house" },
        { href: "#contact", textClassname: "fa-solid fa-address-book" },
      ]} />;
      <Outlet />
    </>
  )
}


export default PageHeader;

