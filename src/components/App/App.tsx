import type { FC } from "react";
import { createRoutesFromElements, Route } from "react-router";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../../layouts/main.layout";
import AgentPage from "../../pages/Agent.page";
import HomePage from "../../pages/Home.page";
// import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<MainLayout />}>
        <Route index path="/" element={<HomePage />} />
        <Route index path="/agent/:id" element={<AgentPage />} />
      </Route>
    </>
  )
);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
