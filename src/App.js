import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./ResumeV1/Pages/MainPage";
import HeroSection from "./ResumeV2/Pages/HeroSection";

function App() {
  const basePath = "/ManishPrajapati";
  const version2 = "/v2";

  return (
    <div>
      {/* <MainPage/> */}
      <Routes>
        <Route path={basePath} element={<MainPage/>} />
        <Route path={basePath+version2} element={<HeroSection/>} />
      </Routes>
    </div>
  );
}

export default App;
