import React, { Component } from 'react'
import { BrowserRouter , Route , Switch } from 'react-router-dom'

// 引入组件
import Admin from './pages/admin/index.js'
import Login from './pages/login/index.js'


export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/" component={Admin}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}
