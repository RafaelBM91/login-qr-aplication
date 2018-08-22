import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ReadQR } from '../Components/ReadQR';

import { WithLoadQR } from '../Conteiners/LoadQR';

const SecureReadQR: React.SFC<{}> = () => 
    <ReadQR />

const SecureWithLoadQR: React.SFC<{}> = () => 
    <WithLoadQR />

const RouterMiddleware: React.SFC<{}> = () => 
    <Switch>
        <Route path='/read' component={SecureReadQR}/>
        <Route path='/load' component={SecureWithLoadQR}/>
    </Switch>

export { RouterMiddleware };
