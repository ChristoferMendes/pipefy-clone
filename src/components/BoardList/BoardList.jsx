import { useBoardContext } from "../Board/contet.jsx";
import { List } from "../List/List.jsx";

export function BoardList() {
  const { lists } = useBoardContext();

  return (
    <>
      {lists.map((list, index) => (
        <List key={list.title} data={list} listIndex={index} />
      ))}
    </>
  );
}
