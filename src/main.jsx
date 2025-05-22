import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './Layout/Layout.jsx';
import Home from './Home/Home.jsx';
import AddMango from './Components/AddMango.jsx';
import UpdateMango from './Components/UpdateMango.jsx';
const router = createBrowserRouter([
  {
    path: '/',
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
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
