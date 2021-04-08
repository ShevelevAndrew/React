import React from 'react'
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'

import {App} from './App'
import ChatList from './ChatList'
import Home from './Home'
import { Profile } from './Profile'

const Routes = () => (
     
    <BrowserRouter>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/profile' component={Profile} />

        <Route exact path='/chats'>
            <App />
        </Route>
        <Route path='/chats/:chatId'>
            <App />
        </Route>
        </Switch>
    </BrowserRouter>
    
) 
export default Routes