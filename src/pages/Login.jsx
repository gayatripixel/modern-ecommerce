import { useState } from "react";
import useAuthStore from "../store/authStore";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


function Login(){


const login = useAuthStore(
(state)=>state.login
);


const navigate = useNavigate();



const [email,setEmail] = useState("");

const [password,setPassword] = useState("");

const [showPassword,setShowPassword] = useState(false);

const [loading,setLoading] = useState(false);





const handleLogin = async (e) => {

  e.preventDefault();

  if (!email || !password) {

    toast.error("Please fill all fields");

    return;

  }

  setLoading(true);

  setTimeout(() => {

    const success = login(
      email,
      password
    );

    if (success) {

      toast.success("Login Successful 🎉");

      navigate("/");

    } else {

      toast.error("Invalid Email or Password");

    }

    setLoading(false);

  }, 1500);

};





return (


<section
className="
min-h-screen
flex
items-center
justify-center
bg-gray-50
dark:bg-gray-950
px-6
"
>



<form

onSubmit={handleLogin}

className="
bg-white
dark:bg-gray-900
w-full
max-w-md
p-8
rounded-3xl
shadow-xl
border
border-gray-200
dark:border-gray-800
"


>



<h1
className="
text-4xl
font-bold
text-center
mb-8
text-black
dark:text-white
"
>

Login

</h1>




<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

className="
w-full
border
dark:border-gray-700
bg-white
dark:bg-gray-800
text-black
dark:text-white
px-5
py-3
rounded-xl
mb-4
outline-none
"

/>






<div className="relative">


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
border
dark:border-gray-700
bg-white
dark:bg-gray-800
text-black
dark:text-white
px-5
py-3
rounded-xl
outline-none
"

/>



<button

type="button"

onClick={()=>setShowPassword(!showPassword)}

className="
absolute
right-4
top-3
text-sm
text-gray-500
"

>

{
showPassword
?
"Hide"
:
"Show"
}

</button>



</div>







<div className="
flex
items-center
gap-2
mt-5
mb-6
">


<input

type="checkbox"

/>


<span className="
text-gray-600
dark:text-gray-400
text-sm
">

Remember me

</span>


</div>





<button

disabled={loading}

className="
w-full
bg-black
dark:bg-white
text-white
dark:text-black
py-3
rounded-xl
font-semibold
hover:scale-105
transition
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

<p className="mt-6 text-center text-gray-600 dark:text-gray-400">
  Don't have an account?
  <Link
    to="/register"
    className="ml-2 font-semibold text-black dark:text-white"
  >
    Create Account
  </Link>
</p>




</form>



</section>


)


}


export default Login;