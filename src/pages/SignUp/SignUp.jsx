import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {createUser, logOut} = useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photoURL');
        const email = form.get('email');
        const password = form.get('password');

        const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if(!passwordValidation.test(password)){
            Swal.fire({
                icon: "warning",
                title: "Password required minimum six characters, at least one uppercase and one lowercase letter and one special",
                showConfirmButton: false,
                timer: 2000
              });
            return;
        }

        // create user
        createUser(email, password)
        .then(result =>{
            console.log(result.user);
            Swal.fire({
                icon: "success",
                title: "User Created Successfully",
                showConfirmButton: false,
                timer: 2000
              });
              logOut();
            // update profile
            updateProfile(result.user,{
                displayName: name,
                photoURL: photo
            })
            .then(result =>{
                console.log(result.user);
            })
            .catch(error =>{
                console.error(error);  
            })

        })
        .catch(error => {
            console.error(error);
            Swal.fire("User already registered", "", "warning");
        })
    } 

  return (
    <>
      <div
        className="hero min-h-screen mt-16 md:py-20"
        style={{
          backgroundImage: "url(https://i.ibb.co/rMZKdBw/12188678-4907157.jpg)",
        }}
      >
        <div className="hero-content flex-col md:flex-row-reverse shadow-xl rounded-lg shadow-gray-400">
          <div className="text-center md:w-1/2 lg:text-left">
            <img
              src="https://i.ibb.co/rv4Lg48/5202813-Mobile-removebg-preview.png"
              alt="login"
            />
          </div>
          <div className="card md:w-1/2 max-w-sm">
            <h1 className="text-5xl text-center pt-3 font-bold">Sign Up</h1>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="Enter photo url"
                  className="input input-bordered"
                />               
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                />               
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative input input-bordered">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="pt-2"
                  required
                />
                <span
                  className="absolute top-3 right-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                </div>
              </div>
              <div className="form-control mt-2">
                <input
                  className="btn bg-green-400 w-1/2 mx-auto text-white text-xl font-extrabold "
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center text-green-600 text-xl font-medium">
              <small>
                Already registered?
                <Link to="/login" className="font-extrabold">
                  Go to Login
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
