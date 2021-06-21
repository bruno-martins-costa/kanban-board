import { Container, Backdrop, ModalWindow, ModalContent } from './styles';
import { AnimatePresence } from 'framer-motion';
import { framerOptions } from './framerOptions';

export default function Modal({ children, isModalOpen, handleCloseEditor }) {
  const { backdropAnimation, modalWindowAnimation, modalContentAnimation } =
    framerOptions;

  return (
    <AnimatePresence>
      {isModalOpen && (
        <Container>
          <Backdrop {...backdropAnimation} onClick={handleCloseEditor} />

          <ModalWindow {...modalWindowAnimation}>
            <ModalContent {...modalContentAnimation}>{children}</ModalContent>
          </ModalWindow>
        </Container>
      )}
    </AnimatePresence>
  );
}
