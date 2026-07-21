import { motion } from "framer-motion";
import { Search, XCircle } from "lucide-react";
import { useState } from "react";

import useOrderStore from "../../store/orderStore";



function OrderTable(){


const orders = useOrderStore(
(state)=>state.orders
);


const updateOrderStatus = useOrderStore(
(state)=>state.updateOrderStatus
);


const cancelOrder = useOrderStore(
(state)=>state.cancelOrder
);



const [search,setSearch]=useState("");

const [status,setStatus]=useState("All");






const filteredOrders = orders.filter((order)=>{


const searchMatch =

order.customer?.name
?.toLowerCase()
.includes(
search.toLowerCase()
);



const statusMatch =

status==="All" ||
order.status===status;



return searchMatch && statusMatch;


});







const getStatusStyle=(status)=>{


switch(status){


case "Delivered":

return `
bg-emerald-100
text-emerald-700
dark:bg-emerald-900/40
dark:text-emerald-300
`;


case "Cancelled":

return `
bg-red-100
text-red-700
dark:bg-red-900/40
dark:text-red-300
`;



case "Shipped":

return `
bg-blue-100
text-blue-700
dark:bg-blue-900/40
dark:text-blue-300
`;



default:

return `
bg-yellow-100
text-yellow-700
dark:bg-yellow-900/40
dark:text-yellow-300
`;

}


};







return(



<motion.div


initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.5
}}



className="

mt-12

rounded-[35px]

bg-white/70

dark:bg-slate-900/70

backdrop-blur-xl


border

border-slate-200

dark:border-slate-800


shadow-2xl


overflow-hidden

"


>







{/* HEADER */}



<div

className="

p-8

border-b

border-slate-200

dark:border-slate-800

"


>


<h2

className="

text-3xl

font-black


bg-gradient-to-r

from-indigo-600

via-purple-600

to-cyan-500


bg-clip-text

text-transparent


"

>

Order Management

</h2>


<p

className="

text-slate-500

dark:text-slate-400

mt-2

"

>

Track and manage customer orders

</p>


</div>









{/* FILTER */}



<div

className="

p-8

grid

md:grid-cols-2

gap-5

"

>




<div

className="

relative

"

>


<Search

className="

absolute

left-5

top-3.5

text-slate-400

"

/>



<input


placeholder="Search Customer..."


value={search}


onChange={(e)=>
setSearch(e.target.value)
}


className="

w-full

pl-14

pr-5

py-3

rounded-2xl


bg-white

dark:bg-slate-800


border

border-slate-300

dark:border-slate-700


dark:text-white


outline-none


"




/>


</div>








<select


value={status}


onChange={(e)=>
setStatus(e.target.value)
}


className="

px-5

py-3

rounded-2xl


bg-white

dark:bg-slate-800


border

border-slate-300

dark:border-slate-700


dark:text-white

"


>



<option>
All
</option>


<option>
Pending
</option>


<option>
Confirmed
</option>


<option>
Shipped
</option>


<option>
Delivered
</option>


<option>
Cancelled
</option>


</select>




</div>










{
filteredOrders.length===0 ?


<div

className="

py-24

text-center

text-slate-500

dark:text-slate-400

"

>

No Orders Found


</div>


:



<div

className="

p-8

space-y-8

"

>


{


filteredOrders.map((order,index)=>(


<motion.div


key={order.id}


initial={{
opacity:0,
y:30
}}


animate={{
opacity:1,
y:0
}}


transition={{
delay:index*.05
}}



className="


rounded-[30px]


p-6


bg-slate-50

dark:bg-slate-800/70


border

border-slate-200

dark:border-slate-700


hover:shadow-xl


transition


"

>


{/* TOP */}



<div

className="

grid

md:grid-cols-3

gap-6

mb-8

"

>



<div>

<p className="label-style">
Order ID
</p>


<h3 className="title-style">
#{order.id}
</h3>

</div>






<div>

<p className="label-style">
Customer
</p>


<h3 className="title-style">
{order.customer?.name}
</h3>


<p className="small-style">
{order.customer?.email}
</p>

</div>






<div>

<p className="label-style">
Date
</p>


<h3 className="title-style">
{order.date}
</h3>

</div>



</div>











{/* PRODUCTS */}


<div className="space-y-3">


{

order.items.map(item=>(


<div

key={item.id}

className="


flex

justify-between

items-center


p-4


rounded-2xl


bg-white

dark:bg-slate-900


"


>


<div>


<h4 className="
font-bold
dark:text-white
">

{item.title}

</h4>


<p className="small-style">

Qty : {item.quantity}

</p>


</div>



<p className="
font-black
dark:text-white
">

₹{item.price * item.quantity}

</p>



</div>


))

}


</div>









{/* FOOTER */}



<div

className="

mt-8

pt-6

border-t

border-slate-200

dark:border-slate-700


grid

md:grid-cols-3

gap-6

"

>




<div>


<p className="label-style">
Payment
</p>


<h3 className="title-style">
{order.paymentMethod}
</h3>


</div>








<div>


<p className="label-style">
Total
</p>


<h3 className="
text-3xl
font-black
dark:text-white
">

₹{order.total.toFixed(2)}

</h3>


</div>










<div>


<p className="label-style mb-3">
Status
</p>



<span

className={`
px-5
py-2
rounded-full
font-bold
text-sm
${getStatusStyle(order.status)}
`}

>

{order.status}

</span>






<select


value={order.status}


onChange={(e)=>

updateOrderStatus(
order.id,
e.target.value
)

}


className="

mt-4

block

px-4

py-2

rounded-xl


bg-white

dark:bg-slate-900


border

dark:border-slate-700


dark:text-white


"


>


<option>
Pending
</option>

<option>
Confirmed
</option>

<option>
Shipped
</option>

<option>
Delivered
</option>

<option>
Cancelled
</option>


</select>







<button


onClick={()=>{


if(
window.confirm(
"Cancel this order?"
)

){

cancelOrder(order.id);

}


}}


className="

mt-4

flex

items-center

gap-2


px-5

py-2


rounded-full


bg-red-600


text-white


font-bold


hover:bg-red-700


transition


"


>


<XCircle size={18}/>

Cancel Order


</button>



</div>







</div>





</motion.div>


))


}



</div>


}



<style>

{`

.label-style{

font-size:14px;

color:#64748b;

}


.title-style{

font-weight:800;

color:#0f172a;

}


.small-style{

font-size:14px;

color:#64748b;

}


.dark .title-style{

color:white;

}

`}


</style>






</motion.div>



)


}


export default OrderTable;