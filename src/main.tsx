
import ReactDOM from 'react-dom/client'
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";

import './index.css'
import { Suspense, lazy } from "react";

import NotFound from "./screens/notFound";
import Loader from './components/loader/loader.tsx';
import Admin from './screens/admin/Admin.tsx';


import User from './screens/user/User.tsx';
import UserProfile from './screens/user/profile/UserProfile.tsx';
import UserEmployeeStatus from './screens/user/employee-status/UserEmployeeStatusContainer.tsx';
import UserAttendanceRecord from './screens/user/attendance-record/UserAttendanceRecord.tsx';
import AdminProfileMainContainer from './screens/admin/profile/AdminProfileMainContainer.tsx';
// import ProtectedRoute from './JWT/ProtectedRoute.tsx';


const Login = lazy(() =>
  wait(1300).then(() => import("./screens/auth/Login.tsx"))
);

const ForgotPassword = lazy(() =>
  wait(1300).then(() => import("./screens/auth/forgotPass.tsx"))
);

const Dashboard = lazy(() =>
  wait(1300).then(() => import("./screens/admin/dashboard/DashboardMainContainer.tsx"))
);

const Employees = lazy(() =>
  wait(1300).then(() => import("./screens/admin/employees/Employees.tsx"))
);
const Department = lazy(() =>
  wait(1300).then(() => import("./screens/admin/department/DepartmentMainContainer.tsx"))
);

const AttendanceReport = lazy(() =>
  wait(1300).then(() => import("./screens/admin/attendanceReport/AttendanceReport.tsx"))
);
const Holidays = lazy(() =>
  wait(1300).then(() => import("./screens/admin/holidays/HolidaysMainContainer.tsx"))
);

const UserDashboard = lazy(() =>
  wait(1300).then(() => import("./screens/user/dashboard/UserDashboardMainContainer.tsx"))
);

const ResetPassword= lazy(() =>
  wait(1300).then(() => import("./screens/auth/ResetPassword.tsx"))
);




const router = createBrowserRouter([
  {

    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <>
      <Suspense fallback={<Loader />}>
        <Login />
      </Suspense>
    </>,
  },
  {
    path: "/forgot-password",
    element: <>
      <Suspense fallback={<Loader />}>
        <ForgotPassword />
      </Suspense>
    </>,
  },
  {
    path: "/reset-password/:uid/:token",
    element:  <>
    <Suspense fallback={<Loader />}>
      <ResetPassword  />
    </Suspense>
  </>,
  },
  {
    path: "/admin",
    element:

      <Admin />

    ,


    children: [
      {
        path: "/admin",
        element: <Navigate to="/admin/home" />,
      },
      {
        path: "/admin/profile",
        element: <>
          <Suspense fallback={<Loader />}>
            <AdminProfileMainContainer />
          </Suspense>
        </>,
      },
      {
        path: "/admin/home",
        element: <>
          <Suspense fallback={<Loader />}>
            <Dashboard />
          </Suspense>
        </>,
      },
      {
        path: "/admin/employee",
        element: <>
          <Suspense fallback={<Loader />}>
            <Employees />
          </Suspense>
        </>,
      },
      {
        path: "/admin/departments",
        element: <>
          <Suspense fallback={<Loader />}>
            <Department />
          </Suspense>
        </>,
      },
      {
        path: "/admin/holidays",
        element: <>
          <Suspense fallback={<Loader />}>
            <Holidays />
          </Suspense>
        </>,
      },
      {
        path: "/admin/report",
        element: <>
          <Suspense fallback={<Loader />}>
            <AttendanceReport />
          </Suspense>
        </>,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/user",
    element:
      <User />
    ,
    children: [
      {
        path: "/user",
        element: <Navigate to="/user/home" />,
      },
      {
        path: "/user/home",
        element: <>
          <Suspense fallback={<Loader />}>
            <UserDashboard />
          </Suspense>
        </>,
      },
      {
        path: "/user/profile",
        element: <>
          <Suspense fallback={<Loader />}>
            <UserProfile />
          </Suspense>
        </>,
      },
      {
        path: "/user/employee-status",
        element: <>
          <Suspense fallback={<Loader />}>
            <UserEmployeeStatus />
          </Suspense>
        </>,
      },
      {
        path: "/user/attendance-record",
        element: <>
          <Suspense fallback={<Loader />}>
            <UserAttendanceRecord />
          </Suspense>
        </>,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function wait(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>,
)
