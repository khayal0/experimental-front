import React, { Suspense, lazy } from 'react';
import Loader from 'shared/components/Loader';
import { PATHS } from './paths';
import { Redirect, Route, Switch } from 'react-router';
import ProtectedRoute from 'shared/components/ProtectedRoute';

const LoginPage = lazy(() => import('views/LoginPage'));
const SendDataPage = lazy(() => import('views/SendDataPage'));
const AdminPage = lazy(() => import('views/AdminPage'));
const DataGridPage = lazy(() => import('views/DataGridPage'));
const UserTable = lazy(() => import('components/UserTable'));
const NotFound = lazy(() => import('shared/components/NotFound'));

export const routes: JSX.Element = (
    <Suspense fallback={<Loader />}>
        <Switch>
            <Route path={PATHS.LOGIN} component={LoginPage} />
            <ProtectedRoute path={PATHS.ADMINPAGE} component={AdminPage} />
            <Route path={PATHS.SENDDATA} component={SendDataPage} />
            <Route path={PATHS.DATAGRID} component={DataGridPage} />
            <Route path={PATHS.SENDDATA} component={SendDataPage} />
            <Route path={PATHS.USERTABLE} component={UserTable} />
            <Redirect exact from={PATHS.ROOT} to={PATHS.LOGIN} />
            <Route path="/*" render={() => <NotFound />} />
        </Switch>
    </Suspense>
);
