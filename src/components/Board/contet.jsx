import { createContext, useContext, useState } from "react";
import { loadLists } from "../../services/api";
import { produce } from "immer";

export const BoardContext = createContext({
  lists: [],
  move: (fromList, from, to) => {},
});

export const BoardProvider = ({ children }) => {
  const [lists, setLists] = useState(loadLists());

  function move(fromList, toList, from, to) {

    function removeItemFromListPosition (draft) {
      return draft[fromList].cards.splice(from, 1);
    }

    function addItemOnAnotherPosition (draft, dragged) {
      return draft[toList].cards.splice(to, 0, dragged);
    }

    setLists(
      produce(lists, (draft) => {
        const dragged = draft[fromList].cards[from];

        removeItemFromListPosition(draft)
        addItemOnAnotherPosition(draft, dragged)
      })
    );
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      {children}
    </BoardContext.Provider>
  );
};

export const useBoardContext = () => useContext(BoardContext);
