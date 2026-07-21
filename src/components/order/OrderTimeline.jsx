import { Check, Package, Truck, Home, CreditCard } from "lucide-react";
import { motion } from "framer-motion";


function OrderTimeline({status="Placed"}){


const steps=[

{
title:"Order Placed",
icon:Package
},

{
title:"Payment Confirmed",
icon:CreditCard
},

{
title:"Shipped",
icon:Truck
},

{
title:"Out For Delivery",
icon:Truck
},

{
title:"Delivered",
icon:Home
}

];



const current =
steps.findIndex(
item=>item.title===status
);



return(


<div

className="
mt-8
bg-white
dark:bg-slate-900
rounded-3xl
p-8
border
border-slate-200
dark:border-slate-800
"

>


<h2

className="
text-2xl
font-black
dark:text-white
mb-8
"

>

Delivery Status

</h2>



<div

className="
space-y-8
"

>


{

steps.map((step,index)=>{


const Icon=step.icon;


const completed=index<=current;



return(


<div

key={step.title}

className="
flex
items-center
gap-5
"

>


<motion.div

animate={{

scale:completed?[1,1.1,1]:1

}}

transition={{

duration:1,
repeat:completed?Infinity:0

}}

className={`

w-12
h-12

rounded-full

flex
items-center
justify-center

${

completed

?

"bg-gradient-to-r from-indigo-600 to-cyan-500 text-white"

:

"bg-slate-200 dark:bg-slate-700 text-slate-400"

}

`}

>


{

completed

?

<Check size={22}/>

:

<Icon size={22}/>

}


</motion.div>




<div>


<h3

className={`
font-bold

${

completed

?

"text-indigo-600 dark:text-cyan-400"

:

"dark:text-white text-slate-500"

}

`}

>

{step.title}

</h3>


{

index < steps.length-1 &&

<div

className="

absolute

"

></div>

}


</div>



</div>


)


})


}


</div>



</div>


)


}


export default OrderTimeline;