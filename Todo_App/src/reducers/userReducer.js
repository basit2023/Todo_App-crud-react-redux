import { createSlice } from '@reduxjs/toolkit';
import { userList } from './Data.js';

const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers: {
        userAdd: (state, action) => {
            state.push(action.payload);
            console.log(action)
        },
        updateUser:(state,action)=>{
           const {id,name,email}=action.payload;
           const uu=state.find(user=>user.id==id)
           if(uu){
            uu.id=id;
            uu.name=name;
            uu.email=email;
           }
        },
        deleteUser:(state,action)=>{
            const {id}=action.payload;
            const uu=state.find(user=>user.id==id)
           if(uu){
            return state.filter(f=>f.id!==id)
           }

        }
    }
});

export const { userAdd,updateUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;
