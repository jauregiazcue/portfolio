//-------------------------------------------------
//---------------------IMPORTS---------------------
//--react > interface > tools > components > scss--

import { HeroType, type HeroPayload } from "@/PalacePackage/utils/interfaces/payload";
import Image from "@/PalacePackage/components/Image/Image";
import "./Hero.scss";

//---------------------COMPONENT---------------------
function Hero(payload: HeroPayload) {
  const { title, url, alt, background, type, id, children } = payload;
  const style = background ? { backgroundImage: `url(${background})` } : {};

  switch (type) {
    case HeroType.center:
      return <section className={type} id={id} style={style}>
        {url && alt ? <Image url={url} alt={alt} /> : <></>}
        <h1 className="dark">{title}</h1>
        {children}
      </section>;
    case HeroType.leftDown:
      return <section className={type} id={id} style={style}>
        {children}
        <h1>{title}</h1>
      </section>
    case HeroType.centerFocus:
      return <section className={type} id={id}>
        <section className="hero-b--spotlight">
          {url && alt ? <Image url={url} alt={alt} /> : <></>}
          <h1 className="dark">{title}</h1>
          {children}
        </section>
      </section>
  }
}

export default Hero;