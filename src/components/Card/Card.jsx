import { Container, Label } from "./styles.js";

export function Card({ data }) {
  return (
    <Container>
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
