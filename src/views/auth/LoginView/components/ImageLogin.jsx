import React from 'react';
import CoupleImage from 'src/assets/couple1.svg';

const ImageLogin = ({ ...rest }) => {
    return <img {...rest} src={CoupleImage} width="auto" height={250} alt="Couple image"/>
}

export default ImageLogin;
