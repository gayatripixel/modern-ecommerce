import { Navigate } from "react-router-dom";

import useAuthStore from "../../store/authStore";


function AdminRoute({children}){


const user = useAuthStore(
state=>state.user
);



if(!user){

return <Navigate to="/login"/>

}



if(user.role !== "admin"){

return (

<div className="
min-h-screen
flex
items-center
justify-center
text-3xl
font-black
text-red-500
">

Access Denied 🚫

</div>

)

}



return children;


}


export default AdminRoute;