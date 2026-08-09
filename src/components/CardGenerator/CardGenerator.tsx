import { useState, useEffect } from 'react'
import Papa from "papaparse"

import Card, { CardType } from '@components/Card/Card';
import List from '@components/List/List';
import Stack from '@components/Stack/Stack';
import Title, { TitleType } from '@components/Title/Title';
import type { Payload } from '@/interfaces/payload';
import type { CardPayload } from '@components/Card/Card';
import Link, { LinkType, type LinkPayload } from '@components/Links/Link';





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

interface CardGeneratorPayload extends Payload {
  csv: string,
  type: CardGenType,
  title: string,
  titleType?: TitleType
}

function CardGenerator(payload: CardGeneratorPayload) {
  const { id, type, title, titleType } = payload;
  const [objects, setObjects] = useState<MyCardPayload[]>([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchCSV() {
    const response = await fetch(payload.csv);
    const reader = response.body?.getReader();
    const result = await reader?.read();
    const decoder = new TextDecoder('utf-8');
    const csv = await decoder.decode(result?.value);
    const results: Papa.ParseResult<MyCardPayload> = Papa.parse(csv, { header: true, skipEmptyLines: true });
    setObjects(results.data);
  }

  useEffect(() => {
    fetchCSV();
  }, [fetchCSV]);


  function setObject(object: MyCardPayload) {
    const { title, description, year, image, url, url2 } = object;
    const list: LinkPayload[] = [];
    if (url) {
      list.push({
        href: url,
        target: "_blank",
        text: "Learn More",
        textClassname: "fa-solid fa-circle-up fa-rotate-by",
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


  if (type == CardGenType.grid) {
    return <>
      <Title id={id} title={title} type={titleType} />
      <Stack fullPage={false}>
        {objects.map((object: MyCardPayload, index: number) => {
          const { head, body, footer, image } = setObject(object);
          return <Card key={index}
            head={head}
            body={body}
            footer={footer}
            image={image} />
        })}
      </Stack>
    </>

  }


  const aux: CardPayload[] = objects.map((object: MyCardPayload) => {
    const newObject: CardPayload = setObject(object);
    console.log(newObject);
    return newObject;
  });

  return <>
    <Title id={id} title={title} type={titleType} />
    <Stack>
      <List list={aux} />
    </Stack>
  </>



}

export default CardGenerator;