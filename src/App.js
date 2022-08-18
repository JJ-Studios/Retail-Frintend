import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { productType } from "./Components/GlobalVariable";
import ScrollButton from "./Components/ScrollButton";
import AboutUs from "./Pages/AboutUs";
import AdListing from "./Pages/AdListing";
import AdListView from "./Pages/AdListView";
import Billing from "./Pages/Billing";
import Blog from "./Pages/Blog";
import Category from "./Pages/Categories/Category";
import ContactUs from "./Pages/ContactUs";
import Dashboard from "./Pages/Dashboard";
import DashboardSoldAds from "./Pages/DashboarSoldAds";
import DashboardActiveAds from "./Pages/DashboardActiveAds";
import DashboardMyAds from "./Pages/DashboardMyAds";
import DashboardPendingAds from "./Pages/DashboardPendingAds";
import DashboardNoShipAds from "./Pages/DashboardNoShipAds";
import DashboardScents from "./Pages/DashboardScents";
import DashboardColors from "./Pages/DashboardColors";
import DashboardCategories from "./Pages/DashboardCategories";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Package from "./Pages/Package";
import Register from "./Pages/Register";
import Test from "./Pages/Test";
import Single from "./Pages/Single";
import Store from "./Pages/Store";
import TermsCondition from "./Pages/TermsCondition";
import UserProfile from "./Pages/UserProfile";
import Gallery from "./Pages/Gallery";
import BulkSingle from "./Pages/BulkSingle";
import CreateBulkAd from "./Pages/CreateBulkAd";
import CategoryClothing from "./Pages/Categories/CategoryClothing";
import CategoryBath from "./Pages/Categories/CategoryBath";
import CategoryBags from "./Pages/Categories/CategoryBags";
import Cart from "./Pages/Cart";
import CheckoutPage from "./Pages/CheckoutPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CategoryJewelry from "./Pages/Categories/CategoryJewelry";
import CategoryProduct from "./Pages/Categories/CategoryProduct";
import CategoryBrand from "./Pages/Categories/CategoryBrand";
import ConfirmPage from "./Pages/ConfirmPage";
import DashboardProduct from "./Pages/DashboardProduct";
import DashboardProductBrand from "./Pages/DashboardProductBrand";
import DashboardBrands from "./Pages/DashboardBrands";
import CategoryGifts from "./Pages/Categories/CategoryGifts";

function App() {
  const [product, setProduct] = useState("");

  return (
    <Router>
      <productType.Provider value={{ product, setProduct }}>
        {/*<Header /> */}
        <ScrollButton />
        <div className="App">
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="AboutUs" element={<AboutUs />} />
            <Route path="AdListing" element={<AdListing />} />
            <Route path="AdListView" element={<AdListView />} />
            <Route path="Billing" element={<Billing />} />
            <Route path="Blog" element={<Blog />} />
            <Route path="Category" element={<Category />} />
            <Route path="ContactUs" element={<ContactUs />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="DashboardSoldAds" element={<DashboardSoldAds />} />
            <Route path="DashboardActiveAds" element={<DashboardActiveAds />} />
            <Route path="DashboardMyAds" element={<DashboardMyAds />} />
            <Route
              path="DashboardPendingAds"
              element={<DashboardPendingAds />}
            />
            <Route path="DashboardNoShipAds" element={<DashboardNoShipAds />} />
            <Route path="DashboardScents" element={<DashboardScents />} />
            <Route path="DashboardColors" element={<DashboardColors />} />
            <Route
              path="DashboardCategories"
              element={<DashboardCategories />}
            />
            <Route path="DashboardProduct" element={<DashboardProduct />} />
            <Route
              path="DashboardProductBrand"
              element={<DashboardProductBrand />}
            />
            <Route path="DashboardBrands" element={<DashboardBrands />} />
            <Route path="Error" element={<Error />} />
            <Route path="Login" element={<Login />} />
            <Route path="Package" element={<Package />} />
            <Route path="Register" element={<Register />} />
            <Route path="Single" element={<Single />} />
            <Route path="Store" element={<Store />} />
            <Route path="Test" element={<Test />} />
            <Route path="TermsCondition" element={<TermsCondition />} />
            <Route path="UserProfile" element={<UserProfile />} />
            <Route path="Gallery" element={<Gallery />} />
            <Route path="BulkSingle" element={<BulkSingle />} />
            <Route path="CreateBulkAd" element={<CreateBulkAd />} />
            <Route path="CategoryClothing" element={<CategoryClothing />} />
            <Route path="CategoryBath" element={<CategoryBath />} />
            <Route path="CategoryBags" element={<CategoryBags />} />
            <Route path="CategoryJewelry" element={<CategoryJewelry />} />
            <Route path="CategoryProduct" element={<CategoryProduct />} />
            <Route path="CategoryBrand" element={<CategoryBrand />} />
            <Route path="CategoryGifts" element={<CategoryGifts />} />
            <Route path="Cart" element={<Cart />} />
            <Route path="CheckoutPage" element={<CheckoutPage />} />
            <Route path="ConfirmPage" element={<ConfirmPage />} />
          </Routes>
        </div>
        <Footer />
      </productType.Provider>
    </Router>
  );
}

export default App;
