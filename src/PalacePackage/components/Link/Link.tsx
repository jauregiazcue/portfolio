//-------------------------------------------------
//---------------------IMPORTS---------------------
//--react > interface > tools > components > scss--

import {
  LinkType,
  type ActualLinkPayload,
  type LinkPayload,
  type LinksPayload
} from "@/PalacePackage/utils/interfaces/payload";
import "./Link.scss";

import { Link as RouterLink } from 'react-router';
//-------------------------------------------------

function actualLink(payload: ActualLinkPayload) {
  const { text, textClassname, key, href, onClick, ...props } = payload;
  if (onClick) {
    return <a key={key}
      {...{ ["onClick"]: onClick }} {...props}>
      {text ?
        <i>{text}</i> :
        <i className={textClassname}></i>
      }
    </a>
  }
  return <RouterLink key={key} to={href ? (href) : ""} {...props}>
    {text ?
      <i>{text}</i> :
      <i className={textClassname}></i>
    }
  </RouterLink>
}

//---------------------COMPONENT---------------------
function Link(payload: LinksPayload) {
  const { id, type, list } = payload;
  return (
    <div id={id} className={type}>
      {list.map((link: LinkPayload, index: number) => {
        const { text, textClassname, textstyle } = link;

        if (text && textClassname) {
          return <div key={index}>
            {text && textClassname && type != LinkType.header
              && <span className={textClassname} style={textstyle} />}
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