import { Droppable } from 'react-beautiful-dnd';
import { ListContainer } from './styles';

export default function CardsList({ id, children }) {
  return (
    <Droppable droppableId={id}>
      {(provided, snapshot) => (
        <ListContainer
          ref={provided.innerRef}
          isDraggingOver={snapshot.isDraggingOver}
          {...provided.droppableProps}
        >
          {children}
          {provided.placeholder}
        </ListContainer>
      )}
    </Droppable>
  );
}
