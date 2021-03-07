import React,{useState} from 'react';
import {Link} from 'react-router-dom'
const Login = () => {
    return (
     
        <div>
           <center>
           <div className="row">
    <div className="col s12 m7">
      <div className="card">
        <h1>Login</h1>
        <h4>Blogify</h4>
        <div className="card-content">
        <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate"/>
          <label for="email">Email</label>
          </div>
          <div className="input-field col s12">
          <input id="email" type="password" className="validate"/>
          <label for="email">password</label>
          </div>
      </div>
      <button class="btn waves-effect waves-light" type="submit" name="action">Login
  
  </button>
  <h5><Link to='/signup'>New  Account</Link></h5>
    </form>
  </div>
        </div>
        <div className="card-action">
       
        </div>
      </div>
    </div>
  </div>
            
  </center>
        </div>
    );
};

export default Login;