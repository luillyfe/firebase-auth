import { RouteObject } from "react-router-dom";

import App from "../App";
import AuthProvider from "../Auth";

import SignIn from "../Pages/SignIn";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";

import ProtectedRoute from "../Components/ProtectedRoute";

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <AuthProvider>
        <App />
      </AuthProvider>
    ),
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
