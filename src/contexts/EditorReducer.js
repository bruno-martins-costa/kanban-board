import { cardSchema } from '../schemas/cardSchema';

export default function EditorReducer(state, action) {
  const { type, payload } = action;

  const setOpenEditor = () => {
    return {
      ...state,
      isEditorOpen: true,
      currentEditing: {
        ...state.currentEditing,
        ...payload,
      },
    };
  };

  const setCloseEditor = () => {
    return {
      isEditorOpen: false,
      currentEditing: cardSchema,
    };
  };

  const setEditCardData = () => {
    return {
      ...state,
      currentEditing: {
        ...state.currentEditing,
        [payload.key]: payload.value,
      },
    };
  };

  const setStateReducerTypes = {
    OPEN_EDITOR: setOpenEditor,
    CLOSE_EDITOR: setCloseEditor,
    EDIT_CARD_DATA: setEditCardData,
  };

  return setStateReducerTypes[type]() || state;
}
