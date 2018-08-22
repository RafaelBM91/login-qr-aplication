import * as React from 'react';

import { Link } from 'react-router-dom';

const Menu: React.SFC<{}> = () => 
    <div>
        <ul>
            <li><Link to="/">Index</Link></li>
            <li><Link to="/read">Read</Link></li>
            <li><Link to="/load">Load</Link></li>
        </ul>
        <hr />
    </div>

export { Menu };
