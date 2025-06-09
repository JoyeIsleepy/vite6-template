import { useEffect } from "react";
import { RouterProvider, HashRouter, Routes, Route } from "react-router";
import autoFit from "autofit.js";
import router from "@/router";

function App() {
  useEffect(() => {
    autoFit.init(
      {
        designHeight: 1080,
        designWidth: 1920,
        renderDom: "#root",
        resize: true,
      },
      false
    );
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
