import { MdAdd } from "react-icons/md";

import { Card } from "../Card/Card.jsx";
import { Container } from "./styles.js";

export function List({ data, listIndex }) {
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <MdAdd size={24} color="#fff" />
          </button>
        )}
      </header>

      <ul>
        {data.cards.map((card, index) => (
          <Card key={card.id} data={card} targetIndex={index} targetListIndex={listIndex} />
        ))}
      </ul>
    </Container>
  );
}
