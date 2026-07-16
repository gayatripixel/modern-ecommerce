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
.includes(search.toLowerCase());



const statusMatch =
status==="All" ||
order.status===status;



return searchMatch && statusMatch;


});






const getStatusStyle=(status)=>{


if(status==="Delivered")

return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300";


if(status==="Cancelled")

return "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300";


if(status==="Shipped")

return "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300";


return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300";


};





return (

<div

className="
mt-10
bg-white
dark:bg-gray-900
rounded-3xl
shadow-xl
border
border-gray-200
dark:border-gray-800
overflow-hidden
"

>




{/* Header */}


<div

className="
p-6
border-b
border-gray-200
dark:border-gray-800
"

>


<h2

className="
text-2xl
font-bold
text-black
dark:text-white
"

>

Order Management

</h2>


</div>








{/* Filters */}


<div

className="
p-6
grid
md:grid-cols-2
gap-5
"

>


<input

type="text"

placeholder="Search Customer..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="
border
rounded-full
px-5
py-3
bg-white
dark:bg-gray-800
dark:text-white
outline-none
"

/>







<select

value={status}

onChange={(e)=>setStatus(e.target.value)}

className="
border
rounded-full
px-5
py-3
bg-white
dark:bg-gray-800
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
py-20
text-center
text-gray-500
dark:text-gray-400
"

>

No Orders Found

</div>



:


<div

className="
p-6
space-y-8
"

>


{

filteredOrders.map((order)=>(


<div

key={order.id}

className="
bg-gray-50
dark:bg-gray-800
rounded-3xl
p-6
border
border-gray-200
dark:border-gray-700
"

>








{/* Header */}


<div

className="
flex
flex-col
md:flex-row
justify-between
gap-5
mb-6
"

>


<div>

<p className="
text-gray-500
dark:text-gray-400
">

Order ID

</p>


<h3 className="
font-bold
text-black
dark:text-white
">

#{order.id}

</h3>

</div>







<div>

<p className="
text-gray-500
dark:text-gray-400
">

Customer

</p>


<h3 className="
font-semibold
text-black
dark:text-white
">

{order.customer?.name}

</h3>


<p className="
text-sm
text-gray-500
dark:text-gray-400
">

{order.customer?.email}

</p>


</div>








<div>

<p className="
text-gray-500
dark:text-gray-400
">

Date

</p>


<p className="
font-semibold
text-black
dark:text-white
">

{order.date}

</p>


</div>



</div>









{/* Products */}



<div className="space-y-3">


{

order.items.map((item)=>(


<div

key={item.id}

className="
flex
justify-between
items-center
bg-white
dark:bg-gray-900
rounded-xl
p-4
"

>


<div>

<h4 className="
font-semibold
text-black
dark:text-white
">

{item.title}

</h4>


<p className="
text-sm
text-gray-500
dark:text-gray-400
">

Qty : {item.quantity}

</p>


</div>




<p className="
font-bold
text-black
dark:text-white
">

₹{item.price * item.quantity}

</p>


</div>


))

}


</div>









{/* Footer */}



<div

className="
mt-6
pt-6
border-t
border-gray-200
dark:border-gray-700
flex
flex-col
md:flex-row
justify-between
gap-6
"

>



<div>

<p className="
text-gray-500
dark:text-gray-400
">

Payment

</p>


<p className="
font-semibold
text-black
dark:text-white
">

{order.paymentMethod}

</p>


</div>








<div>

<p className="
text-gray-500
dark:text-gray-400
">

Total

</p>


<p className="
text-2xl
font-bold
text-black
dark:text-white
">

₹{order.total.toFixed(2)}

</p>


</div>








<div>


<p className="
text-gray-500
dark:text-gray-400
mb-3
">

Status

</p>




<span

className={`
inline-block
px-4
py-2
rounded-full
font-semibold
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
mt-3
block
px-4
py-2
rounded-full
border
bg-white
dark:bg-gray-900
text-black
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


if(window.confirm(
"Cancel this order?"
)){

cancelOrder(order.id);

}


}}

className="
mt-3
bg-red-600
text-white
px-5
py-2
rounded-full
font-semibold
hover:bg-red-700
transition
"

>

Cancel Order

</button>



</div>





</div>





</div>


))


}


</div>


}



</div>


)

}


export default OrderTable;