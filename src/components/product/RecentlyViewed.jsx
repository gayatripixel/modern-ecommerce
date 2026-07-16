import useRecentStore from "../../store/recentStore";
import { useNavigate } from "react-router-dom";

function RecentlyViewed() {

  const navigate = useNavigate();

  const recentProducts = useRecentStore(
    (state) => state.recentProducts
  );

  if (recentProducts.length === 0) return null;

  return (

    <section className="mt-24">

      <h2 className="
      text-3xl
      font-bold
      mb-8
      text-black
      dark:text-white
      ">

        Recently Viewed

      </h2>

      <div className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-5
      gap-8
      ">

        {

          recentProducts.map((product)=>(

            <div
              key={product.id}
              className="
              bg-white
              dark:bg-gray-900
              rounded-3xl
              shadow-lg
              border
              border-gray-200
              dark:border-gray-800
              overflow-hidden
              hover:shadow-xl
              transition
              "
            >

              <img
                src={product.image}
                alt={product.title}
                className="
                h-60
                w-full
                object-contain
                p-6
                bg-white
                "
              />

              <div className="p-5">

                <h3 className="
                font-semibold
                line-clamp-2
                text-black
                dark:text-white
                ">

                  {product.title}

                </h3>

                <p className="
                mt-3
                font-bold
                text-xl
                text-black
                dark:text-white
                ">

                  ₹{product.price}

                </p>

                <button

                  onClick={()=>{
                    window.scrollTo(0,0);
                    navigate(`/product/${product.id}`);
                  }}

                  className="
                  mt-5
                  w-full
                  bg-black
                  dark:bg-white
                  text-white
                  dark:text-black
                  py-3
                  rounded-full
                  hover:scale-105
                  transition
                  "

                >

                  View Again

                </button>

              </div>

            </div>

          ))

        }

      </div>

    </section>

  );

}

export default RecentlyViewed;