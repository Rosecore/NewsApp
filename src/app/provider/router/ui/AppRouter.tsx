import { AboutPage } from 'pages/aboutPage';
import { MainPage } from 'pages/mainPage';
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeconfig/routeconfig';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';

const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader/>}>
            <Routes>
                { Object.values(routeConfig).map(({element, path})=>(
                    <Route 
                        key= {path}
                        element = {<div className='page-wrapper'>{element}</div>}
                        path= {path}/>                        
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;