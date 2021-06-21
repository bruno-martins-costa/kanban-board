import { Container } from './styles';

export default function Tag({ children, tag }) {
  return (
    <Container tag={tag} className='tag'>
      {children}
    </Container>
  );
}
