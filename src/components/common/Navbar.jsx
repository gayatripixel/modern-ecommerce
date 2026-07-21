import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import {
Menu,
X,
Search,
ShoppingCart,
Heart,
Moon,
Sun,
User,
LayoutDashboard
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";


import useCartStore from "../../store/cartStore";
import useWishlistStore from "../../store/wishlistStore";
import useAuthStore from "../../store/authStore";
import useThemeStore from "../../store/themeStore";
import CartDrawer from "./CartDrawer";
import SearchBar from "./SearchBar";

function Navbar(){


const [open,setOpen]=useState(false);

const [cartOpen,setCartOpen]=useState(false);

const {
darkMode,
toggleTheme
}=useThemeStore();



const cart = useCartStore(
state=>state.cart
);


const wishlist = useWishlistStore(
state=>state.wishlist
);



const user = useAuthStore(
state=>state.user
);



const navLinks=[
{
name:"Home",
path:"/"
},
{
name:"Shop",
path:"/products"
},
{
name:"About",
path:"/about"
},
{
name:"Orders",
path:"/orders"
}
];



return(


<motion.nav

initial={{
y:-80,
opacity:0
}}

animate={{
y:0,
opacity:1
}}

transition={{
duration:.6
}}

className="
fixed
top-5
left-1/2
-translate-x-1/2
z-50
w-[92%]
max-w-6xl
rounded-3xl
border
border-slate-200
dark:border-slate-700

bg-white/80
dark:bg-slate-950/80

backdrop-blur-xl

shadow-xl

"


>


<div
className="
px-5
py-3
flex
items-center
gap-6
"
>



{/* LOGO */}


<Link
to="/"
className="
flex
items-center
gap-3
shrink-0
"
>


<div

className="
w-11
h-11
rounded-2xl

bg-gradient-to-br
from-indigo-500
via-purple-500
to-cyan-400

flex
items-center
justify-center

text-white
text-xl
font-black

shadow-lg
shadow-indigo-500/30

"

>

N

</div>



<div>


<h1

className="
text-xl
font-black

bg-gradient-to-r
from-indigo-600
via-purple-600
to-cyan-500

bg-clip-text
text-transparent

"

>

Nexora

</h1>


<p

className="
text-xs
text-slate-500
dark:text-slate-400
"

>

Premium Store

</p>


</div>


</Link>


<div
className="
hidden
lg:block
flex-1
max-w-lg
mx-6
"
>

<SearchBar/>

</div>




{/* DESKTOP MENU */}



<div
className="
hidden
xl:flex
items-center
gap-4
shrink-0
"
>


{
navLinks.map((item)=>(

<NavLink

key={item.name}

to={item.path}

onClick={()=>setOpen(false)}

className={({isActive})=>`

py-2
font-semibold
transition

${
isActive
?
"text-indigo-600 dark:text-cyan-400"
:
"text-slate-700 dark:text-slate-200"
}

`}

>

{item.name}

</NavLink>

))
}






</div>







{/* RIGHT SIDE */}



<div
className="
flex
items-center
gap-4
shrink-0
"
>




<button
onClick={toggleTheme}
className="
w-11
h-11
rounded-full

bg-slate-100
dark:bg-slate-800

text-slate-700
dark:text-cyan-400

flex
items-center
justify-center

hover:scale-110
transition
"
>

{
darkMode
?
<Sun size={20}/>
:
<Moon size={20}/>
}

</button>








<div>

<NavLink

to="/wishlist"

className={({isActive})=>`

relative
flex
items-center
gap-2
transition

${
isActive
?
"text-violet-600 dark:text-cyan-400"
:
"text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-cyan-400"
}

`}

onClick={()=>setOpen(false)}

>

<Heart size={20}/>



<span
className="
absolute
-top-3
-left-3
w-5
h-5
rounded-full
flex
items-center
justify-center
text-xs
font-bold
bg-violet-600
text-white
dark:bg-cyan-400
dark:text-slate-900
"
>

{wishlist.length}

</span>

</NavLink>


</div>








<div>

<button

onClick={()=>setCartOpen(true)}

className="
relative
flex
items-center
gap-2
text-slate-600
dark:text-white
"

>

<ShoppingCart size={20}/>




<span
className="
absolute
-top-3
-left-3
w-5
h-5
rounded-full
bg-indigo-600
text-white
text-xs
flex
items-center
justify-center
"
>

{cart.length}

</span>


</button>


</div>






{
user
?

<div className="flex items-center gap-3">


<Link

to="/profile"

className="
flex
items-center
gap-2

px-4
py-2

rounded-full

bg-gradient-to-r
from-indigo-500
to-purple-500

text-white

font-semibold

hover:scale-105

transition

"

>

<User size={18}/>

{user.name}

</Link>






</div>



:

<Link

to="/login"

className="
px-5
py-2

rounded-full

bg-gradient-to-r

from-indigo-500
to-purple-500

text-white

font-semibold

hover:scale-105

transition

"

>

Login

</Link>

}

<button

onClick={()=>setOpen(!open)}

className="
lg:hidden

w-10
h-10

rounded-full

bg-slate-100

dark:bg-slate-800

"

>

{

open

?

<X/>

:

<Menu/>

}


</button>



</div>




</div>









{/* MOBILE MENU */}



<AnimatePresence>

{

open &&

<motion.div

initial={{
opacity:0,
height:0
}}

animate={{
opacity:1,
height:"auto"
}}

exit={{
opacity:0,
height:0
}}


className="
lg:hidden

px-6
pb-6

"

>


<div

className="
flex
flex-col
gap-5

"

>


{
navLinks.map((item) => (

<NavLink
key={item.name}
to={item.path}

className={({isActive}) => `

relative
font-semibold
transition
duration-300
px-1

${
isActive
?
"text-indigo-600 dark:text-cyan-400"
:
"text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400"
}

`}

>

{({isActive})=>(
<>
{item.name}

{isActive && (

<motion.div

layoutId="nav"

className="
absolute
-left-1
-right-1
-bottom-[-6px]
h-[3px]
rounded-full
bg-gradient-to-r
from-indigo-500
to-cyan-400
"

/>

)}

</>
)}

</NavLink>

))
}



</div>



</motion.div>


}

</AnimatePresence>


<CartDrawer

open={cartOpen}

setOpen={setCartOpen}

/>


</motion.nav>


)

}


export default Navbar;