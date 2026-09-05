import '@style/vars.scss'
import "@style/clean.scss"
import "@style/font.scss"

import ReactDOM from "react-dom/client";
import { createHashRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Portfolio from './pages/Portfolio';
import { Link as RouterLink } from 'react-router';
import Projects from './pages/Projects';
import Page from './components/PageParents/Page';
import PageHeader from './components/PageParents/PageHeader';
import Maze from './pages/maze/Maze';

const router = createHashRouter([

  {
    path: "/",
    element: <Page />,
    children: [{
      index: true,
      element: <Portfolio />,
    }, {
      path: "",
      element: <PageHeader />,
      children: [{
        path: "/tools",
        element: <Projects />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/maze",
        element: <Maze />,
      }]
    },
    ]
  },
  {
    path: "*",
    element: <RouterLink to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}><section><h1>404 · Page Not Found</h1><h2>Return to Home</h2></section></RouterLink>
  }
]);

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);