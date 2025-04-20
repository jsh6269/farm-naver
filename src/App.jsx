import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import bgImage from "./assets/common/bg.png";
import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./routes/HomePage";
import VillagePage from "./routes/VillagePage";

import PointShopPage from "./routes/PointShopPage";
import ItemShopPage from "./routes/ItemShopPage";
import SalePage from "./routes/SalePage";
import PetShopPage from "./routes/PetShopPage";

import CrystalPage from "./routes/CrystalPage";
import ComicPage from "./routes/ComicPage";
import FestivalPage from "./routes/FestivalPage";
import FoodShopPage from "./routes/FoodShopPage";
import MixDogPage from "./routes/MixDogPage";
import MerchantPage from "./routes/MerchantPage";
import HospitalPage from "./routes/HospitalPage";
import SchoolPage from "./routes/SchoolPage";
import PostPage from "./routes/PostPage";
import ExplorePage from "./routes/ExplorePage";
import RedVillagePage from "./routes/RedVillagePage";
import DepartmentPage from "./routes/DepartmentPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter basename="/farm-naver">
      <ScrollToTop />
      <div
        style={{
          position: "absolute",
          zIndex: -999,
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "390px auto",
          backgroundPosition: "top left",
          height: "100%",
          width: "100%",
        }}
      />
      <div className="template-container flex flex-col items-center">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/room" element={<VillagePage />} />
          <Route path="/room/red" element={<RedVillagePage />} />
          <Route path="/department" element={<DepartmentPage />} />

          {/* 상단 메뉴 */}
          <Route path="/pointshop" element={<PointShopPage />} />
          <Route path="/itemshop" element={<ItemShopPage />} />
          <Route path="/sale" element={<SalePage />} />
          <Route path="/petshop" element={<PetShopPage />} />

          {/* 하단 메뉴 */}
          <Route path="/crystal" element={<CrystalPage />} />
          <Route path="/comic" element={<ComicPage />} />
          <Route path="/festival" element={<FestivalPage />} />
          <Route path="/foodshop" element={<FoodShopPage />} />
          <Route path="/mix_dog" element={<MixDogPage />} />
          <Route path="/merchant" element={<MerchantPage />} />
          <Route path="/hospital" element={<HospitalPage />} />
          <Route path="/school" element={<SchoolPage />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/explore" element={<ExplorePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
