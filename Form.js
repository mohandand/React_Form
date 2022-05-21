import React from 'react';
import './styles.css';

export default function Form() {
  return (
    <div className="formcontainer">
      <div className="container">
        <div className="title">Registration</div>
        <form action="#">
          <div className="userdatails">
            <div className="inputbox">
              <span className="details">FullName</span>
              <input type="text" placeholder="Enter your fullName" required />
            </div>
            <div className="inputbox">
              <span className="details">UserName</span>
              <input type="text" placeholder="Enter your username" required />
            </div>
            <div className="inputbox">
              <span className="details">Email</span>
              <input type="text" placeholder="Enter your email" required />
            </div>
            <div className="inputbox">
              <span className="details">PhoneNumber</span>
              <input type="text" placeholder="Enter your number" required />
            </div>
            <div className="inputbox">
              <span className="details">Password</span>
              <input type="text" placeholder="Enter your password" required />
            </div>
            <div className="inputbox">
              <span className="details">Confirm Password</span>
              <input type="text" placeholder="Confirm your password" required />
            </div>
            <div className="button">
              <input type="submit" value="Register" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
