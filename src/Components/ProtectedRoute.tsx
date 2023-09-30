import { ReactElement } from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "../Auth";

export default function ProtectedRoute({
  children,
}: {
  children: ReactElement;
}) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="signin" />;
  }

  return children;
}
