import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Navbar} from './components/Navbar'
import {AlertState} from "./context/alert/AlertState"
import {Alert} from "./components/Alert"
import {FirebaseState} from "./context/firebase/FirebaseState"

export default function App() {

  return(
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <Navbar/>
          <div className="container pt-4">
            <Alert/>
            <Switch>
              <Route exact path={'/'} component={Home} />
              <Route exact path={'/about'} component={About} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  )
}