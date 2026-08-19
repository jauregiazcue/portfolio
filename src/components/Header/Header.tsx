//-------------------------------------------------
//---------------------IMPORTS---------------------
//--react > interface > tools > components > scss--

import type { HeaderPayload } from "@/utils/interfaces/payload";
import "./Header.scss";

//---------------------COMPONENT---------------------
function Header(payload: HeaderPayload) {
  const { id, left, center, right } = payload;
  return <div id={id} className="header">
    {left && <div className="header--left">{left}</div>}
    {center && <div className="header--center">{center}</div>}
    {right && <div className="header--right">{right}</div>}
  </div>
}

export default Header;