import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import CartPage from "./pages/CartPage/CartPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import BandagesPage from "./pages/BandagesPage/BandagesPage";
import HoopsPage from "./pages/HoopsPage/HoopsPage";
import HairBandsPage from "./pages/HairBandsPage/HairBandsPage";
import HairpinsPage from "./pages/HairpinsPage/HairpinsPage";
import Layout from "./components/Layout/Layout";
import Loader from "./utils/Loader/Loader";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoriesPage />}>
              <Route path="bandages" element={<BandagesPage />} />
              <Route path="hoops" element={<HoopsPage />} />
              <Route path="hairbands" element={<HairBandsPage />} />
              <Route path="hairpins" element={<HairpinsPage />} />
            </Route>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
          </Routes>
        </Layout>
      </Suspense>
    </>
  );
}

export default App;
