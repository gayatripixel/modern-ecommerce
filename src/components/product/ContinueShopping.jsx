import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";

import useRecentStore from "../../store/recentStore";


function ContinueShopping(){


const recent = useRecentStore(
(state)=>state.recentProducts
);



if(recent.length===0){
return null;
}



return(


<section

className="
py-20
px-6

bg-slate-50
dark:bg-slate-950

"

>


<div

className="
max-w-7xl
mx-auto

"

>


<div

className="
flex
items-center
gap-3
mb-10

"

>


<div

className="
w-12
h-12

rounded-2xl

bg-gradient-to-br

from-indigo-600

to-cyan-500


flex
items-center
justify-center

"

>

<Eye

className="text-white"

/>

</div>



<div>

<h2

className="
text-3xl
md:text-4xl

font-black

dark:text-white

"

>

Continue Exploring 👀

</h2>


<p

className="
text-slate-500
dark:text-slate-400

"

>

Products you recently viewed

</p>


</div>


</div>







<div

className="
grid

grid-cols-1

sm:grid-cols-2

md:grid-cols-4

gap-6

"

>


{

recent.slice(0,4)
.map((product)=>(


<motion.div

key={product.id}

whileHover={{
y:-10
}}

className="

bg-white

dark:bg-slate-900


rounded-3xl

p-5


shadow-lg


border

border-slate-200

dark:border-slate-800

"

>


<Link

to={`/product/${product.id}`}

>


<img

src={product.image}

className="
h-48
w-full
object-contain

"

/>



<h3

className="
mt-4

font-bold

line-clamp-2

dark:text-white

"

>

{product.title}

</h3>



<p

className="
mt-3

text-xl

font-black

text-indigo-600

"

>

₹{product.price}

</p>


</Link>


</motion.div>


))


}


</div>


</div>


</section>


)

}


export default ContinueShopping;