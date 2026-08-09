import type { Payload } from "@interfaces/payload";
import Card, { CardType, type CardPayload } from "@components/Card/Card";
import "./List.scss";


export interface ListPayload extends Payload {
  list: CardPayload[]
}

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