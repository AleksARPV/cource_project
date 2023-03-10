import type React from 'react'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import MainIcon from 'shared/assets/icons/to_home.svg'
import AboutIcon from 'shared/assets/icons/about_icon.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'

export interface SidebarItemType {
    path: string
    text: string
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
    authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Main'
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'About'
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'Profile',
        authOnly: true
    }
]
