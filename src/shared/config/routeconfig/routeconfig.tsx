import { AboutPage } from "pages/aboutPage"
import { MainPage } from "pages/mainPage"
import { NotFoundPage } from "pages/notFoundPage"
import { ProfilePage } from "pages/profilePage"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
    main= "main",
    about= "about",
    profile = "profile",
    NOT_FOUND = "not_found"
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.main] :'/',
    [AppRoutes.about ] :'/about',
    [AppRoutes.profile]:'/profile',
    [AppRoutes.NOT_FOUND ] :'*'
}

export const routeConfig: Record<AppRoutes, RouteProps>= {
    [AppRoutes.main ] :{
        path: RoutePath.main,
        element : <MainPage/>
    },
    [AppRoutes.about ] :{
        path: RoutePath.about,
        element : <AboutPage/>
    },
    [AppRoutes.profile ] :{
        path: RoutePath.profile,
        element : <ProfilePage/>
    },
    [AppRoutes.NOT_FOUND ] :{
        path: RoutePath.not_found,
        element : <NotFoundPage/>
    }
}