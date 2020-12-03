import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import data from './db/menu.json';
import {saveState} from "./localstorage";
import SideBar from "./components/SideBar/index";
import Content from "./Router/index2";

const store = createStore(reducer);
data.forEach((item) => store.dispatch({
    "type" : "ADD_LISTING",
    "item" : item
}));
store.subscribe(() => {
    saveState("menuCart", store.getState().menuCart)
    saveState("favCart", store.getState().favCart)
});

function App() {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

    return (
        <Provider store={store}>
            <Router>
            <div className="App wrapper">
                <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
                <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
            </div>
            </Router>
        </Provider>
    );
}

export default App;