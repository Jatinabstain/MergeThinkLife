"use client";

import React, { useState } from 'react';
import Form from "next/form";
import { MainModal } from '../components/MainModal/MainModal';

export default function Subscribe() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
   
    const closeModal = () => setIsModalOpen(false);
    const [modalTitle, setModalTitle] = useState<string>('Thank you');
    const [modalMessage, setModalMessage] = useState<string>('We will notify you as soon as possible. Have a great day!');
    const [errors, setErrors] = useState({
        subscribe: '',
    });

    const validateForm = () => {
        let isValid = true;
        const errorMessages = {
            subscribe: '',
        };

        const subscribe = (document.getElementById('subscribe') as HTMLInputElement).value;

        if (!subscribe) {
            errorMessages.subscribe = 'Email is required.';
            isValid = false;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!subscribe || !subscribe.match(emailPattern)) {
            errorMessages.subscribe = 'Enter a valid email.';
            isValid = false;
        }

        setErrors(errorMessages);

        if (isValid) {
            setModalTitle('Thank you for showing interest.');
            setModalMessage('Congratulations you have successfully subscribed to our newsletter.');
            setIsModalOpen(true);
            (document.getElementById('subscribe') as HTMLInputElement).value = '';

        }

    }

    return (
        <div className="subscribe_newsletter">
            <Form action="/">
                <div className="form-group">
                    <label htmlFor="subscribe" className="light_label">Subscribe to our newsletter</label>
                    <div className="flex gap-x-4 gap-y-4 items-center">
                        <input type="text" id="subscribe" className="lg:max-w-[277px] max-w-[330px] w-full form-control" placeholder="Your Email" />
                        <button type="submit" onClick={(e) => {
                            e.preventDefault();
                            validateForm();
                        }}
                        className="primary_fill">Subscribe</button>
                    </div>
                    <div className="text-red-600 text-sm mt-2">   {errors.subscribe ? errors.subscribe : '\u00A0'}</div>
                </div>
            </Form>
            <MainModal title={modalTitle} message={modalMessage} isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}