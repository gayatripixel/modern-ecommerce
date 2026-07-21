function Loader() {
  return (
    <section className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gray-50
      dark:bg-gray-950
    ">
      <div className="flex flex-col items-center gap-5">

        <div
          className="
          w-16
          h-16
          border-4
          border-gray-300
          border-t-black
          dark:border-gray-700
          dark:border-t-white
          rounded-full
          animate-spin
        "
        />

        <p className="
          text-lg
          font-medium
          text-gray-600
          dark:text-gray-300
        ">
          Loading...
        </p>

      </div>
    </section>
  );
}

export default Loader;