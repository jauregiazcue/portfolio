//-------------------------------------------------
//---------------------IMPORTS---------------------
//--react > interface > tools > components > scss--

import { useState, useEffect } from 'react';

import {
  CardGenType,
  CardType,
  type CardGroupParentPayload,
  type CardPayload
} from '@/utils/interfaces/payload';

import fetchCSV from '@/utils/tools/fetchCSV';

import Card from '@components/Card/Card';
import List from '@components/List/List';
import Stack from '@components/Stack/Stack';
import Title from '@components/Title/Title';

//---------------------COMPONENT---------------------
function CardGroup<T>(payload: CardGroupParentPayload) {
  const { setObject } = payload;
  const { id, type, title, csv } = payload.payload;
  const [objects, setObjects] = useState<T[]>([]);


  useEffect(() => {
    fetchCSV<T>(csv, setObjects);
  }, [csv]);


  if (type == CardGenType.grid) {
    return <>
      <Title id={id} title={title} />
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
    <Title id={id} title={title}/>
    <Stack>
      <List list={cardList} />
    </Stack>
  </>
}

export default CardGroup;