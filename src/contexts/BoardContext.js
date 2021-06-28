import { createContext, useReducer, useEffect } from 'react';
import BoardReducer from './BoardReducer';
import useLocalStorage from '../hooks/useLocalStorage';

import { columnsMock } from '../mock';

export const BoardContext = createContext();

export default function BoardProvider({ children }) {
  const [localStorageColumns, setLocalStorageColumns] = useLocalStorage(
    'columns',
    columnsMock
  );
  const [columns, dispatch] = useReducer(BoardReducer, localStorageColumns);

  const handleDragEnd = (result) => {
    const { type, source, destination } = result;
    if (!destination) return;
    const sourceId = source.droppableId;
    const destinationId = destination.droppableId;

    const moveCard = () => {
      const [movedItem] = columns[sourceId].items.splice(source.index, 1);
      const isMovedToSameColumn = sourceId === destinationId;

      if (isMovedToSameColumn) {
        return dispatch({
          type: 'MOVE_CARD_TO_SAME_COLUMN',
          payload: { source, destination, movedItem },
        });
      }

      if (!isMovedToSameColumn) {
        return dispatch({
          type: 'MOVE_CARD_TO_ANOTHER_COLUMN',
          payload: { source, destination, movedItem },
        });
      }
    };

    const moveTask = () => {
      const columnsArray = ['backlog', 'todo', 'doing', 'done'];
      const [columnId] = columnsArray.filter((column) =>
        sourceId.includes(column)
      );
      const cardId = sourceId.replace(`${columnId}-`, '');
      return dispatch({
        type: 'MOVE_CARD_TASK',
        payload: { columnId, source, destination, cardId },
      });
    };

    const dragActionTypes = (action) => {
      const actions = {
        cards: moveCard,
        tasks: moveTask,
      };
      return actions[action]();
    };

    dragActionTypes(type);
  };

  const createCardOnColumn = (columnId, cardData) => {
    dispatch({ type: 'CREATE_CARD', payload: { columnId, cardData } });
  };

  const updateCardFromColumn = (columnId, cardData) => {
    dispatch({ type: 'UPDATE_CARD', payload: { columnId, cardData } });
  };

  const deleteCardFromColumn = (columnId, cardId) => {
    dispatch({ type: 'DELETE_CARD', payload: { columnId, cardId } });
  };

  const toggleTaskIsDone = (columnId, cardId, taskId) => {
    dispatch({
      type: 'TOGGLE_TASK_IS_DONE',
      payload: { columnId, cardId, taskId },
    });
  };

  const addTaskToCard = (columnId, cardId) => {
    dispatch({ type: 'ADD_TASK_TO_CARD', payload: { columnId, cardId } });
  };

  const editCardTask = ({ columnId, cardId, taskId, taskText }) => {
    dispatch({
      type: 'EDIT_CARD_TASK',
      payload: { columnId, cardId, taskId, taskText },
    });
  };

  const deleteCardTask = ({ columnId, cardId, taskId }) => {
    dispatch({
      type: 'DELETE_CARD_TASK',
      payload: { columnId, cardId, taskId },
    });
  };

  useEffect(() => {
    setLocalStorageColumns(columns);
  }, [columns, setLocalStorageColumns]);

  return (
    <BoardContext.Provider
      value={{
        columns,
        handleDragEnd,
        createCardOnColumn,
        updateCardFromColumn,
        deleteCardFromColumn,
        toggleTaskIsDone,
        addTaskToCard,
        editCardTask,
        deleteCardTask,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
}
