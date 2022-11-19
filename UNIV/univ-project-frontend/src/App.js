import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import MainRoute from './route/main.route';
import SignUpRoute from './route/sign_up.route';


class App extends React.Component {
    render() {
        return (
            <React.StrictMode>
              <BrowserRouter>
              <Routes>
                <Route path="/main" element={<MainRoute />}></Route>
                <Route path="/sign_up" element={<SignUpRoute/>}></Route>
              </Routes>
              </BrowserRouter>
            </React.StrictMode>
        )
    }
}

export default App