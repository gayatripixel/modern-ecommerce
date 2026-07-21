import { motion } from "framer-motion";

import {
Mail,
Phone,
MapPin,
Send
} from "lucide-react";



function Contact(){



const contactInfo=[

{
icon:<Mail size={25}/>,
title:"Email",
value:"support@nexora.com"
},


{
icon:<Phone size={25}/>,
title:"Phone",
value:"+91 98765 43210"
},


{
icon:<MapPin size={25}/>,
title:"Location",
value:"Mumbai, India"
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







<div

className="

grid

lg:grid-cols-2


gap-10


items-center


"

>









{/* LEFT SIDE */}



<motion.div


initial={{

opacity:0,

x:-40

}}



animate={{

opacity:1,

x:0

}}



>


<h1

className="

text-5xl


font-black



bg-gradient-to-r


from-indigo-600


via-purple-600


to-cyan-500



bg-clip-text


text-transparent


"

>

Contact Nexora

</h1>




<p

className="

mt-5


text-lg



leading-8


text-slate-600


dark:text-slate-300


"

>

Have questions or need support?
Our team is always ready to help you
with your shopping experience.

</p>








<div

className="

mt-10


space-y-5


"

>


{


contactInfo.map((item)=>(


<div


key={item.title}


className="

flex

items-center

gap-5



p-5



rounded-3xl



bg-white/80


dark:bg-slate-900/80



backdrop-blur-xl



border


border-slate-200


dark:border-slate-700



shadow-lg


"

>


<div

className="

w-12

h-12



rounded-2xl



bg-gradient-to-br


from-indigo-600


to-purple-600



text-white



flex

items-center

justify-center


"

>

{item.icon}

</div>




<div>


<h3

className="

font-bold


text-slate-900


dark:text-white


"

>

{item.title}

</h3>



<p

className="

text-slate-500


dark:text-slate-400


"

>

{item.value}

</p>



</div>




</div>


))


}



</div>




</motion.div>












{/* FORM */}



<motion.form


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



dark:bg-slate-900/80



backdrop-blur-xl



rounded-[40px]



p-8



md:p-10



border


border-slate-200


dark:border-slate-700



shadow-2xl



"

>





<h2

className="

text-3xl

font-black


text-slate-900


dark:text-white


mb-8


"

>

Send Message

</h2>






<input

placeholder="Your Name"

className="

w-full

px-6

py-4

rounded-2xl

border

border-slate-200

dark:border-slate-700

bg-white

dark:bg-slate-800

dark:text-white

outline-none

focus:ring-2

focus:ring-indigo-500

mb-5

"

/>







<input

type="email"

placeholder="Your Email"

className="

w-full

px-6

py-4

rounded-2xl

border

border-slate-200

dark:border-slate-700

bg-white

dark:bg-slate-800

dark:text-white

outline-none

focus:ring-2

focus:ring-indigo-500

mb-5

"

/>







<textarea


placeholder="Your Message"


className="

w-full

px-6

py-4

rounded-2xl

border

border-slate-200

dark:border-slate-700

bg-white

dark:bg-slate-800

dark:text-white

outline-none

focus:ring-2

focus:ring-indigo-500

h-36

resize-none

"

/>




<button


className="


mt-6


w-full



flex

items-center

justify-center

gap-3



py-4



rounded-2xl



bg-gradient-to-r


from-indigo-600


via-purple-600


to-cyan-500



text-white



font-bold



hover:scale-105



transition



shadow-lg



"

>


<Send size={20}/>


Send Message


</button>





</motion.form>







</div>






</div>


</section>



)

}


export default Contact;