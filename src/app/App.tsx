import { UseTheme } from './provider/themeProvider/lib/UseTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './provider/router';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
const App = () => {
    const {theme} = UseTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">            
                <Navbar/>
                <div className='content-page'>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>

           
        </div>
    );
};

export default App;
