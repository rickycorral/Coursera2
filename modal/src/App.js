import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling

const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      <div className={`modal ${modalOpen ? 'open' : ''}`}>
        <div className="modal-content">
          <h2>Bitcoin Information</h2>
          <p>
            Bitcoin is a decentralized digital currency, without a central
            bank or single administrator, that can be sent from user to user
            on the peer-to-peer bitcoin network without the need for
            intermediaries.
          </p>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
