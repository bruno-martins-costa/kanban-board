import { useContext } from 'react';

import { BoardContext } from '../../../contexts/BoardContext';

import {
  Container,
  Task,
  CheckBox,
  RemoveTask,
  NoneTasks,
  TextareaContainer,
} from './styles';
import { Textarea } from '../../';

import { HiCheck } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

import { framerOptions } from './framerOptions';

export default function TasksList({
  tasks,
  columnId,
  cardId,
  setCurrentEditingTask,
}) {
  const { toggleTaskIsDone, deleteCardTask } = useContext(BoardContext);

  return (
    <Container {...framerOptions}>
      {!!tasks.length ? (
        tasks.map(({ taskId, isDone, task }, index) => (
          <Task key={taskId}>
            <CheckBox
              isDone={isDone}
              onClick={() => toggleTaskIsDone(columnId, cardId, taskId)}
            >
              {isDone && <HiCheck color='#fff' />}
            </CheckBox>

            <TextareaContainer>
              <Textarea
                autofocus={index === 0 && !task}
                value={task}
                id={taskId}
                cardId={cardId}
                columnId={columnId}
                isDone={!!isDone}
                handleChange={(ev) =>
                  setCurrentEditingTask({
                    columnId,
                    cardId,
                    taskId,
                    inputValue: ev.target.value,
                  })
                }
              />

              <RemoveTask
                className='removeTask'
                onClick={() => deleteCardTask(columnId, cardId, taskId)}
              >
                <IoClose size={10} />
              </RemoveTask>
            </TextareaContainer>
          </Task>
        ))
      ) : (
        <NoneTasks>
          {`This story has no tasks yet.
            You can create one and start working :)`}
        </NoneTasks>
      )}
    </Container>
  );
}
