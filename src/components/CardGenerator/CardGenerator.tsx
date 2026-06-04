import { useState, useEffect } from 'react'
import Papa from "papaparse"
import Stack from '@components/Stack/Stack';
import type { CardPayload } from '@components/Card/Card';
import Card from '@components/Card/Card';
import { LinkType, type LinkPayload } from '../Links/Link';


export interface MyCardPayload extends CardPayload {
  url?: string,
  url2?: string
}

function CardGenerator({id} : {id : string}) {
  const [objects, setObjects] = useState<MyCardPayload[]>([]);
  async function fetchCSV() {
    const response = await fetch('new-portfolio/src/assets/Portfolio_Data.csv');
    const reader = response.body?.getReader();
    const result = await reader?.read();
    const decoder = new TextDecoder('utf-8');
    const csv = await decoder.decode(result?.value);
    const results: Papa.ParseResult<MyCardPayload> = Papa.parse(csv, { header: true });
    setObjects(results.data);
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchCSV();
  }, []);

  return <Stack id={id} fullPage={false}>
    {objects.map((object: MyCardPayload, index: number) => {
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
      return <Card key={index} title={title}
        year={year}
        image={image}
        links={{ list: list, type: LinkType.simple }}
        description={description} />
    })}
  </Stack>
}

export default CardGenerator;