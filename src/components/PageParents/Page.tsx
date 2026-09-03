//-------------------------------------------------
//---------------------IMPORTS---------------------
//--react > interface > tools > components > scss--
import {
  LinkType,
  type LinkPayload
} from "@/PalacePackage/utils/interfaces/payload";

import Footer from "@/PalacePackage/components/Footer/Footer";
import { Outlet, ScrollRestoration } from "react-router";

//---------------------COMPONENT---------------------
function Page() {

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
      <ScrollRestoration />
      <Outlet />

      <Footer id="contact"
        links={{ list: footerData, type: LinkType.simple }}
        owner={"Kai Jauregi Azcue"}
        email={"kai.jauregi@proton.me"} />
    </>
  )
}


export default Page;

