import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { FallbackView } from '../common/components/fallback-view/FallbackView';



/**
 *All the public routes goes here
 Fall back view component to take card of the page before it renders
 *
 * @export
 * @returns
 */
export function PublicRoutes() {

    const Home = lazy(() => import('../containers/Home/Home'))

    return (
        <Suspense fallback={< FallbackView />}>
            <Switch>
                <Route path='/home' component={Home} />
                <Redirect exact from='/' to='/home' />
            </Switch>
        </Suspense>
    )
}
