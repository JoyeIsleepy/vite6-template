import { RouterProvider, HashRouter, Routes, Route } from "react-router";
import router from "@/router";
import "./App.scss";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
