import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  Package,
  Truck,
  CheckCircle,
  Clock,
  CreditCard,
  MapPin
} from "lucide-react";

import useOrderStore from "../store/orderStore";



function Orders(){


const orders = useOrderStore(
(state)=>state.orders
);





const getStatusIcon=(status)=>{


switch(status){


case "Pending":

return <Clock/>;


case "Shipped":

return <Truck/>;


case "Delivered":

return <CheckCircle/>;


default:

return <Package/>;


}


};






return(



<section

className="
min-h-screen

bg-slate-100
dark:bg-slate-950

px-6
py-28

transition-colors
"

>


<div

className="
max-w-7xl
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

className="mb-14"

>


<h1

className="
text-5xl
md:text-6xl

font-black

text-slate-900
dark:text-white

"

>

My Orders 📦

</h1>



<p

className="
mt-4

text-lg

text-slate-500
dark:text-slate-400

"

>

Track your purchases and delivery updates.

</p>



</motion.div>









{
orders.length===0 ?


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

bg-white/80

dark:bg-slate-900/70


backdrop-blur-xl


rounded-[40px]


border

border-slate-200

dark:border-slate-800


shadow-2xl


p-16


text-center

"

>


<div

className="
w-24
h-24

mx-auto

rounded-full


bg-indigo-100

dark:bg-indigo-900/40


flex
items-center
justify-center

"

>

<Package

size={45}

className="text-indigo-600"

/>


</div>




<h2

className="
text-3xl

font-black

mt-8

dark:text-white

"

>

No Orders Yet 🛒

</h2>



<p

className="
mt-3

text-slate-500

dark:text-slate-400

"

>

Your placed orders will appear here.

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

via-violet-600

to-cyan-500


text-white

font-bold


hover:scale-105

transition

"

>

Start Shopping

</Link>




</motion.div>


)

:

(



<div

className="
space-y-10
"

>


{

orders.map((order,index)=>(


<motion.div


key={order.id}


initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:index*.1
}}



className="


bg-white/80

dark:bg-slate-900/70


backdrop-blur-xl


rounded-[40px]


border

border-slate-200

dark:border-slate-800


shadow-xl


p-8


hover:shadow-2xl

transition


"

>




{/* TOP */}



<div

className="

flex

flex-col

md:flex-row

justify-between

gap-6


pb-6


border-b

border-slate-200

dark:border-slate-700

"

>


<div>


<p

className="
text-sm

text-slate-500

dark:text-slate-400

"

>

Order ID

</p>


<h2

className="
text-xl

font-black

dark:text-white

"

>

#{order.id}

</h2>


</div>





<div>


<p

className="
text-sm

text-slate-500

dark:text-slate-400

"

>

Order Date

</p>


<p

className="
font-bold

dark:text-white

"

>

{order.date}

</p>


</div>






<div

className="
flex

items-center

gap-3

px-5

py-3

rounded-full


bg-emerald-100

dark:bg-emerald-900/40


text-emerald-700

dark:text-emerald-300


font-bold

"

>


{getStatusIcon(order.status)}


{order.status || "Confirmed"}


</div>




</div>









{/* PRODUCTS */}



<div

className="
mt-8

space-y-5

"

>



{

order.items.map((item)=>(


<div


key={item.id}


className="


flex

items-center

gap-5


bg-slate-100

dark:bg-slate-800


rounded-3xl


p-5


hover:scale-[1.02]

transition


"

>


<img

src={item.image}

alt={item.title}


className="

w-24

h-24


rounded-2xl


object-contain


bg-white


p-3

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

text-slate-900

dark:text-white

line-clamp-2

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

text-lg

dark:text-white

"

>

₹{(item.price*item.quantity).toFixed(2)}

</p>



</div>


))


}


</div>









{/* DELIVERY */}




<div

className="

grid

md:grid-cols-2

gap-8


mt-10

pt-8


border-t

border-slate-200

dark:border-slate-700

"

>




<div>


<h3

className="
font-black

text-xl

dark:text-white

flex

gap-2

items-center

"

>

<MapPin/>

Delivery Details

</h3>



<div

className="
mt-4

text-slate-600

dark:text-slate-400

space-y-1

"

>


<p>
{order.customer?.name}
</p>


<p>
{order.customer?.address}
</p>


<p>
{order.customer?.city} - {order.customer?.pincode}
</p>



</div>


</div>







<div

className="
md:text-right

"

>


<div

className="
inline-flex

items-center

gap-2

px-5

py-3


rounded-full


bg-indigo-100

dark:bg-indigo-900/40


text-indigo-700

dark:text-indigo-300


font-bold

"

>


<CreditCard size={18}/>


{order.paymentMethod || "COD"}


</div>




<h2

className="
mt-5

text-4xl

font-black

text-slate-900

dark:text-white

"

>

₹{Number(order.total||0).toFixed(2)}

</h2>





<Link


to={`/orders/${order.id}`}


className="

inline-block

mt-6


px-8

py-3


rounded-2xl


bg-gradient-to-r


from-indigo-600

via-violet-600

to-cyan-500


text-white


font-bold


hover:scale-105


transition


"

>

View Details

</Link>


</div>





</div>







</motion.div>


))


}



</div>



)

}




</div>


</section>


)


}



export default Orders;