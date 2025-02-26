import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "./AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const username = e.target.uName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log("Username:",username, "\nEmail:", email, "\nPassword:", password);

    createUser(email, password)
    .then((result)=>{
      console.log(result.user);
    }).catch((error)=>{
      console.log("ERROR:", error)
    })
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content w-[70%] mx-auto">
        <div className="card bg-base-100 border border-blue-700 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-4xl font-bold text-center mt-2">SignUp</h1>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Username"
                name="uName"
                className="input input-bordered"
                required
              />
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-info w-full">SignUp</button>
            </div>
          </form>
          <div className="ms-8 mb-6">
            <>
              Already have an account?
              <Link to={"/login"} className="text-blue-400 underline">
                Login
              </Link>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
