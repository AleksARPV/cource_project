import { lazy } from 'react'

export const ProfilePageAsync = lazy(async () => await import('./ProfilePage'))

// export const MainPageAsync = lazy(() => new Promise(resolve => {
//     // @ts-ignore
//     setTimeout(() => resolve(import('./MainPage')), 1500)
// }));
