import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const {user, createUser} = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        if(password.length <6){
            toast.error('Password Must Contain 6 charachter at least');
            return;
        }
        createUser(email,password).then(result => {
            toast.success('Registration Success')
            form.reset();
        }).catch(error => {
            console.log(error.message);
            toast.error('Registration Failed')
        })
    }
    return (
        <div className="my-container">
        <div className=" w-full hero min-h-screen bg-base-200">
          <div className="w-[50%] hero-content flex-col ">
            <div className="text-center ">
              <h1 className="text-5xl font-bold">Register now!</h1>
              
            </div>
            <div className="card shrink-0 w-full shadow-2xl bg-base-100">
              <form className="card-body" onSubmit={handleRegister}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
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
                    name="password"
                    placeholder="password"
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
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
                <p className="text-center text-xl">
                  Already have an account?{" "}
                  <span className="text-blue-500">
                    <Link to="/login">Login Here</Link>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;