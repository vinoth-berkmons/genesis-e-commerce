import React, { FC } from 'react';
import { Switch } from 'react-router-dom';

import { MasterLayout } from '../../layout/MasterLayout';
import { PublicRoutes } from './PublicRoutes';

const Routes: FC = () => {

    return (
        <Switch>
            < MasterLayout>
                <PublicRoutes />
            </ MasterLayout>
        </Switch>
    )

}

export { Routes }