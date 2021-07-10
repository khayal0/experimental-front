import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

interface IProps {}

const NotFoundPage: FC<IProps> = () => {
    return (
        <div className="page-not-found">
            <span>Page Not Found</span>
            <Link className="page-not-found__button" to="/">
                Go Back
            </Link>
        </div>
    );
};

export default NotFoundPage;
