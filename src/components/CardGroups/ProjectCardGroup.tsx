import { CardType } from '@components/Card/Card';
import Link, { LinkType, type LinkPayload } from '../Links/Link';
import CardGroup, { type CardGroupParentPayload, type CardGroupPayload } from './CardGroup';

export interface MyCardPayload {
  title: string;
  subtitle?: string;
  description: string;
  year: string;
  image?: string;
  type?: CardType;
  url?: string;
  url2?: string;
}

function ProjectCardGroup(payload: CardGroupPayload) {

  function setObject(object: MyCardPayload) {
    const { title, description, year, image, url, url2 } = object;
    const list: LinkPayload[] = [];
    if (url) {
      list.push({
        href: url, target: "_blank",
        text: "Learn More", textClassname: "fa-solid fa-circle-up fa-rotate-by",
        textstyle: { "--fa-rotate-angle": "45deg" } as React.CSSProperties
      });
    }

    if (url2) {
      list.push({
        href: url2,
        target: "_blank",
        textClassname: "fa-brands fa-github",
      });
    }

    const head: React.ReactNode = <>
      <h3>{title}</h3>
      <h3>{year}</h3>
    </>;

    const body: React.ReactNode = <>
      {description && <p>{description}</p>}
    </>;

    const footer: React.ReactNode = <Link list={list}
      type={LinkType.card} />;


    return { head, body, footer, image };
  }

  return CardGroup<MyCardPayload>({ payload, setObject } as CardGroupParentPayload);
}

export default ProjectCardGroup;