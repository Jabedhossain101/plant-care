import { StrictMode, Suspense } from 'react';
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
import MyPlant from './Components/MyPlant.jsx';
import Update from './Components/Update.jsx';
import AuthProvider from './Pages/AuthProvider.jsx';
import Users from './Pages/Users.jsx';

import AllData from './Components/AllData.jsx';
import AllOpen from './Components/AllOpen.jsx';
// import PrivateRoute from './Pages/PrivateRoute.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage></ErrorPage>,
    Component: Layout,
    children: [
      {
        index: true,
        loader: () => fetch('https://simple-mango-server.vercel.app/mangos'),
        Component: Home,
      },
      {
        path: 'addPlant',
        element: <AddMango></AddMango>,
      },
      {
        path: 'updateMango',
        loader: () => fetch('https://simple-mango-server.vercel.app/mangos'),
        Component: UpdateMango,
      },
      {
        path: 'all',

        Component: AllOpen,
      },
      {
        path: 'allTrees',
        loader: () => fetch('https://simple-mango-server.vercel.app/mangos'),
        Component: AllData,
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
        path: 'myPlant',
        Component: MyPlant,
      },
      {
        path: 'users',
        loader: () => fetch('https://simple-mango-server.vercel.app/users'),
        Component: Users,
      },

      {
        path: 'update/:id',
        loader: ({ params }) =>
          fetch(`https://simple-mango-server.vercel.app/mangos/${params.id}`),
        Component: Update,
      },
      {
        path: 'plantDetails/:id',
        loader: ({ params }) =>
          fetch(`https://simple-mango-server.vercel.app/mangos/${params.id}`),
        Component: PlantDetails,
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <Suspense>
    <StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </StrictMode>
  </Suspense>
);
