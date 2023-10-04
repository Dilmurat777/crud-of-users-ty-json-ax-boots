import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Create = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!values.first_name || !values.last_name || !values.email || !values.phone) {
      alert('Please fill out all fields')
			return; 
    }

    axios
      .post('http://localhost:8000/users', values)
      .then(() => {
        navigate('/');
      })
      .then((err) => console.log(err));
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 vh-100 bg-light">
      <div className="w-50 border rounded bg-dark text-white shadow px-5 pb-5 pt-3">
        <h1>Add a User</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name">First name:</label>
            <input
              className="form-control"
              name="first_name"
              type="text"
              placeholder="Enter first name"
              onChange={(e) => setValues({ ...values, first_name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="name">Last name:</label>
            <input
              className="form-control"
              name="surname"
              type="text"
              placeholder="Enter last name"
              onChange={(e) => setValues({ ...values, last_name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="name">Email:</label>
            <input
              className="form-control"
              name="email"
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="name">Phone:</label>
            <input
              className="form-control"
              name="phone"
              type="number"
              placeholder="Enter phone"
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </div>
          <div className="d-flex gap-3 mt-4">
            <button className="btn btn-warning">Submit</button>
            <Link to={'/'} className="btn btn-info">
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
