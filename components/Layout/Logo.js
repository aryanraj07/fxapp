import React from "react";
import Image from "next/image";
import logo from '../../public/favicon.jpg';

const Logo = () => {
  return (
    <div style={{padding:'56px 0 93px 78px' }}>
        <Image src={logo} alt="Logo"></Image>
    </div>
  );
};

export default Logo;
