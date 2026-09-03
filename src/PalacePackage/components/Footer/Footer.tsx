//-------------------------------------------------
//---------------------IMPORTS---------------------
//--react > interface > tools > components > scss--

import type { FooterPayload } from "@/PalacePackage/utils/interfaces/payload";

import Link from "@/PalacePackage/components/Link/Link";

import "./Footer.scss";

//---------------------COMPONENT---------------------
function Footer(payload: FooterPayload) {
  const { id, email, owner, links } = payload;

  return (
    <section id={id} className="footer">
      <div className="footer--head">
        <p>Contact Me · {email}</p>
        <Link list={links.list} type={links.type} />
      </div>
      <div className="footer--body">
        <hr />
        <p>© {owner}. All rights reserved.</p>
      </div>
    </section>
  );
}

export default Footer;