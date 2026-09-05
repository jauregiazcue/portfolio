//-------------------------------------------------
//---------------------IMPORTS---------------------
//--react > interface > tools > components > scss--

import { useState, useEffect } from 'react';

import {
  CardType,
  type CardGroupParentPayload,
} from '@/PalacePackage/utils/interfaces/payload';

import {fetchCSV} from '@/PalacePackage/utils/tools/fetchCSV';

import Card from '@/PalacePackage/components/Card/Card';
import Stack from '@/PalacePackage/components/Stack/Stack';
import Title from '@/PalacePackage/components/Title/Title';
import { Link as RouterLink } from 'react-router';

//---------------------COMPONENT---------------------
function CardGroupGrid<T>(payload: CardGroupParentPayload) {
  const { setObject } = payload;
  const { id, title, csv, linkToMore } = payload.payload;
  const [objects, setObjects] = useState<T[]>([]);
  const [quantity, setQuantity] = useState<number>(
    (payload.payload.quantity != undefined ? payload.payload.quantity : 0));

  useEffect(() => {
    fetchCSV<T>(csv, setObjects).then(() => {
      if (quantity == 0) setQuantity(objects.length);
    });

  }, [csv, quantity, objects]);


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
          return <RouterLink to={linkToMore ? 
          linkToMore : "/missingLinkFromDeveloper"} key={index}>
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

export default CardGroupGrid;