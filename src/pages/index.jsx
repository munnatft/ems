import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { getUserFromLocalStorage } from "../utils/helpers";

const Login = lazy(() => import("./Login"));
const EmployeesList = lazy(() => import("./EmployeesList"));
const AddEmployee = lazy(() => import("./AddEmployee"));
const EditEmployee = lazy(() => import("./EditEmployee"));

const PrivateRoute = () => {
  const user = getUserFromLocalStorage();
  if (!user?.isUserLoggedIn) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

const Page = () => {
  const user = getUserFromLocalStorage();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/login"
          element={user?.isUserLoggedIn ? <Navigate to="/" /> : <Login />}
        />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<EmployeesList />} />
        </Route>
        <Route path="/add" element={<PrivateRoute />}>
          <Route path="/add" element={<AddEmployee />} />
        </Route>
        <Route path="/edit" element={<PrivateRoute />}>
          <Route path="/edit" element={<EditEmployee />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Page;
