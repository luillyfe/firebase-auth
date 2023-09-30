import { RouteObject } from "react-router-dom";

import App from "../App";
import SignIn from "../Pages/SignIn";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import ProtectedRoute from "../Components/ProtectedRoute";

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
      {
        path: "",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
    ],
  },
];

export default routes;
