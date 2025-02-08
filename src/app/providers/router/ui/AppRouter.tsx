import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routeConfig } from "shared/config/routerConfig/routeConfig";

export default function AppRouter() {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <div className="page-wrapper">{element}</div>
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
}
