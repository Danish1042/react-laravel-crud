import React from 'react'
import { useState } from 'react'
import http from '../http';
import { useNavigate } from 'react-router-dom';

export default function Create() {


 const navigate = useNavigate();

 const [inputs, setInputs] = useState([]);

 const handleChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  
    setInputs(values=>({
      ...values,
      [name]:value,
    }));

 }

 const submitForm = () => {
  http.post('/users', inputs).then(res => {
    navigate('/');
  })
 }

  return (
    <div>
      <h3>New User</h3>
      <div className="row"> 
        <div className="col-sm-6 justify-content-center">
            <div className="card p-4">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" className='form-controll mb-2' value={inputs.name || ''} onChange={handleChange} />
             
            <label htmlFor="name">Email</label>
            <input type="text" name="email" id="email" className='form-controll mb-2' value={inputs.email || ''} onChange={handleChange} />

            <label htmlFor="name">Password</label>
            <input type="password" name="password" id="password" className='form-controll mb-2' value={inputs.password || ''} onChange={handleChange} />
            
            <button type='submit' onClick={submitForm} className='btn btn-info mt-2'>Create</button>
            </div>

        </div>
      </div>
    </div>
  )
}
