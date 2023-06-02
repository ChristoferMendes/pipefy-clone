import { useRef } from "react";
import { Container, Label } from "./styles.js";
import { useDrag, useDrop } from "react-dnd";
import { useBoardContext } from "../Board/contet.jsx";

export function Card({ data, targetIndex, targetListIndex }) {
  const { move } = useBoardContext();
  const ref = useRef();
  const [{ isDraggin }, dragRef] = useDrag({
    type: "CARD",
    item: {
      // id: data.id,
      targetIndex,
      targetListIndex
      // content: data.content
    },
    collect: (monitor) => ({
      isDraggin: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "CARD",
    hover(item, monitor) {
      const draggedIndex = item.targetIndex;
      const draggedTargetListIndex = item.targetListIndex

      const isUserDraginTheCardInsideTheSame = draggedIndex === targetIndex;
      const isUserDraginTheCardInsideTheSameList = draggedTargetListIndex === targetListIndex;

      if (isUserDraginTheCardInsideTheSame && isUserDraginTheCardInsideTheSameList) return;

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();

      const draggedTop = draggedOffset.y - targetSize.top;

      const draggedItemComesBefore = draggedIndex < targetIndex;
      const draggedItemIsAboveTarget = draggedTop < targetCenter;

      if (draggedItemComesBefore && draggedItemIsAboveTarget) return;

      const draggedItemComesAfter = draggedIndex > targetIndex;
      const draggedItemIsBelowTarget = draggedTop > targetCenter;

      if (draggedItemComesAfter && draggedItemIsBelowTarget) return;

      move(draggedTargetListIndex, targetListIndex, draggedIndex, targetIndex);

      item.targetIndex = targetIndex;
      item.targetListIndex = targetListIndex;
    },
  });

  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDraggin={isDraggin}>
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
