import { AboutPage } from 'pages/aboutPage';
import { MainPage } from 'pages/mainPage';
import React, { Suspense, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppRouteProps, routeConfig } from 'shared/config/routeconfig/routeconfig';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';
import { RequireAuth } from './RequireAuth';
import path from 'path';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const elem = <div className='page-wrapper'>{route.element}</div>
        return (
            <Route
                key={route.path}
                element={route.isAuthOnly ?
                    <RequireAuth>{elem}</RequireAuth> :
                    <div className='page-wrapper'>{route.element}</div> }
                path={route.path} />
        )
    }, [])
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routeConfig).map(renderWithWrapper)}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;