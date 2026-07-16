import { BrowserRouter, Routes, Route } from "react-router-dom";

import useThemeStore from "./store/themeStore";

import Navbar from "./components/common/Navbar";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import Success from "./pages/Success";
import Orders from "./pages/Orders";
import NotFound from "./pages/NotFound";
import Footer from "./components/common/Footer";
import BackToTop from "./components/common/BackToTop";
import Profile from "./pages/Profile";
import OrderDetails from "./pages/OrderDetails";
import AdminDashboard from "./pages/AdminDashboard";
import Register from "./pages/Register";

function App() {

  const darkMode = useThemeStore(
    (state) => state.darkMode
  );

  return (

    <div className={darkMode ? "dark" : ""}>

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route 
          path="/products" 
          element={<Products />} 
        />

        <Route 
          path="/cart" 
          element={<Cart />} 
        />

        <Route
          path="/wishlist"
          element={<Wishlist/>}
        />

        <Route 
          path="/login" 
          element={<Login />} 
        />

        <Route
          path="/checkout"
          element={
          <ProtectedRoute>
           <Checkout />
          </ProtectedRoute>
        }
       />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/success"
          element={<Success/>}
        />

        <Route
          path="/orders"
          element={
          <ProtectedRoute>
            <Orders/>
          </ProtectedRoute>
          }
       />

       <Route
        path="*"
        element={<NotFound />}
       />


       <Route 
        path="/profile" 
        element={
        <ProtectedRoute>
         <Profile/>
        </ProtectedRoute>
        }
        />

        <Route
         path="/orders/:id"
         element={
         <ProtectedRoute>
          <OrderDetails />
          </ProtectedRoute>
        }
       />

       <Route
        path="/admin"
         element={
        <ProtectedRoute>
          <AdminDashboard />
        </ProtectedRoute>
         }
        />

        <Route path="/register" element={<Register />} />

      </Routes>

      <BackToTop />

       <Footer />

    </BrowserRouter>

  </div>

  )

}


export default App;