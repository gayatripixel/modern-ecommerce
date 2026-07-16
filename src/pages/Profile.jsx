import { Link } from "react-router-dom";

import useAuthStore from "../store/authStore";
import useCartStore from "../store/cartStore";
import useWishlistStore from "../store/wishlistStore";
import useOrderStore from "../store/orderStore";


function Profile(){


  const user = useAuthStore(
    (state)=>state.user
  );


  const logout = useAuthStore(
    (state)=>state.logout
  );


  const cart = useCartStore(
    (state)=>state.cart
  );


  const wishlist = useWishlistStore(
    (state)=>state.wishlist
  );


  const orders = useOrderStore(
    (state)=>state.orders
  );



  return (

<section
className="
min-h-screen
bg-gray-50
dark:bg-gray-950
px-6
py-20
"
>


<div
className="
max-w-5xl
mx-auto
"
>



{/* Profile Card */}

<div
className="
bg-white
dark:bg-gray-900
rounded-3xl
shadow-xl
p-10
border
border-gray-200
dark:border-gray-800
"
>


<div
className="
flex
items-center
gap-6
"
>


<div
className="
w-24
h-24
rounded-full
bg-black
dark:bg-white
text-white
dark:text-black
flex
items-center
justify-center
text-4xl
font-bold
"
>

{
user?.name?.charAt(0)
}

</div>



<div>

<h1
className="
text-3xl
font-bold
text-black
dark:text-white
"
>

Hello, {user?.name} 👋

</h1>


<p
className="
text-gray-500
dark:text-gray-400
mt-2
"
>

{user?.email}

</p>


</div>


</div>



</div>





{/* Stats */}


<div
className="
grid
md:grid-cols-3
gap-6
mt-10
"
>



<Link
to="/cart"
className="
bg-white
dark:bg-gray-900
rounded-3xl
p-8
shadow-lg
border
border-gray-200
dark:border-gray-800
hover:scale-105
transition
"
>

<h2
className="
text-3xl
font-bold
text-black
dark:text-white
"
>

{cart.length}

</h2>


<p
className="
text-gray-500
dark:text-gray-400
mt-2
"
>

🛒 Cart Items

</p>


</Link>





<Link
to="/wishlist"
className="
bg-white
dark:bg-gray-900
rounded-3xl
p-8
shadow-lg
border
border-gray-200
dark:border-gray-800
hover:scale-105
transition
"
>

<h2
className="
text-3xl
font-bold
text-black
dark:text-white
"
>

{wishlist.length}

</h2>


<p
className="
text-gray-500
dark:text-gray-400
mt-2
"
>

❤️ Wishlist

</p>


</Link>





<Link
to="/orders"
className="
bg-white
dark:bg-gray-900
rounded-3xl
p-8
shadow-lg
border
border-gray-200
dark:border-gray-800
hover:scale-105
transition
"
>


<h2
className="
text-3xl
font-bold
text-black
dark:text-white
"
>

{orders.length}

</h2>


<p
className="
text-gray-500
dark:text-gray-400
mt-2
"
>

📦 Orders

</p>


</Link>



</div>





{/* Actions */}


<div
className="
mt-10
bg-white
dark:bg-gray-900
rounded-3xl
p-8
shadow-lg
border
border-gray-200
dark:border-gray-800
"
>


<button

onClick={logout}

className="
w-full
bg-black
dark:bg-white
text-white
dark:text-black
py-3
rounded-full
font-semibold
hover:scale-105
transition
"

>

Logout

</button>


</div>



</div>


</section>

  )

}


export default Profile;