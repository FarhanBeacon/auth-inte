import { Link } from "react-router";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log("Email:", email, "\nPassword:", password);
  };
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content w-[70%] mx-auto">
          <div className="card bg-base-100 border border-blue-700 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-4xl font-bold text-center mt-2">Login now</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-info w-full">Login</button>
              </div>
            </form>
            <div className="ms-8 mb-6">
              <>
                Create a new account,
                <Link to={"/signUp"} className="text-blue-400 underline">
                  SignUp
                </Link>
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
