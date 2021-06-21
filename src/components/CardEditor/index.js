import { useContext, useRef } from 'react';
import { BoardContext } from '../../contexts/BoardContext';

import {
  Container,
  Description,
  Label,
  TaskTextarea,
  ButtonsContainer,
  Button,
} from './styles';
import { Modal, TagsSelector } from '../';
import { EditorContext } from '../../contexts/EditorContext';

export default function CardEditor() {
  const { createCardOnColumn, updateCardFromColumn } = useContext(BoardContext);
  const { editor, handleCloseEditor, handleEditCardData } =
    useContext(EditorContext);

  const currentEditing = editor.currentEditing;

  const { columnName, columnId, cardId, description, tags } = currentEditing;

  const textareaRef = useRef(null);

  const executeOperationFunction = (type) => {
    const types = {
      create: () => createCardOnColumn(columnId, currentEditing),
      update: () => updateCardFromColumn(columnId, currentEditing),
    };
    return types[type]();
  };

  const handleButtonAction = (type) => {
    executeOperationFunction(type);
    handleCloseEditor();
  };

  return (
    <Modal
      isModalOpen={editor.isEditorOpen}
      handleCloseEditor={handleCloseEditor}
    >
      <Container>
        <Description>
          {`${!cardId ? 'Creating card in' : 'Editing card in'} ${columnName}`}
        </Description>

        <Label>Description</Label>

        <TaskTextarea
          ref={textareaRef}
          placeholder='Type a description here'
          defaultValue={description}
          onChange={(ev) =>
            handleEditCardData({ key: 'description', value: ev.target.value })
          }
        />

        <Label>Tags</Label>

        <TagsSelector
          handleChange={(tags) =>
            handleEditCardData({ key: 'tags', value: tags })
          }
          selecteds={tags}
        />

        <ButtonsContainer>
          <Button onClick={() => handleCloseEditor()} horizontalPadding={16}>
            Cancel
          </Button>

          {!cardId && (
            <Button
              onClick={() => handleButtonAction('create')}
              horizontalPadding={32}
              disabled={!description.trim() || !tags.length}
              colors={{
                background: '#279EFF',
                font: '#FFF',
                shadow: 'rgb(13, 110, 253, 0.35)',
              }}
            >
              Create
            </Button>
          )}

          {!!cardId && (
            <Button
              onClick={() => handleButtonAction('update')}
              horizontalPadding={32}
              disabled={!description.trim() || !tags.length}
              colors={{
                background: '#039be5',
                font: '#FFF',
                shadow: 'rgb(13, 110, 253, 0.35)',
              }}
            >
              Edit
            </Button>
          )}
        </ButtonsContainer>
      </Container>
    </Modal>
  );
}
