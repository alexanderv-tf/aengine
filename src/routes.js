import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import Home from './components/Home'
import Segment from './containers/Segment'
import Offering from './containers/Offering'
import Collection from './containers/Collection'
import History from './containers/History'
import Admin from './containers/Admin'

export const routes = (
        <div>
            <Route path='/' component={App}>
                <IndexRoute component={Home} />
                <Route path='/segment' component={Segment}/>
                <Route path='/offering' component={Offering} />
                <Route path='/collection' component={Collection} />
                <Route path='/history' component={History} />
                <Route path='/admin' component={Admin} />
            </Route>
        </div>
)

