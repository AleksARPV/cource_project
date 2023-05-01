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
import { AppRoutes, RoutePath } from '@/shared/const/router'
import { AppRouteProps } from '@/shared/types/router'

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlesPage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLES_DETAILS]: {
        path: `${RoutePath.articles_details}:id`,
        element: <ArticlesDetailsPage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLES_CREATE]: {
        path: `${RoutePath.articles_create}`,
        element: <ArticleEditPage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLES_EDIT]: {
        path: `${RoutePath.articles_edit}`,
        element: <ArticleEditPage/>,
        authOnly: true
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: `${RoutePath.admin_panel}`,
        element: <AdminPanelPage/>,
        authOnly: true,
        roles: [UserRole.MANAGER, UserRole.ADMIN]
    },
    [AppRoutes.FORBIDDEN_PAGE]: {
        path: `${RoutePath.forbidden}`,
        element: <ForbiddenPage/>
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>
    }
}
