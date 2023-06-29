import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import InicioPage from './Pages/InicioPage';
import OrigenPage from './Pages/OrigenPage';
import C1Page from './Pages/C1Page';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import C2Page from './Pages/C2Page';
import C3Page from './Pages/C3Page';
import C4Page from './Pages/C4Page';
import C5Page from './Pages/C5Page';
import C6Page from './Pages/C6Page';
import C7Page from './Pages/C7Page';
import C8Page from './Pages/C8Page';
import C9Page from './Pages/C9Page';
import C10Page from './Pages/C10Page';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "Inicio",
    element: <InicioPage/>
  },
  {
    path: "Origen",
    element: <OrigenPage/>
  },
  {
    path: "Capitulo-1",
    element: <C1Page/>
  },
  {
    path: "Capitulo-2",
    element: <C2Page/>
  },
  {
    path: "Capitulo-3",
    element: <C3Page/>
  },
  {
    path: "Capitulo-4",
    element: <C4Page/>
  },
  {
    path: "Capitulo-5",
    element: <C5Page/>
  },
  {
    path: "Capitulo-6",
    element: <C6Page/>
  },
  {
    path: "Capitulo-7",
    element: <C7Page/>
  },
  {
    path: "Capitulo-8",
    element: <C8Page/>
  },
  {
    path: "Capitulo-9",
    element: <C9Page/>
  },
  {
    path: "Capitulo-10",
    element: <C10Page/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
