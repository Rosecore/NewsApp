import { BugButton } from "app/provider/ErrorBoundary";
import React from "react";
import { useTranslation } from "react-i18next";

const MainPage = () =>{
    const {t} = useTranslation()
    return (<div>
        <BugButton/>
        {t('MainPage')}
    </div>)
}

export default MainPage