import React from 'react';
import Image from 'next/image';
import check from '../../../../../public/assets/check-modal.svg';

export const MainModal: React.FC<{ isOpen: boolean; onClose: () => void; message: string;title:string; }> = ({ isOpen, onClose,message,title  }) => {
    if (!isOpen) return null;

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[999]" onClick={handleOverlayClick}>
            <div className="modal_content lg:w-full w-[90%]">
                <Image src={check} alt='check' className='mx-auto mb-6' />
                <h2>{title}</h2>
                <p>{message}</p>
                <button onClick={onClose} className="primary_fill ms-auto">
                    Close
                </button>
            </div>
        </div>
    );
};