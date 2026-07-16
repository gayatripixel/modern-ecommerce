function CategoryCard({ title, image }) {

  return (

    <div className="group cursor-pointer">

      <div className="overflow-hidden rounded-2xl">

        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
        />

      </div>


      <h3 className="mt-4 text-xl font-semibold text-center">
        {title}
      </h3>


    </div>

  )

}


export default CategoryCard;