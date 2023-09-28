import { RouteObject } from "react-router-dom";

import App from "../App";
import SignIn from "../Pages/SignIn";
import NotFound from "../Pages/NotFound";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "signin",
        element: <SignIn />,
      },
    ],
  },
];

export default routes;
