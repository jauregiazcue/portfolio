import type { Payload } from "@interfaces/payload";

import "./Card.scss";



const CardType = {
  simple: "card",
  bigImage: "card-c",
  sizelessInHeight: "card-a",
  sizeless:"card-b"
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