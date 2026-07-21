import { Link } from "react-router-dom";


function NotFound(){

return(

<section
className="
min-h-screen
flex
items-center
justify-center
bg-gray-50
dark:bg-gray-950
"
>


<div
className="
text-center
"
>

<h1
className="
text-8xl
font-bold
text-black
dark:text-white
"
>
404
</h1>


<p
className="
text-xl
text-gray-500
mt-5
"
>
Page Not Found
</p>


<Link
to="/"
className="
inline-block
mt-8
bg-black
dark:bg-white
text-white
dark:text-black
px-8
py-3
rounded-full
"
>
Go Home
</Link>


</div>


</section>

)

}


export default NotFound;