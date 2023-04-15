import { lazy } from 'react'

export const ForbiddenPageAsync = lazy(async () => await import('./ForbiddenPage'))

// export const AboutPageAsync = lazy(() => new Promise(resolve => {
//     // @ts-ignore
//     setTimeout(() => resolve(import('./AboutPage')), 1500)
// }));
