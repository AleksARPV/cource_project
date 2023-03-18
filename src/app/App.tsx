import { Suspense, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthorized, userActions } from 'entities/User'

const App = () => {
    const dispatch = useDispatch()
    const authorized = useSelector(getUserAuthorized)

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback=''>
                <Navbar/>
                <div className='content-page'>
                    <Sidebar/>
                    {authorized && <AppRouter/>}
                </div>
            </Suspense>
        </div>
    )
}

export default App
