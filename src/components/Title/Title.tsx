import type { PayloadWithChildren } from "@interfaces/payload";
import "./Title.scss";


const TitleType = {
  common: 0,
  preHero: 1,
}

type TitleType = (typeof TitleType)[keyof typeof TitleType];
export { TitleType };

interface TitlePayload extends PayloadWithChildren {
  /** The text to display inside the button */
  title: string;
  url?: string;
  alt?: string;
  type?: TitleType;
}


function Hero(payload: TitlePayload) {
  const { title, id } = payload;
  let { type } = payload;

  type = type ?? TitleType.common;

  return <h1 id={id} className={type == TitleType.common ? "title" : "title-a"}>{title}</h1>;
}

export default Hero;