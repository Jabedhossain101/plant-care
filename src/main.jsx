import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './Layout/Layout.jsx';
import Home from './Home/Home.jsx';
import AddMango from './Components/AddMango.jsx';
import UpdateMango from './Components/UpdateMango.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import PlantDetails from './Pages/PlantDetails.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import AllPlant from './Components/AllPlant.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage></ErrorPage>,
    Component: Layout,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:4000/mangos'),
        Component: Home,
      },
      {
        path: 'addPlant',
        Component: AddMango,
      },
      {
        path: 'updateMango',
        Component: UpdateMango,
      },
      {
        path: 'login',
        Component: Login,
      },
      {
        path: 'register',
        Component: Register,
      },
      {
        path: 'allMango',
        Component: AllPlant,
      },
      {
        path: 'plantDetails',
        loader: () => fetch('http://localhost:4000/mangos'),
        Component: PlantDetails,
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
