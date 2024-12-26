import React from "react";
import Image from "next/image";
import logo from '../../../../../public/assets/logo.svg';

export default function loader(){
    return (
        <div className="loading">
            <Image src={logo} alt="logo" />
        </div>
    );
}

