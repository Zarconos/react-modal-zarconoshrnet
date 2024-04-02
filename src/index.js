


import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import './styles.module.css'

const Modal = ({ onClose, content, options }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const modalRef = useRef(null);

  const handleClose = useCallback(() => {
    setIsModalOpen(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClose]);

  return isModalOpen ? (
    <div className="modal">
      <div className="modal-content" ref={modalRef}>
        {content}
        <button className="close-modal" onClick={handleClose} data-testid="modal-close-button">
          {options.closeText}
        </button>
      </div>
    </div>
  ) : null;
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  content: PropTypes.node.isRequired,
  options: PropTypes.shape({
    closeText: PropTypes.string.isRequired,
    modalText: PropTypes.string,
  }),
};

Modal.defaultProps = {
  options: {
    modalText: '',
  },
};

export default Modal;