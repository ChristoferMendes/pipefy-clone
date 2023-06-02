import { Board } from "./components/Board/Board";
import { Header } from "./components/Header/Header";
import { GlobalStyle } from "./styles/global";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <Board />
      <GlobalStyle />
    </DndProvider>
  );
}

export default App;
