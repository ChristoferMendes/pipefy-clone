import { List } from '../List/List.jsx';
import { Container } from './styles.js';


export function Board() {
  return (
    <Container>
      <List />
      <List />
      <List />
      <List />
    </Container>
  );
}
