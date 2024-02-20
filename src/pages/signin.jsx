/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [data,setdata]=useState({ 
    email:"",
    password:""
  });
  const navigate= useNavigate();

  const handlechange=(event)=>{
    const {name,value} = event.target
    console.log(name)
    console.log(value)
    setdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  //{email: 'soso@gmail.com', password: 'koko'}
  const handleclick = (event) => {
    event.preventDefault();
    console.log('click');
    console.log(data);
    if(data.email==='koko@gmail.com'&& data.password==='koko'){
      console.log('Admin')
      navigate('/AddRecpie ')
    }
    // email==='soso@gmail.com',password==='soso'
    else if(data.email==='soso@gmail.com'&& data.password==='soso'){
        console.log('User');
        navigate('/Home')
    }else{
        console.log("Geust")
    }
  }; 
  
  return (
    <section className="text-center text-lg-start">
    <style>
      {`
      .cascading-right {
        margin-right: -50px;
      }

      @media (max-width: 991.98px) {
        .cascading-right {
          margin-right: 0;
        }
      }
      .btngreen{
        color:#198754
      }
      `}
    </style>

    {/* Jumbotron */}
    <div className="container py-4">
      <div className="row g-0 align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <div className="card cascading-right" style={{
            background: 'hsla(0, 0%, 100%, 0.55)',
            backdropFilter: 'blur(30px)',
          }}>
            <div className="card-body p-5 shadow-5 text-center">
              <h2 className="fw-bold mb-5 btngreen">Sign up</h2>
              <form onSubmit={handleclick}>

                {/* 2 column grid layout with text inputs for the first and last names */}
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1" className="form-control" placeholder="First name"/>
                      <label className="form-label" htmlFor="form3Example1" ></label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example2" className="form-control" placeholder="last name"/>
                      <label className="form-label" htmlFor="form3Example2"></label>
                    </div>
                  </div>
                </div>

                {/* Email input */}
                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3" className="form-control" name='email' placeholder="Email address" onChange={handlechange} />
                  <label className="form-label" htmlFor="form3Example3"></label>
                </div>

                {/* Password input */}
                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4" className="form-control" name='password' placeholder="Password" onChange={handlechange} />
                  <label className="form-label" htmlFor="form3Example4"></label>
                </div>


                {/* Submit button */}
                <button type="submit" className="btn btn-success btn-block mb-4" >
                  Sign up
                </button>

                {/* Register buttons */}
                <div className="text-center">
                  <p>or sign up with:</p>
                  <button type="button" className=" btn btn-link btn-floating mx-1 ">
                    <a href="https://www.facebook.com/login/">
                      <i className="fab fa-facebook-f btngreen"></i>
                    </a>
                  </button>

                  <button type="button" className="  btn btn-link btn-floating mx-1">
                    <i className="fab fa-google btngreen"></i>
                  </button>

                  <button type="button" className="  btn btn-link btn-floating mx-1 " >
                    <a href='https://twitter.com/i/flow/login?lang=en'>
                    <i className="fab fa-twitter btngreen"></i></a>
                  </button>

                  
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mb-5 mb-lg-0">
          <img src="images/5.jpg" className='w-75'
            alt=" spon photo" />
        </div>
      </div>
    </div>
    {/* Jumbotron */}
  </section>
  );
};

export default Signin;
