import React from 'react';
import {Link} from 'react-router-dom'
const Signup = () => {
    return (
        <div>
            <center>
   <div className="row">
    <div className="col s12 m7">
      <div className="card">
        <h1>Signup</h1>
        <h4>Blogify</h4>
        <div className="card-content">
        <div className="row">
    <form className="col s12">
      <div className="row">
      <div className="input-field col s12">
          <input id="text" type="text" className="validate"/>
          <label for="Name">Name</label>
          </div>
        <div className="input-field col s12">
          <input id="email" type="email" className="validate"/>
          <label for="email">Email</label>
          </div>
          <div className="input-field col s12">
          <input id="password" type="password" className="validate"/>
          <label for="password">Password</label>
          </div>
      </div>
      <button class="btn waves-effect waves-light" type="submit" name="action">Signup
  
  </button>
  <h5><Link to='/login'>Aleardy Have an  Account</Link></h5>
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

export default Signup;