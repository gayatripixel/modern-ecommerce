import { X, Trash2 } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

import useCartStore from "../../store/cartStore";

import { Link } from "react-router-dom";



function CartDrawer({open,setOpen}){


const cart = useCartStore(
(state)=>state.cart
);


const removeFromCart = useCartStore(
(state)=>state.removeFromCart
);





const total = cart.reduce(

(sum,item)=>

sum + item.price * (item.quantity || 1),

0

);





return(


<AnimatePresence>


{

open &&

<>


{/* OVERLAY */}


<motion.div


initial={{
opacity:0
}}


animate={{
opacity:1
}}


exit={{
opacity:0
}}


onClick={()=>setOpen(false)}


className="

fixed

inset-0

bg-black/40

backdrop-blur-sm

z-[60]

"

/>








{/* DRAWER */}



<motion.div


initial={{

x:"100%"

}}


animate={{

x:0

}}


exit={{

x:"100%"

}}


transition={{

duration:.4

}}



className="

fixed

right-0

top-0

h-screen

w-full

sm:w-[420px]


bg-white

dark:bg-slate-900


z-[70]


shadow-2xl


p-6


"

>



{/* HEADER */}



<div

className="

flex

justify-between

items-center

mb-8

"

>


<h2

className="

text-3xl

font-black

dark:text-white

"

>

Your Cart 🛒

</h2>


<button

onClick={()=>setOpen(false)}

>

<X

className="dark:text-white"

/>


</button>


</div>









{

cart.length===0

?

(

<p

className="

text-center

text-slate-500

mt-20

"

>

Your cart is empty

</p>

)


:

(


<div

className="

space-y-5

overflow-y-auto

h-[60vh]

"

>


{

cart.map(item=>(



<div

key={item.id}

className="

flex

gap-4

bg-slate-100

dark:bg-slate-800

rounded-2xl

p-4

"

>



<img

src={item.image}

className="

w-20

h-20

object-contain

"

/>



<div

className="

flex-1

"

>



<h3

className="

font-bold

dark:text-white

line-clamp-1

"

>

{item.title}

</h3>




<p

className="

font-black

mt-2

dark:text-white

"

>

₹{item.price}

</p>



</div>






<button

onClick={()=>removeFromCart(item.id)}

>

<Trash2

size={20}

className="text-red-500"

/>


</button>





</div>


))


}



</div>


)

}








{/* FOOTER */}


{

cart.length>0 &&


<div

className="

absolute

bottom-0

left-0

right-0


p-6


border-t

dark:border-slate-700

bg-white

dark:bg-slate-900

"

>


<div

className="

flex

justify-between

font-black

text-xl

dark:text-white

mb-5

"

>

<span>
Total
</span>


<span>
₹{total.toFixed(2)}
</span>


</div>





<Link

to="/checkout"

onClick={()=>setOpen(false)}

className="

block

text-center

bg-gradient-to-r

from-indigo-600

to-purple-600


text-white


py-4


rounded-full


font-bold

"

>

Checkout

</Link>



</div>


}




</motion.div>



</>


}


</AnimatePresence>


)


}


export default CartDrawer;