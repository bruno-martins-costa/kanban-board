import { Container, Button } from './styles';
import { GrAdd } from 'react-icons/gr';

export default function AddButton({ handleOpenEditor }) {
  return (
    <Container>
      <Button onClick={handleOpenEditor}>
        <GrAdd color='#636363' size={14} />
        Add Card
      </Button>
    </Container>
  );
}
