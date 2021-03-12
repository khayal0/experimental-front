import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from 'routes/paths';
import Block from 'shared/components/Block';
import Button from 'shared/components/Button';
import Footer from 'shared/components/Footer';

import './index.scss';

const AdminPage = () => {
    return (
        <Block className="admin-page-container">
            <div className="ghost-element"></div>
            <Block className="admin-page">
                <Block className="admin-page__title">
                    <span>Admin</span>
                </Block>
                <Block className="admin-page__inputs-wrapper">
                    <Link className="admin-page__continue" to={PATHS.DATAGRID}>
                        Add Comment to Summary
                    </Link>
                    <Button className="admin-page__continue" loading={false} onClick={() => {}}>
                        Download Summary
                    </Button>
                    <Link className="admin-page__continue" to={PATHS.DATAGRID}>
                        Edit parameters
                    </Link>
                </Block>
            </Block>
            <Footer />
        </Block>
    );
};

export default AdminPage;
