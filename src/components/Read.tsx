import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'


const Read = () => {
  const { id } = useParams()
  const [data, setData] = useState({
		first_name: '',
		last_name: '',
		email: '',
		phone: '',
	})

  useEffect(() => {
    axios
      .get(`http://localhost:8000/users/${id}`)
      .then(res => setData(res.data))
      .then(err => console.log(err))
  }, [id])

  return (
    <div className='d-flex flex-column justify-content-center align-items-center w-100 vh-100'>
      <div className='w-50 border rounded bg-dark text-white shadow px-5 pb-5 pt-3'>
        <h1>Details of User</h1>

        <div className='mb-2'>
          <div><strong>First name:</strong> {data.first_name}</div>
        </div>
        <div className='mb-2'>
          <div><strong>Last name:</strong> {data.last_name}</div>
        </div>
        <div className='mb-2'>
          <div><strong>Email:</strong> {data.email}</div>
        </div>
        <div className='mb-2'>
          <div><strong>Phone:</strong> {data.phone}</div>
        </div>
        <div className='d-flex gap-3 mt-4'>
          <Link to={`/update/${id}`} className='btn btn-warning'>
            Edit
          </Link>
          <Link to={'/'} className='btn btn-info'>
            Back
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Read
