import { useState, useContext, useEffect, useRef, useCallback } from 'react';

import { BoardContext } from '../../contexts/BoardContext';
import { Draggable } from 'react-beautiful-dnd';

import { Container, CardContainer, TagsList } from './styles';
import { Header, TasksList, Footer, Tag } from '../';

import { AnimatePresence } from 'framer-motion';

import { reduceDoneTasks } from '../../utils/reduceDoneTasks';

export default function Card({ index, columnId, cardData, handleOpenModal }) {
  const { cardId, description, tags, tasks, createdAt, lastUpdate } = cardData;

  const [isTasksListOpen, setIsTasksListOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [editingCardData, setEditingCardData] = useState(null);

  const { addTaskToCard, editCardTask, deleteCardFromColumn } =
    useContext(BoardContext);

  const cardRef = useRef(null);

  const setCurrentEditingTask = (editingCardValues) => {
    setEditingCardData(editingCardValues);
  };

  const handleAddTask = () => {
    if (!isTasksListOpen) setIsTasksListOpen(true);
    addTaskToCard(columnId, cardId);
    setIsMenuOpen(false);
  };

  const handleEditCard = () => {
    setIsMenuOpen(false);
    handleOpenModal();
  };

  const handleClickOutside = useCallback(
    (event) => {
      const hasCurrent = cardRef.current;
      const isClickedInside = !!cardRef.current.contains(event.target);
      if (hasCurrent && isClickedInside && isMenuOpen)
        return setIsMenuOpen(false);
      if (hasCurrent && !isClickedInside) return setIsMenuOpen(false);
    },
    [isMenuOpen]
  );

  useEffect(() => {
    if (editingCardData) {
      const timer = setTimeout(() => {
        editCardTask({ ...editingCardData });
        setEditingCardData(null);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [editingCardData, editCardTask]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <Draggable draggableId={cardId} key={cardId} index={index}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          provided={provided}
          snapshot={snapshot}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <CardContainer snapshot={snapshot} ref={cardRef}>
            <Header
              description={description}
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={() => setIsMenuOpen((prevState) => !prevState)}
              handleAddTask={() => handleAddTask()}
              handleEditCard={() => handleEditCard()}
              handleDeleteCard={() => deleteCardFromColumn(columnId, cardId)}
            />

            <TagsList>
              {tags.map((tag) => (
                <Tag tag={tag} key={tag}>
                  {tag}
                </Tag>
              ))}
            </TagsList>

            <AnimatePresence>
              {isTasksListOpen && (
                <TasksList
                  tasks={tasks}
                  columnId={columnId}
                  cardId={cardId}
                  setCurrentEditingTask={setCurrentEditingTask}
                />
              )}
            </AnimatePresence>

            <Footer
              lastUpdate={lastUpdate}
              createdAt={createdAt}
              isTasksListOpen={isTasksListOpen}
              openTasksList={() =>
                setIsTasksListOpen((prevState) => !prevState)
              }
              totalDoneTasks={reduceDoneTasks(tasks)}
              totalTasks={tasks.length}
            />
          </CardContainer>
          {provided.placeholder}
        </Container>
      )}
    </Draggable>
  );
}
