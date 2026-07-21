import {
  Package,
  ShoppingBag,
  IndianRupee,
  Clock,
  CheckCircle,
  XCircle
} from "lucide-react";

import { motion } from "framer-motion";



function DashboardStats({
products,
orders
}){



const revenue = orders.reduce(

(total,order)=>

total + Number(order.total || 0),

0

);




const pendingOrders =
orders.filter(
(order)=>order.status==="Pending"
).length;




const deliveredOrders =
orders.filter(
(order)=>order.status==="Delivered"
).length;




const cancelledOrders =
orders.filter(
(order)=>order.status==="Cancelled"
).length;






const stats=[


{
title:"Total Products",
value:products.length,
description:"Available Products",
icon:<Package size={30}/>,
gradient:"from-indigo-500 via-purple-500 to-cyan-500"
},



{
title:"Total Orders",
value:orders.length,
description:"Customer Orders",
icon:<ShoppingBag size={30}/>,
gradient:"from-blue-500 to-indigo-600"
},



{
title:"Total Revenue",
value:`₹${revenue.toFixed(2)}`,
description:"Total Sales",
icon:<IndianRupee size={30}/>,
gradient:"from-emerald-500 to-teal-500"
},



{
title:"Pending Orders",
value:pendingOrders,
description:"Need Processing",
icon:<Clock size={30}/>,
gradient:"from-orange-500 to-yellow-500"
},



{
title:"Delivered",
value:deliveredOrders,
description:"Completed Orders",
icon:<CheckCircle size={30}/>,
gradient:"from-green-500 to-emerald-600"
},



{
title:"Cancelled",
value:cancelledOrders,
description:"Cancelled Orders",
icon:<XCircle size={30}/>,
gradient:"from-red-500 to-pink-600"
}


];








return(


<div

className="
grid

grid-cols-1

sm:grid-cols-2

lg:grid-cols-3

xl:grid-cols-6

gap-6

"

>


{

stats.map((item,index)=>(



<motion.div


key={item.title}


initial={{
opacity:0,
y:30
}}


animate={{
opacity:1,
y:0
}}


transition={{
delay:index*0.08
}}



whileHover={{
y:-8,
scale:1.03
}}



className="


relative


overflow-hidden


rounded-[32px]



bg-white/80


dark:bg-slate-900/70



backdrop-blur-xl




border

border-slate-200

dark:border-slate-800




shadow-xl




p-6



"

>




{/* Glow */}



<div

className={`
absolute
-top-10
-right-10

w-32
h-32

rounded-full

blur-3xl

opacity-30

bg-gradient-to-br

${item.gradient}

`}

/>








{/* ICON */}



<div


className={`

relative

w-16

h-16


rounded-2xl


flex

items-center

justify-center


text-white


bg-gradient-to-br


${item.gradient}



shadow-lg


mb-6


`}


>

{item.icon}


</div>







<h2

className="

relative


text-3xl

font-black


text-slate-900


dark:text-white


"

>

{item.value}

</h2>







<h3

className="

mt-3


text-lg

font-bold


text-slate-900


dark:text-white


"

>

{item.title}

</h3>






<p

className="

mt-1


text-sm


text-slate-500


dark:text-slate-400


"

>

{item.description}

</p>







</motion.div>



))


}




</div>


)



}


export default DashboardStats;