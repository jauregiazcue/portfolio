import type { Payload } from "@interfaces/payload";
import "./Link.scss";
import type { CSSProperties } from "react";

const LinkType = {
  simple: 0,
  navbar: 1,
  card: 2,
}

type LinkType = (typeof LinkType)[keyof typeof LinkType];
export { LinkType };

export interface LinksPayload extends Payload {
  type: LinkType,
  list: LinkPayload[]
}

export interface LinkPayload {
  href?: string,
  text?: string,
  textClassname?: string,
  textstyle?: CSSProperties,
  onClick?(): unknown,
  [key: string]: unknown
}

interface ActualLinkPayload extends LinkPayload {
  key?: number,
}

function actualLink(payload: ActualLinkPayload) {
  const { text, textClassname, key, href, onClick, ...props } = payload;
  return <a key={key}  {...onClick ? { ["onClick"]: onClick } : { ["href"]: href }} {...props}>
    {text ?
      <i>{text}</i> :
      <i className={textClassname}>{text}</i>
    }

  </a>

}

function getLinkClass(type: LinkType) {
  switch (type) {
    case LinkType.simple: return "link";
    case LinkType.navbar: return "link-a";
    case LinkType.card: return "link-b";
    default: return "link";
  }
}

function Link(payload: LinksPayload) {
  const { id, type, list } = payload;
  const linksClass: string = getLinkClass(type);
  return (
    <div id={id} className={linksClass}>
      <>
        {list.map((link: LinkPayload, index: number) => {
          const { text, textClassname, textstyle } = link;

          if (text && textClassname) {
            return <div key={index}>
              {text && textClassname && <span className={textClassname} style={textstyle} />}
              {actualLink(link)}
            </div>
          } else {
            return actualLink({ ...link, key: index });
          }



        })}
      </>
    </div>

  );
}

export default Link;