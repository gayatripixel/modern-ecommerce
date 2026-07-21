import { Link } from "react-router-dom";

import {
FaInstagram,
FaLinkedinIn,
FaGithub,
FaXTwitter
} from "react-icons/fa6";

import {
Mail,
ArrowRight
} from "lucide-react";


import { motion } from "framer-motion";





function Footer(){



const social=[

FaInstagram,
FaLinkedinIn,
FaGithub,
FaXTwitter

];




return(



<footer


className="


relative


mt-24



bg-slate-100


dark:bg-slate-950



border-t


border-slate-200


dark:border-slate-800



overflow-hidden



"

>





{/* Glow */}



<div

className="

absolute

w-96

h-96


bg-indigo-500/20


blur-3xl


rounded-full


-top-40


-left-20


"

>

</div>






<div

className="

max-w-7xl

mx-auto


px-6

py-16



grid


grid-cols-1


sm:grid-cols-2


lg:grid-cols-4


gap-12



relative



"

>









{/* BRAND */}



<motion.div


initial={{

opacity:0,

y:30

}}


whileInView={{

opacity:1,

y:0

}}



>


<div

className="

flex

items-center

gap-3

"

>


<div

className="

w-14

h-14


rounded-2xl



bg-gradient-to-br


from-indigo-600


via-purple-600


to-cyan-500



flex

items-center

justify-center



text-white


text-3xl


font-black



shadow-xl


"

>

N

</div>





<h2

className="

text-3xl

font-black



bg-gradient-to-r


from-indigo-600


to-cyan-500



bg-clip-text


text-transparent


"

>

Nexora

</h2>



</div>







<p

className="

mt-5


leading-7



text-slate-500


dark:text-slate-400


"

>

Premium ecommerce experience built with
React, Tailwind CSS, Zustand and modern
frontend technologies.

</p>




</motion.div>









{/* EXPLORE */}



<div>


<h3

className="

text-xl

font-black


text-slate-900


dark:text-white


mb-6


"

>

Explore

</h3>



<div

className="

space-y-4


text-slate-500


dark:text-slate-400


"

>


{

[

["Home","/"],

["Products","/products"],

["Wishlist","/wishlist"],

["Orders","/orders"]

].map(item=>(


<Link

key={item[0]}

to={item[1]}

className="

block

hover:text-indigo-600

transition

"

>

{item[0]}

</Link>


))


}



</div>



</div>









{/* SUPPORT */}



<div>


<h3

className="

text-xl

font-black


text-slate-900


dark:text-white


mb-6


"

>

Support

</h3>





<div

className="

space-y-4


text-slate-500


dark:text-slate-400


"

>



<Link

to="/faq"

className="block hover:text-indigo-600 transition"

>

FAQ

</Link>




<Link

to="/contact"

className="block hover:text-indigo-600 transition"

>

Contact Us

</Link>




<Link

to="/privacy"

className="block hover:text-indigo-600 transition"

>

Privacy Policy

</Link>





<Link

to="/terms"

className="block hover:text-indigo-600 transition"

>

Terms & Conditions

</Link>






<div

className="

flex

items-center

gap-2

"

>

<Mail size={18}/>

support@nexora.com

</div>




</div>


</div>









{/* SOCIAL + PAYMENT */}




<div>


<h3

className="

text-xl

font-black


text-slate-900


dark:text-white


mb-6


"

>

Payments

</h3>






<div

className="

flex

gap-3

flex-wrap


"

>


{

["Visa","Mastercard","UPI","COD"]

.map(item=>(


<span


key={item}


className="


px-5

py-3



rounded-2xl



bg-white


dark:bg-slate-900



shadow-lg



text-sm


font-semibold



text-slate-700


dark:text-white



border


border-slate-200


dark:border-slate-800



"

>


{item}


</span>



))


}


</div>










<h3

className="

text-xl

font-black


text-slate-900


dark:text-white


mt-8

mb-5


"

>

Follow Us

</h3>





<div

className="

flex

gap-4

"

>


{


social.map((Icon,index)=>(


<motion.a


key={index}



whileHover={{

y:-8,

scale:1.1

}}



href="#"



className="


w-12

h-12



rounded-full



bg-white


dark:bg-slate-900



shadow-lg



flex

items-center

justify-center



text-slate-600


dark:text-white



hover:text-indigo-600



transition



"

>


<Icon/>


</motion.a>


))


}




</div>





</div>







</div>









{/* NEWSLETTER BAR */}



<div

className="

max-w-7xl

mx-auto

px-6

pb-8

"

>


<div

className="

rounded-[32px]

p-8



bg-gradient-to-r


from-indigo-600


via-purple-600


to-cyan-500



flex

flex-col

md:flex-row



justify-between



items-center



gap-5



text-white



"

>


<div>


<h2

className="

text-2xl

font-black

"

>

Stay Updated 🚀

</h2>


<p

className="

text-white/80

mt-2

"

>

Get latest offers and product updates.

</p>


</div>





<Link

to="/"

className="

flex

items-center

gap-2



bg-white


text-black



px-6

py-3



rounded-full



font-bold



hover:scale-105



transition


"

>


Explore Store

<ArrowRight size={18}/>


</Link>




</div>


</div>









{/* COPYRIGHT */}



<div

className="

border-t

border-slate-200


dark:border-slate-800


"

>


<div

className="

max-w-7xl

mx-auto


px-6

py-6



flex

flex-col

md:flex-row



justify-between



gap-3



text-sm



text-slate-500



"

>


<p>

© 2026 Nexora. All Rights Reserved.

</p>


<p>

Built with ❤️ React + Tailwind

</p>


</div>


</div>







</footer>



)

}


export default Footer;