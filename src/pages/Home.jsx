import { Link } from "react-router-dom";

import CategoryCard from "../components/product/CategoryCard";
import ProductCard from "../components/product/ProductCard";

import categories from "../constants/categories";

import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/productService";

import Newsletter from "../components/common/Newsletter";
import Loader from "../components/common/Loader";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import useActivityStore from "../store/activityStore";
import useRecentStore from "../store/recentStore";

import FlashSale from "../components/common/FlashSale";
import ContinueShopping from "../components/product/ContinueShopping";

import SEO from "../components/common/SEO";

function Home(){

const viewHistory = useActivityStore(
(state)=>state.viewHistory
);

const recentProducts = useRecentStore(
(state)=>state.recentProducts || []
);

const viewedProducts = recentProducts || [];

const {
data:products=[],
isLoading,
error
}=useQuery({
queryKey:["products"],
queryFn:getProducts
});

const trendingProducts =
viewHistory.length > 0
?
viewHistory
:
products.slice(0,4);



if(isLoading){
return <Loader/>
}



if(error){

return(

<div className="
min-h-screen
flex
items-center
justify-center
">

<h1 className="
text-red-500
text-2xl
font-bold
">

Failed to load products

</h1>

</div>

)

}



return(

<>


<SEO

title="Nexora | Premium Ecommerce Store"

description="
Nexora is a modern ecommerce platform with premium products, secure checkout and smooth shopping experience.
"

/>

{/* ================= HERO ================= */}


<section

className="
relative
overflow-hidden

min-h-screen

bg-gradient-to-br

from-slate-50

via-white

to-indigo-50


dark:from-slate-950

dark:via-slate-900

dark:to-black

"

>


{/* Animated Glow */}


<motion.div

animate={{

x:[0,50,0],
y:[0,30,0]

}}

transition={{

duration:8,
repeat:Infinity

}}

className="
absolute
top-20
left-20

w-72
h-72

bg-indigo-500/30

blur-3xl

rounded-full

"

/>



<motion.div

animate={{

x:[0,-50,0],
y:[0,-40,0]

}}

transition={{

duration:10,
repeat:Infinity

}}

className="
absolute

bottom-20

right-20

w-80

h-80

bg-cyan-400/20

blur-3xl

rounded-full

"

/>





<div

className="
max-w-7xl
mx-auto

px-6

py-28

grid

md:grid-cols-2

gap-16

items-center

"

>



{/* LEFT */}



<motion.div

initial={{

opacity:0,
x:-80

}}

animate={{

opacity:1,
x:0

}}

transition={{

duration:.8

}}

>



<p

className="
uppercase

tracking-[5px]

text-sm

font-bold

text-indigo-600

dark:text-cyan-400

"

>

Premium Collection 2026

</p>




<h1

className="
mt-6

text-5xl

md:text-7xl

font-black

leading-tight

text-slate-900

dark:text-white

"

>


Upgrade Your


<span

className="
block

bg-gradient-to-r

from-indigo-600

via-purple-600

to-cyan-500

bg-clip-text

text-transparent

"

>

Lifestyle

</span>


With Nexora


</h1>




<p

className="
mt-6

text-lg

max-w-xl

text-slate-600

dark:text-slate-300

leading-8

"

>

A premium ecommerce experience with modern UI,
smooth animations and effortless shopping.

</p>





<div

className="
mt-8

flex

gap-5

flex-wrap

"

>


<Link

to="/products"

className="
px-8
py-4

rounded-full

bg-gradient-to-r

from-indigo-600

to-purple-600

text-white

font-bold

shadow-xl

hover:scale-105

transition

"

>

Shop Now 🚀

</Link>



<Link

to="/about"

className="
px-8

py-4

rounded-full

border

border-slate-300

dark:border-slate-700

dark:text-white

hover:bg-black

hover:text-white

dark:hover:bg-white

dark:hover:text-black

transition

"

>

Explore

</Link>


</div>





<div

className="
mt-12

grid

grid-cols-3

gap-6

"

>


{

[

["20K+","Customers"],

["500+","Products"],

["4.9★","Rating"]

].map((item)=>(


<div

key={item[1]}

>

<h3

className="
text-3xl

font-black

dark:text-white

"

>

{item[0]}

</h3>


<p

className="
text-sm

text-slate-500

dark:text-slate-400

"

>

{item[1]}

</p>


</div>


))

}


</div>





</motion.div>

{/* ================= HERO IMAGE ================= */}


<motion.div

initial={{
opacity:0,
scale:.8
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:.9
}}

className="
relative
flex
justify-center
"

>


<Tilt
tiltMaxAngleX={10}
tiltMaxAngleY={10}
perspective={1000}
scale={1.05}
>


<div
className="
relative
"

>


{/* Glow */}

<div

className="
absolute
inset-0

bg-gradient-to-r

from-indigo-500

to-cyan-400

blur-3xl

opacity-40

rounded-full

"

/>




<img

src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"

alt="Nexora Store"

className="

relative

rounded-[40px]

shadow-2xl

w-full

max-w-xl

border

border-white/20

"

 />





{/* Floating Card */}



<motion.div

animate={{

y:[0,-15,0]

}}

transition={{

duration:4,

repeat:Infinity

}}

className="

absolute

bottom-8

-left-10

bg-white

dark:bg-slate-900

rounded-3xl

shadow-xl

p-5

border

border-slate-200

dark:border-slate-700

"

>


<p className="
text-sm
text-slate-500
dark:text-slate-400
">

🔥 Trending

</p>


<h3 className="
font-black
text-xl
dark:text-white
">

Premium Deals

</h3>


</motion.div>





</div>


</Tilt>


</motion.div>



</div>


</section>


<FlashSale/>



{/* ================= CATEGORY SECTION ================= */}



<section

className="

relative

py-24

px-6

bg-white

dark:bg-slate-950

overflow-hidden

"

>


<motion.div

animate={{

x:[0,80,0]

}}

transition={{

duration:12,

repeat:Infinity

}}

className="

absolute

top-20

left-10

w-80

h-80

bg-purple-500/20

blur-3xl

rounded-full

"

/>



<div

className="

max-w-7xl

mx-auto

relative

"


>


<div

className="
text-center
mb-16
"

>


<p

className="
uppercase
tracking-[5px]
text-sm
font-bold
text-indigo-600
dark:text-cyan-400
"

>

Explore

</p>



<h2

className="
mt-4

text-5xl

font-black

dark:text-white

"

>

Shop By Category

</h2>



<p

className="
mt-5

text-slate-500

dark:text-slate-400

max-w-2xl

mx-auto

"

>

Discover products crafted for fashion,
technology and modern lifestyle.

</p>


</div>







<div

className="

grid

grid-cols-1

sm:grid-cols-2

lg:grid-cols-4

gap-8

"


>


{

categories.map((category,index)=>(


<motion.div

key={category.id}

initial={{

opacity:0,

y:50

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

>


<CategoryCard

title={category.title}

image={category.image}

/>



</motion.div>


))


}



</div>


</div>


</section>

{/* ================= FEATURED PRODUCTS ================= */}


<section

className="

py-24

bg-slate-100

dark:bg-slate-900

transition

"

>


<div

className="

max-w-7xl

mx-auto

px-6

"

>


<div

className="

text-center

mb-16

"

>


<p

className="

uppercase

tracking-[5px]

text-sm

font-bold

text-indigo-600

dark:text-cyan-400

"

>

Featured

</p>



<h2

className="

mt-4

text-5xl

font-black

dark:text-white

"

>

Trending Products

</h2>



<p

className="

mt-5

text-slate-500

dark:text-slate-400

"

>

Handpicked products loved by our customers.

</p>



</div>







<div

className="

grid

grid-cols-1

sm:grid-cols-2

lg:grid-cols-4

gap-8

"

>


{

products.slice(0,8).map((product,index)=>(


<motion.div

key={product.id}

initial={{

opacity:0,

y:50

}}

whileInView={{

opacity:1,

y:0

}}

viewport={{

once:true

}}

transition={{

duration:.5,

delay:index*.1

}}

>


<ProductCard

product={product}

/>


</motion.div>


))


}



</div>



</div>


</section>







{/* ================= WHY NEXORA ================= */}



<section

className="

py-24

bg-white

dark:bg-slate-950

"

>


<div

className="

max-w-7xl

mx-auto

px-6

"

>


<div

className="

text-center

mb-14

"

>


<h2

className="

text-5xl

font-black

dark:text-white

"

>

Why Choose Nexora?

</h2>



<p

className="

mt-4

text-slate-500

dark:text-slate-400

"

>

Everything you need for a premium shopping experience.

</p>


</div>







<div

className="

grid

md:grid-cols-3

gap-8

"

>


{

[


{

icon:"🚚",

title:"Fast Delivery",

desc:"Quick and reliable delivery at your doorstep."

},


{

icon:"🔒",

title:"Secure Payment",

desc:"Your transactions are safe and protected."

},


{

icon:"💎",

title:"Premium Quality",

desc:"Carefully selected premium products."

}



].map((item,index)=>(


<motion.div


key={item.title}


whileHover={{

y:-10

}}


className="

bg-slate-100

dark:bg-slate-900

rounded-3xl

p-8

text-center

shadow-lg

border

border-slate-200

dark:border-slate-800

"


>


<div

className="

text-5xl

mb-5

"

>

{item.icon}

</div>



<h3

className="

text-2xl

font-black

dark:text-white

"

>

{item.title}

</h3>



<p

className="

mt-3

text-slate-500

dark:text-slate-400

"

>

{item.desc}

</p>



</motion.div>


))


}


</div>



</div>


</section>


{/* ================= TRENDING FOR YOU ================= */}


<section

className="
py-24

bg-white

dark:bg-slate-950

"

>


<div

className="
max-w-7xl
mx-auto
px-6

"

>



<div

className="
flex
items-center
justify-between
mb-12

"

>


<div>


<p

className="
uppercase
tracking-[4px]

text-sm

font-bold

text-indigo-600

dark:text-cyan-400

"

>

Personalized

</p>



<h2

className="
text-4xl

font-black

dark:text-white

"

>

🔥 Trending For You

</h2>



<p

className="
mt-3

text-slate-500

dark:text-slate-400

"

>

Based on your shopping activity

</p>


</div>


</div>







<div

className="
grid

grid-cols-1

sm:grid-cols-2

md:grid-cols-4

gap-8

"

>


{

trendingProducts
.slice(0,4)
.map(product=>(


<ProductCard

key={product.id}

product={product}

/>


))


}



</div>



</div>


</section>

{/* ================= BECAUSE YOU VIEWED ================= */}


{

viewedProducts.length > 0 &&

<section

className="
py-24

bg-slate-100

dark:bg-slate-900

"

>


<div

className="
max-w-7xl
mx-auto
px-6

"

>



<div

className="
mb-12

"

>


<p

className="
uppercase

tracking-[4px]

text-sm

font-bold

text-indigo-600

dark:text-cyan-400

"

>

History

</p>



<h2

className="
text-4xl

font-black

dark:text-white

"

>

👀 Because You Viewed

</h2>



<p

className="
mt-3

text-slate-500

dark:text-slate-400

"

>

Continue exploring products you liked

</p>



</div>







<div

className="
grid

grid-cols-1

sm:grid-cols-2

md:grid-cols-4

gap-8

"

>


{

viewedProducts
.slice(0,4)
.map(product=>(


<ProductCard

key={product.id}

product={product}

/>


))


}



</div>



</div>


</section>


}

<ContinueShopping/>

{/* ================= NEWSLETTER ================= */}



<Newsletter/>





</>


)

}


export default Home;