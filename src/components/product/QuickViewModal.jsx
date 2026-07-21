import { X, ShoppingCart, Heart, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import useCartStore from "../../store/cartStore";
import useWishlistStore from "../../store/wishlistStore";

import toast from "react-hot-toast";
import { Link } from "react-router-dom";


function QuickViewModal({
product,
open,
setOpen
}){


const addToCart = useCartStore(
state=>state.addToCart
);


const toggleWishlist = useWishlistStore(
state=>state.toggleWishlist
);



if(!product) return null;



return(


<AnimatePresence>


{
open &&

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

className="
fixed
inset-0
z-[100]

bg-black/60

backdrop-blur-sm

flex
items-center
justify-center

px-6

"


onClick={()=>setOpen(false)}

>


<motion.div

initial={{
scale:.8,
y:50
}}

animate={{
scale:1,
y:0
}}

exit={{
scale:.8,
y:50
}}

transition={{
duration:.3
}}

onClick={(e)=>e.stopPropagation()}


className="

max-w-4xl
w-full

bg-white
dark:bg-slate-900

rounded-[40px]

p-8

shadow-2xl

relative

grid

md:grid-cols-2

gap-10

"


>


<button

onClick={()=>setOpen(false)}

className="
absolute
right-6
top-6

w-10
h-10

rounded-full

bg-slate-100

dark:bg-slate-800

flex
items-center
justify-center

dark:text-white

"

>

<X/>

</button>




{/* IMAGE */}


<div

className="

bg-slate-100

dark:bg-slate-800

rounded-3xl

flex
items-center
justify-center

p-8

overflow-hidden

"

>


<motion.img

src={product.image}

alt={product.title}

initial={{
scale:0.9
}}

animate={{
scale:1
}}

transition={{
duration:0.4
}}

className="

h-80

w-full

object-contain

hover:scale-105

transition-transform

duration-500

"

/>


</div>





{/* DETAILS */}


<div>


<p

className="
uppercase
tracking-widest
text-sm
text-indigo-600
font-bold
"

>

{product.category}

</p>



<h2

className="
mt-4
text-3xl
font-black
dark:text-white

"

>

{product.title}

</h2>



<div className="flex items-center gap-2 mt-5">

<Star

size={18}

fill="orange"

className="text-orange-500"

/>

<span className="font-bold dark:text-white">

{product.rating?.rate}

</span>


</div>




<h3

className="
text-4xl
font-black

mt-6

bg-gradient-to-r
from-indigo-600
to-cyan-500

bg-clip-text
text-transparent

"

>

₹{product.price}

</h3>



<p

className="
mt-5
text-slate-600
dark:text-slate-300
line-clamp-3

"

>

{product.description}

</p>




<div className="flex gap-4 mt-8">


<button

onClick={()=>{

addToCart(product);

toast.success(
"Added to cart 🛒"
);

}}

className="

flex-1

py-4

rounded-2xl

bg-gradient-to-r

from-indigo-600
to-purple-600

text-white

font-bold

flex
items-center
justify-center
gap-2

"

>

<ShoppingCart size={20}/>

Cart

</button>




<button

onClick={()=>toggleWishlist(product)}

className="

w-14

rounded-2xl

border

dark:border-slate-700

dark:text-white

flex

items-center

justify-center

"

>

<Heart/>

</button>


</div>



<Link

to={`/product/${product.id}`}

className="

block

mt-4

text-center

font-bold

text-indigo-600

"

>

View Full Details →

</Link>



</div>


</motion.div>


</motion.div>

}


</AnimatePresence>


)

}


export default QuickViewModal;