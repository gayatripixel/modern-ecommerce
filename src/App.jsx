import {
BrowserRouter,
Routes,
Route,
useLocation
} from "react-router-dom";


import {
lazy,
Suspense
} from "react";


import useThemeStore from "./store/themeStore";


import Navbar from "./components/common/Navbar";


import ProtectedRoute from "./components/common/ProtectedRoute";

import AdminRoute from "./components/auth/AdminRoute";


import Footer from "./components/common/Footer";

import BackToTop from "./components/common/BackToTop";

import ScrollTop from "./components/common/ScrollTop";

import PageTransition from "./components/common/PageTransition";

import CompareBar from "./components/product/CompareBar";





// ================= LAZY IMPORTS =================


const Home = lazy(
()=>import("./pages/Home")
);


const Products = lazy(
()=>import("./pages/Products")
);


const ProductDetails = lazy(
()=>import("./pages/ProductDetails")
);


const Cart = lazy(
()=>import("./pages/Cart")
);


const Wishlist = lazy(
()=>import("./pages/Wishlist")
);


const Checkout = lazy(
()=>import("./pages/Checkout")
);


const Success = lazy(
()=>import("./pages/Success")
);


const Orders = lazy(
()=>import("./pages/Orders")
);


const OrderDetails = lazy(
()=>import("./pages/OrderDetails")
);


const Profile = lazy(
()=>import("./pages/Profile")
);


const AdminDashboard = lazy(
()=>import("./pages/AdminDashboard")
);


const Register = lazy(
()=>import("./pages/Register")
);


const ForgotPassword = lazy(
()=>import("./pages/ForgotPassword")
);


const ResetPassword = lazy(
()=>import("./pages/ResetPassword")
);


const About = lazy(
()=>import("./pages/About")
);


const Contact = lazy(
()=>import("./pages/Contact")
);


const Faq = lazy(
()=>import("./pages/Faq")
);


const PrivacyPolicy = lazy(
()=>import("./pages/PrivacyPolicy")
);


const Terms = lazy(
()=>import("./pages/Terms")
);


const NotFound = lazy(
()=>import("./pages/NotFound")
);


const Compare = lazy(
()=>import("./pages/Compare")
);


const Login = lazy(
()=>import("./pages/Login")
);




// ================= ROUTES =================


function AnimatedRoutes(){


const location = useLocation();



return(


<Suspense


fallback={

<div

className="
min-h-screen
flex
items-center
justify-center

text-3xl
font-black

dark:text-white

"

>

Loading Nexora...

</div>

}


>


<Routes

location={location}

key={location.pathname}

>



<Route

path="/"

element={

<PageTransition>

<Home/>

</PageTransition>

}

/>






<Route

path="/products"

element={

<PageTransition>

<Products/>

</PageTransition>

}

/>





<Route

path="/product/:id"

element={

<PageTransition>

<ProductDetails/>

</PageTransition>

}

/>





<Route

path="/cart"

element={

<PageTransition>

<Cart/>

</PageTransition>

}

/>





<Route

path="/wishlist"

element={

<PageTransition>

<Wishlist/>

</PageTransition>

}

/>






<Route

path="/login"

element={

<PageTransition>

<Login/>

</PageTransition>

}

/>





<Route

path="/register"

element={

<PageTransition>

<Register/>

</PageTransition>

}

/>





<Route

path="/checkout"

element={

<ProtectedRoute>

<PageTransition>

<Checkout/>

</PageTransition>

</ProtectedRoute>

}

/>





<Route

path="/success"

element={

<PageTransition>

<Success/>

</PageTransition>

}

/>






<Route

path="/orders"

element={

<ProtectedRoute>

<PageTransition>

<Orders/>

</PageTransition>

</ProtectedRoute>

}

/>






<Route

path="/orders/:id"

element={

<ProtectedRoute>

<PageTransition>

<OrderDetails/>

</PageTransition>

</ProtectedRoute>

}

/>







<Route

path="/profile"

element={

<ProtectedRoute>

<PageTransition>

<Profile/>

</PageTransition>

</ProtectedRoute>

}

/>







{/* ADMIN PROTECTED */}



<Route

path="/admin"

element={

<AdminRoute>

<PageTransition>

<AdminDashboard/>

</PageTransition>

</AdminRoute>

}

/>








<Route

path="/forgot-password"

element={

<PageTransition>

<ForgotPassword/>

</PageTransition>

}

/>






<Route

path="/reset-password"

element={

<PageTransition>

<ResetPassword/>

</PageTransition>

}

/>







<Route

path="/about"

element={

<PageTransition>

<About/>

</PageTransition>

}

/>







<Route

path="/contact"

element={

<PageTransition>

<Contact/>

</PageTransition>

}

/>






<Route

path="/faq"

element={

<PageTransition>

<Faq/>

</PageTransition>

}

/>






<Route

path="/privacy"

element={

<PageTransition>

<PrivacyPolicy/>

</PageTransition>

}

/>






<Route

path="/terms"

element={

<PageTransition>

<Terms/>

</PageTransition>

}

/>







<Route

path="/compare"

element={

<PageTransition>

<Compare/>

</PageTransition>

}

/>







<Route

path="*"

element={

<PageTransition>

<NotFound/>

</PageTransition>

}

/>





</Routes>


</Suspense>


)


}









function App(){



const darkMode = useThemeStore(

state=>state.darkMode

);




return(



<div

className={darkMode ? "dark" : ""}

>


<BrowserRouter>



<Navbar/>




<div className="pt-24">


<AnimatedRoutes/>


</div>





<ScrollTop/>

<BackToTop/>

<CompareBar/>

<Footer/>




</BrowserRouter>



</div>


)

}



export default App;