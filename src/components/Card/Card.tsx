import type { Payload } from "@interfaces/payload";

import "./Card.scss";



const CardType = {
  simple: 0,
  sizelessInHeight: 1,
  sizeless:2
}

type CardType = (typeof CardType)[keyof typeof CardType];
export { CardType };

export interface CardPayload extends Payload {
  image?: string;
  type?: CardType

  head?: React.ReactNode,
  body?: React.ReactNode,
  footer?: React.ReactNode
}


function Card(payload: CardPayload) {
  const { id,head,body,footer, image } = payload;
  let { type } = payload;
  const sectionStyle = image ? {
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  } : { display: "none" };

  function getType(type: CardType) {
    switch(type){
      default: return "card";
      case CardType.sizelessInHeight : return "card-a";
      case CardType.sizeless : return "card-b";
    }
  }

  if (!type) type = CardType.simple;
  const classType = getType(type);
  return <div id={id} className={classType}>

    {<div className={classType + "--header"} style={sectionStyle} />}
    <div className={classType + "--body"}>
      {head && <div className={classType + "--body--head"}>
        {head}
      </div>}
      {body}
    </div>
    {footer && <div className={classType + "--footer"}>
      {footer}
    </div>}
  </div>;
}

export default Card;