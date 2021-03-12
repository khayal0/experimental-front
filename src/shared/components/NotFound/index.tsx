import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Button from 'shared/components/Button';
import './index.scss';

interface IProps {}

const NotFoundPage: FC<IProps> = () => {
    return (
        <div className="page-not-found">
            <span>Page Not Found</span>
            <Button>
                <Link to="/">Login</Link>
            </Button>
        </div>
    );
};

export default NotFoundPage;
