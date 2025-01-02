"use client";

import React, { useState, useRef } from 'react';
import Form from "next/form";
import { MainModal } from '../components/MainModal/MainModal';
import { ErrorMainModal } from '../components/MainModal/ErrorMainModal';

export default function Subscribe() {
    const [isModalOpen, setIsModalOpen]     =   useState<boolean>(false);
    const [modalTitle, setModalTitle]       =   useState<string>('Thank you');
    const [modalMessage, setModalMessage]   =   useState<string>('We will notify you as soon as possible. Have a great day!');

    const [isErrorModalOpen, setIsErrorModalOpen]   =   useState<boolean>(false);
    const [ErrorModalTitle, setErrorModalTitle]     =   useState<string>('Error');
    const [ErrorModalMessage, setErrorModalMessage] =   useState<string>('There was some issue, please try again later');

    const [errors, setErrors]       =   useState({ subscribe: '' }); // Track form errors
    const [isLoading, setIsLoading] =   useState<boolean>(false); // Track loading state
    
    const emailRef          =   useRef<HTMLInputElement | null>(null);
    const closeModal        =   () => setIsModalOpen(false);
    const closeErrorModal   =   () => setIsErrorModalOpen(false);

    const validateForm = () => {
        const email         =   emailRef.current?.value ?? '';
        let isValid         =   true;
        const errorMessages =   { subscribe: '' };

        if (!email) {
            errorMessages.subscribe =   'Email is required.';
            isValid                 =   false;
        } else if (!isValidEmail(email)) {
            errorMessages.subscribe =   'Enter a valid email.';
            isValid                 =   false;
        }

        setErrors(errorMessages);

        if (isValid) {
            addOrUpdateContactToNewsletter(email);
        }
    };

    const isValidEmail = (email: string): boolean => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return email.match(emailPattern) !== null;
    };

    const addOrUpdateContactToNewsletter = async (email: string) => {
        setIsLoading(true); // Set loading to true when the request starts

        const listId = await getListId('Newsletter');

        if (!listId) {
            console.error('Newsletter list not found!');
            setIsLoading(false); // Reset loading state on error
            return;
        }

        try {
            const response = await fetch('https://api.sendgrid.com/v3/marketing/contacts', {
                method: 'PUT',
                headers: {
                    'Authorization':    `Bearer ${process.env.NEXT_PUBLIC_SENDGRID_API_KEY}`,
                    'Content-Type':     'application/json',
                },
                body: JSON.stringify({
                    contacts: [
                        {
                            email,
                            list_ids: [listId],
                        },
                    ],
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
           
            console.log('Contact added/updated successfully:', data);

            setModalTitle('Thank you for showing interest.');
            setModalMessage('Congratulations, you have successfully subscribed to our newsletter.');
            setIsModalOpen(true);

            if (emailRef.current) {
                emailRef.current.value = ''; // Clear input after successful submission
            }
        } catch (error) {
            setErrorModalTitle('Error');
            setErrorModalMessage('There was some issue, please try again later.');
            setIsErrorModalOpen(true);
            console.error('Error adding/updating contact:', error);
        } finally {
            setIsLoading(false); // Reset loading state after the request is complete
        }
    };

    const getListId = async (listName: string) => {
        try {
            const response = await fetch('https://api.sendgrid.com/v3/marketing/lists', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SENDGRID_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            const list = data.result.find((list: { name: string; id: string }) => list.name === listName);
            // const list = data.result.find((list: any) => list.name === listName);
            return list ? list.id : null;
        } catch (error) {
            console.error('Error fetching list ID:', error);
            return null;
        }
    };

    return (
        <div className="subscribe_newsletter">
            <Form action="/">
                <div className="form-group">
                    <label htmlFor="subscribe" className="light_label">Subscribe to our newsletter</label>
                    <div className="flex gap-x-4 gap-y-4 items-center">
                        <input
                            type="text"
                            id="subscribe"
                            ref={emailRef}
                            className="lg:max-w-[277px] max-w-[330px] w-full form-control"
                            placeholder="Your Email"
                            disabled={isLoading} // Disable input while loading
                        />
                        <button
                            type="submit"
                            onClick={(e) => {
                                e.preventDefault();
                                if (!isLoading) { // Prevent click if loading
                                    validateForm();
                                }
                            }}
                            className="primary_fill"
                            disabled={isLoading} // Disable button while loading
                        >
                            {isLoading ? 'Please Wait' : 'Subscribe'} {/* Show loading message */}
                        </button>
                    </div>
                    <div className="text-red-600 text-sm mt-2">
                        {errors.subscribe || '\u00A0'}
                    </div>
                </div>
            </Form>
            <MainModal title={modalTitle} message={modalMessage} isOpen={isModalOpen} onClose={closeModal} />
            <ErrorMainModal title={ErrorModalTitle} message={ErrorModalMessage} isOpen={isErrorModalOpen} onClose={closeErrorModal} />
        </div>
    );
}
