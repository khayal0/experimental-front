import React from 'react';
import Block from 'shared/components/Block';
import Footer from 'shared/components/Footer';

import './index.scss';

const LoginPage = () => {
    return (
        <Block className="login-page">
            <div className="ghost-element"></div>
            <span>Hello to Login</span>
            <Footer />
        </Block>
    );
};

export default LoginPage;
