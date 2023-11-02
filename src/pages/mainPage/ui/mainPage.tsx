import { BugButton } from "app/provider/ErrorBoundary";
import { Counter } from "entities/Counter";
import React from "react";
import { useTranslation } from "react-i18next";

const MainPage = () =>{
    const {t} = useTranslation()
    return (<div>
        <BugButton/>
        <Counter />
        {t('MainPage')}
    </div>)
}

export default MainPage