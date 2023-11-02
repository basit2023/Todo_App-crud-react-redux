import React, { useState } from 'react';
import { userAdd } from '../reducers/userReducer.js';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate=useNavigate()
    const users = useSelector((state) => state.users);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(userAdd({ id: users[users.length - 1].id + 1, name, email }));
        navigate('/')
    }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h1>Add New User</h1>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name' className='form-label'>Name</label>
                        <input type='text' name='name' value={name} onChange={e => setName(e.target.value)} className='form-control' placeholder='enter name' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>Email</label>
                        <input type='email' name='email' value={email} onChange={e => setEmail(e.target.value)} className='form-control' placeholder='enter email' />
                    </div>
                    <div className='mb-3'>
                        <button className='btn btn-info'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Create;
