import React from 'react';
import './ConfirmationDialog.module.css';

function ConfirmationDialog({ onConfirm, onCancel }) {
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