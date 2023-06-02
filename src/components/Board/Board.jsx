import { Container } from "./styles.js";
import { BoardProvider } from "./contet.jsx";
import { BoardList } from "../BoardList/BoardList.jsx";

export function Board() {
  return (
    <BoardProvider>
      <Container>
       <BoardList />
      </Container>
    </BoardProvider>
  );
}
