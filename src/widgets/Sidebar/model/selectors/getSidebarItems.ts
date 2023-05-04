import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'
import MainIcon from '@/shared/assets/icons/to_home.svg'
import AboutIcon from '@/shared/assets/icons/about_icon.svg'
import ProfileIcon from '@/shared/assets/icons/profile.svg'
import ArticleIcon from '@/shared/assets/icons/news.svg'
import { type SidebarItemType } from '../types/sidebar'
import { getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile } from '@/shared/const/router'

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: getRouteMain(),
                Icon: MainIcon,
                text: 'Main'
            },
            {
                path: getRouteAbout(),
                Icon: AboutIcon,
                text: 'About'
            }
        ]
        if (userData) {
            sidebarItemsList.push(
                {
                    path: getRouteProfile(userData.id),
                    Icon: ProfileIcon,
                    text: 'Profile',
                    authOnly: true
                },
                {
                    path: getRouteArticles(),
                    Icon: ArticleIcon,
                    text: 'Articles',
                    authOnly: true
                }
            )
        }
        return sidebarItemsList
    }
)
