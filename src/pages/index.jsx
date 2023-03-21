import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getUserFromLocalStorage } from "../utils/helpers";

const Login = lazy(() => import("./Login"));
const EmployeesList = lazy(() => import("./EmployeesList"));
const AddEmployee = lazy(() => import("./AddEmployee"));

const PrivateRoute = ({ children }) => {
  const user = getUserFromLocalStorage();
  if (!user?.isUserLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
};

const Page = () => {
  const user = getUserFromLocalStorage();
  return (
    <Suspense fallback={<div>Loadding...</div>}>
      <Routes>
        <Route
          path="/login"
          element={user?.isUserLoggedIn ? <Navigate to="/" /> : <Login />}
        />
        <Route path="*" element={<Navigate to="/" />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <EmployeesList />
            </PrivateRoute>
          }
        />
        <Route
          path="/add"
          element={
            <PrivateRoute>
              <AddEmployee />
            </PrivateRoute>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default Page;
