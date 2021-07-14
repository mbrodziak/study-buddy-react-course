import { useState } from 'react';

const useModal = (initialState = false) => {
  const [isOpen, setModalState] = useState(initialState);
  const [isOpenEvents, setModalStateEvents] = useState(initialState);

  const handleOpenModal = () => setModalState(true);
  const handleCloseModal = () => setModalState(false);

  const handleOpenEventsModal = () => setModalStateEvents(true);
  const handleCloseEventsModal = () => setModalStateEvents(false);

  return {
    isOpen,
    handleOpenModal,
    handleCloseModal,
    isOpenEvents,
    handleOpenEventsModal,
    handleCloseEventsModal,
  };
};

export default useModal;
