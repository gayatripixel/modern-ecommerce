import { motion } from "framer-motion";

import {
Rocket,
ShieldCheck,
Star,
ShoppingBag,
Users,
Award
} from "lucide-react";



function About(){



const features=[

{
icon:<Rocket size={30}/>,
title:"Fast Shopping",
desc:"Lightning fast browsing experience with smooth checkout."
},


{
icon:<ShieldCheck size={30}/>,
title:"Secure Payment",
desc:"Safe and reliable transactions with customer protection."
},


{
icon:<Star size={30}/>,
title:"Premium Experience",
desc:"Modern design with quality products and services."
}

];




const stats=[

{
icon:<ShoppingBag/>,
number:"10K+",
text:"Products"
},


{
icon:<Users/>,
number:"50K+",
text:"Happy Customers"
},


{
icon:<Award/>,
number:"99%",
text:"Customer Satisfaction"
}


];





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

max-w-6xl

mx-auto

"

>






{/* HERO CARD */}



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


relative


overflow-hidden



rounded-[40px]



p-10

md:p-14




bg-white/80



dark:bg-slate-900/80



backdrop-blur-xl



border

border-slate-200


dark:border-slate-700



shadow-2xl



"

>





<div

className="

absolute

w-96

h-96


bg-indigo-500/20


rounded-full


blur-3xl


-top-40


-right-20


"

>

</div>







<div

className="

relative

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

About Nexora

</h1>





<p

className="

mt-6


text-lg


leading-8



text-slate-600


dark:text-slate-300



max-w-3xl


"

>

Nexora is a modern ecommerce platform built to deliver
a seamless, secure and premium shopping experience.
From discovering products to fast checkout, everything
is designed for simplicity and convenience.

</p>



</div>






</motion.div>









{/* FEATURES */}



<div

className="

grid

md:grid-cols-3


gap-8


mt-12


"

>



{


features.map((item,index)=>(


<motion.div


key={item.title}



initial={{

opacity:0,

y:30

}}



whileInView={{

opacity:1,

y:0

}}



viewport={{

once:true

}}



transition={{

delay:index*.15

}}



whileHover={{

y:-10

}}



className="


p-8



rounded-[32px]



bg-white/80



dark:bg-slate-900/80



backdrop-blur-xl



border


border-slate-200



dark:border-slate-700



shadow-lg



hover:shadow-2xl



transition


"



>



<div

className="

w-16

h-16



rounded-2xl



bg-gradient-to-br


from-indigo-600


to-purple-600



flex

items-center

justify-center



text-white



mb-6


"

>

{item.icon}

</div>




<h2

className="

text-2xl

font-black


text-slate-900


dark:text-white


"

>

{item.title}

</h2>





<p

className="

mt-3


text-slate-500


dark:text-slate-400


leading-7


"

>

{item.desc}

</p>




</motion.div>



))


}



</div>









{/* STATS */}



<div

className="

grid

grid-cols-1


md:grid-cols-3



gap-8



mt-12


"

>



{


stats.map((item)=>(


<div


key={item.text}


className="


rounded-[32px]



p-8



text-center



bg-gradient-to-br


from-indigo-600


via-purple-600


to-cyan-500



text-white



shadow-xl



"

>


<div

className="

flex

justify-center

mb-4


"

>

{item.icon}

</div>




<h2

className="

text-4xl

font-black


"

>

{item.number}

</h2>




<p

className="

mt-2


font-semibold


text-white/80


"

>

{item.text}

</p>




</div>


))


}



</div>







</div>


</section>


)

}


export default About;