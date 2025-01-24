import React, { useContext } from 'react'
import axios from 'axios'
import { AuthContext } from '../Providers/AuthProvider'
import { useNavigate } from 'react-router-dom'
const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
export default function useAxiosSecure() {
    // const { logOut } = useContext(AuthContext);
    // const navigate = useNavigate();
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function (error) {
        return Promise.reject(error)
    })
    axiosSecure.interceptors.response.use(function (response) {
        return response
    }, async (error) => {
        const status = error.response.status
        console.log('status error', status)
        if (status === 401 || status === 403) {
            // await logOut()
            // navigate('/login')
        }
        // if(status ===403){
        //     navigate('/dashboard/forbidden')
        // }
        return Promise.reject(error)
    })

    return axiosSecure
}
