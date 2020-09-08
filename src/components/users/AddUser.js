import React, { useState } from "react";
import axios from 'axios'
import style from "./style.css"
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
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

  const { location, address1,suite,address2,city,state,zipcode, phone, time, facility,appointment } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/");
  };
  return (
           
           <div className="container" >
      <div  className="w-75 mx-auto shadow p-5">
        <h2 style={{color:"darkblue"}}>Add Locations</h2>
        <form onSubmit={e => onSubmit(e)} id="bootstrap-overrides">
           
        <div  className="form-row">
            <div class="form-group col-md-12">
              <label for="inputEmail4">Location Name</label>
            <input
              type="text"
              className="form-control form-control-lg"
              name="location"
              id="name"
              value={location}
              onChange={e => onInputChange(e)}
            />
            </div>
          </div>


            <div className="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Address Line 1</label>
            <input
              type="text"
              className="form-control form-control-lg"
              name="address1"
              id="name"
              value={address1}
              onChange={e => onInputChange(e)}
            />
            </div>

            <div class="form-group col-md-6">
              <label for="inputEmail4">Suite No</label>
            <input
              type="text"
              className="form-control form-control-lg"
              name="suite"
              id="name"
              value={suite}
              onChange={e => onInputChange(e)}
            />
            </div>
          </div>

          <div className="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Address Line 2</label>
            <input
              type="text"
              className="form-control form-control-lg"
              name="address2"
              value={address2}
              id="name"
              onChange={e => onInputChange(e)}
            />
            </div>

            <div class="form-group col-md-3">
              <label for="inputEmail4">City </label>
            <input
              type="text"
              className="form-control form-control-lg"
              name="city"
              value={city}
              id="name"
              onChange={e => onInputChange(e)}
            />
            </div>

            <div class="form-group col-md-3">
              <label for="inputEmail4">State</label>
            <input
              type="text"
              className="form-control form-control-lg"
              name="state"
              id="name"
              value={state}
              onChange={e => onInputChange(e)}
            />
            </div>
          </div>


          <div className="form-row">
            <div class="form-group col-md-3">
              <label for="inputEmail4">Zip Code</label>
            <input
              type="text"
              className="form-control form-control-lg"
              name="zipcode"
              id="name"
              value={zipcode}
              onChange={e => onInputChange(e)}
            />
            </div>

            <div class="form-group col-md-3">
              <label for="inputEmail4">Phone Number</label>
            <input
              type="text"
              className="form-control form-control-lg"
              name="phone"
              id="name"
              value={phone}
              onChange={e => onInputChange(e)}
            />
            </div>

            <div class="form-group col-md-6">
              <label for="inputEmail4">Time Zone</label>
            <input
              type="text"
              className="form-control form-control-lg"
              name="time"
              id="name"
              value={time}
              onChange={e => onInputChange(e)}
            />
            </div>
          </div>

          <div className="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Facility Times</label>
            <input
              type="text"
              className="form-control form-control-lg"
              name="facility"
              id="name"
              value={facility}
              onChange={e => onInputChange(e)}
            />
            </div>

            <div class="form-group col-md-6">
              <label for="inputEmail4">Appointment Pool</label>
            <input
              type="text"
              className="form-control form-control-lg"
              name="appointment"
              id="name"
              value={appointment}
              onChange={e => onInputChange(e)}
            />
            </div>
          </div>
          
          


          <button style={{marginLeft:"2px"}} className="btn btn-info btn-md float-right">Save</button>
          <button disabled={true} className="btn btn-danger btn-md float-right">Cancel</button>
          
        </form>
      </div>
    </div>
  );
};

export default AddUser;
