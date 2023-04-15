import { lazy } from 'react'

export const AdminPanelPageAsync = lazy(async () => await import('./AdminPanelPage'))

// export const AboutPageAsync = lazy(() => new Promise(resolve => {
//     // @ts-ignore
//     setTimeout(() => resolve(import('./AboutPage')), 1500)
// }));
