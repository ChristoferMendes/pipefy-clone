import { Container, Label } from "./styles.js";
import { useDrag } from "react-dnd";

export function Card({ data }) {
  const [{ isDraggin }, dragRef] = useDrag({
    type: 'CARD',
    collect: (monitor) => ({
      isDraggin: monitor.isDragging(),
    }),
  });

  return (
    <Container ref={dragRef} isDraggin={isDraggin}>
      <header>
        {data.labels.map((label) => (
          <Label key={label} color={label} />
        ))}
      </header>
      <p>{data.content}</p>
      {data.user && <img src={data.user} alt={`User image`} />}
    </Container>
  );
}
