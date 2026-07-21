import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import useWishlistStore from "../store/wishlistStore";
import ProductCard from "../components/product/ProductCard";


function Wishlist(){


const wishlist = useWishlistStore(
(state)=>state.wishlist
);



return(

<section

className="
min-h-screen

bg-slate-50
dark:bg-slate-950

px-6
py-24

"

>


<div

className="
max-w-7xl
mx-auto

"

>





{/* HERO HEADER */}


<motion.div

initial={{
opacity:0,
y:-30
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.6
}}

className="
mb-14
"

>



<div

className="
relative
overflow-hidden

rounded-[40px]

p-10
md:p-14


bg-white
dark:bg-slate-900


border

border-slate-200
dark:border-slate-800


shadow-xl

"

>


{/* glow */}

<div

className="
absolute
top-0
right-0

w-72
h-72

bg-indigo-500/20

blur-3xl

rounded-full

"

></div>



<div

className="
relative
z-10

flex
flex-col
md:flex-row

md:items-center

justify-between

gap-8

"

>


<div>


<div

className="
flex
items-center
gap-4

"

>


<div

className="
w-16
h-16

rounded-3xl

bg-gradient-to-br

from-indigo-600
via-violet-600
to-cyan-500


flex
items-center
justify-center


shadow-lg

shadow-indigo-500/30

"

>

<Heart

size={32}

className="text-white"

fill="white"

/>


</div>



<div>


<h1

className="
text-4xl
md:text-5xl

font-black

text-slate-900

dark:text-white

"

>

My Wishlist

</h1>



<p

className="
mt-2

text-slate-500

dark:text-slate-400

"

>

Your favorite premium products collection

</p>



</div>



</div>


</div>




<div

className="
flex
items-center
gap-3

px-6
py-4

rounded-3xl

bg-slate-100

dark:bg-slate-800


"

>


<Sparkles

className="
text-cyan-500

"

/>


<p

className="
font-bold

text-slate-700

dark:text-white

"

>

{wishlist.length}

Saved Items

</p>


</div>



</div>


</div>


</motion.div>










{/* EMPTY STATE */}



{
wishlist.length===0 ?


(


<motion.div


initial={{
opacity:0,
scale:.9
}}

animate={{
opacity:1,
scale:1
}}


className="


bg-white

dark:bg-slate-900


rounded-[40px]


p-16


text-center


border

border-slate-200

dark:border-slate-800


shadow-xl


"

>


<div

className="
w-28
h-28

mx-auto

rounded-full


bg-gradient-to-br

from-indigo-100

via-violet-100

to-cyan-100


dark:from-indigo-900

dark:via-violet-900

dark:to-cyan-900


flex
items-center
justify-center

"

>


<Heart

size={50}

className="
text-indigo-600
dark:text-cyan-400

"

/>


</div>




<h2

className="
mt-8

text-3xl

font-black

text-slate-900

dark:text-white

"

>

Your Wishlist is Empty

</h2>



<p

className="
mt-3

text-slate-500

dark:text-slate-400

"

>

Start adding products you love ❤️

</p>



<Link

to="/products"

className="

inline-block

mt-8

px-10
py-4


rounded-2xl


bg-gradient-to-r

from-indigo-600

via-violet-600

to-cyan-500


text-white

font-bold


hover:scale-105


shadow-lg

shadow-indigo-500/30


transition

"

>


Explore Products

</Link>



</motion.div>


)

:



(



<>


{/* COUNT BAR */}


<motion.div

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

className="
mb-10

flex

justify-between

items-center

"

>


<div

className="

px-6
py-3

rounded-full


bg-white

dark:bg-slate-900


border

border-slate-200

dark:border-slate-800


shadow-md

"

>


<p

className="
font-bold

text-slate-700

dark:text-white

"

>

❤️ {wishlist.length}

{
wishlist.length===1
?
" Product"
:
" Products"

}

Saved

</p>



</div>


</motion.div>







{/* PRODUCTS */}



<div

className="

grid

grid-cols-1

sm:grid-cols-2

md:grid-cols-3

lg:grid-cols-4


gap-8

"

>


{

wishlist.map((product,index)=>(


<motion.div


key={product.id}


initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}


transition={{

delay:index*.08

}}


>


<ProductCard

product={product}

/>


</motion.div>



))


}


</div>



</>


)


}





</div>



</section>


)

}


export default Wishlist;