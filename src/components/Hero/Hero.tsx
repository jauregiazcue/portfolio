import type { PayloadWithChildren } from "@interfaces/payload";
import Image from "@components/Image/Image";
import "./Hero.scss";




const HeroType = {
  center : 0,
  leftDown : 1,
  centerFocus : 2
}

type HeroType = (typeof HeroType)[keyof typeof HeroType];
export {HeroType};

interface HeroPayload extends PayloadWithChildren {
  /** The text to display inside the button */
  title: string;
  url?: string;
  alt?: string;
  background?: string;
  type: HeroType;
}


function Hero(payload: HeroPayload) {
  const { title, url, alt, background, type, id, children } = payload;
  const style = background ? { backgroundImage: `url(${background})`}: {};

  switch (type) {
    case HeroType.center:
      return <section className="hero" id={id} style={style}>
        {url && alt ? <Image url={url} alt={alt} /> : <></>}
        <h1 className="dark">{title}</h1>
        {children}
      </section>;
    case HeroType.leftDown:
      return <section className="hero-b" id={id} style={style}>
        {children}
        <h1>{title}</h1>
      </section>
    case HeroType.centerFocus:
      return <section className="hero-c" id={id}>
        <section className="hero-c--spotlight">
          {url && alt ? <Image url={url} alt={alt} /> : <></>}
          <h1 className="dark">{title}</h1>
          {children}
        </section>
      </section>
  }
}

export default Hero;