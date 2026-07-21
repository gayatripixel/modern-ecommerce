import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
Package,
MapPin,
CreditCard,
Calendar,
ArrowLeft,
CheckCircle
} from "lucide-react";

import useOrderStore from "../store/orderStore";
import OrderTimeline from "../components/order/OrderTimeline";

import generateInvoice from "../utils/generateInvoice";

function OrderDetails(){


const {id}=useParams();



const orders = useOrderStore(
(state)=>state.orders
);



const order = orders.find(
(order)=>order.id === Number(id)
);







if(!order){


return(


<section

className="
min-h-screen

bg-slate-100
dark:bg-slate-950

flex
items-center
justify-center

px-6

"

>


<motion.div

initial={{
opacity:0,
scale:.8
}}

animate={{
opacity:1,
scale:1
}}

className="

bg-white/80

dark:bg-slate-900/70


backdrop-blur-xl


rounded-[40px]


shadow-2xl


border

border-slate-200

dark:border-slate-800


p-12


text-center

"

>


<div

className="
w-20
h-20

mx-auto

rounded-full

bg-red-100

dark:bg-red-900/40

flex

items-center

justify-center

"

>

<Package

size={40}

className="text-red-500"

/>


</div>



<h1

className="
text-3xl

font-black

mt-6

dark:text-white

"

>

Order Not Found

</h1>




<Link

to="/orders"

className="

inline-block

mt-8

px-8

py-3


rounded-2xl


bg-gradient-to-r

from-indigo-600

via-violet-600

to-cyan-500


text-white

font-bold

"

>

Back To Orders

</Link>



</motion.div>



</section>


)


}









return(



<section

className="

min-h-screen


bg-slate-100

dark:bg-slate-950


px-6

py-28

"

>



<div

className="
max-w-6xl

mx-auto

"

>



{/* HEADER */}



<motion.div


initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}


className="mb-12"

>



<h1

className="

text-5xl

font-black


text-slate-900

dark:text-white


"

>

Order Details 📦

</h1>



<p

className="
mt-3

text-slate-500

dark:text-slate-400

"

>

Complete information about your order.

</p>



</motion.div>









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


bg-white/80


dark:bg-slate-900/70



backdrop-blur-xl



rounded-[40px]



border

border-slate-200

dark:border-slate-800



shadow-2xl



p-8


"



>







{/* ORDER HEADER */}




<div

className="

grid

md:grid-cols-3

gap-6


pb-8


border-b


border-slate-200

dark:border-slate-700


"

>



<div>


<div className="
flex
items-center
gap-2
text-slate-500
dark:text-slate-400
">

<Package size={18}/>

Order ID

</div>



<h2

className="
text-xl

font-black

mt-2

dark:text-white

"

>

#{order.id}

</h2>


</div>







<div>


<div className="
flex
items-center
gap-2
text-slate-500
dark:text-slate-400
">

<Calendar size={18}/>

Date

</div>


<p

className="
font-bold

mt-2

dark:text-white

"

>

{order.date}

</p>



</div>







<div>


<div className="
flex
items-center
gap-2
text-slate-500
dark:text-slate-400
">

<CheckCircle size={18}/>

Status

</div>




<span

className="

inline-flex

mt-3

px-5

py-2

rounded-full


bg-emerald-100


dark:bg-emerald-900/40


text-emerald-700


dark:text-emerald-300


font-bold

"

>

{order.status || "Order Placed"}

</span>



</div>



</div>





{/* ORDER TRACKING TIMELINE */}

<OrderTimeline

status={order.status || "Order Placed"}

/>





{/* PRODUCTS */}



<h2

className="
text-3xl

font-black

mt-10

mb-6

dark:text-white

"

>

Products

</h2>






<div

className="
space-y-5

"

>


{

order.items.map((item)=>(



<motion.div


whileHover={{
scale:1.02
}}



key={item.id}


className="


flex

items-center

gap-5


bg-slate-100


dark:bg-slate-800



rounded-3xl



p-5


transition


"

>


<img

src={item.image}

alt={item.title}


className="

w-24

h-24


object-contain


bg-white


rounded-2xl


p-3

"

/>





<div className="flex-1">


<h3

className="

font-black

text-slate-900

dark:text-white


"

>

{item.title}

</h3>




<p

className="
mt-2

text-slate-500

dark:text-slate-400

"

>

Quantity : {item.quantity}

</p>


</div>




<p

className="

font-black

text-xl

dark:text-white

"

>

₹{item.price*item.quantity}

</p>



</motion.div>



))


}



</div>









{/* BOTTOM INFO */}



<div

className="

grid

md:grid-cols-2

gap-8


mt-12


"

>





{/* ADDRESS */}



<div

className="

bg-slate-100

dark:bg-slate-800


rounded-3xl

p-6

"

>


<h3

className="
text-xl

font-black

dark:text-white

flex

items-center

gap-2

"

>

<MapPin/>

Delivery Address

</h3>



<div

className="
mt-5

space-y-2


text-slate-600

dark:text-slate-400

"

>


<p>{order.customer?.name}</p>

<p>{order.customer?.address}</p>

<p>

{order.customer?.city}

-

{order.customer?.pincode}

</p>


</div>


</div>









{/* PAYMENT */}



<div

className="

bg-slate-100

dark:bg-slate-800


rounded-3xl

p-6

"

>


<h3

className="
text-xl

font-black

dark:text-white

flex

items-center

gap-2

"

>

<CreditCard/>

Payment

</h3>




<p

className="
mt-5

text-slate-600

dark:text-slate-400

"

>

Method : {order.paymentMethod || "COD"}

</p>





<h2

className="

text-4xl

font-black

mt-5

text-slate-900

dark:text-white

"

>

₹{Number(order.total).toFixed(2)}

</h2>



</div>



</div>







</motion.div>


<div

className="
mt-10

flex

flex-wrap

gap-5

items-center

"

>


<button

onClick={()=>generateInvoice(order)}

className="

inline-flex

items-center

gap-3


px-8

py-4


rounded-2xl


bg-gradient-to-r

from-indigo-600

via-violet-600

to-cyan-500


text-white


font-black


shadow-xl

shadow-indigo-500/30


hover:scale-105


transition-all


duration-300

"

>

📄

Download Invoice

</button>





<Link

to="/orders"

className="


inline-flex

items-center

gap-2


px-8

py-4


rounded-2xl



border

border-slate-300

dark:border-slate-700



text-slate-700

dark:text-white



font-bold



hover:bg-slate-900

hover:text-white



dark:hover:bg-white

dark:hover:text-black



hover:scale-105



transition-all



duration-300


"

>


<ArrowLeft size={20}/>

Back To Orders


</Link>


</div>






</div>


</section>


)


}



export default OrderDetails;