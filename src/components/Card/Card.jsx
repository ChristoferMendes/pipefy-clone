import { Container, Label } from "./styles.js";

export function Card() {
  const avatarURL = 'https://avatars.githubusercontent.com/u/107426464?v=4'

  return (
    <Container>
      <header>
        <Label color="#7159c1" />
      </header>
      <p>Make migrations with TypeORM 0.3</p>
      <img src={avatarURL} alt="Cristofer Mendes name" />
    </Container>
  );
}
