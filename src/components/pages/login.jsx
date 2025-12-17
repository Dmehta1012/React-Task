import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const Login = () => {
  // Validation schema
  const schema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FAF8F5]">
      <div className="w-96 border-2 border-gray-300 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">

        {/* Header */}
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-4xl font-bold">Welcome Back</h1>
          <p className="text-gray-500 mt-1">Login Page</p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Username */}
          <div className="flex flex-col gap-1">
            <label>Username</label>
            <input
              type="text"
              placeholder="name"
              className="border-2 p-2 rounded-2xl outline-none focus:border-black"
              {...register("username")}
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1 mt-3">
            <label>Password</label>
            <input
              type="password"
              placeholder="password"
              className="border-2 p-2 rounded-2xl outline-none focus:border-black"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Forgot Password */}
          <div className="text-right mt-2">
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-black hover:underline transition"
            >
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-[#F3EFEA] text-black px-6 py-2 rounded-2xl text-lg font-semibold
                hover:bg-[#3B3B3B] hover:text-white transition w-full"
            >
              Login
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="flex items-center my-5">
          <div className="flex-1 h-px bg-gray-300"></div>
          <p className="px-3 text-sm text-gray-500">OR</p>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Login with Google */}
        <button
          className="w-full flex items-center justify-center gap-3 border-2 border-gray-300 py-2 rounded-2xl
          hover:bg-gray-100 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="font-medium">Login with Google</span>
        </button>

      </div>
    </div>
  );
};

export default Login;
