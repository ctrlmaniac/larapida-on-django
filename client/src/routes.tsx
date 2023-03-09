import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import { LoadingScreen } from "./components";

const Home = lazy(() => import("~/pages/Home"));
const Privacy = lazy(() => import("~/pages/Privacy"));

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/privacy",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Privacy />
          </Suspense>
        ),
      },
    ],
  },
]);
