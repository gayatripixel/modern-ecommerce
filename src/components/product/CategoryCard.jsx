import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";


function CategoryCard({title,image}){


return(


<Tilt

tiltMaxAngleX={8}

tiltMaxAngleY={8}

scale={1.05}

transitionSpeed={400}


>


<motion.div


initial={{
opacity:0,
y:40
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:true
}}


className="
group
cursor-pointer
"


>


<div

className="

relative

h-80

overflow-hidden

rounded-[35px]


border

border-white/20


shadow-xl


dark:shadow-black/40


"


>


{/* IMAGE */}


<img


loading="lazy"

decoding="async"


src={image}

alt={title}


className="

w-full

h-full

object-cover


group-hover:scale-125


transition-transform

duration-[1200ms]

"



/>







{/* DARK GLASS OVERLAY */}



<div

className="

absolute

inset-0


bg-gradient-to-t

from-black

via-black/30

to-transparent


opacity-70


group-hover:opacity-90


transition

duration-500

"


>



</div>








{/* CATEGORY BADGE */}


<motion.div


initial={{

scale:0

}}


whileInView={{

scale:1

}}


transition={{

duration:.5

}}


className="

absolute

top-5

left-5


px-4

py-2


rounded-full


bg-white/20


backdrop-blur-md


border

border-white/30


text-white


text-xs


font-bold


uppercase


tracking-widest


"


>


Premium


</motion.div>










{/* CONTENT */}



<div

className="

absolute

bottom-0

left-0

right-0


p-7


"

>


<motion.h3


whileHover={{

y:-5

}}


className="

text-3xl

font-black


text-white


tracking-wide


drop-shadow-xl


"


>


{title}


</motion.h3>






<motion.p


initial={{

opacity:0,
y:20

}}


whileInView={{

opacity:1,
y:0

}}


className="

mt-3


text-gray-200


text-sm


"

>


Discover premium collection ✨


</motion.p>





</div>









{/* BORDER GLOW */}



<div

className="

absolute

inset-0


rounded-[35px]


ring-1

ring-white/20


pointer-events-none


"


>


</div>





</div>



</motion.div>



</Tilt>


)


}


export default CategoryCard;