import type { CSSProperties, PropsWithChildren } from "react";

//-----------------------------------------------
//---------------------TYPES---------------------
//-----------------------------------------------

const LinkType = {
  simple: "link",
  navbar: "link-a",
  card: "link-b",
  header: "link-c"
}

const CardType = {
  simple: "card",
  sizelessInHeight: "card-a",
  sizeless:"card-b",
  bigImage: "card-c"
}

const CardGenType = {
  grid: 0,
  list: 1
}

const HeroType = {
  center: "hero",
  leftDown: "hero-a",
  centerFocus: "hero-b"
}




type LinkType = (typeof LinkType)[keyof typeof LinkType];
type CardType = (typeof CardType)[keyof typeof CardType];
type CardGenType = (typeof CardGenType)[keyof typeof CardGenType];
type HeroType = (typeof HeroType)[keyof typeof HeroType];

export { LinkType,CardType,CardGenType,HeroType };


export interface Payload {
  id?: string,
  className?: string,
  style?: object
}

export interface PayloadWithChildren extends Payload, PropsWithChildren { }

//--------------------------------------------------
//---------------------Card-------------------------
//--------------------------------------------------
export interface CardPayload extends Payload {
  image?: string;
  type?: CardType

  head?: React.ReactNode,
  body?: React.ReactNode,
  footer?: React.ReactNode
}

//--------------------------------------------------
//---------------------CardGroup--------------------
//--------------------------------------------------
export interface CardGroupPayload extends Payload {
  csv: string,
  type: CardGenType,
  quantity?: number,
  linkToMore?: string,
  title: string
}

export interface CardGroupParentPayload {
  payload: CardGroupPayload,
  setObject<T>(context: T): {
    head: React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>;
    body: React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>;
    footer: React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>;
    image: string | undefined;
  }
}



//--------------------------------------------------
//----------------------FOOTER----------------------
//--------------------------------------------------
export interface FooterPayload extends Payload {
  links: LinksPayload,
  owner: string,
  email: string
}

//--------------------------------------------------
//----------------------HEADER----------------------
//--------------------------------------------------
export interface HeaderPayload extends Payload {
  left?: React.ReactNode,
  center?: React.ReactNode,
  right?: React.ReactNode
}

//--------------------------------------------------
//-----------------------HERO-----------------------
//--------------------------------------------------
export interface HeroPayload extends PayloadWithChildren {
  title: string;
  url?: string;
  alt?: string;
  background?: string;
  type: HeroType;
}

//--------------------------------------------------
//-----------------------IMAGE----------------------
//--------------------------------------------------
export interface ImagePayload extends Payload {
  url: string,
  alt: string,
}

//--------------------------------------------------
//-----------------------LINK-----------------------
//--------------------------------------------------
export interface LinksPayload extends Payload {
  type: LinkType,
  list: LinkPayload[]
}

export interface LinkPayload {
  href?: string,
  text?: string,
  textClassname?: string,
  textstyle?: CSSProperties,
  onClick?(): unknown,
  [key: string]: unknown
}

export interface ActualLinkPayload extends LinkPayload {
  key?: number,
}

//--------------------------------------------------
//-----------------------LIST-----------------------
//--------------------------------------------------
export interface ListPayload extends Payload {
  list: CardPayload[]
}

//--------------------------------------------------
//-----------------------STACK----------------------
//--------------------------------------------------
export interface StackPayload extends PayloadWithChildren {
  fullPage?: boolean,
  backgroundColor?: string,
  backgroundImage?: string,
}

//--------------------------------------------------
//-----------------------TITLE----------------------
//--------------------------------------------------
export interface TitlePayload extends PayloadWithChildren {
  title: string;
  url?: string;
  alt?: string;
}