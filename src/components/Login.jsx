import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [show, seTshow] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        toast.success('Logged in succesfully');
        form.reset();
        navigate(from, {replace : true})
      })
      .catch((error) => {
        console.log(error.message);
        toast.error('Login failed');
      });
  };
  return (
    <div className='my-container'>
      <div className=' w-full hero min-h-screen bg-base-200'>
        <div className='w-[50%] hero-content flex-col '>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold'>Login now!</h1>
          </div>
          <div className='card shrink-0 w-full shadow-2xl bg-base-100'>
            <form className='card-body' onSubmit={handleLogin}>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  name='email'
                  placeholder='email'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type={show ? 'text' : 'password'}
                  name='password'
                  placeholder='password'
                  className='input input-bordered'
                  required
                />
                <p onClick={()=> seTshow(!show)}>
                  <small>
                    {
                      show ? 'Hide Password' : 'Show Password'
                    }
                  </small>
                </p>
                <label className='label'>
                  <a href='#' className='label-text-alt link link-hover'>
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className='form-control mt-6'>
                <button type='submit' className='btn btn-primary'>
                  Login
                </button>
              </div>
              <p className='text-center text-xl'>
                New here ? please{' '}
                <span className='text-blue-500'>
                  <Link to='/register'>Register</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
