import { lazy } from "react";
import { createHashRouter } from "react-router";
import LazyComponent from "@/components/LazyComponent";

function LazyFc(path) {
  const lazyCom = lazy(() => import(`@/views/${path}`));
  return LazyComponent(lazyCom);
}

const router = createHashRouter([
  {
    path: "/",
    Component: LazyFc("Home/index.jsx"),
  },
  {
    path: "/about",
    Component: LazyFc("About/index.jsx"),
  },
]);

export default router;
