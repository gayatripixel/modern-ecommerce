import { 
useState,
useEffect
} from "react";

import {
useParams,
useNavigate
} from "react-router-dom";


import {
ShoppingCart,
Heart,
Plus,
Minus,
Star,
Truck,
ShieldCheck,
RotateCcw,
Zap
} from "lucide-react";


import {
motion
} from "framer-motion";


import { useQuery } from "@tanstack/react-query";


import { getProducts } from "../services/productService";


import useCartStore from "../store/cartStore";
import useWishlistStore from "../store/wishlistStore";
import useRecentStore from "../store/recentStore";


import toast from "react-hot-toast";


import RecentlyViewed from "../components/product/RecentlyViewed";
import Reviews from "../components/product/Reviews";
import ProductCard from "../components/product/ProductCard";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import Tilt from "react-parallax-tilt";
import recommendProducts from "../utils/recommendProducts";

import useActivityStore from "../store/activityStore";
import RecommendedProducts from "../components/product/RecommendedProducts";

import SEO from "../components/common/SEO";
import generateInvoice from "../utils/generateInvoice";

function ProductDetails(){



const {id}=useParams();


const navigate=useNavigate();




const {
addToCart
}=useCartStore();



const {
addToWishlist
}=useWishlistStore();




const addRecentlyViewed =
useRecentStore(
state=>state.addRecentlyViewed
);





const [quantity,setQuantity]=useState(1);






const {
data:products=[],
isLoading,
error

}=useQuery({

queryKey:["products"],

queryFn:getProducts

});





const product =
products.find(
item=>item.id===Number(id)
);

const addView =
useActivityStore(
state=>state.addView
);



useEffect(()=>{

if(product){

addRecentlyViewed(product);

addView(product);

}

},[product]);






if(isLoading){

return(

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

Loading Product...

</div>


)

}





if(error || !product){


return(

<h1

className="
text-center

py-20

text-3xl

dark:text-white

"

>

Product Not Found

</h1>

)

}






const recommendedProducts = recommendProducts(
products,
product
);








const handleCart=()=>{


addToCart({

...product,

quantity

});


toast.success(
"Added to cart 🛒"
);


};











return(

<>

<SEO

title={`${product.title} | Nexora`}

description={product.description}

/>


<section

className="

min-h-screen

bg-slate-50

dark:bg-slate-950

py-20

px-6

"

>



<div

className="

max-w-7xl

mx-auto

grid

lg:grid-cols-2

gap-16

"

>









{/* PRODUCT IMAGE */}




{/* PRODUCT IMAGE */}


<motion.div


initial={{
opacity:0,
x:-60
}}


animate={{
opacity:1,
x:0
}}


transition={{
duration:.8
}}


className="

relative

bg-white

dark:bg-slate-900

rounded-[45px]

p-10


border

border-slate-200

dark:border-slate-800


shadow-2xl


"


>


{/* OFFER BADGE */}


<motion.div


animate={{

rotate:[0,5,-5,0]

}}


transition={{

duration:3,

repeat:Infinity

}}


className="

absolute

top-6

left-6

z-20

px-5

py-2


rounded-full


bg-gradient-to-r

from-red-500

to-orange-500


text-white


font-black


shadow-lg

"


>

🔥 20% OFF

</motion.div>







<Tilt

tiltMaxAngleX={10}

tiltMaxAngleY={10}

scale={1.05}

>


<div

className="

relative

flex

items-center

justify-center

h-[520px]

"

>


<div

className="

absolute

inset-10

bg-indigo-500/20

blur-3xl

rounded-full

"

></div>






<Zoom>


<img

loading="eager"

src={product.image}

alt={product.title}

decoding="async"

className="

relative

z-10

w-full

h-[450px]


object-contain


cursor-zoom-in


transition


duration-700


hover:scale-110


"


/>


</Zoom>



</div>


</Tilt>







{/* FLOATING TAGS */}



<div

className="

absolute

bottom-8

left-8


flex

gap-3

"

>


<span

className="

px-4

py-2

rounded-full


bg-black/80

text-white

text-sm

font-bold

"

>

Premium

</span>




<span

className="

px-4

py-2

rounded-full


bg-indigo-600

text-white

text-sm

font-bold

"

>

Trending

</span>



</div>



</motion.div>











{/* DETAILS */}



<motion.div



initial={{
opacity:0,
x:50
}}



animate={{
opacity:1,
x:0
}}



>



<p

className="

uppercase

tracking-[4px]

text-sm

font-bold

text-indigo-600


"

>

{product.category}

</p>






<h1

className="

text-4xl

md:text-5xl

font-black

mt-5


text-slate-900

dark:text-white


leading-tight


"

>

{product.title}

</h1>







<div

className="

flex

items-center

gap-4

mt-6

"

>


<div

className="

flex

items-center

gap-2


px-4

py-2


rounded-full


bg-emerald-100


dark:bg-emerald-900/40


text-emerald-700


dark:text-emerald-300


font-bold


"

>


<Star

size={18}

fill="currentColor"

/>


{product.rating?.rate || 5}


</div>





<p

className="

text-slate-500

dark:text-slate-400

"

>

({product.rating?.count || 0} Reviews)

</p>



</div>





<h2

className="

mt-8

text-5xl

font-black


bg-gradient-to-r

from-indigo-600

via-violet-600

to-cyan-500


text-transparent

bg-clip-text


"

>

₹{product.price}

</h2>


{/* DESCRIPTION */}


<p

className="
mt-7

text-lg


leading-8

text-slate-600

dark:text-slate-300

"

>

{product.description}

</p>






{/* TRUST FEATURES */}



<div

className="

grid

grid-cols-2

gap-4

mt-8

"

>


<div

className="

flex

items-center

gap-3

p-4

rounded-3xl

bg-white

dark:bg-slate-900


border

border-slate-200

dark:border-slate-800


shadow-sm


dark:text-white


"

>

<Truck

className="text-indigo-500"

/>

<span className="font-semibold">

Free Delivery

</span>

</div>





<div

className="

flex

items-center

gap-3

p-4

rounded-3xl

bg-white

dark:bg-slate-900


border

border-slate-200

dark:border-slate-800


shadow-sm


dark:text-white


"

>


<RotateCcw

className="text-violet-500"

/>


<span className="font-semibold">

7 Days Return

</span>


</div>






<div

className="

flex

items-center

gap-3

p-4

rounded-3xl

bg-white

dark:bg-slate-900


border

border-slate-200

dark:border-slate-800


shadow-sm


dark:text-white


"

>


<ShieldCheck

className="text-cyan-500"

/>


<span className="font-semibold">

Secure Payment

</span>


</div>







<div

className="

flex

items-center

gap-3

p-4

rounded-3xl

bg-white

dark:bg-slate-900


border

border-slate-200

dark:border-slate-800


shadow-sm


dark:text-white


"

>


<Zap

className="text-emerald-500"

/>


<span className="font-semibold">

Premium Quality

</span>


</div>


</div>








{/* QUANTITY */}



<div

className="

mt-10

flex

items-center

gap-6

"

>



<div

className="

flex

items-center


rounded-2xl


overflow-hidden


bg-white


dark:bg-slate-900


border

border-slate-200


dark:border-slate-700


shadow-md

"

>


<button

onClick={()=>
setQuantity(
Math.max(1,quantity-1)
)
}


className="

p-4

dark:text-white

hover:bg-slate-100

dark:hover:bg-slate-800

transition

"

>

<Minus size={20}/>

</button>






<span

className="

px-7

font-black

text-lg

dark:text-white

"

>

{quantity}

</span>






<button

onClick={()=>
setQuantity(quantity+1)
}

className="

p-4

dark:text-white

hover:bg-slate-100

dark:hover:bg-slate-800

transition

"

>

<Plus size={20}/>

</button>


</div>


</div>








{/* ACTION BUTTONS */}



<div

className="

flex

gap-4

mt-8

"

>



<button


onClick={handleCart}


className="

flex-1


flex

items-center

justify-center

gap-3


py-4


rounded-2xl



bg-gradient-to-r


from-indigo-600

via-violet-600

to-cyan-500



text-white


font-black



shadow-xl


hover:scale-105


transition


"


>

<ShoppingCart size={22}/>


Add To Cart


</button>







<button


onClick={()=>addToWishlist(product)}


className="


w-16


rounded-2xl


border


border-slate-300


dark:border-slate-700


dark:text-white


hover:bg-pink-100


dark:hover:bg-pink-900/30


transition


"

>


<Heart/>


</button>


</div>








{/* BUY NOW */}



<button


onClick={()=>{


addToCart({

...product,

quantity

});


navigate("/checkout");


}}



className="

mt-4

w-full


py-4


rounded-2xl


bg-slate-900


dark:bg-white


text-white


dark:text-black


font-black


hover:scale-[1.02]


transition


shadow-xl


"

>


⚡ Buy Now


</button>







</motion.div>





</div>










{/* AI RECOMMENDATIONS */}

<section className="max-w-7xl mx-auto mt-24">

<div className="flex items-center justify-between mb-10">

<div>

<p className="uppercase tracking-[4px] text-sm text-indigo-500 font-bold">

AI Recommendation

</p>

<h2 className="text-4xl font-black dark:text-white mt-2">

Recommended For You 🤖

</h2>

<p className="text-slate-500 dark:text-slate-400 mt-2">

Based on category, price and rating similarity

</p>

</div>

<div className="px-5 py-3 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white font-bold shadow-lg">

Smart Match

</div>

</div>

<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

{

recommendedProducts.map((item,index)=>(

<motion.div

key={item.id}

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*0.08
}}

>

<div className="relative">

<div

className="

absolute

top-4

right-4

z-30

px-3

py-1

rounded-full

bg-gradient-to-r

from-emerald-500

to-cyan-500

text-white

text-xs

font-bold

shadow-lg

"

>

✨ {item.match}% Match

</div>

<ProductCard product={item}/>

<div

className="

mt-4

rounded-2xl

bg-white

dark:bg-slate-900

border

border-slate-200

dark:border-slate-700

p-4

"

>

<p className="font-bold dark:text-white mb-2">

Why Recommended?

</p>

<div className="flex flex-wrap gap-2">

{

item.reasons.map((reason)=>(

<span

key={reason}

className="

px-3

py-1

rounded-full

text-xs

font-semibold

bg-indigo-100

dark:bg-slate-800

text-indigo-600

dark:text-cyan-400

"

>

✓ {reason}

</span>

))

}

</div>

</div>

</div>

</motion.div>

))

}

</div>

</section>






<Reviews productId={product.id}/>


<RecentlyViewed/>

<RecommendedProducts 
products={products}
/>





</section>


</>

)


}


export default ProductDetails;