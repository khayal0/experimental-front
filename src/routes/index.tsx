import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loader from 'shared/components/Loader';
import { PATHS } from './paths';

const LoginPage = lazy(() => import('components/LoginPage'));
const UsersTable = lazy(() => import('components/UsersTable'));
const ImageUpload = lazy(() => import('components/ImageUpload'));
const NotFound = lazy(() => import('shared/components/NotFound'));

export const CenterRoutes: JSX.Element = (
    <Suspense fallback={<Loader />}>
        <Routes>
            <Navigate to={PATHS.LOGIN} />
            <Route path={PATHS.LOGIN} element={<LoginPage />} />
            <Route path={PATHS.DASHBOARD} element={<Loader />} />
            <Route path={PATHS.USERTABLE} element={<UsersTable />} />
            <Route path={PATHS.UPLOAD} element={<ImageUpload />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    </Suspense>
);
