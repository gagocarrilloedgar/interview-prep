import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider
} from "react-router-dom";

import { Layout, Login, Signup } from "./sections";

const Home = () => {
  return <div>Home</div>;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/profile",
        element: <div>Profile</div>
      },
      { path: "*", element: <div>Not found</div> }
    ]
  }
]);

export const Router = () => <ReactRouterProvider router={router} />;
