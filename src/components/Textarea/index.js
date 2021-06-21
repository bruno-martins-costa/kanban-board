import { useRef, useEffect } from 'react';
import { Container, Field } from './styles';

export default function Textarea({ value, handleChange, autofocus, isDone }) {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (autofocus) textareaRef.current.focus();
  }, [autofocus]);

  return (
    <Container isDone={isDone}>
      <Field
        ref={textareaRef}
        async={true}
        defaultValue={value}
        onChange={handleChange}
      />
    </Container>
  );
}
