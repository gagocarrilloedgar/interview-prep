import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider
} from "react-router-dom";

import { Layout } from "./sections";

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
        element: <div>Login</div>
      },
      {
        path: "/signup",
        element: <div>Signup</div>
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
