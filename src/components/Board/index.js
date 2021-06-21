import { useContext, useMemo } from 'react';

import { DragDropContext } from 'react-beautiful-dnd';
import { BoardContext } from '../../contexts/BoardContext';
import { EditorContext } from '../../contexts/EditorContext';

import { Container } from './styles';
import {
  AddButton,
  Card,
  Column,
  CardsList,
  ColumnInfo,
  NoCardsPlaceholder,
} from '../';

export default function Board() {
  const { columns, handleDragEnd } = useContext(BoardContext);
  const { handleOpenEditor } = useContext(EditorContext);

  const ColumnsMemo = useMemo(() => {
    return Object.entries(columns).map(
      ([columnId, { name: columnName, items: cards }]) => (
        <Column key={columnId}>
          <ColumnInfo columnName={columnName} totalCards={cards.length} />

          <CardsList id={columnId}>
            <AddButton
              handleOpenEditor={() =>
                handleOpenEditor({ columnName, columnId })
              }
            />

            {!!cards.length ? (
              cards.map((cardData, index) => (
                <Card
                  key={cardData.cardId}
                  index={index}
                  columnId={columnId}
                  cardData={cardData}
                  handleOpenModal={() =>
                    handleOpenEditor({
                      columnName,
                      columnId,
                      ...cardData,
                    })
                  }
                />
              ))
            ) : (
              <NoCardsPlaceholder />
            )}
          </CardsList>
        </Column>
      )
    );
  }, [columns, handleOpenEditor]);

  return (
    <DragDropContext onDragEnd={(result) => handleDragEnd(result)}>
      <Container>{ColumnsMemo}</Container>
    </DragDropContext>
  );
}
