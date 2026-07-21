import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import useAuthStore from "../store/authStore";



function Login(){


const login = useAuthStore(
(state)=>state.login
);


const navigate = useNavigate();



const [email,setEmail]=useState("");

const [password,setPassword]=useState("");

const [showPassword,setShowPassword]=useState(false);

const [loading,setLoading]=useState(false);





const handleLogin = (e)=>{


e.preventDefault();



if(!email || !password){

toast.error(
"Please fill all fields"
);

return;

}



setLoading(true);



setTimeout(()=>{


const success = login(
email.toLowerCase().trim(),
password
);



if(success){


toast.success(
"Login Successful 🎉"
);


navigate("/");


}

else{


toast.error(
"Invalid Email or Password"
);


}



setLoading(false);



},1200);



};






return(


<section

className="
min-h-screen

relative

overflow-hidden

flex
items-center
justify-center

px-6
py-20


bg-slate-50

dark:bg-slate-950

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
top-10
left-10
"
/>


<div
className="
absolute
w-96
h-96
bg-cyan-500/20
blur-3xl
rounded-full
bottom-10
right-10
"
/>







<motion.form


onSubmit={handleLogin}


initial={{
opacity:0,
y:40
}}


animate={{
opacity:1,
y:0
}}


transition={{
duration:.5
}}



className="

relative

w-full

max-w-md


bg-white/80

dark:bg-slate-900/80


backdrop-blur-xl


border

border-slate-200

dark:border-slate-800



rounded-[40px]


shadow-2xl


p-10


"

>





<div

className="
text-center
mb-10
"

>


<div

className="
w-20
h-20

mx-auto

rounded-3xl

bg-gradient-to-br

from-indigo-600

via-purple-600

to-cyan-500


flex
items-center
justify-center


text-white

shadow-lg

"

>

🔐

</div>





<h1

className="
text-4xl

font-black

mt-6

text-slate-900

dark:text-white

"

>

Welcome Back

</h1>



<p

className="
mt-2

text-slate-500

dark:text-slate-400

"

>

Login to your Nexora account

</p>


</div>







{/* Email */}


<div className="
relative
mb-5
">


<Mail

size={20}

className="
absolute
left-4
top-4

text-slate-400

"

/>



<input


type="email"


placeholder="Email Address"


value={email}


onChange={(e)=>setEmail(e.target.value)}



className="

w-full

pl-12

pr-5

py-4


rounded-2xl


bg-slate-100

dark:bg-slate-800


border

border-transparent


dark:text-white


outline-none


focus:ring-2

focus:ring-indigo-500


transition


"




/>


</div>









{/* Password */}



<div

className="
relative
"

>


<Lock

size={20}

className="
absolute

left-4

top-4

text-slate-400

"

/>



<input


type={
showPassword
?
"text"
:
"password"
}


placeholder="Password"



value={password}



onChange={(e)=>setPassword(e.target.value)}




className="

w-full

pl-12

pr-12

py-4


rounded-2xl


bg-slate-100

dark:bg-slate-800


border

border-transparent


dark:text-white


outline-none


focus:ring-2

focus:ring-indigo-500


transition


"





/>





<button

type="button"

onClick={()=>setShowPassword(!showPassword)}


className="
absolute

right-4

top-4

text-slate-400

"


>


{

showPassword

?

<EyeOff size={20}/>

:

<Eye size={20}/>

}


</button>



</div>







<div

className="
flex
justify-between
items-center

mt-5

mb-8

"

>


<label

className="
flex
items-center
gap-2

text-sm

text-slate-500

dark:text-slate-400

"

>


<input

type="checkbox"

/>


Remember me


</label>





<Link

to="/forgot-password"

className="
text-sm

text-indigo-600

dark:text-cyan-400

font-semibold

hover:underline

"

>

Forgot Password?

</Link>


</div>








<button


disabled={loading}


className="

w-full

py-4


rounded-2xl


bg-gradient-to-r

from-indigo-600

via-purple-600

to-cyan-500


text-white


font-bold


shadow-lg


hover:scale-105


transition


disabled:opacity-50


"

>


{

loading

?

"Logging in..."

:

"Login"

}


</button>









<p

className="
text-center

mt-8

text-slate-500

dark:text-slate-400

"

>


Don't have an account?


<Link

to="/register"

className="
ml-2

font-bold

text-indigo-600

dark:text-cyan-400

"

>

Create Account

</Link>


</p>






</motion.form>



</section>


)

}


export default Login;