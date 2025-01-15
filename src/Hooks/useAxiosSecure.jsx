import React from 'react'
import axios from 'axios'
const axiosSecure = axios.create({
    baseURL:'http://localhost:5000'
})
export default function useAxiosSecure() {
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        return config
    },function(error){
        return Promise.reject(error)
    })
    axiosSecure.interceptors.response.use(function(response){
        return response
    },async(error)=>{
        const status = error.response.status 
        console.log('status error',status)
        return Promise.reject(error)
    })
  return axiosSecure
}
