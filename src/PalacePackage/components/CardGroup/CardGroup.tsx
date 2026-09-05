//-------------------------------------------------
//---------------------IMPORTS---------------------
//--react > interface > tools > components > scss--

import { useState, useEffect } from 'react';

import {
  CardGenType,
  CardType,
  type CardGroupParentPayload,
  type CardPayload
} from '@/PalacePackage/utils/interfaces/payload';

import { fetchCSV } from '@/PalacePackage/utils/tools/fetchCSV';

import Card from '@/PalacePackage/components/Card/Card';
import List from '@/PalacePackage/components/List/List';
import Stack from '@/PalacePackage/components/Stack/Stack';
import Title from '@/PalacePackage/components/Title/Title';
import { Link as RouterLink } from 'react-router';

//---------------------COMPONENT---------------------
function CardGroup<T>(payload: CardGroupParentPayload) {
  const { setObject } = payload;
  const { id, type, title, csv, linkToMore } = payload.payload;
  const [objects, setObjects] = useState<T[]>([]);
  const [quantity, setQuantity] = useState<number>(
    (payload.payload.quantity != undefined ? payload.payload.quantity : 0));

  useEffect(() => {
    fetchCSV<T>({file: csv, setObject: setObjects}).then(() => {
      if (quantity == 0) setQuantity(objects.length);
    });

  }, [csv, quantity, objects]);


  if (type == CardGenType.grid) {
    return <>
      <Title id={id} title={title} />
      <Stack fullPage={false}>
        {objects.map((object: T, index: number) => {
          if (index < quantity) {
            const { head, body, footer, image } = setObject(object);
            return <Card key={index}
              head={head} body={body}
              footer={footer} image={image} />
          }
          if (index == quantity) {
            return <RouterLink to={linkToMore ? linkToMore : "/missingLinkFromDeveloper"} key={index}>
              <Card key={index}
                type={CardType.bigImage}
                body={<h3>Check Out More!</h3>}
                image={"./more.png"} />
            </RouterLink>
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
    <Title id={id} title={title} />
    <Stack>
      <List list={cardList} />
    </Stack>
  </>
}

export default CardGroup;