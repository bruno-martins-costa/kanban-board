import { v4 as uuidv4 } from 'uuid';
import { createTaskSchema } from '../schemas/taskSchema';

export default function BoardReducer(state, action) {
  const { type, payload } = action;
  const {
    columnId,
    cardId,
    description,
    tags,
    tasks,
    createdAt,
    taskId,
    taskText,
    source,
    destination,
  } = { ...payload.cardData, ...payload };
  const { droppableId: destinationDroppableId } = { ...destination };
  const { droppableId: sourceDroppableId } = { ...source };

  const setCardToAnotherColumn = () => {
    const destinationItems = state[destinationDroppableId].items;
    destinationItems.splice(payload.destination.index, 0, payload.movedItem);

    return {
      ...state,
      [sourceDroppableId]: {
        ...state[sourceDroppableId],
        items: state[sourceDroppableId].items,
      },
      [destinationDroppableId]: {
        ...state[destinationDroppableId],
        items: destinationItems,
      },
    };
  };

  const setCardToSameColumn = () => {
    const sourceItems = state[payload.source.droppableId].items;
    sourceItems.splice(payload.destination.index, 0, payload.movedItem);

    return {
      ...state,
      [payload.source.droppableId]: {
        ...state[payload.source.droppableId],
        items: sourceItems,
      },
    };
  };

  const setCreateCard = () => {
    const newCard = {
      cardId: uuidv4(),
      description,
      tags,
      tasks,
      createdAt: new Date().toISOString(),
      lastUpdate: new Date().toISOString(),
    };

    return {
      ...state,
      [columnId]: {
        ...state[columnId],
        items: [newCard, ...state[columnId].items],
      },
    };
  };

  const setUpdateCard = () => {
    const updatedCard = {
      cardId,
      description,
      tags,
      tasks,
      createdAt,
      lastUpdate: new Date().toISOString(),
    };

    return {
      ...state,
      [columnId]: {
        ...state[columnId],
        items: state[columnId].items.map((item) =>
          item.cardId === cardId ? updatedCard : item
        ),
      },
    };
  };

  const setDeleteCard = () => {
    return {
      ...state,
      [columnId]: {
        ...state[columnId],
        items: state[columnId].items.filter((item) => item.cardId !== cardId),
      },
    };
  };

  const setToggleTaskIsDone = () => {
    return {
      ...state,
      [columnId]: {
        ...state[columnId],
        items: state[columnId].items.map((item) =>
          item.cardId === cardId
            ? {
                ...item,
                lastUpdate: new Date().toISOString(),
                tasks: item.tasks.map((task) =>
                  task.taskId === taskId
                    ? { ...task, isDone: !task.isDone }
                    : task
                ),
              }
            : item
        ),
      },
    };
  };

  const setAddTaskToCard = () => {
    return {
      ...state,
      [columnId]: {
        ...state[columnId],
        items: state[columnId].items.map((item) =>
          item.cardId === cardId
            ? {
                ...item,
                lastUpdate: new Date().toISOString(),
                tasks: [createTaskSchema(uuidv4()), ...item.tasks],
              }
            : item
        ),
      },
    };
  };

  const setEditCardTask = () => {
    return {
      ...state,
      [columnId]: {
        ...state[columnId],
        items: state[columnId].items.map((item) =>
          item.cardId === cardId
            ? {
                ...item,
                lastUpdate: new Date().toISOString(),
                tasks: item.tasks.map((task) =>
                  task.taskId === taskId ? { ...task, task: taskText } : task
                ),
              }
            : item
        ),
      },
    };
  };

  const setDeleteCardTask = () => {
    return {
      ...state,
      [columnId]: {
        ...state[columnId],
        items: state[columnId].items.map((item) =>
          item.cardId === cardId
            ? {
                ...item,
                tasks: item.tasks.filter((task) => task.taskId !== taskId),
              }
            : item
        ),
      },
    };
  };

  const setStateReducerTypes = {
    MOVE_CARD_TO_ANOTHER_COLUMN: setCardToAnotherColumn,
    MOVE_CARD_TO_SAME_COLUMN: setCardToSameColumn,
    CREATE_CARD: setCreateCard,
    UPDATE_CARD: setUpdateCard,
    DELETE_CARD: setDeleteCard,
    TOGGLE_TASK_IS_DONE: setToggleTaskIsDone,
    ADD_TASK_TO_CARD: setAddTaskToCard,
    EDIT_CARD_TASK: setEditCardTask,
    DELETE_CARD_TASK: setDeleteCardTask,
  };

  return setStateReducerTypes[type]() || state;
}
