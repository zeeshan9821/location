import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col"><b>#</b></th>
              <th scope="col"><b>Location Name</b></th>
              <th scope="col"><b>Address</b></th>
              <th scope="col"><b>Phone Number</b></th>
              <th scope="col"><b>Time Zone</b></th>
              <th scope="col"><b>Facility Times</b></th>
              <th scope="col"><b>Appointment Pool</b></th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                
                <th scope="row">{index + 1}</th>
                
                <td><h5>{user.location}</h5></td>
                <td><h5>{user.address1} {user.suite} <br></br>{user.address2} {user.city} <br></br>{user.state} {user.zipcode} </h5></td>
                <td><h5>{user.phone}</h5></td>
                <td><h5>{user.time}</h5></td>
                <td><h5>{user.facility}</h5></td>
                <td><h5>{user.appointment}</h5></td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
