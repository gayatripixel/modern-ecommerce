import { Link } from "react-router-dom";
import { Scale, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import useCompareStore from "../../store/compareStore";

function CompareBar() {

const compare = useCompareStore(
(state)=>state.compare
);

const removeFromCompare = useCompareStore(
(state)=>state.removeFromCompare
);

if(compare.length < 2){
return null;
}

return (

<AnimatePresence>

<motion.div

initial={{
y:120,
opacity:0
}}

animate={{
y:0,
opacity:1
}}

exit={{
y:120,
opacity:0
}}

className="

fixed

bottom-6

left-1/2

-translate-x-1/2

z-[999]

w-[95%]

max-w-4xl

rounded-3xl

border

border-slate-200

dark:border-slate-700

bg-white/90

dark:bg-slate-900/90

backdrop-blur-xl

shadow-2xl

px-6

py-5

"

>

<div className="flex items-center justify-between">

<div>

<h3 className="font-black text-xl dark:text-white flex items-center gap-2">

<Scale size={22}/>

Compare Products

</h3>

<p className="text-slate-500 dark:text-slate-400">

{compare.length} products selected

</p>

</div>

<div className="flex gap-2">

{

compare.map((item)=>(

<div

key={item.id}

className="

relative

w-14

h-14

rounded-xl

bg-white

dark:bg-slate-800

border

flex

items-center

justify-center

"

>

<img

src={item.image}

alt={item.title}

className="

w-10

h-10

object-contain

"

/>

<button

onClick={()=>removeFromCompare(item.id)}

className="

absolute

-top-2

-right-2

w-5

h-5

rounded-full

bg-red-500

text-white

flex

items-center

justify-center

"

>

<X size={12}/>

</button>

</div>

))

}

</div>

<div className="flex gap-3">

<Link

to="/compare"

className="

px-6

py-3

rounded-xl

bg-gradient-to-r

from-indigo-600

via-purple-600

to-cyan-500

text-white

font-bold

"

>

Compare Now

</Link>

</div>

</div>

</motion.div>

</AnimatePresence>

);

}

export default CompareBar;