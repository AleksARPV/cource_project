import { MainPage } from '@/pages/MainPage'
import { AboutPage } from '@/pages/AboutPage'
import { ProfilePage } from '@/pages/ProfilePage'
import { ArticlesPage } from '@/pages/ArticlesPage'
import { ArticlesDetailsPage } from '@/pages/ArticlesDetailsPage'
import ArticleEditPage from '@/pages/ArticleEditPage/ui/ArticleEditPage/ArticleEditPage'
import { AdminPanelPage } from '@/pages/AdminPanelPage'
import { UserRole } from '@/entities/User'
import { ForbiddenPage } from '@/pages/ForbiddenPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import {
    AppRoutes,
    getRouteAbout,
    getRouteAdmin,
    getRouteArticles,
    getRouteArticlesCreate,
    getRouteArticlesDetails,
    getRouteArticlesEdit,
    getRouteForbidden,
    getRouteMain,
    getRouteProfile
} from '@/shared/const/router'
import { AppRouteProps } from '@/shared/types/router'

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage/>
    },
    [AppRoutes.PROFILE]: {
        path: getRouteProfile(':id'),
        element: <ProfilePage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLES]: {
        path: getRouteArticles(),
        element: <ArticlesPage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLES_DETAILS]: {
        path: getRouteArticlesDetails(':id'),
        element: <ArticlesDetailsPage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLES_CREATE]: {
        path: getRouteArticlesCreate(),
        element: <ArticleEditPage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLES_EDIT]: {
        path: getRouteArticlesEdit(':id'),
        element: <ArticleEditPage/>,
        authOnly: true
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: getRouteAdmin(),
        element: <AdminPanelPage/>,
        authOnly: true,
        roles: [UserRole.MANAGER, UserRole.ADMIN]
    },
    [AppRoutes.FORBIDDEN_PAGE]: {
        path: getRouteForbidden(),
        element: <ForbiddenPage/>
    },
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage/>
    }
}
