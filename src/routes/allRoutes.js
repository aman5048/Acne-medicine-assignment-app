import { Route, Routes } from "react-router-dom";

import { MainPage } from "../components/main/mainPage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};
