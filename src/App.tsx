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
import ClientLayout from "./layout/ClientLayout";
import Dashboard from "./pages/admin/Dashboard";
import User from "./pages/admin/User";
import OrderPage from "./pages/admin/Order";
import AdminLayout from "./layout/admin.layout";
import Products from "./pages/admin/product/Product";
import Brand from "./pages/admin/brand/Brand";
import Category from "./pages/admin/category/Category";
import AddCategory from "./pages/admin/category/AddCategory";
import EditCategory from "./pages/admin/category/EditCategory";
import AddProduct from "./pages/admin/product/AddProduct";
import AddBrand from "./pages/admin/brand/AddBrand";

function App() {
  return (
    <main className="h-full w-full bg-gray-200">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path={"/"} element={<ClientLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/About-us" element={<AboutUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/product/:id" element={<DetailPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>

          {/* admin routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/user" element={<User />} />
            <Route path="/admin/orders" element={<OrderPage />} />
            <Route path="/admin/product" element={<Products />} />
            <Route path="/admin/product/add" element={<AddProduct />} />
            <Route path="/admin/brand" element={<Brand />} />
            <Route path="/admin/brand/add" element={<AddBrand />} />
            <Route path="/admin/category" element={<Category />} />
            <Route path="/admin/category/add" element={<AddCategory />} />
            <Route path="/admin/category/:id" element={<EditCategory />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Toaster reverseOrder={true} />
    </main>
  );
}

export default App;
