import { createBrowserRouter } from 'react-router-dom';
import Root from "./Root.jsx"
import Home from "../home/Home.jsx"
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { path: "", element: <Home /> },
        ],
    },
], {basename: "/react_portfolio"});

export default router;