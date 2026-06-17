import type { Payload } from "@interfaces/payload";
import "./Link.scss";

const LinkType = {
  simple: 0,
  navbar: 1,
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
  onClick?(): unknown,
  [key: string]: unknown
}

function Link(payload: LinksPayload) {
  const { id, type, list } = payload;
  const linksClass: string = type == LinkType.simple ? "link" : "link-a";
  return (
    <div id={id} className={linksClass}>
      <>
        {list.map((link: LinkPayload, index: number) => {
          const { href, text, textClassname, onClick, ...props } = link;

          if (textClassname != undefined && text != undefined) {
            if (onClick) return <div key={index}>
              <span className={textClassname} />
              <a  onClick={onClick} {...props}><i>{text}</i></a>
            </div>
            return <div key={index}>
              <span className={textClassname} />
              <a href={href} {...props}  {...props}><i>{text}</i></a>
            </div>
          }


          if (onClick) return <a key={index} onClick={onClick} {...props}><i className={textClassname}>{text}</i></a>
          return <a key={index} href={href} {...props}><i className={textClassname}>{text}</i></a>



        })}
      </>
    </div>

  );
}

export default Link;