import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/pages/main/MainPage";
import ErrorPage from "./components/pages/error/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
