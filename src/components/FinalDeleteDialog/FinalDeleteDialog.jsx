import React from 'react';
import '../ConfirmationDialog/ConfirmationDialog.module.css'; // Reuse same styles

function FinalDeleteDialog({ onConfirm, onCancel }) {
//    //Close on ESC Key
// //***Something is not right with this useEffect, it is not working as expected***//
//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === 'Escape') {
//         onCancel();
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [onCancel]);

//   //Close on Click Outside of Modal
//   const handleOverlayClick = (event) => {
//     if (event.target.classList.contains('modal-overlay')) {
//       onCancel();
//     }
//   };

//   // Prevents the click event from bubbling up to the overlay
//   const stopPropagation = (event) => {
//     event.stopPropagation();
//   }

    return (
    <div className="modal-overlay">
      <div className="modal-box">
        <img
          src="https://media1.tenor.com/m/Z21orJsHOGoAAAAd/are-you-sure-john-cena.gif"
          alt="Delete Warning"
          style={{ width: '100%', marginBottom: '1rem', borderRadius: '0.5rem' }}
        />
        <p className="modal-text">R U Sure About Dat?</p>
        <div className="modal-actions">
          <button className="cancel-button" onClick={onCancel}>Cancel</button>
          <button className="confirm-delete-button" onClick={onConfirm}>Yes, Delete Permanently</button>
        </div>
      </div>
    </div>
  );
}

export default FinalDeleteDialog;
