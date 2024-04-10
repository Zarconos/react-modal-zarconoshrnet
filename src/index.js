import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import './styles.module.css';

const Modal = ({ onClose, content, options }) => {
  // State pour suivre l'état d'ouverture du modal
  const [isModalOpen, setIsModalOpen] = useState(true);
  // Référence au contenu du modal pour détecter les clics à l'extérieur
  const modalRef = useRef(null);

  // Fonction pour gérer la fermeture du modal
  const handleClose = useCallback(() => {
    setIsModalOpen(false); // Met à jour l'état du modal
    onClose(); // Appelle la fonction onClose fournie par le parent
  }, [onClose]);

  // Effet pour écouter les événements clavier et souris
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleClose(); // Ferme le modal si la touche Escape est pressée
      }
    };

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose(); // Ferme le modal si le clic est en dehors du contenu
      }
    };

    // Ajoute des écouteurs d'événements
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    // Supprime les écouteurs d'événements lors du démontage du composant
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClose]);

  return isModalOpen ? (
    <div className="modal">
      <div className="modal-content" ref={modalRef}>
        {content} {/* Contenu du modal */}
        <button className="close-modal" onClick={handleClose} data-testid="modal-close-button">
          {options.closeText} {/* Texte du bouton de fermeture */}
        </button>
      </div>
    </div>
  ) : null;
};

// Définition des types des props avec PropTypes
Modal.propTypes = {
  onClose: PropTypes.func.isRequired, // Fonction de fermeture requise
  content: PropTypes.node.isRequired, // Contenu du modal
  options: PropTypes.shape({
    closeText: PropTypes.string.isRequired, // Texte de fermeture requis
    modalText: PropTypes.string, // Texte du modal
  }),
};

// Valeurs par défaut des options du modal
Modal.defaultProps = {
  options: {
    modalText: '', // Texte du modal par défaut
  },
};

export default Modal; // Exporte le composant Modal
