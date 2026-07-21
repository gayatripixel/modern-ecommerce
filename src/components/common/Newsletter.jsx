import { useState } from "react";
import toast from "react-hot-toast";
import { Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";


function Newsletter(){

const [email,setEmail]=useState("");


const handleSubmit=(e)=>{

e.preventDefault();


if(!email){

toast.error("Please enter your email");

return;

}


toast.success("Subscribed Successfully 🎉");

setEmail("");

};



return(

<section

className="
relative
max-w-6xl
mx-auto

px-6
mt-24

overflow-hidden

"

>


{/* Glow */}

<div

className="
absolute
inset-0

bg-gradient-to-r

from-indigo-500/20
via-violet-500/20
to-cyan-500/20

blur-3xl

"

></div>




<motion.div


initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.6
}}


className="

relative

rounded-[40px]

p-10
md:p-14


bg-white
dark:bg-slate-900


border

border-slate-200

dark:border-slate-800


shadow-2xl

"

>





<div

className="
flex
justify-center
mb-6
"

>


<div

className="
w-16
h-16

rounded-2xl

bg-gradient-to-br

from-indigo-600
via-violet-600
to-cyan-500


flex
items-center
justify-center

shadow-lg

"

>

<Mail

className="
text-white

"

size={30}

/>


</div>


</div>







<h2

className="

text-center

text-4xl

md:text-5xl

font-black


bg-gradient-to-r

from-indigo-600

via-violet-600

to-cyan-500


bg-clip-text

text-transparent


"

>

Subscribe Newsletter

</h2>






<p

className="

text-center

mt-4

text-slate-600

dark:text-slate-400

text-lg

"

>

Get exclusive offers, latest products
and special discounts directly in your inbox.

</p>







<form

onSubmit={handleSubmit}

className="

mt-10

flex

flex-col

md:flex-row

gap-4

max-w-3xl

mx-auto

"

>


<div

className="

flex-1

relative

"

>


<Mail

className="

absolute

left-5

top-1/2

-translate-y-1/2

text-slate-400

"

size={20}

/>



<input


type="email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

placeholder="Enter your email"


className="

w-full

pl-14

pr-6

py-4


rounded-full


bg-slate-100

dark:bg-slate-800


text-black

dark:text-white


outline-none


border

border-slate-200

dark:border-slate-700


focus:ring-2

focus:ring-indigo-500


transition

"




/>


</div>







<button


className="


flex

items-center

justify-center

gap-2


px-8

py-4


rounded-full


bg-gradient-to-r

from-indigo-600

via-violet-600

to-cyan-500


text-white

font-bold


hover:scale-105


shadow-lg

shadow-indigo-500/30


transition


"

>


<Sparkles size={18}/>


Subscribe


</button>






</form>






<p

className="

text-center

text-sm

text-slate-500

dark:text-slate-500

mt-6

"

>

No spam. Only premium updates ✨

</p>






</motion.div>



</section>


)

}


export default Newsletter;