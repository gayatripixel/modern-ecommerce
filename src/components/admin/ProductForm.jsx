import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Plus, Save, X } from "lucide-react";

import useAdminStore from "../../store/adminStore";


function ProductForm(){


const addProduct = useAdminStore(
(state)=>state.addProduct
);


const updateProduct = useAdminStore(
(state)=>state.updateProduct
);


const selectedProduct = useAdminStore(
(state)=>state.selectedProduct
);


const clearSelectedProduct = useAdminStore(
(state)=>state.clearSelectedProduct
);




const categories=[

"electronics",
"jewelery",
"men's clothing",
"women's clothing"

];




const initialForm={

title:"",
price:"",
category:"",
image:"",
description:""

};



const [form,setForm]=useState(initialForm);





useEffect(()=>{


if(selectedProduct){

setForm({

title:selectedProduct.title,

price:selectedProduct.price,

category:selectedProduct.category,

image:selectedProduct.image,

description:selectedProduct.description

});


}


},[selectedProduct]);







const handleChange=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};







const handleSubmit=(e)=>{


e.preventDefault();



if(
!form.title ||
!form.price ||
!form.category
){

alert("Please fill required fields");

return;

}




const productData={

...form,

price:Number(form.price)

};




if(selectedProduct){

updateProduct(
selectedProduct.id,
productData
);


}

else{

addProduct(productData);

}




setForm(initialForm);


clearSelectedProduct();


};







return(



<motion.div

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
mt-10

rounded-[35px]

p-8

bg-white/70
dark:bg-slate-900/70

backdrop-blur-xl

border
border-slate-200
dark:border-slate-800

shadow-2xl

"


>




{/* HEADER */}



<div

className="
flex
justify-between
items-center
mb-8
"

>


<div>


<h2

className="
text-3xl
font-black

bg-gradient-to-r
from-indigo-600
via-purple-600
to-cyan-500

bg-clip-text
text-transparent

"

>

{

selectedProduct

?

"Edit Product"

:

"Add New Product"

}

</h2>


<p

className="
text-slate-500
dark:text-slate-400
mt-2
"

>

Manage your store products

</p>



</div>





{

selectedProduct &&

<button

onClick={()=>{

clearSelectedProduct();

setForm(initialForm);

}}

className="
flex
items-center
gap-2

px-5
py-2

rounded-full

bg-red-100
dark:bg-red-900/40

text-red-600
dark:text-red-300

font-semibold

hover:scale-105

transition

"

>

<X size={18}/>

Cancel

</button>


}



</div>









<form

onSubmit={handleSubmit}

className="
space-y-6
"

>




<input

name="title"

value={form.title}

onChange={handleChange}

placeholder="Product Title"

className="
input-style
"

/>





<input

name="price"

type="number"

value={form.price}

onChange={handleChange}

placeholder="Product Price"

className="
input-style
"

/>







<select

name="category"

value={form.category}

onChange={handleChange}

className="
input-style
"

>


<option value="">
Select Category
</option>


{

categories.map((cat)=>(

<option

key={cat}

value={cat}

>

{cat}

</option>

))

}



</select>







<input

name="image"

value={form.image}

onChange={handleChange}

placeholder="Image URL"

className="
input-style
"

/>








{
form.image &&

<motion.div

initial={{
scale:.8,
opacity:0
}}

animate={{
scale:1,
opacity:1
}}

className="
flex
justify-center
"

>


<img

src={form.image}

alt="preview"

className="

w-48
h-48

object-contain

rounded-3xl

bg-slate-100

dark:bg-slate-800

p-5

shadow-lg

"

/>


</motion.div>

}







<textarea

name="description"

value={form.description}

onChange={handleChange}

placeholder="Product Description"

className="
input-style
h-36
"

/>









<button

className="

w-full

flex
items-center
justify-center
gap-3

py-4

rounded-2xl


bg-gradient-to-r

from-indigo-600

via-purple-600

to-cyan-500


text-white

font-bold

text-lg


hover:scale-[1.02]

transition


shadow-lg

"


>


{

selectedProduct

?

<>

<Save size={20}/>

Update Product

</>

:

<>

<Plus size={20}/>

Add Product

</>

}



</button>








</form>







<style>

{`

.input-style{

width:100%;

padding:14px 20px;

border-radius:18px;

border:1px solid;

background:white;

outline:none;

color:#111827;

transition:.3s;

}


.dark .input-style{

background:#1e293b;

color:white;

border-color:#334155;

}


.input-style:focus{

ring:2px;

border-color:#6366f1;

}


`}

</style>





</motion.div>


)


}


export default ProductForm;