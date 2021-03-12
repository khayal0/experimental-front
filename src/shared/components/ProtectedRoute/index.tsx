import { EUserRole } from 'models';
import React from 'react';
import { Redirect, Route } from 'react-router';

const ProtectedRoute = ({ component: Comp, userRole, path, ...rest }: any) => {
    // const authorized = userRole === EUserRole.ADMIN;
    // temporary route
    const role = localStorage.getItem('role');
    const authorized = role === EUserRole.ADMIN;

    return (
        <Route
            path={path}
            {...rest}
            render={props => {
                return authorized ? (
                    <Comp {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login/unauthorized',
                            // state: {
                            //     prevLocation: path,
                            //     error: 'Token time expired or You did not login as Admin.',
                            //     authFailed: true,
                            // },
                        }}
                    />
                );
            }}
        />
    );
};

export default ProtectedRoute;
