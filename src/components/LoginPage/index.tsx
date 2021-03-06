import React, { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Block from 'shared/components/Block';
import Button from 'shared/components/Button';
import Footer from 'shared/components/Footer';
import InputText from 'shared/components/Inputs/InputText';
import { ICredentials, IInputValue } from 'models';
import { loginRequested } from './ducks/actions';

import './index.scss';
import { useLocation } from 'react-router';
// import Loading from 'shared/components/Loader';

interface IProps {
    loginRequested: typeof loginRequested;
}

const LoginPage: FC<IProps> = ({ loginRequested }) => {
    const location = useLocation<History>();
    const unauthorizedPath = location.pathname.includes('unauthorized');
    const unauthorized = unauthorizedPath ? 'Please login with administrator privileges and try again' : null;

    // states
    const [loading, setLoading] = useState(false);
    const [errorText, setErrorText] = useState<string | null>(unauthorized);
    const [credentials, setCredentials] = useState<ICredentials>({
        username: '',
        password: '',
    });

    useEffect(() => {
        if (false) {
            setErrorText("Username and password don't match");
        }
    }, []);

    // handlers
    const handleCredentials = (credential: IInputValue) => {
        setCredentials({ ...credentials, [credential.name]: credential.value });
    };
    const handleContinue = () => {
        loginRequested(credentials);
        setLoading(true);
    };

    // render
    return (
        <Block className="login-page-container">
            <div className="ghost-element"></div>
            <Block className="login-page">
                <Block className="login-page__title">
                    <span>Log in to </span>
                    <span>Experimental</span>
                </Block>
                <Block className="login-page__inputs-wrapper">
                    <InputText onChange={handleCredentials} name="username" type="text" placeholder="username" />
                    <InputText onChange={handleCredentials} name="password" type="text" placeholder="password" />
                    <Button loading={loading} onClick={handleContinue} className="login-page__continue">
                        Continue
                    </Button>
                    {errorText && <span className="login-page__unauthorized">{errorText}</span>}
                </Block>
            </Block>
            <Footer />
        </Block>
    );
};

export default connect(null, { loginRequested })(LoginPage);
