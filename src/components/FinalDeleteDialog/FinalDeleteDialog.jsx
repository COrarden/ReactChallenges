import React from 'react';
import './ConfirmationDialog.css'; // Reuse same styles

function FinalDeleteDialog({ onConfirm, onCancel }) {
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
