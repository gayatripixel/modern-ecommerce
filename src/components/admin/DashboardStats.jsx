import {
  Package,
  ShoppingBag,
  IndianRupee,
  Clock,
  CheckCircle,
  XCircle
} from "lucide-react";


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
(order)=>
order.status==="Pending"
).length;




const deliveredOrders =
orders.filter(
(order)=>
order.status==="Delivered"
).length;





const cancelledOrders =
orders.filter(
(order)=>
order.status==="Cancelled"
).length;







const stats=[


{
title:"Total Products",
value:products.length,
icon:<Package size={32}/>,
description:"Available Products"
},




{
title:"Total Orders",
value:orders.length,
icon:<ShoppingBag size={32}/>,
description:"Customer Orders"
},




{
title:"Total Revenue",
value:`₹${revenue.toFixed(2)}`,
icon:<IndianRupee size={32}/>,
description:"Total Sales"
},




{
title:"Pending Orders",
value:pendingOrders,
icon:<Clock size={32}/>,
description:"Need Processing"
},





{
title:"Delivered",
value:deliveredOrders,
icon:<CheckCircle size={32}/>,
description:"Completed Orders"
},




{
title:"Cancelled",
value:cancelledOrders,
icon:<XCircle size={32}/>,
description:"Cancelled Orders"
}



];






return (

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

stats.map((item)=>(


<div

key={item.title}

className="
bg-white
dark:bg-gray-900
rounded-3xl
p-6
border
border-gray-200
dark:border-gray-800
shadow-lg
hover:shadow-2xl
hover:-translate-y-1
transition
"

>



<div

className="
w-14
h-14
rounded-2xl
bg-gray-100
dark:bg-gray-800
flex
items-center
justify-center
text-black
dark:text-white
mb-5
"

>

{item.icon}

</div>






<h2

className="
text-3xl
font-extrabold
text-black
dark:text-white
"

>

{item.value}

</h2>





<h3

className="
mt-2
font-semibold
text-black
dark:text-white
"

>

{item.title}

</h3>






<p

className="
text-sm
text-gray-500
dark:text-gray-400
mt-1
"

>

{item.description}

</p>




</div>



))


}



</div>


)

}


export default DashboardStats;