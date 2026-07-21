import React, { useState } from "react";

import { Link } from "react-router-dom";

import { 
Heart,
ShoppingCart,
Star,
Scale,
Eye
} from "lucide-react";


import { motion } from "framer-motion";

import Tilt from "react-parallax-tilt";


import useCartStore from "../../store/cartStore";

import useWishlistStore from "../../store/wishlistStore";


import toast from "react-hot-toast";


import useCompareStore from "../../store/compareStore";


import QuickViewModal from "./QuickViewModal";

function ProductCard({product}) {

const [quickView,setQuickView] = useState(false);

const {addToCart}=useCartStore();



const {toggleWishlist}=useWishlistStore();



const wishlist = useWishlistStore(
(state)=>state.wishlist
);



const isWishlisted = wishlist.some(
(item)=>item.id===product.id
);


const addToCompare = useCompareStore(
(state)=>state.addToCompare
);




return (

<>

<Tilt


tiltMaxAngleX={8}

tiltMaxAngleY={8}

perspective={1000}

scale={1.03}

transitionSpeed={1500}

glareEnable={true}

glareMaxOpacity={0.15}

glareColor="#ffffff"

glarePosition="all"



>



<motion.div



initial={{
opacity:0,
y:40
}}



whileInView={{
opacity:1,
y:0
}}



viewport={{
once:true
}}



whileHover={{
y:-12
}}



transition={{
duration:.5
}}



className="

group

relative

bg-white

dark:bg-slate-900


rounded-3xl


overflow-hidden


border

border-slate-200

dark:border-slate-700


shadow-lg


hover:shadow-2xl


transition-all

duration-500

"

>







{/* SALE BADGE */}



<motion.div


animate={{
y:[0,-6,0]
}}


transition={{
duration:2,
repeat:Infinity
}}


className="

absolute

top-4

left-4

z-20


bg-gradient-to-r

from-indigo-600

via-purple-600

to-cyan-500


text-white


text-xs

font-bold


px-4

py-2


rounded-full


shadow-xl

"

>


20% OFF


</motion.div>



<div

className="
absolute
top-16
left-4
z-20

bg-red-500

text-white

text-xs

font-bold

px-4

py-2

rounded-full

shadow-lg

"

>

Only 5 Left 🔥

</div>





{/* WISHLIST BUTTON */}



<motion.button



whileTap={{
scale:0.8
}}



onClick={()=>toggleWishlist(product)}



className="

absolute

top-16

right-4


z-20


w-11

h-11


rounded-full


flex

items-center

justify-center


bg-white/90

dark:bg-slate-800/90


shadow-xl


hover:scale-110


transition

"

>


<Heart


size={20}


className={

isWishlisted

?

"fill-red-500 text-red-500"

:

"text-slate-500 dark:text-white"

}

/>


</motion.button>

{/* QUICK VIEW BUTTON */}


<motion.button

whileTap={{
scale:0.8
}}

onClick={()=>setQuickView(true)}

className="

absolute

top-30

right-4

z-20


w-11

h-11


rounded-full


flex

items-center

justify-center


bg-white/90

dark:bg-slate-800/90


shadow-xl


hover:scale-110


transition

"

>


<Eye

size={20}

className="
text-indigo-600
dark:text-cyan-400
"

/>


</motion.button>







{/* IMAGE */}



<Link

to={`/product/${product.id}`}


className="


block


bg-gradient-to-br

from-slate-100

to-slate-200


dark:from-slate-800

dark:to-slate-900



h-72



flex

items-center

justify-center



p-8



overflow-hidden



"

>



<motion.img

loading="lazy"

decoding="async"

src={product.image}


alt={product.title}



animate={{

y:[0,-8,0]

}}



transition={{

duration:4,

repeat:Infinity,

ease:"easeInOut"

}}



className="

h-56

w-full


object-contain


group-hover:scale-110


transition

duration-700

"



/>



</Link>









{/* CONTENT */}



<div

className="

p-6

"

>






<p

className="

text-xs

uppercase


tracking-widest


text-slate-500


dark:text-slate-400


mb-3


"

>


{product.category}


</p>







<h2


className="


font-bold


text-lg


text-slate-900


dark:text-white



line-clamp-2


min-h-[56px]


"

>


{product.title}


</h2>









{/* RATING */}



<div

className="

flex

items-center

gap-2

mt-4

"

>



<div


className="

flex

items-center

gap-1


bg-emerald-100


dark:bg-emerald-900



text-emerald-700


dark:text-emerald-300



px-3

py-1



rounded-full



text-sm



font-semibold

"

>



<Star

size={14}

fill="currentColor"

/>



{product.rating?.rate || 5}



</div>





<span

className="

text-sm

text-slate-400

"

>


({product.rating?.count || 0})


</span>




</div>









{/* PRICE */}



<div

className="

mt-5

flex

items-center

justify-between

"

>



<h3


className="


text-2xl


font-black



bg-gradient-to-r



from-indigo-600


via-purple-600


to-cyan-500



bg-clip-text


text-transparent


"

>


₹{product.price}


</h3>






<span

className="

text-xs

text-slate-500

"

>


Free Delivery


</span>



</div>











{/* ADD CART BUTTON */}




<motion.button



whileTap={{

scale:0.95

}}



onClick={()=>{


addToCart(product);


toast.success(
"Added to cart 🛒"
);


}}



className="


mt-6


w-full


flex

items-center

justify-center


gap-2



bg-gradient-to-r


from-indigo-600


via-purple-600


to-cyan-500



text-white



py-3



rounded-2xl



font-semibold



hover:shadow-xl


hover:shadow-indigo-500/40



hover:scale-[1.03]



active:scale-95



transition-all


duration-300



"

>



<ShoppingCart size={18}/>


Add To Cart



</motion.button>



<motion.button

whileHover={{
scale:1.02
}}

whileTap={{
scale:0.95
}}

onClick={()=>addToCompare(product)}

className="

mt-3
w-full

flex
items-center
justify-center
gap-2

py-3

rounded-2xl

border
border-indigo-500
dark:border-cyan-400

bg-white
dark:bg-slate-900

text-indigo-600
dark:text-cyan-400

font-semibold

hover:bg-gradient-to-r
hover:from-indigo-600
hover:via-purple-600
hover:to-cyan-500

hover:text-white

hover:border-transparent

transition-all
duration-300

"

>

<Scale size={18}/>

Compare Products

</motion.button>







</div>




</motion.div>


</Tilt>



<QuickViewModal

product={product}

open={quickView}

setOpen={setQuickView}

/>




</>

)

}



export default React.memo(ProductCard);