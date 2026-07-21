import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
Eye,
EyeOff,
User,
Mail,
Lock
} from "lucide-react";

import { motion } from "framer-motion";
import toast from "react-hot-toast";

import useAuthStore from "../store/authStore";



function Register(){


const register = useAuthStore(
(state)=>state.register
);


const login = useAuthStore(
(state)=>state.login
);



const navigate = useNavigate();



const [showPassword,setShowPassword]=useState(false);

const [showConfirmPassword,setShowConfirmPassword]=useState(false);

const [loading,setLoading]=useState(false);




const [form,setForm]=useState({

name:"",
email:"",
password:"",
confirmPassword:""

});





const handleChange=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};







const handleSubmit=(e)=>{


e.preventDefault();



if(
!form.name ||
!form.email ||
!form.password ||
!form.confirmPassword
){

toast.error(
"Please fill all fields"
);

return;

}





if(form.password.length < 6){

toast.error(
"Password must be 6 characters"
);

return;

}





if(form.password !== form.confirmPassword){

toast.error(
"Passwords do not match"
);

return;

}




setLoading(true);




setTimeout(()=>{


const success = register({

name:form.name,

email:form.email.toLowerCase().trim(),

password:form.password,

role:"user"

// role:form.user

});





if(success){



login(

form.email.toLowerCase().trim(),

form.password

);



toast.success(
`Welcome ${form.name} 🎉`
);



navigate("/");


}

else{


toast.error(
"Email already registered"
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





{/* Glow Background */}


<div

className="
absolute

w-96

h-96

rounded-full

bg-purple-500/20

blur-3xl

top-10

right-10

"

/>



<div

className="
absolute

w-96

h-96

rounded-full

bg-cyan-500/20

blur-3xl

bottom-10

left-10

"

/>







<motion.form


onSubmit={handleSubmit}


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

mb-8

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


text-3xl


shadow-xl


"

>

✨

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

Create Account

</h1>



<p

className="

mt-2

text-slate-500

dark:text-slate-400

"

>

Join Nexora Premium Store 🚀

</p>



</div>









{/* Name */}


<div className="
relative
mb-4
">


<User

size={20}

className="
absolute

left-4

top-4

text-slate-400

"

/>



<input


name="name"


placeholder="Full Name"


value={form.name}


onChange={handleChange}



className="

w-full

pl-12

py-4


rounded-2xl


bg-slate-100

dark:bg-slate-800


dark:text-white


outline-none


focus:ring-2

focus:ring-indigo-500


"





/>



</div>









{/* Email */}


<div className="
relative

mb-4
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


name="email"


placeholder="Email Address"



value={form.email}



onChange={handleChange}



className="

w-full

pl-12

py-4


rounded-2xl


bg-slate-100

dark:bg-slate-800


dark:text-white


outline-none


focus:ring-2

focus:ring-indigo-500


"




/>



</div>









{/* Password */}



<div

className="
relative

mb-4

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



name="password"


placeholder="Password"



value={form.password}



onChange={handleChange}



className="

w-full

pl-12

pr-12

py-4


rounded-2xl


bg-slate-100

dark:bg-slate-800


dark:text-white


outline-none


focus:ring-2

focus:ring-indigo-500


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









{/* Confirm Password */}



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
showConfirmPassword
?
"text"
:
"password"
}



name="confirmPassword"



placeholder="Confirm Password"



value={form.confirmPassword}



onChange={handleChange}



className="

w-full

pl-12

pr-12

py-4


rounded-2xl


bg-slate-100

dark:bg-slate-800


dark:text-white


outline-none


focus:ring-2

focus:ring-indigo-500


"




/>





<button


type="button"



onClick={()=>setShowConfirmPassword(!showConfirmPassword)}



className="
absolute

right-4

top-4

text-slate-400

"

>


{

showConfirmPassword

?

<EyeOff size={20}/>

:

<Eye size={20}/>

}


</button>



</div>










<button


disabled={loading}



className="

mt-8


w-full


py-4



rounded-2xl



bg-gradient-to-r


from-indigo-600

via-purple-600

to-cyan-500



text-white



font-bold



shadow-xl



hover:scale-105



transition



disabled:opacity-50



"

>


{

loading

?

"Creating Account..."

:

"Create Account 🚀"

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


Already have an account?


<Link


to="/login"


className="

ml-2

font-bold


text-indigo-600

dark:text-cyan-400


"

>

Login

</Link>


</p>








</motion.form>



</section>


)

}


export default Register;