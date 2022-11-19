import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import MainRoute from './route/main.route';


class App extends React.Component {
    render() {
        return (
            <React.StrictMode>
              <BrowserRouter>
              <Routes>
                <Route path="/main" element={<MainRoute />}></Route>
              </Routes>
              </BrowserRouter>
            </React.StrictMode>
        )
    }
}

export default App