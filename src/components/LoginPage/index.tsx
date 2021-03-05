import React, { useState } from 'react';
import Block from 'shared/components/Block';
import Button from 'shared/components/Button';
import Footer from 'shared/components/Footer';
import InputText from 'shared/components/Inputs/InputText';

import './index.scss';

const LoginPage = () => {
    const [loading, setLoading] = useState(false);

    const handleContinue = () => {
        setLoading(true);
    };
    return (
        <Block className="login-page-container">
            <div className="ghost-element"></div>
            <Block className="login-page">
                <InputText onChange={value => console.log(value)} type="text" placeholder="you@domain.com" />
                <InputText onChange={value => console.log(value)} type="text" />
                <Button loading={loading} onClick={handleContinue} className="login-page__continue">
                    Continue
                </Button>
            </Block>
            <Footer />
        </Block>
    );
};

export default LoginPage;
