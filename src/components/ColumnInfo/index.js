import { Container, ColumnName, Counter } from './styles';

export default function ColumnInfo({ columnName, totalCards }) {
  return (
    <Container>
      <ColumnName>{columnName}</ColumnName>
      <Counter>{totalCards}</Counter>
    </Container>
  );
}
