import type { Payload } from "@interfaces/payload";
import "./Link.scss";
import type { CSSProperties } from "react";

const LinkType = {
  simple: "link",
  navbar: "link-a",
  card: "link-b",
  header: "link-c",
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
      <i className={textClassname}></i>
    }
  </a>
}

function Link(payload: LinksPayload) {
  const { id, type, list } = payload;
  return (
    <div id={id} className={type}>
      {list.map((link: LinkPayload, index: number) => {
        const { text, textClassname, textstyle } = link;

        if (text && textClassname) {
          return <div key={index}>
            {text && textClassname && type != LinkType.header && <span className={textClassname} style={textstyle} />}
            {actualLink(link)}
          </div>
        } else {
          return actualLink({ ...link, key: index });
        }
      })}
    </div>

  );
}

export default Link;