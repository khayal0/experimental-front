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
                    <Button className="admin-page__continue" loading={false} onClick={() => {}}>
                        Add Comment to Summary
                    </Button>
                    <Button className="admin-page__continue" loading={false} onClick={() => {}}>
                        Download Summary
                    </Button>
                    <Button className="admin-page__continue" loading={false} onClick={() => {}}>
                        <Link to={PATHS.DATAGRID}>Edit parameters</Link>
                    </Button>
                </Block>
            </Block>
            <Footer />
        </Block>
    );
};

export default AdminPage;
