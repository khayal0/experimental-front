import React from 'react';
import Block from 'shared/components/Block';
import Button from 'shared/components/Button';
import Footer from 'shared/components/Footer';
import InputText from 'shared/components/Inputs/InputText';

import './index.scss';

const LoginPage = () => {
    return (
        <Block className="login-page-container">
            <div className="ghost-element"></div>
            <Block className="login-page">
                <InputText type="text" onChange={value => console.log(value)} />
                <Button className="login-page__continue">Continue</Button>
            </Block>
            <Footer />
        </Block>
    );
};

export default LoginPage;
