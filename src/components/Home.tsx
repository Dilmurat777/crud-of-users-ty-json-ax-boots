import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: number;
}

const Home = () => {
  const [data, setData] = useState<IUser[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/users')
      .then((res) => setData(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (idToDelete: number) => {
    const confirmDelete = window.confirm("Would you like to delete a user");
    if (confirmDelete) {
      axios
        .delete(`http://localhost:8000/users/${idToDelete}`)
        .then(() => {
          // Обновить данные после удаления пользователя
          axios.get('http://localhost:8000/users')
            .then((res) => {
              setData(res.data);
            })
            .catch((err: any) => {
              console.log(err);
            });
        })
        .catch((err: any) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1>List of Users</h1>
      <div className="w-75 bg-dark p-5 border rounded shadow">
        <div className="d-flex justify-content-end">
          <Link to={'/create'} className="btn btn-info mb-2">
            +Add
          </Link>
        </div>
        <Table striped bordered variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, id) => (
              <tr key={id}>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td className="d-flex gap-3">
                  <Link to={`/read/${item.id}`} className="btn btn-primary">Read</Link>
                  <Link to={`/update/${item.id}`} className="btn btn-success">Edit</Link>
                  <button onClick={() => handleDelete(item.id)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );

};

export default Home;
