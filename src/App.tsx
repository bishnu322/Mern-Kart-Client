import "./App.css";
import SignUp from "./pages/auth/signup";
import Login from "./pages/auth/login";
import { BrowserRouter, Routes, Route } from "react-router";
import PageNotFound from "./pages/PageNotFound";
import DetailPage from "./pages/DetailPage";
import Home from "./pages/Home";
import Product from "./pages/Product";
import AboutUs from "./pages/About";
import ContactUs from "./pages/Contact";
import { Toaster } from "react-hot-toast";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";

function App() {
  return (
    <main className="h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/products" element={<Product />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/About-us" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/product/:id" element={<DetailPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster reverseOrder={true} />
    </main>
  );
}

export default App;
