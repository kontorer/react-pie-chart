import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Navbar from './components/Navbar'
import ChartPage from './pages/ChartPage'
import FormPage from './pages/FormPage'
import {ContextProvider} from "./ListContext"


function App() {
    return (
        <ContextProvider>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <FormPage />
                    </Route>
                    <Route path="/view">
                        <ChartPage />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </div>
        </ContextProvider>
    )
}

export default App
