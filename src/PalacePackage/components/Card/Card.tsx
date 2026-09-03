//-------------------------------------------------
//---------------------IMPORTS---------------------
//--react > interface > tools > components > scss--

import { CardType, type CardPayload } from "@/PalacePackage/utils/interfaces/payload";
import "./Card.scss";

//---------------------COMPONENT---------------------
function Card(payload: CardPayload) {
  const { id, head, body, footer, image } = payload;
  let { type } = payload;
  const sectionStyle = image ? {
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  } : { display: "none" };


  if (!type) type = CardType.simple;
  return <div id={id} className={type}>

    {<div className={type + "--header"} style={sectionStyle} />}
    <div className={type + "--body"}>
      {head && <div className={type + "--body--head"}>
        {head}
      </div>}
      {body}
    </div>
    {footer && <div className={type + "--footer"}>
      {footer}
    </div>}
  </div>;
}

export default Card;