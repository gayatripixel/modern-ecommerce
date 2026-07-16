import { create } from "zustand";
import { persist } from "zustand/middleware";


const useOrderStore = create(

persist(

(set)=>({

orders:[],





addOrder:(order)=>

set((state)=>({

orders:[

...state.orders,

{

...order,

status:"Pending"

}

]


})),







updateOrderStatus:(id,status)=>

set((state)=>({

orders:

state.orders.map((order)=>

order.id===id

?

{

...order,

status

}

:

order

)

})),







cancelOrder:(id)=>

set((state)=>({

orders:

state.orders.map((order)=>

order.id===id

?

{

...order,

status:"Cancelled"

}

:

order

)


})),







clearOrders:()=>set({

orders:[]

})



}),


{

name:"orders"

}


)

);


export default useOrderStore;