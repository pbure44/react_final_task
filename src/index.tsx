import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {store} from "./redux";
import {RouterProvider} from "react-router-dom";

import './index.css';
import {router} from "./router";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);


