import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";



const questions=[

{
q:"How can I place an order?",
a:"Select your favorite product, add it to your cart and complete the checkout process. Your order will be confirmed instantly."
},


{
q:"Do you provide returns?",
a:"Yes, eligible products can be returned within the return period according to our return policy."
},


{
q:"Is payment secure?",
a:"Yes, all payments are protected with secure and trusted payment methods."
},


{
q:"How can I track my order?",
a:"You can track your order from the My Orders section after logging into your Nexora account."
},


{
q:"Do you offer customer support?",
a:"Yes, our support team is available to help you with any queries regarding products and orders."
}

];





function FAQ(){



const [open,setOpen]=useState(null);





return(


<section


className="

min-h-screen


px-6

py-24



bg-slate-50


dark:bg-slate-950


"


>


<div

className="

max-w-5xl

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



className="

text-center

mb-14

"

>


<h1

className="

text-5xl


md:text-6xl


font-black



bg-gradient-to-r


from-indigo-600


via-purple-600


to-cyan-500



bg-clip-text


text-transparent


"

>

Frequently Asked Questions

</h1>



<p

className="

mt-5


text-lg


text-slate-600


dark:text-slate-300


"

>

Everything you need to know about shopping with Nexora.

</p>



</motion.div>









{/* FAQ LIST */}



<div

className="

space-y-5

"

>


{


questions.map((item,index)=>(


<motion.div


key={item.q}



initial={{

opacity:0,

y:20

}}



whileInView={{

opacity:1,

y:0

}}



viewport={{

once:true

}}



transition={{

delay:index*0.1

}}



className="


rounded-[28px]



bg-white/80


dark:bg-slate-900/80



backdrop-blur-xl



border


border-slate-200


dark:border-slate-700



shadow-lg



overflow-hidden



"

>


<button


onClick={()=>


setOpen(

open===index

?

null

:

index

)


}



className="

w-full


flex

items-center

justify-between



p-7



text-left



"

>


<h2

className="

text-xl


font-bold


text-slate-900


dark:text-white


"

>

{item.q}

</h2>






<div

className="

w-10

h-10



rounded-full



bg-gradient-to-br


from-indigo-600


to-purple-600



flex

items-center

justify-center



text-white


"

>


{

open===index

?

<Minus size={20}/>

:

<Plus size={20}/>

}



</div>




</button>








<AnimatePresence>


{

open===index &&



<motion.div


initial={{

height:0,

opacity:0

}}



animate={{

height:"auto",

opacity:1

}}



exit={{

height:0,

opacity:0

}}



className="

overflow-hidden

"

>



<p

className="

px-7

pb-7


leading-7


text-slate-500


dark:text-slate-400


"

>

{item.a}

</p>



</motion.div>



}



</AnimatePresence>







</motion.div>


))


}



</div>






</div>


</section>


)

}



export default FAQ;