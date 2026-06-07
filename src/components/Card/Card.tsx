import type { Payload } from "@interfaces/payload";
import Link, { type LinksPayload } from "@components/Links/Link";

import "./Card.scss";



const CardType = {
  simple: 0,
  sizeless: 1,
}

type CardType = (typeof CardType)[keyof typeof CardType];
export { CardType };

export interface CardPayload extends Payload {
  title: string;
  subtitle?: string;
  description: string;
  year: string;
  image?: string;
  links?: LinksPayload,
  type?: CardType
}


function Card(payload: CardPayload) {
  const { id, title, subtitle, year, image, description, links } = payload;
  let { type } = payload;
  const sectionStyle = image ? {
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  } : { display: "none" };

  if (!type) type = CardType.simple;
  return <div id={id} className="card">

    <div className="card--header" style={sectionStyle} />
    <div className={type == CardType.simple ? "card--body" : "card--body-a"}>
      <div className="card--body--head">
        <h3>{title}</h3>
        <h3>{year}</h3>
      </div>
      <h4>{subtitle}</h4>
      <p>{description}</p>
    </div>
    {links && links.list.length > 0 && <div className="card--footer">
      <Link list={links.list}
        type={links.type} />
    </div>}
  </div>;
}

export default Card;