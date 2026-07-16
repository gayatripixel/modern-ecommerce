import { Link } from "react-router-dom";
import CategoryCard from "../components/product/CategoryCard";
import ProductCard from "../components/product/ProductCard";

import categories from "../constants/categories";

import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/productService";


function Home() {

  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) {
  return (
    <h1 className="text-center text-3xl py-20">
      Loading Products...
    </h1>
  );
  }

  if (error) {
  return (
    <h1 className="text-center text-red-500 py-20">
      Failed to load products.
    </h1>
  );
  }


  return (

    <>


      {/* ================= HERO SECTION ================= */}


      <section className="min-h-screen bg-gray-50 dark:bg-gray-950">


        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">


          {/* Content */}

          <div>


            <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">
              New Collection 2026
            </p>



            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-black dark:text-white">

              Discover

              <span className="text-gray-500 dark:text-gray-400">
                {" "}Premium
              </span>

              <br />

              Products For You

            </h1>



            <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg max-w-lg">

              Explore premium quality products designed
              for modern lifestyle and everyday needs.

            </p>



            <div className="mt-8 flex gap-4">


              <Link
                to="/products"
                className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-700 transition"
              >
                Shop Now
              </Link>



              <Link
                to="/products"
                className="border border-black dark:border-white 
                  px-8 py-3 rounded-full 
                text-black dark:text-white
                hover:bg-black dark:hover:bg-white
                hover:text-white dark:hover:text-black
                  transition"
              >
                Explore
              </Link>


            </div>


          </div>





          {/* Image */}


          <div className="flex justify-center">


            <img

              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"

              alt="shopping"

              className="rounded-3xl shadow-2xl max-w-md w-full"

            />


          </div>


        </div>


      </section>






      {/* ================= CATEGORY SECTION ================= */}



      <section className="max-w-7xl mx-auto px-6 py-20 bg-white dark:bg-gray-950">


        <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">
          Shop By Category
        </h2>



        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">


          {
            categories.map((category)=>(

              <CategoryCard

                key={category.id}

                title={category.title}

                image={category.image}

              />

            ))
          }


        </div>


      </section>






      {/* ================= FEATURED PRODUCTS ================= */}



      <section className="bg-gray-50 dark:bg-gray-900 py-20">


        <div className="max-w-7xl mx-auto px-6">


          <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">

            Featured Products

          </h2>




          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">


            {
              products.slice(0, 4).map((product) => (


                <ProductCard

                  key={product.id}

                  product={product}

                />


              ))
            }


          </div>


        </div>


      </section>




    </>

  )

}


export default Home;