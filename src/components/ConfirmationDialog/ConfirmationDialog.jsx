import React, { use } from 'react';
import './ConfirmationDialog.module.css';

function ConfirmationDialog({ onConfirm, onCancel }) {
  // //Close on ESC Key
  //***Something is wrong with this useEffect; it is not working as intended ***//
  // useEffect(() => {
  //   const handleKeyDown = (event) => {
  //     if (event.key === 'Escape') {
  //       onCancel();
  //     }
  //   };

  //   window.addEventListener('keydown', handleKeyDown);
  //   return () => {
  //     window.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, [onCancel]);

  // //Close on Click Outside of Modal
  // const handleOverlayClick = (event) => {
  //   if (event.target.classList.contains('modal-overlay')) {
  //     onCancel();
  //   }
  // };

  // const stopPropagation = (event) => {
  //   event.stopPropagation();
  // }

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <p className="modal-text">Are you sure you want to delete this post?</p>
        <div className="modal-actions">
          <button className="cancel-button" onClick={onCancel}>Cancel</button>
          <button className="confirm-delete-button" onClick={onConfirm}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationDialog;