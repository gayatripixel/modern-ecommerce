import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import useCartStore from "../../store/cartStore";
import useWishlistStore from "../../store/wishlistStore";
import useAuthStore from "../../store/authStore";
import useThemeStore from "../../store/themeStore";


function Navbar() {

  const [open, setOpen] = useState(false);

  const { darkMode, toggleTheme } = useThemeStore();

  const cart = useCartStore((state) => state.cart);

  const wishlist = useWishlistStore(
   (state)=>state.wishlist
  );

  const { user, logout } = useAuthStore();


  return (

    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-black dark:text-white">


        {/* Logo */}

        <Link 
          to="/"
          className="text-3xl font-extrabold tracking-wide text-black dark:text-white"
        >
          Nexora
        </Link>

        <button
           onClick={()=>setOpen(!open)}
           className="md:hidden text-3xl"
          >
            ☰
        </button>



        {/* Navigation Links */}

          <ul
            className={`
            ${open ? "flex" : "hidden"}
            md:flex
            absolute md:static
            top-20 left-0
            w-full md:w-auto
          bg-white dark:bg-gray-900
           md:bg-transparent md:dark:bg-transparent
           flex-col md:flex-row
           items-start md:items-center
           gap-6
          px-6 md:px-0
          py-5 md:py-0
          shadow-md md:shadow-none
         text-gray-600 dark:text-gray-300 font-medium
           `}
            >


          <li>
            <Link
              to="/"
              className="hover:text-black dark:hover:text-white transition duration-300"
              onClick={()=>setOpen(false)}
            >
              Home
            </Link>
          </li>


          <li>
            <Link
              to="/products"
              className="hover:text-black dark:hover:text-white transition duration-300"
              onClick={()=>setOpen(false)}
            >
              Products
            </Link>
          </li>


          <li>
            <Link
              to="/cart"
               className="relative hover:text-black dark:hover:text-white transition duration-300"
               onClick={()=>setOpen(false)}
            >
              Cart

              <span className="absolute -top-3 -right-4 bg-black dark:bg-white text-white dark:text-black text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cart.length}
              </span>

            </Link>
          </li>

          <li>
           <Link 
           to="/wishlist"
            className="relative hover:text-black dark:hover:text-white transition duration-300"
            onClick={()=>setOpen(false)}
           >
            Wishlist 
            <span className="absolute -top-3 -right-4 bg-black dark:bg-white text-white dark:text-black text-xs w-5 h-5 rounded-full flex items-center justify-center">
               {wishlist.length}
            </span>
       
           </Link>
          </li>

          <li>
           <Link 
           to="/orders"
            className="relative hover:text-black dark:hover:text-white transition duration-300"
            onClick={()=>setOpen(false)}
           >
            Orders 
           </Link>
          </li>

          <li>
               <Link
              to="/admin"
              className="hover:text-black dark:hover:text-white transition duration-300"
              onClick={() => setOpen(false)}
             >
               Admin
            </Link>
          </li>


        </ul>

        




        {/* Right Side */}

        <div className="flex items-center gap-4">

         <button
           onClick={toggleTheme}
           className="text-xl"
         >
          {darkMode ? "☀️" : "🌙"}
        </button>

          {/* Search */}

          <input
            type="text"
            placeholder="Search products..."
            className="hidden lg:block border rounded-full px-5 py-2 text-sm outline-none 
          bg-white dark:bg-gray-800 
          text-black dark:text-white
          border-gray-300 dark:border-gray-600
            focus:ring-2 focus:ring-black"
          />



          {/* Login Button */}
{
user ? (

<div className="flex items-center gap-4">

<Link
to="/profile"
className="
flex
items-center
gap-2
bg-black
dark:bg-white
text-white
dark:text-black
px-5
py-2
rounded-full
hover:scale-105
transition
"
>

<User size={18}/>

{user.name}

</Link>



</div>

) : (

<Link
to="/login"
className="
bg-black
dark:bg-white
text-white
dark:text-black
px-5
py-2
rounded-full
"
>

Login

</Link>

)
}

        </div>


      </div>

    </nav>

  )

}


export default Navbar;