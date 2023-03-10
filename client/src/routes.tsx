import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import { LoadingScreen } from "./components";

const NotFound = lazy(() => import("~/pages/NotFound"));
const Home = lazy(() => import("~/pages/Home"));
const Privacy = lazy(() => import("~/pages/Privacy"));
const Category = lazy(() => import("~/pages/Category"));

export default createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
      {
        path: ":category",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Category />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);
