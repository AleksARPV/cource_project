import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { profileReducer } from 'entities/Profile'

const reducers: ReducerList = {
    profile: profileReducer
}

interface ProfilePageProps {
    className?: string
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                PROFILE PAGE
            </div>
        </DynamicModuleLoader>
    )
})

export default ProfilePage
