import React from 'react';
import Image from 'next/image';
import check from '../../../../../public/assets/check-modal.svg';

export const MainModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[999]" onClick={handleOverlayClick}>
            <div className="modal_content">
                <Image src={check} alt='check' className='mx-auto mb-6' />
                <h2>Thank you for getting in touch!</h2>
                <p>We will notify you as soon as possible. <br /> Have a great day!</p>
                <button onClick={onClose} className="primary_fill ms-auto">
                    Close
                </button>
            </div>
        </div>
    );
};