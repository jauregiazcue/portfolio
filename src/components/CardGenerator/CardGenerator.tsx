import { useState, useEffect } from 'react'
import Papa from "papaparse"
import Stack from '@components/Stack/Stack';
import type { CardPayload } from '@components/Card/Card';
import Card from '@components/Card/Card';
import { LinkType, type LinkPayload } from '../Links/Link';
import type { Payload } from '@/interfaces/payload';
import List from '../List/List';
import Title from '../Title/Title';


export interface MyCardPayload extends CardPayload {
  url?: string,
  url2?: string
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
}

function CardGenerator(payload: CardGeneratorPayload) {
  const { id, type, title } = payload;
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
        text: "Showcase"
      });
    }

    if (url2) {
      list.push({
        href: url2,
        target: "_blank",
        text: "Repo"
      });
    }
    return { title, description, year, image, list };
  }


  if (type == CardGenType.grid) {
    return <>
      <Title id={id} title={title} />
      <Stack fullPage={false}>
        {objects.map((object: MyCardPayload, index: number) => {
          const { title, description, year, image, list } = setObject(object);
          return <Card key={index} title={title}
            year={year}
            image={image}
            links={{ list: list, type: LinkType.simple }}
            description={description} />
        })}
      </Stack>
    </>

  }


  const aux: CardPayload[] = objects.map((object: MyCardPayload) => {
    const newObject: CardPayload = setObject(object);
    return newObject;
  });

  return <>
    <Title id={id} title={title} />
    <Stack>
      <List list={aux} />
    </Stack>
  </>



}

export default CardGenerator;