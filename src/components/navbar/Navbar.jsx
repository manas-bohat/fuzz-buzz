import * as React from 'react';
import { Link } from "react-router-dom";
import "./navbar.css"

//  activities, register, home, profile, logout
// style={{textDecoration: "none"}}
export default function Navbar() {
//   const user = JSON.parse(localStorage.getItem('user'));
  const user = false;
//   var mobile;
//   if(user) {
//     mobile = user.data.user.mobile;
//   }

  // const user = JSON.parse(localStorage.getItem('user')).data.user.mobile;
  // if(user) { console.log(mobile); }

//   const handleLogout = async (e) => {
//     localStorage.removeItem('user');
//     window.location.replace("/");
//   }

  if(user) {
    return <div className='top'>
        <Link className="topLeft" to="/login"><div>LOGIN</div></Link>
        <Link className="topLeft" to="/register"><div>REGISTER</div></Link>
    </div>
  } else {
  return (
    <div className='top'>
      <Link className="topLeft" to="/login"><div>LOGIN</div></Link>
      <Link className="topRight" to="/register"><div>REGISTER</div></Link>
    </div>
    )
  }
}


