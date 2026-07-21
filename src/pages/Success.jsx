import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
CheckCircle,
Package,
CreditCard,
ShoppingBag
} from "lucide-react";

import useOrderStore from "../store/orderStore";


function Success(){


const orders = useOrderStore(
(state)=>state.orders
);


const latestOrder = orders[orders.length-1];





if(!latestOrder){

return(

<section
className="
min-h-screen
flex
items-center
justify-center
px-6

bg-slate-50
dark:bg-slate-950

"

>


<div
className="
text-center
"

>


<h1
className="
text-4xl
font-black
text-slate-900
dark:text-white
"

>

No Order Found

</h1>


<Link

to="/products"

className="
inline-block
mt-8

px-8
py-3

rounded-full

bg-gradient-to-r
from-indigo-600
via-purple-600
to-cyan-500

text-white
font-bold

"

>

Shop Now

</Link>


</div>


</section>

)

}






return(

<section

className="
min-h-screen

relative

overflow-hidden

flex
items-center
justify-center

px-6
py-20

bg-slate-50
dark:bg-slate-950

"


>


{/* Background Glow */}


<div
className="
absolute
w-96
h-96
bg-indigo-500/20
rounded-full
blur-3xl
top-10
left-10
"
/>


<div
className="
absolute
w-96
h-96
bg-cyan-500/20
rounded-full
blur-3xl
bottom-10
right-10
"
/>





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
duration:.5
}}


className="

relative

max-w-xl
w-full

bg-white/80
dark:bg-slate-900/80

backdrop-blur-xl

border
border-slate-200
dark:border-slate-800


rounded-[40px]

shadow-2xl

p-10

"

>




<motion.div

initial={{
scale:0
}}

animate={{
scale:1
}}

transition={{
delay:.2
}}

className="
w-28
h-28

mx-auto

rounded-full

bg-gradient-to-br

from-green-400
to-emerald-600


flex
items-center
justify-center

shadow-lg

"

>


<CheckCircle

size={60}

className="text-white"

/>


</motion.div>







<h1

className="
text-4xl

font-black

text-center

mt-8

text-slate-900

dark:text-white

"

>

Order Confirmed 🎉

</h1>




<p

className="
text-center

mt-3

text-slate-500

dark:text-slate-400

"

>

Thank you for shopping with Nexora

</p>







<div

className="

mt-10

grid

gap-4

"


>


<div

className="
flex
items-center
gap-4

bg-slate-100

dark:bg-slate-800

rounded-2xl

p-5

"

>


<div
className="
w-12
h-12
rounded-xl

bg-indigo-600

flex
items-center
justify-center

text-white
"

>

<Package/>

</div>



<div>

<p className="
text-sm
text-slate-500
">

Order ID

</p>

<h3 className="
font-bold
dark:text-white
">

#{latestOrder.id}

</h3>

</div>


</div>






<div

className="
flex
items-center
gap-4

bg-slate-100

dark:bg-slate-800

rounded-2xl

p-5

"

>


<div
className="
w-12
h-12
rounded-xl

bg-purple-600

flex
items-center
justify-center

text-white

"

>

<CreditCard/>

</div>



<div>

<p className="
text-sm
text-slate-500
">

Payment

</p>

<h3 className="
font-bold
dark:text-white
">

{latestOrder.paymentMethod || "COD"}

</h3>

</div>


</div>







<div

className="
flex
justify-between

items-center

bg-slate-100

dark:bg-slate-800

rounded-2xl

p-5

"

>

<span className="
font-bold
dark:text-white
">

Total

</span>


<span className="
text-2xl
font-black
dark:text-white
">

₹{latestOrder.total.toFixed(2)}

</span>


</div>




</div>







<h2

className="
text-xl

font-black

mt-10

mb-5

dark:text-white

"

>

Items

</h2>





<div className="
space-y-3
">


{

latestOrder.items.map((item)=>(


<div

key={item.id}

className="

flex

justify-between

items-center

bg-slate-100

dark:bg-slate-800

rounded-xl

p-4

"


>


<p className="
text-sm
font-semibold
dark:text-white
line-clamp-1
">

{item.title}

</p>


<span className="
font-bold
dark:text-white
">

x{item.quantity}

</span>


</div>


))

}


</div>






<div className="
grid
gap-4
mt-10
">


<Link

to="/products"

className="
text-center

py-3

rounded-xl


bg-gradient-to-r

from-indigo-600

via-purple-600

to-cyan-500


text-white

font-bold

hover:scale-105

transition

"

>

<ShoppingBag className="inline mr-2"/>

Continue Shopping

</Link>



<Link

to="/orders"

className="
text-center

py-3

rounded-xl

border

border-slate-300

dark:border-slate-700

dark:text-white

font-bold

hover:bg-slate-900
hover:text-white

dark:hover:bg-white
dark:hover:text-black

transition

"

>

View Orders

</Link>


</div>





</motion.div>




</section>


)


}


export default Success;