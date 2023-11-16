import { RoutePath } from "shared/config/routeconfig/routeconfig"

export interface SidebarItemType{
    path:string,
    text:string,
    isAuthOnly?: boolean
}

export const SidebarItemList:SidebarItemType[] =  [{
    path : RoutePath.main,
    text : "Main Page"
},
{
    path : RoutePath.about,
    text : "About Page"
},
{
    path : RoutePath.not_found,
    text : "Not found Page"
},
{
    path : RoutePath.profile,
    text : "Profile Page"
},
{
    path : RoutePath.articles,
    text : "Article",
    isAuthOnly:true
},
]
    