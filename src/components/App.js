import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './routers/Layout';
import User from './routers/User';
import Users from './routers/Users';
import Albums from './routers/Albums';
import Album from './routers/Album';
import Error from './routers/Error';
import Main from './routers/Main';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />,
        index: true,
      },
      {
        path: '/albums',

        element: <Albums />,
      },
      {
        path: '/users',

        element: <Users />,
      },
      {
        path: '/users/:id',

        element: <User />,
      },
      {
        path: '/albums/:id',

        element: <Album />,
      },

      {
        path: '*',
        element: <Error />,
      },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
