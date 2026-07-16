import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import useAuthStore from "../store/authStore";

function Register() {

const register = useAuthStore(
(state)=>state.register
);

const login = useAuthStore(
(state)=>state.login
);

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {

    setForm({

      ...form,

      [e.target.name]: e.target.value

    });

  };

const handleSubmit = (e) => {

e.preventDefault();


if(
!form.name ||
!form.email ||
!form.password ||
!form.confirmPassword
){

toast.error("Please fill all fields");
return;

}



if(form.password.length < 6){

toast.error("Password must be at least 6 characters");
return;

}



if(form.password !== form.confirmPassword){

toast.error("Passwords do not match");
return;

}



setLoading(true);



setTimeout(()=>{


const success = register({

name: form.name,
email: form.email,
password: form.password

});



if(success){


login(
form.email,
form.password
);


toast.success(
`Welcome ${form.name} 🎉`
);


navigate("/");


}
else{


toast.error(
"Email already registered"
);


}



setLoading(false);



},1000);



};

  return (

    <section
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gray-50
      dark:bg-gray-950
      px-6
      py-10
    "
    >

      <form
        onSubmit={handleSubmit}
        className="
        w-full
        max-w-md
        bg-white
        dark:bg-gray-900
        rounded-3xl
        shadow-2xl
        border
        border-gray-200
        dark:border-gray-800
        p-8
      "
      >

        <h1
          className="
          text-4xl
          font-bold
          text-center
          text-black
          dark:text-white
        "
        >
          Create Account
        </h1>

        <p
          className="
          text-center
          text-gray-500
          dark:text-gray-400
          mt-2
          mb-8
        "
        >
          Join Nexora today 🚀
        </p>

        <input

          name="name"

          placeholder="Full Name"

          value={form.name}

          onChange={handleChange}

          className="
          w-full
          px-5
          py-3
          rounded-xl
          border
          mb-4
          bg-white
          dark:bg-gray-800
          dark:text-white
          dark:border-gray-700
          outline-none
          focus:ring-2
          focus:ring-black
        "

        />

        <input

          type="email"

          name="email"

          placeholder="Email"

          value={form.email}

          onChange={handleChange}

          className="
          w-full
          px-5
          py-3
          rounded-xl
          border
          mb-4
          bg-white
          dark:bg-gray-800
          dark:text-white
          dark:border-gray-700
          outline-none
          focus:ring-2
          focus:ring-black
        "

        />

        <div className="relative mb-4">

          <input

            type={showPassword ? "text" : "password"}

            name="password"

            placeholder="Password"

            value={form.password}

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
            dark:border-gray-700
            outline-none
            focus:ring-2
            focus:ring-black
          "

          />

          <button

            type="button"

            onClick={() =>
              setShowPassword(!showPassword)
            }

            className="
            absolute
            right-4
            top-3
            text-sm
            text-gray-500
          "

          >

            {showPassword ? "Hide" : "Show"}

          </button>

        </div>

        <div className="relative">

          <input

            type={
              showConfirmPassword
                ? "text"
                : "password"
            }

            name="confirmPassword"

            placeholder="Confirm Password"

            value={form.confirmPassword}

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
            dark:border-gray-700
            outline-none
            focus:ring-2
            focus:ring-black
          "

          />

          <button

            type="button"

            onClick={() =>
              setShowConfirmPassword(
                !showConfirmPassword
              )
            }

            className="
            absolute
            right-4
            top-3
            text-sm
            text-gray-500
          "

          >

            {showConfirmPassword ? "Hide" : "Show"}

          </button>

        </div>

        <button

          disabled={loading}

          className="
          mt-8
          w-full
          bg-black
          dark:bg-white
          text-white
          dark:text-black
          py-3
          rounded-xl
          font-semibold
          hover:scale-105
          transition
          disabled:opacity-50
        "

        >

          {

            loading

              ?

              "Creating Account..."

              :

              "Create Account"

          }

        </button>

        <p
          className="
          mt-6
          text-center
          text-gray-600
          dark:text-gray-400
        "
        >

          Already have an account?

          <Link

            to="/login"

            className="
            ml-2
            font-semibold
            text-black
            dark:text-white
          "

          >

            Login

          </Link>

        </p>

      </form>

    </section>

  );

}

export default Register;