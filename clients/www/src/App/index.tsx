import { LoadingScreen } from "Components";
import list from "features/categorie/list";
import listOrari from "features/negozioOrari/list";
import listOrariSpeciali from "features/negozioOrariSpeciali/list";
import { useAppDispatch } from "hooks";
import React from "react";
import { Route, Routes } from "react-router-dom";

// Routes
const Contatti = React.lazy(() => import("./Contatti"));
const Home = React.lazy(() => import("./Home"));
const Privacy = React.lazy(() => import("./Privacy"));
const Servizio = React.lazy(() => import("./Servizio"));
const Prodotto = React.lazy(() => import("./Prodotto"));

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(list());
    dispatch(listOrari());
    dispatch(listOrariSpeciali());
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<LoadingScreen />}>
            <Home />
          </React.Suspense>
        }
      />

      <Route
        path="/contatti"
        element={
          <React.Suspense fallback={<LoadingScreen />}>
            <Contatti />
          </React.Suspense>
        }
      />

      <Route
        path="/privacy"
        element={
          <React.Suspense fallback={<LoadingScreen />}>
            <Privacy />
          </React.Suspense>
        }
      />

      <Route
        path="/prodotto/:prodotto"
        element={
          <React.Suspense fallback={<LoadingScreen />}>
            <Prodotto />
          </React.Suspense>
        }
      />

      <Route
        path="/:servizio"
        element={
          <React.Suspense fallback={<LoadingScreen />}>
            <Servizio />
          </React.Suspense>
        }
      />
    </Routes>
  );
};

export default App;
