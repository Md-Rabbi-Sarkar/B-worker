import React, { useContext, useState } from 'react'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../../../Providers/AuthProvider'


export default function ManageUsers() {
    const axiosSecure = useAxiosSecure()


    const [selectValue, setSelectValue] = useState("");
    //    console.log(selectedValue)
    const { data: allUsers = [],refetch } = useQuery({
        queryKey: ['allusers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin/allUsers')
            return res.data
        }
    })
    const handleChange = async (e, email) => {
        e.preventDefault()
        const value = e.target.value
        
        // console.log(value, email)
        const updateRole = {
            value,
           email:email
        }
        const res=await axiosSecure.patch('makeRole',updateRole)
        console.log(res.data)
        refetch()
    }
    const handleDelete =async (email)=>{
        const res = await axiosSecure.delete(`/userDelete?email=${email}`)
        console.log(res.data)
        refetch()
    }
    return (
        <div className="overflow-x-auto">
            <table className="table table-xs">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Photo Url</th>
                        <th>Role</th>
                        <th>Coin</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers.map((user, index) => <tr key={user._id}>
                        <th>{index + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.photoURL}</td>
                        <td>{user.role}</td>
                        <td>{user.coin}</td>
                        <td><select onChange={()=>handleChange(event,user.email)} defaultValue={''}
                            className="select select-bordered w-full ">
                            <option disabled value='' >Change Role</option>
                            <option value="admin">admin</option>
                            <option value="buyer">Buyer</option>
                            <option value="worker">Worker</option>
                        </select></td>
                        <td onClick={()=>{handleDelete(user.email)}}>Delete</td>
                    </tr>)}


                </tbody>
            </table>
        </div>
    )
}
