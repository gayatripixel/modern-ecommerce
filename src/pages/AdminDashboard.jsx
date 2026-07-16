import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import useAdminStore from "../store/adminStore";
import useOrderStore from "../store/orderStore";

import DashboardStats from "../components/admin/DashboardStats";
import { getProducts } from "../services/productService";

import ProductTable from "../components/admin/ProductTable";
import ProductForm from "../components/admin/ProductForm";

import OrderTable from "../components/admin/OrderTable";

function AdminDashboard() {


  const products = useAdminStore(
    (state)=>state.products
  );


  const setProducts = useAdminStore(
    (state)=>state.setProducts
  );


  const setSelectedProduct = useAdminStore(
    (state)=>state.setSelectedProduct
  );


  const clearSelectedProduct = useAdminStore(
    (state)=>state.clearSelectedProduct
  );


  const deleteProduct = useAdminStore(
    (state)=>state.deleteProduct
  );



  const orders = useOrderStore(
    (state)=>state.orders
  );




  const {
    data: apiProducts = []
  } = useQuery({

    queryKey:["products"],

    queryFn:getProducts

  });





  useEffect(()=>{

    if(apiProducts.length > 0 && products.length === 0){

      setProducts(apiProducts);

    }

  },[apiProducts]);







return (

<section
className="
min-h-screen
bg-gray-50
dark:bg-gray-950
px-6
py-20
"
>


<div
className="
max-w-7xl
mx-auto
"
>


<h1
className="
text-4xl
font-extrabold
text-black
dark:text-white
mb-12
"
>

Admin Dashboard

</h1>





<DashboardStats

products={products}

orders={orders}

/>

<OrderTable />





{/* ADD / EDIT FORM */}

<ProductForm />





<ProductTable

products={products}


onEdit={(product)=>{


setSelectedProduct(product);


window.scrollTo({

top:0,

behavior:"smooth"

});


}}



onDelete={deleteProduct}



onAdd={()=>{


clearSelectedProduct();


window.scrollTo({

top:0,

behavior:"smooth"

});


}}


/>



</div>


</section>

)

}


export default AdminDashboard;