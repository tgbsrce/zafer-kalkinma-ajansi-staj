import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  const removeUser = (id) => {
    let requestOptions = {
      method: "DELETE",
    };
    
    fetch("https://jsonplaceholder.typicode.com/users/" + id, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        let newUsers = users.filter((q) => q.id !== id);
        setUsers(newUsers);
      });
  };

  return (
    <>
      <div className="mt-5"></div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((item, key) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>
                    <button className="btn btn-secondary" onClick={() => removeUser(item.id)}>Remove</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
}

export default UserList;
