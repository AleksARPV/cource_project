import { rtkApi } from '@/shared/api/rtkApi'
import { type AppNotification } from '../model/types/notification'

const notificationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<AppNotification[], null>({
            query: () => ({
                url: '/notifications'
            })
        })
    })
})

export const useNotifications = notificationApi.useGetNotificationsQuery
