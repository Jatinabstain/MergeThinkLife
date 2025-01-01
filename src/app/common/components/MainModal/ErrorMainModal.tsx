import React from 'react';
import Image from 'next/image';
import errorIcon from '../../../../../public/assets/error-modal.svg'; // Assuming an error image

export const ErrorMainModal: React.FC<{ 
  isOpen: boolean; 
  onClose: () => void; 
  message: string; 
  title: string; 
  isError?: boolean; // Optional flag to differentiate error modals
}> = ({ isOpen, onClose, message, title, isError = false }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[999]" onClick={handleOverlayClick}>
      <div className={`modal_content lg:w-full w-[90%] ${isError ? 'error_modal' : ''}`}>
        <Image 
          src={isError ? errorIcon : errorIcon} 
          alt={isError ? 'Error' : 'Success'} 
          className="mx-auto mb-6"
        />
        <h2 className={isError ? 'text-red-500' : 'text-green-500'}>{title}</h2>
        <p>{message}</p>
        <button onClick={onClose} className={`primary_fill ms-auto ${isError ? 'bg-red-500' : 'bg-green-500'}`}>
          Close
        </button>
      </div>
    </div>
  );
};
