import { useRef } from "react";
import { Container, Label } from "./styles.js";
import { useDrag, useDrop } from "react-dnd";

export function Card({ data, targetIndex }) {
  const ref = useRef();
  const [{ isDraggin }, dragRef] = useDrag({
    type: 'CARD',
    item: {
      // id: data.id,
      targetIndex,
      // content: data.content
    },
    collect: (monitor) => ({
      isDraggin: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) { 
      const draggedIndex = item.targetIndex;

      const isUserDraginTheCardInsideTheSame = draggedIndex === targetIndex;

      if (isUserDraginTheCardInsideTheSame) return;

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();

      const draggedTop = draggedOffset.y - targetSize.top;
      
      const draggedItemComesBefore = draggedIndex < targetIndex
      const draggedItemIsAboveTarget = draggedTop < targetCenter

      if (draggedItemComesBefore && draggedItemIsAboveTarget) return;

      const draggedItemComesAfter = draggedIndex > targetIndex;
      const draggedItemIsBelowTarget = draggedTop > targetCenter

      if (draggedItemComesAfter && draggedItemIsBelowTarget) return;

      console.log('test')
      // if (draggedIndex < tar)
    },
    
  })


  dragRef(dropRef(ref))


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
