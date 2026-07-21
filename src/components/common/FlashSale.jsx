import { useEffect, useState } from "react";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";


function FlashSale(){


const [time,setTime]=useState(
{
hours:2,
minutes:15,
seconds:40
}
);



useEffect(()=>{


const timer=setInterval(()=>{


setTime((prev)=>{


let {hours,minutes,seconds}=prev;


if(seconds>0){

seconds--;

}

else{


seconds=59;


if(minutes>0){

minutes--;

}

else{


minutes=59;


if(hours>0){

hours--;

}

}

}



return {
hours,
minutes,
seconds
};


});


},1000);



return ()=>clearInterval(timer);


},[]);





return(


<motion.div

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


className="

max-w-7xl

mx-auto

mt-10

mx-6

rounded-[35px]

p-8


bg-gradient-to-r

from-indigo-600

via-purple-600

to-cyan-500


text-white


shadow-2xl


flex

flex-col

md:flex-row


items-center

justify-between


gap-6

"

>


<div

className="
flex
items-center
gap-4
"

>


<div

className="
w-14
h-14

rounded-2xl

bg-white/20

flex
items-center
justify-center

"

>

<Zap

size={30}

fill="white"

/>

</div>



<div>

<h2

className="
text-3xl

font-black

"

>

Flash Sale 🔥

</h2>


<p

className="
text-white/80

"

>

Limited time premium deals

</p>


</div>


</div>







<div

className="
flex
gap-3
text-center

"

>


{

[

["Hours",time.hours],

["Min",time.minutes],

["Sec",time.seconds]

].map(item=>(


<div

key={item[0]}

className="

bg-white/20

backdrop-blur-xl

rounded-2xl

px-5

py-3

"

>


<h3

className="
text-3xl

font-black

"

>

{

String(item[1])
.padStart(2,"0")

}

</h3>


<p

className="
text-xs

"

>

{item[0]}

</p>


</div>


))


}


</div>



</motion.div>


)


}


export default FlashSale;