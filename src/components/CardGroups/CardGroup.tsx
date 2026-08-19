import { useState, useEffect } from 'react'

import Card, { CardType } from '@components/Card/Card';
import List from '@components/List/List';
import Stack from '@components/Stack/Stack';
import Title, { TitleType } from '@components/Title/Title';
import type { Payload } from '@/interfaces/payload';
import type { CardPayload } from '@components/Card/Card';
import fetchCSV from '@/tools/fetchCSV';


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

const CardGenType = {
  grid: 0,
  list: 1,
}

type CardGenType = (typeof CardGenType)[keyof typeof CardGenType];
export { CardGenType };

export interface CardGroupPayload extends Payload {
  csv: string,
  type: CardGenType,
  title: string,
  titleType?: TitleType,
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

function CardGroup<T>(payload: CardGroupParentPayload) {
  const { setObject } = payload;
  const { id, type, title, titleType, csv } = payload.payload;
  const [objects, setObjects] = useState<T[]>([]);


  useEffect(() => {
    fetchCSV<T>(csv, setObjects);
  }, [csv]);


  if (type == CardGenType.grid) {
    return <>
      <Title id={id} title={title} type={titleType} />
      <Stack fullPage={false}>
        {objects.map((object: T, index: number) => {
          if (index < 8) {
            const { head, body, footer, image } = setObject(object);
            return <Card key={index}
              head={head} body={body}
              footer={footer} image={image} />
          }
          if (index == 8) {
            return <Card key={index}
              type={CardType.bigImage}
              body={<h3>Check Out More!</h3>}
              image={"./more.png"} />
          }

        })}
      </Stack>
    </>
  }

  const cardList: CardPayload[] = objects.map((object: T) => {
    const newObject: CardPayload = setObject(object);
    return newObject;
  });

  return <>
    <Title id={id} title={title} type={titleType} />
    <Stack>
      <List list={cardList} />
    </Stack>
  </>
}

export default CardGroup;