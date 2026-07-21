import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
Trash2,
Minus,
Plus,
ShoppingBag
} from "lucide-react";

import useCartStore from "../store/cartStore";


function Cart(){


const {
cart,
increaseQuantity,
decreaseQuantity,
removeFromCart

}=useCartStore();




const subtotal = cart.reduce(
(total,item)=>
total + item.price * item.quantity,
0
);



const shipping = subtotal > 300 ? 0 : 40;


const tax = subtotal * 0.18;


const finalTotal =
subtotal + shipping + tax;






return(


<section

className="
min-h-screen

bg-slate-50
dark:bg-slate-950

px-6
py-20

"

>


<div

className="
max-w-7xl
mx-auto

"

>


<h1

className="
text-5xl
font-black

text-slate-900
dark:text-white

mb-12

"

>

Shopping Cart

</h1>







{
cart.length===0 ? (


<motion.div

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

className="
text-center

bg-white
dark:bg-slate-900

rounded-[40px]

p-16

shadow-xl

border
border-slate-200
dark:border-slate-800

"

>


<div

className="
mx-auto

w-20
h-20

rounded-full

bg-indigo-100
dark:bg-indigo-900

flex
items-center
justify-center

"

>

<ShoppingBag
className="text-indigo-600"
/>

</div>



<h2

className="
text-3xl
font-black

mt-6

dark:text-white

"

>

Your Cart is Empty

</h2>


<p

className="
text-slate-500

mt-3

"

>

Add premium products to continue shopping.

</p>



<Link

to="/products"

className="
inline-block

mt-8

px-8
py-3

rounded-2xl

bg-gradient-to-r

from-indigo-600
to-violet-600

text-white

font-bold

"

>

Explore Products

</Link>



</motion.div>



):(





<div

className="
grid

lg:grid-cols-3

gap-10

"

>





{/* CART ITEMS */}



<div

className="
lg:col-span-2

space-y-6

"

>


{

cart.map((item)=>(



<motion.div


key={item.id}


initial={{
opacity:0,
x:-30
}}

animate={{
opacity:1,
x:0
}}


className="

flex

flex-col
sm:flex-row

items-center

justify-between


gap-6


bg-white

dark:bg-slate-900


rounded-[30px]


p-6


shadow-lg


border

border-slate-200

dark:border-slate-800

"


>



<div

className="
flex

items-center

gap-6

"

>


<img

src={item.image}

alt={item.title}

className="

w-32
h-32

object-contain

rounded-2xl

bg-slate-100

dark:bg-slate-800

p-3

hover:scale-110

transition

"

/>




<div>


<p

className="
text-sm

uppercase

text-indigo-500

font-bold

"

>

{item.category}

</p>



<h2

className="
text-xl

font-bold

dark:text-white

mt-2

line-clamp-2

"

>

{item.title}

</h2>



<p

className="
text-2xl

font-black

mt-3

bg-gradient-to-r

from-indigo-600

to-violet-600

bg-clip-text

text-transparent

"

>

₹{item.price}

</p>


</div>


</div>









<div

className="
flex

items-center

gap-5

"

>



<div

className="
flex

items-center

bg-slate-100

dark:bg-slate-800

rounded-full

"

>


<button

onClick={()=>
decreaseQuantity(item.id)
}

className="
p-3

dark:text-white

"

>

<Minus size={16}/>

</button>



<span

className="
font-bold

dark:text-white

"

>

{item.quantity}

</span>



<button

onClick={()=>
increaseQuantity(item.id)
}

className="
p-3

dark:text-white

"

>

<Plus size={16}/>

</button>



</div>





<button

onClick={()=>
removeFromCart(item.id)
}

className="
w-10
h-10

rounded-full

bg-red-100

dark:bg-red-900

text-red-600

flex

items-center
justify-center

"

>

<Trash2 size={18}/>

</button>



</div>





</motion.div>



))

}



</div>









{/* SUMMARY */}



<motion.div


initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}


className="


bg-white

dark:bg-slate-900


rounded-[35px]


p-8


shadow-2xl


border

border-slate-200

dark:border-slate-800


h-fit


"


>



<h2

className="
text-2xl

font-black

dark:text-white

mb-8

"

>

Order Summary

</h2>






<div className="
space-y-5

text-slate-600

dark:text-slate-300

">


<div className="flex justify-between">

<span>
Subtotal
</span>

<span>
₹{subtotal.toFixed(2)}
</span>


</div>




<div className="flex justify-between">

<span>
Shipping
</span>


<span>

{
shipping===0
?
"FREE"
:
`₹${shipping}`
}

</span>


</div>





<div className="flex justify-between">

<span>
Tax
</span>

<span>
₹{tax.toFixed(2)}
</span>


</div>


</div>





<hr className="
my-6

border-slate-200

dark:border-slate-700

"/>




<div

className="
flex

justify-between

text-3xl

font-black

dark:text-white

"

>

<span>
Total
</span>


<span

className="
text-indigo-600

"

>

₹{finalTotal.toFixed(2)}

</span>


</div>






<Link

to="/checkout"

className="

block

text-center

mt-8

py-4

rounded-2xl


bg-gradient-to-r

from-indigo-600

via-violet-600

to-cyan-500


text-white


font-black


hover:scale-105


transition

"

>

Proceed Checkout

</Link>




</motion.div>




</div>





)

}




</div>


</section>


)


}


export default Cart;