import { AboutPage } from "pages/aboutPage"
import { ArticledDetailesPage } from "pages/articlesDetailesPage"
import { ArticledPage } from "pages/articlesPage"
import { MainPage } from "pages/mainPage"
import { NotFoundPage } from "pages/notFoundPage"
import { ProfilePage } from "pages/profilePage"
import { RouteProps } from "react-router-dom"


export type AppRouteProps = RouteProps & {
    isAuthOnly?: boolean
}


export enum AppRoutes {
    main = "main",
    about = "about",
    profile = "profile",
    articles = "articles",
    articleDetails = "article_details",

    NOT_FOUND = "not_found"
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.main]: '/',
    [AppRoutes.about]: '/about',
    [AppRoutes.profile]: '/profile',
    [AppRoutes.articles]:'/articles',
    [AppRoutes.articleDetails]:'/article/',

    [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.main]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.about]: {
        path: RoutePath.about,
        element: <AboutPage />
    },
    [AppRoutes.profile]: {
        path: RoutePath.profile,
        isAuthOnly:true,
        element: <ProfilePage />
    },
    [AppRoutes.articles]: {
        path: RoutePath.articles,
        element: <ArticledPage />
    },
    [AppRoutes.articleDetails]: {
        path: RoutePath.article_details + ':id',
        element: <ArticledDetailesPage />
    },

    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    }
}