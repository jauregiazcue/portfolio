//-------------------------------------------------
//---------------------IMPORTS---------------------
//--react > interface > tools > components > scss--
import {
  CardType,
  type CardPayload,
  type ListPayload
} from "@/utils/interfaces/payload";
import Card from "@components/Card/Card";

import "./List.scss";

//---------------------COMPONENT---------------------
function List(payload: ListPayload) {
  const { list } = payload;

  return (
    <div className="list">
      <ol>
        {list.map((listObject: CardPayload, index: number) => {
          const { head, body, image } = listObject;
          return <li key={index}>

            <Card key={index}
              type={CardType.sizeless}
              head={head}
              body={body}
              image={image} />
          </li>
        })}
      </ol>
    </div>
  );
}

export default List;