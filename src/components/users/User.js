import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    location: "",
    address1: "",
    suite:"",
    address2:"",
    city:"",
    state:"",
    zipcode:"",
    phone: "",  
    time: "",
    facility: "",
    appointment:""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4 "><b>User Id:</b><span style={{color:"green"}}>{id}</span></h1>
      
      <ul className="list-group-item w-50">
        <li  className="list-group-item list-group-item-primary"><b>Location:</b> {user.location}</li>
        <li className="list-group-item list-group-item-danger"><b>Address1:</b> {user.address1}</li>
        <li className="list-group-item list-group-item-success"><b>Suite No:</b> {user.suite}</li>
        <li className="list-group-item list-group-item-secondary"><b>Address2:</b> {user.address2}</li>
        <li className="list-group-item list-group-item-warning"><b>City: </b>{user.city}</li>
        <li className="list-group-item list-group-item-info"><b>State: </b>{user.state}</li>
        <li className="list-group-item list-group-item-light"><b>Zip Code:</b> {user.zipcode}</li>
        <li className="list-group-item list-group-item-dark"><b>Phone Number:</b> {user.phone}</li>
        <li className="list-group-item list-group-item-primary"><b>Time Zone: </b>{user.time}</li>
        <li className="list-group-item list-group-item-success"><b>Facility: </b>{user.facility}</li>
        <li className="list-group-item list-group-item-danger"><b>Appointment:</b> {user.appointment}</li>
      </ul>
    </div>
  );
};

export default User;
