import { RouteObject } from "react-router-dom";

import App from "../App";
import SignIn from "../Pages/SignIn";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <div>Not Found Page</div>,
    children: [
      {
        path: "signin",
        element: <SignIn />,
      },
    ],
  },
];

export default routes;
