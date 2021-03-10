import React, { useState } from 'react';
import Block from 'shared/components/Block';
import Button from 'shared/components/Button';
import Footer from 'shared/components/Footer';
import InputText from 'shared/components/Inputs/InputText';
import { IInputValue } from 'models';

import './index.scss';

const LoginPage = () => {
    const [loading, setLoading] = useState(false);
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    // handlers
    const handleCredentials = (credential: IInputValue) => {
        setCredentials({ ...credentials, [credential.name]: credential.value });
    };
    const handleContinue = () => {
        setLoading(true);
    };
    return (
        <Block className="login-page-container">
            <div className="ghost-element"></div>
            <Block className="login-page">
                <Block className="login-page__title">
                    <span>Log in to </span>
                    <span>E.B.Solutions</span>
                </Block>
                <Block className="login-page__inputs-wrapper">
                    <InputText onChange={handleCredentials} name="username" type="text" placeholder="username" />
                    <InputText onChange={handleCredentials} name="password" type="text" placeholder="password" />
                    <Button loading={loading} onClick={handleContinue} className="login-page__continue">
                        Continue
                    </Button>
                </Block>
            </Block>
            <Footer />
        </Block>
    );
};

export default LoginPage;
