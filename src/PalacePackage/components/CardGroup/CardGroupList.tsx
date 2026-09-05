//-------------------------------------------------
//---------------------IMPORTS---------------------
//--react > interface > tools > components > scss--

import { useState, useEffect } from 'react';

import {
  type CardGroupParentPayload,
  type CardPayload
} from '@/PalacePackage/utils/interfaces/payload';

import {fetchCSV} from '@/PalacePackage/utils/tools/fetchCSV';

import List from '@/PalacePackage/components/List/List';
import Stack from '@/PalacePackage/components/Stack/Stack';
import Title from '@/PalacePackage/components/Title/Title';

//---------------------COMPONENT---------------------
function CardGroup<T>(payload: CardGroupParentPayload) {
  const { setObject } = payload;
  const { id, title, csv } = payload.payload;
  const [objects, setObjects] = useState<T[]>([]);
  const [quantity, setQuantity] = useState<number>(
    (payload.payload.quantity != undefined ? payload.payload.quantity : 0));

  useEffect(() => {
    fetchCSV<T>(csv, setObjects).then(()=> {
      if(quantity == 0) setQuantity(objects.length);
    });
    
  }, [csv,quantity,objects]);


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