import React, { Component } from 'react'

import Swal from 'sweetalert2';


export default class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {}
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(
      { [name]: value },
      () => this.validateField(name, value) // validate after setting value
    );
  };

  validateField = (field, value) => {
    const error = { ...this.state.error };

    if (field === 'email') {
      if (!value.trim()) {
        error.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        error.email = 'Email is invalid';
      } else {
        delete error.email;
      }
    }

    if (field === 'password') {
      if (!value.trim()) {
        error.password = 'Password is required';
      } else if (value.length < 6) {
        error.password = 'Password must be at least 6 characters';
      } else {
        delete error.password;
      }
    }

    this.setState({ error });
  };

  handleLogin = () => {
    const { email, password, error } = this.state;
    if (Object.keys(error).length === 0 && email && password) {
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: `Welcome, ${email}!`,
        confirmButtonColor: '#3085d6',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Validation Failed',
        text: 'Please fix the errors before continuing.',
        confirmButtonColor: '#d33',
      });
    }
  };


  render() {
    const { email, password, error } = this.state;
    return (
      <>
         <ToastContainer />
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div>
               <div className='text-2xl font-bold text-blue-400'>Ecommerce</div>
            </div>

            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Login</h1>

              <div className="w-full flex-1 mt-8">
                

                {/* Email Field */}
                <div className="mx-auto max-w-xs">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    placeholder="Email"
                    className="w-full px-8 py-4 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  />
                  {error.email && (
                    <p className="text-red-500 text-xs mt-1">{error.email}</p>
                  )}

                  {/* Password Field */}
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    placeholder="Password"
                    className="w-full px-8 py-4 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm mt-5 focus:outline-none focus:border-gray-400 focus:bg-white"
                  />
                  {error.password && (
                    <p className="text-red-500 text-xs mt-1">{error.password}</p>
                  )}

                  {/* Login Button */}
                  <button
                    onClick={this.handleLogin}
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Login</span>
                  </button>

                  <p className="mt-6 text-xs text-gray-600 text-center">
                    I agree to abide by templatana's{' '}
                    <a href="#" className="border-b border-gray-500 border-dotted">
                      Terms of Service
                    </a>{' '}
                    and its{' '}
                    <a href="#" className="border-b border-gray-500 border-dotted">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Illustration */}
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')"
              }}
            />
          </div>
        </div>
      </div>
        {/* <div className='shadow-md p-4'> 
          <div className='text-lg '>Register</div>
          
           <input
            type="email"
            name='email'
            placeholder="Enter your email"
            value={email}
            onChange={this.handleChange}
            className="w-full mb-4 px-3 py-2 border-b border-gray-400 focus:outline-none focus:border-blue-500"
          />
           {error.email && <p className="text-red-500 text-sm mb-3">{error.email}</p>}

          
          <input
            type="password"
            name='password'
            value={password}
            onChange={this.handleChange}
            placeholder="Enter your password"
            className="w-full mb-4 px-3 py-2 border-b border-gray-400 focus:outline-none focus:border-blue-500"
          />
          {error.password && <p className="text-red-500 text-sm mb-3">{error.password}</p>}

        
          <button onClick={this.handleLogin} className="w-full mt-2 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300">
            Login
          </button>
        </div> */}
      </>
    )
  }
}
