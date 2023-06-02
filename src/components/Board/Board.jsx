import { List } from "../List/List.jsx";
import { Container } from "./styles.js";
import { loadLists } from "../../services/api";

const lists = loadLists();

export function Board() {
  return (
    <Container>
      {lists.map((list) => (
        <List key={list.title} data={list} />
      ))}
    </Container>
  );
}
