import { componentRender } from '@/shared/config/tests/componentRender/componentRender'
import AppRouter from './AppRouter'
import { getRouteAbout, getRouteAdmin, getRouteProfile } from '@/shared/const/router'
import { screen } from '@testing-library/react'
import { UserRole } from '@/entities/User'

describe('app/router/AppRouter', function () {
    test('Page should be rendered', async () => {
        componentRender(<AppRouter/>, {
            route: getRouteAbout()
        })
        const page = await screen.findByTestId('AboutPage')
        expect(page).toBeInTheDocument()
    })

    test('Page not found', async () => {
        componentRender(<AppRouter/>, {
            route: '/neverexistingpage'
        })
        const page = await screen.findByTestId('NotFoundPage')
        expect(page).toBeInTheDocument()
    })

    test('Redirection', async () => {
        componentRender(<AppRouter/>, {
            route: getRouteProfile('1')
        })
        const page = await screen.findByTestId('MainPage')
        expect(page).toBeInTheDocument()
    })

    test('Access for authorized user for internal page', async () => {
        componentRender(<AppRouter/>, {
            route: getRouteProfile('1'),
            initialState: {
                user: { _authorized: true, authData: {} }
            }
        })
        const page = await screen.findByTestId('ProfilePage')
        expect(page).toBeInTheDocument()
    })

    test('Access denied (role is missing)', async () => {
        componentRender(<AppRouter/>, {
            route: getRouteAdmin(),
            initialState: {
                user: { _authorized: true, authData: {} }
            }
        })
        const page = await screen.findByTestId('ForbiddenPage')
        expect(page).toBeInTheDocument()
    })

    test('Access accepted (role is existing)', async () => {
        componentRender(<AppRouter/>, {
            route: getRouteAdmin(),
            initialState: {
                user: { _authorized: true, authData: { roles: [UserRole.ADMIN] } }
            }
        })
        const page = await screen.findByTestId('AdminPanelPage')
        expect(page).toBeInTheDocument()
    })
})
