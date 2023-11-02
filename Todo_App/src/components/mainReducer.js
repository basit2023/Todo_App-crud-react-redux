import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../reducers/userReducer.js';
const MainReducer = () => {
  const users = useSelector((state) => state.users); 
  console.log("the user value is :",users);
  const dispatch=useDispatch()
  const handleDelete=(id)=>{
      dispatch(deleteUser({id:id}))//dispatch to store
  }
  return (
    <div className="container">
      <h2>Crud APP with JSON Server</h2>
      <Link to='/create' className="btn btn-success my-3">Create +</Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {users.map((user,index)=>{
                return (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                      <button onClick={()=>handleDelete(user.id)} className='btn btn-sm btn-danger sm-2'>Delete</button>
                    </td>
                  </tr> //this is iiii
                )
            })}
        </tbody>
      </table>
    </div>
  );
};

export default MainReducer;
