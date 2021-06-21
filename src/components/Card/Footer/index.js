import { Container, DateInfo, StoryInfo, DoneAndTotal } from './styles';

import { BsCheckBox } from 'react-icons/bs';

import { formatDate } from '../../../utils/formatDate';

export default function Footer({
  lastUpdate,
  createdAt,
  isTasksOpen,
  openTasksList,
  totalDoneTasks,
  totalTasks,
}) {
  return (
    <Container>
      <DateInfo>{formatDate(lastUpdate || createdAt)}</DateInfo>
      <StoryInfo>
        <DoneAndTotal isTasksOpen={isTasksOpen} onClick={openTasksList}>
          <BsCheckBox />
          {`${totalDoneTasks}/${totalTasks}`}
        </DoneAndTotal>
      </StoryInfo>
    </Container>
  );
}
