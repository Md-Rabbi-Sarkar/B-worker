import React from 'react'
import axios from 'axios'
const axiosPublic = axios.create({
    baseURL:'https://bworker-server.vercel.app'
})
export default function useAxiosPublic() {
  return axiosPublic
}
