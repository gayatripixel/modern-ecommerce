import { useEffect, useState } from "react";
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






if(selectedProduct){


updateProduct(

selectedProduct.id,

{

...form,

price:Number(form.price)

}

);


}

else{


addProduct({

...form,

price:Number(form.price)

});


}





setForm(initialForm);


if(clearSelectedProduct){

clearSelectedProduct();

}



};








return(


<div

className="
mt-10
bg-white
dark:bg-gray-900
rounded-3xl
shadow-xl
border
border-gray-200
dark:border-gray-800
p-8
"

>



<div

className="
flex
justify-between
items-center
mb-6
"

>


<h2

className="
text-2xl
font-bold
text-black
dark:text-white
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



{

selectedProduct &&

<button

onClick={()=>{

clearSelectedProduct();

setForm(initialForm);

}}

className="
text-red-500
font-semibold
"

>

Cancel

</button>


}



</div>







<form

onSubmit={handleSubmit}

className="
space-y-5
"

>






<input

name="title"

value={form.title}

onChange={handleChange}

placeholder="Product Title"

className="
w-full
px-5
py-3
rounded-xl
border
bg-white
dark:bg-gray-800
dark:text-white
outline-none
"

/>








<input

name="price"

type="number"

value={form.price}

onChange={handleChange}

placeholder="Price"

className="
w-full
px-5
py-3
rounded-xl
border
bg-white
dark:bg-gray-800
dark:text-white
outline-none
"

/>








<select

name="category"

value={form.category}

onChange={handleChange}

className="
w-full
px-5
py-3
rounded-xl
border
bg-white
dark:bg-gray-800
dark:text-white
outline-none
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
w-full
px-5
py-3
rounded-xl
border
bg-white
dark:bg-gray-800
dark:text-white
outline-none
"

/>







{

form.image &&

<div className="
flex
justify-center
"

>

<img

src={form.image}

alt="preview"

className="
w-40
h-40
object-contain
rounded-2xl
bg-gray-100
p-3
"

/>

</div>

}









<textarea

name="description"

value={form.description}

onChange={handleChange}

placeholder="Description"

className="
w-full
px-5
py-3
rounded-xl
border
h-32
bg-white
dark:bg-gray-800
dark:text-white
outline-none
"

/>








<button

className="
w-full
bg-black
dark:bg-white
text-white
dark:text-black
py-3
rounded-full
font-semibold
hover:scale-105
transition
"

>

{

selectedProduct

?

"Update Product"

:

"Add Product"

}


</button>







</form>





</div>


)


}


export default ProductForm;