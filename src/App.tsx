import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Room from "./pages/Room";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/room/:id'} element={<Room/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
