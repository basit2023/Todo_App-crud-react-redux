import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../reducers/userReducer.js';

const Update = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const users = useSelector((state) => state.users);
    console.log("the user is befor id",users)
    const existingUser = users.filter(user => user.id == id);
    console.log("the exiting user is:",existingUser[0])
    const { name, email } = existingUser[0];
    const [uname, setName] = useState(name);
    const [uemail, setEmail] = useState(email);

    const handleUpdate= (e) => {
        e.preventDefault();
        dispatch(updateUser({ id:id, name:uname, email:uemail }));
        navigate('/');
    };

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h1>Update User</h1>
                <form onSubmit={handleUpdate}>
                    <div className='mb-3'>
                        <label htmlFor='name' className='form-label'>Name</label>
                        <input type='text' name='name' value={uname} onChange={e => setName(e.target.value)} className='form-control' placeholder='enter name' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>Email</label>
                        <input type='email' name='email' value={uemail} onChange={e => setEmail(e.target.value)} className='form-control' placeholder='enter email' />
                    </div>
                    <div className='mb-3'>
                        <button className='btn btn-info'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;
