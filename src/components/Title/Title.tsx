import type { PayloadWithChildren } from "@interfaces/payload";
import "./Title.scss";


interface TitlePayload extends PayloadWithChildren {
  /** The text to display inside the button */
  title: string;
  url?: string;
  alt?: string;
}


function Hero(payload: TitlePayload) {
  const { title, id, } = payload;


  return <h1 id={id} className="title">{title}</h1>;
}

export default Hero;