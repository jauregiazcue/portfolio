import type { Payload } from "@interfaces/payload";
import Link, { type LinksPayload } from "@components/Links/Link";

import "./Card.scss";

export interface CardPayload extends Payload {
  title: string;
  subtitle?: string;
  description: string;
  year: string;
  image?: string;
  links?: LinksPayload,
}


function Card(payload: CardPayload) {
  const { id, title, subtitle, year, image, description, links } = payload;
  const sectionStyle = image ? {
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  } : { display: "none" };


  return <div id={id} className="card">
    <div className="card--header" style={sectionStyle} />
    <div className="card--body">
      <div className="card--body--head">
        <h3>{title}</h3>
        <h3>{year}</h3>
      </div>
      <h4>{subtitle}</h4>
      <p>{description}</p>
    </div>
    {links && <div className="card--footer">
      <Link list={links.list}
        type={links.type} />
    </div>}
  </div>;
}

export default Card;