import { Container } from './styles';
import { useEffect } from 'react';

export default function Column({ children }) {
  useEffect(() => {
    console.log('renderizou o Column');
  });
  return <Container>{children}</Container>;
}
