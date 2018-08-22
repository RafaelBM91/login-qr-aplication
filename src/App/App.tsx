import * as React from 'react';

import { Menu } from './Components/Menu';

import { RouterMiddleware } from './RouterMiddleware';

const App: React.SFC<{}> = () => 
    <div>
        <Menu />
        <div style={{margin: '100px 100px'}}>
            <RouterMiddleware />
        </div>
    </div>

export { App };
