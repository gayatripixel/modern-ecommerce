import { Star, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";


const reviews=[

{
name:"Rahul Sharma",
rating:5,
comment:"Amazing quality product. Totally worth buying!",
date:"2 days ago"
},

{
name:"Priya Singh",
rating:4,
comment:"Good product and fast delivery experience.",
date:"1 week ago"
},

{
name:"Amit Patil",
rating:5,
comment:"Premium feel and great packaging.",
date:"2 weeks ago"
}

];




function Reviews(){


return(


<section

className="

mt-24

max-w-7xl

mx-auto

px-6

"

>


<h2

className="

text-4xl

font-black

dark:text-white

mb-10

"

>

Customer Reviews ⭐

</h2>





<div

className="

grid

lg:grid-cols-3

gap-8

"

>





{/* RATING CARD */}


<div

className="

bg-white

dark:bg-slate-900

rounded-3xl

p-8

shadow-xl

border

border-slate-200

dark:border-slate-800

"

>


<h3

className="

text-6xl

font-black

dark:text-white

"

>

4.8

</h3>



<div

className="

flex

text-yellow-400

my-4

"

>

{

[1,2,3,4,5].map((star)=>(

<Star

key={star}

fill="currentColor"

/>

))

}


</div>



<p

className="

text-slate-500

dark:text-slate-400

"

>

Based on 245 reviews

</p>




</div>








{/* STAR BREAKDOWN */}



<div

className="

lg:col-span-2

bg-white

dark:bg-slate-900

rounded-3xl

p-8

shadow-xl

border

border-slate-200

dark:border-slate-800

"

>



{

[

["5 Star",90],

["4 Star",70],

["3 Star",40],

["2 Star",20],

["1 Star",10]

].map(item=>(


<div

key={item[0]}

className="

mb-5

"

>


<div

className="

flex

justify-between

mb-2

dark:text-white

font-semibold

"

>

<span>

{item[0]}

</span>


<span>

{item[1]}%

</span>


</div>




<div

className="

h-3

bg-slate-200

dark:bg-slate-700

rounded-full

overflow-hidden

"

>


<motion.div


initial={{

width:0

}}


whileInView={{

width:`${item[1]}%`

}}


transition={{

duration:1

}}


className="

h-full

bg-gradient-to-r

from-yellow-400

to-orange-500

rounded-full

"


>


</motion.div>


</div>


</div>


))

}



</div>






</div>








{/* REVIEW CARDS */}



<div

className="

grid

md:grid-cols-3

gap-6

mt-12

"

>


{

reviews.map((review,index)=>(


<motion.div


key={index}


initial={{

opacity:0,

y:30

}}


whileInView={{

opacity:1,

y:0

}}


transition={{

delay:index*.2

}}


className="

bg-white

dark:bg-slate-900


rounded-3xl

p-6


shadow-lg


border

border-slate-200

dark:border-slate-800

"

>



<div

className="

flex

justify-between

items-center

"

>


<h3

className="

font-bold

dark:text-white

"

>

{review.name}

</h3>


<BadgeCheck

size={20}

className="text-blue-500"

/>


</div>




<div

className="

flex

text-yellow-400

my-3

"

>


{

Array(review.rating)

.fill()

.map((_,i)=>(

<Star

key={i}

size={18}

fill="currentColor"

/>

))

}


</div>



<p

className="

text-slate-600

dark:text-slate-300

"

>

{review.comment}

</p>



<p

className="

mt-4

text-sm

text-slate-400

"

>

{review.date}

</p>



</motion.div>


))

}



</div>







</section>


)


}


export default Reviews;