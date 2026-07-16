import useWishlistStore from "../store/wishlistStore";
import ProductCard from "../components/product/ProductCard";
import { Link } from "react-router-dom";


function Wishlist() {


  const wishlist = useWishlistStore(
    (state) => state.wishlist
  );


  return (

    <section 
      className="
      max-w-7xl 
      mx-auto 
      px-6 
      py-20
      bg-gray-50 
      dark:bg-gray-950
      min-h-screen
      "
    >


      {/* Heading */}

      <div className="mb-12">


        <h1 
          className="
          text-4xl 
          md:text-5xl 
          font-extrabold
          text-black
          dark:text-white
          "
        >

          My Wishlist ❤️

        </h1>


        <p 
          className="
          mt-3
          text-gray-500
          dark:text-gray-400
          "
        >

          Save your favorite products and buy them anytime.

        </p>


      </div>




      {
        wishlist.length === 0 ?


        (

          <div 
            className="
            flex
            flex-col
            items-center
            justify-center
            py-32
            bg-white
            dark:bg-gray-900
            rounded-3xl
            shadow
            border
            border-gray-200
            dark:border-gray-800
            "
          >


            <div className="text-6xl mb-6">
              💔
            </div>


            <h2
              className="
              text-3xl
              font-bold
              text-black
              dark:text-white
              "
            >

              Your Wishlist is Empty

            </h2>


            <p
              className="
              mt-3
              text-gray-500
              dark:text-gray-400
              text-center
              "
            >

              Add products you love and they will appear here.

            </p>



            <Link

              to="/products"

              className="
              mt-8
              bg-black
              dark:bg-white
              text-white
              dark:text-black
              px-8
              py-3
              rounded-full
              hover:scale-105
              transition
              "

            >

              Explore Products

            </Link>



          </div>


        )


        :


        (

          <div>


            <div 
              className="
              mb-8
              flex
              justify-between
              items-center
              "
            >

              <p
                className="
                text-gray-600
                dark:text-gray-300
                "
              >

                {wishlist.length} 
                {" "}
                {wishlist.length === 1 ? "Product" : "Products"} saved

              </p>


            </div>




            <div
              className="
              grid
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              gap-8
              "
            >


              {
                wishlist.map((product)=>(


                  <ProductCard

                    key={product.id}

                    product={product}

                  />


                ))
              }


            </div>


          </div>


        )


      }



    </section>

  )

}


export default Wishlist;