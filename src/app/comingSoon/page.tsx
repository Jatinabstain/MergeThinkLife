"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '../common/header';
import Footer from '../common/footer';
import comingSoon from '../../../public/assets/coming-soon.svg';
import FacebookDark from '../../../public/assets/facebook-dark.svg';
import InstagramDark from '../../../public/assets/instagram-dark.svg';
import Link from 'next/link';
import { MainModal } from '../common/components/MainModal/MainModal';

export default function ComingSoon() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

     const [modalTitle, setModalTitle] = useState<string>('Thank you for getting in touch');
        const [modalMessage, setModalMessage] = useState<string>('We will notify you as soon as possible. Have a great day!');

        const [errors, setErrors] = useState({
                email: '',
            });

    const validateForm = () => {
        let isValid = true;
        const errorMessages = {
            email: '',
        };

        const email = (document.getElementById('email') as HTMLInputElement).value;

        if (!email) {
            errorMessages.email = 'Email is required.';
            isValid = false;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email || !email.match(emailPattern)) {
            errorMessages.email = 'Enter a valid email.';
            isValid = false;
        }

        setErrors(errorMessages);

        if (isValid) {
            setModalTitle('Thank you for getting in touch');
            setModalMessage('We will notify you as soon as possible. Have a great day!');
            openModal();
            (document.getElementById('email') as HTMLInputElement).value = '';

        }

    }


    return (
        <>
            <Header />
            <div className="mx-auto max-w-[1200px] px-8">
                <div className="min-h-screen bubble_bg flex flex-wrap flex-col justify-center">
                    <div className="comming_soon">
                        <Image src={comingSoon} alt='coming soon' className='mx-auto mb-7' />
                        <p>We are going to launch our website very soon. <br />Stay Tuned!</p>

                        <div className="launch">
                            <h3 className='mb-4'>Get notified when we launch</h3>
                            <div className="flex gap-4 justify-center items-center">
                                <input type="text" className='form-input max-w-[308px] w-full' id="email" placeholder='Enter your email address' />
                                <button  className='primary_fill whitespace-nowrap' onClick={(e) => {
                            e.preventDefault();
                            validateForm();
                        }} >Notify Me</button>
                            </div>
                            <div className="text-red-600 text-sm mt-2 text-center">   {errors.email ? errors.email : '\u00A0'}</div>
                        </div>

                        <div className="socail mt-9">
                            <div className="flex justify-center items-center gap-4">
                                <Link href="#" className=''>
                                    <Image src={FacebookDark} alt='facebook' />
                                </Link>
                                <Link href="#" className=''>
                                    <Image src={InstagramDark} alt='instagram' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <MainModal title={modalTitle} message={modalMessage} isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
}