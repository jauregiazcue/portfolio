import type { Payload } from "@interfaces/payload";
import Card, { type CardPayload } from "@components/Card/Card";
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
          const { title, year, subtitle, description } = listObject;
          return <li key={index}>
            <Card key={index} title={title}
              subtitle={subtitle}
              year={year}
              description={description} />
          </li>
        })}
      </ol>
    </div>
  );
}

export default List;