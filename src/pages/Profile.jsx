import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
ShoppingCart,
Heart,
Package,
LogOut,
Mail,
LayoutDashboard
} from "lucide-react";



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







const stats=[

{
title:"Cart Items",
value:cart.length,
icon:<ShoppingCart size={28}/>,
link:"/cart"
},


{
title:"Wishlist",
value:wishlist.length,
icon:<Heart size={28}/>,
link:"/wishlist"
},


{
title:"Orders",
value:orders.length,
icon:<Package size={28}/>,
link:"/orders"
}

];






return(


<section

className="

min-h-screen


px-6

py-24



bg-slate-50


dark:bg-slate-950


"

>



<div

className="

max-w-6xl

mx-auto

"

>







{/* PROFILE HEADER */}



<motion.div


initial={{

opacity:0,

y:40

}}



animate={{

opacity:1,

y:0

}}



className="


relative


overflow-hidden


rounded-[40px]



p-10



bg-white/80


dark:bg-slate-900/80


backdrop-blur-xl



border

border-slate-200

dark:border-slate-700



shadow-2xl


"

>





<div

className="

absolute

w-80

h-80


bg-indigo-500/20


rounded-full


blur-3xl


-top-20


-right-20


"

>

</div>







<div

className="

relative

flex

flex-col

md:flex-row

items-center

gap-8

"

>





<div

className="


w-28

h-28


rounded-full



bg-gradient-to-br


from-indigo-600


via-purple-600


to-cyan-500



flex

items-center

justify-center



text-white


text-5xl


font-black



shadow-xl


"

>


{

user?.name?.charAt(0)

}



</div>







<div>


<h1

className="

text-4xl


font-black


text-slate-900


dark:text-white


"

>

Hello, {user?.name} 👋

</h1>





<div

className="

flex

items-center

gap-2


mt-3


text-slate-500


dark:text-slate-400


"

>


<Mail size={18}/>


{user?.email}




</div>


<Link

to="/admin"

className="

mt-6

flex
items-center
justify-center
gap-3

px-6
py-3

rounded-2xl

bg-gradient-to-r

from-indigo-600

to-purple-600


text-white

font-bold

hover:scale-105

transition

"

>

<LayoutDashboard size={20}/>

Open Admin Dashboard

</Link>



</div>




</div>





</motion.div>









{/* STATS */}



<div

className="

grid

md:grid-cols-3


gap-8


mt-10


"

>


{


stats.map((item,index)=>(


<motion.div


key={item.title}


initial={{

opacity:0,

y:30

}}



whileInView={{

opacity:1,

y:0

}}



viewport={{

once:true

}}



transition={{

delay:index*.1

}}




whileHover={{

y:-10

}}



>


<Link


to={item.link}


className="


block


p-8



rounded-[32px]



bg-white/80


dark:bg-slate-900/80



backdrop-blur-xl



border

border-slate-200


dark:border-slate-700



shadow-lg



hover:shadow-2xl



transition


"

>




<div

className="


w-14

h-14



rounded-2xl



bg-gradient-to-br


from-indigo-600


to-purple-600



flex

items-center

justify-center



text-white


mb-6


"

>

{item.icon}


</div>





<h2

className="

text-4xl


font-black


text-slate-900


dark:text-white


"

>

{item.value}

</h2>





<p

className="

mt-2


font-semibold


text-slate-500


dark:text-slate-400


"

>

{item.title}

</p>




</Link>


</motion.div>


))


}



</div>









{/* LOGOUT */}



<motion.div


whileHover={{

scale:1.02

}}



className="

mt-10


rounded-[32px]

p-8



bg-white/80


dark:bg-slate-900/80



border

border-slate-200


dark:border-slate-700



shadow-lg


"

>



<button


onClick={logout}



className="


w-full


flex

items-center

justify-center

gap-3



py-4



rounded-2xl



bg-gradient-to-r


from-red-500


to-pink-500



text-white



font-bold



hover:scale-105



transition


"

>


<LogOut size={20}/>


Logout


</button>



</motion.div>







</div>


</section>



)


}



export default Profile;