import { useEffect, useRef } from "react";
import type { Payload } from "@interfaces/payload";

import type { LinksPayload } from "@components/Links/Link";
import Link from "@components/Links/Link";

import "./Footer.scss";


export interface FooterPayload extends Payload {
  links: LinksPayload,
  owner: string,
  email: string
}

function Footer(payload: FooterPayload) {
  const { id, email, owner, links } = payload;

  const ref = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const prev = ref.current?.previousElementSibling as HTMLElement | null;
    if (!prev) return;

    prev.classList.add('footer--merger');

    return () => prev.classList.remove('footer--merger');
  }, []);

  return (
    <section ref={ref} id={id} className="footer">
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