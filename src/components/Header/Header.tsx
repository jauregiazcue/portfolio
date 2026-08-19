import type { Payload } from "@/interfaces/payload";
import "./Header.scss";


export interface HeaderPayload extends Payload {


  left?: React.ReactNode,
  center?: React.ReactNode,
  right?: React.ReactNode
}

function Header(payload: HeaderPayload) {
  const { id, left, center, right } = payload;
  return <div id={id} className="header">
    {left && <div className="header--left">{left}</div>}
    {center && <div className="header--center">{center}</div>}
    {right && <div className="header--right">{right}</div>}
  </div>
}

export default Header;