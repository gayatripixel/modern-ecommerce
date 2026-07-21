import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import useAuthStore from "../store/authStore";

function ResetPassword(){

const location = useLocation();

const navigate = useNavigate();

const resetPassword = useAuthStore(
(state)=>state.resetPassword
);

const email = location.state?.email || "";

const [password,setPassword] = useState("");

const [confirmPassword,setConfirmPassword] = useState("");

const [show,setShow] = useState(false);

const handleSubmit=(e)=>{

e.preventDefault();

if(password.length < 6){

toast.error("Minimum 6 characters");

return;

}

if(password !== confirmPassword){

toast.error("Passwords do not match");

return;

}

const success = resetPassword(
email,
password
);

if(success){

toast.success("Password Updated Successfully 🎉");

navigate("/login");

}

else{

toast.error("User not found");

}

};

return(

<section
className="
min-h-screen
flex
items-center
justify-center
bg-gray-50
dark:bg-gray-950
px-6
">

<form
onSubmit={handleSubmit}
className="
w-full
max-w-md
bg-white
dark:bg-gray-900
p-8
rounded-3xl
shadow-xl
border
border-gray-200
dark:border-gray-800
">

<h1
className="
text-4xl
font-bold
text-center
text-black
dark:text-white
">

Reset Password

</h1>

<p
className="
text-center
text-gray-500
dark:text-gray-400
mt-3
mb-8
">

{email}

</p>

<input

type={
show
?
"text"
:
"password"
}

placeholder="New Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

className="
w-full
px-5
py-3
rounded-xl
border
mb-4
dark:bg-gray-800
dark:text-white
"

/>

<input

type={
show
?
"text"
:
"password"
}

placeholder="Confirm Password"

value={confirmPassword}

onChange={(e)=>setConfirmPassword(e.target.value)}

className="
w-full
px-5
py-3
rounded-xl
border
dark:bg-gray-800
dark:text-white
"

/>

<button

type="button"

onClick={()=>setShow(!show)}

className="
mt-3
text-sm
text-blue-600
dark:text-blue-400
"

>

{
show
?
"Hide Password"
:
"Show Password"
}

</button>

<button

className="
mt-8
w-full
bg-black
dark:bg-white
text-white
dark:text-black
py-3
rounded-xl
font-semibold
"

>

Update Password

</button>

</form>

</section>

);

}

export default ResetPassword;