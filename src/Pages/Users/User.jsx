import React, { useState , useEffect } from 'react'
import axios from 'axios'

function User() {

  const [data , setData] = useState()

  const getUsers = () => {
    let res = axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      // console.log(res.data);
      setData(res.data)
    })
    .catch((error) => {
      console.log(error);
    })

    

  }
  useEffect(() => {
    getUsers()
  }, [])


  return (
    <div className='w-[80%] mx-auto'>
      <h1 className='text-4xl font-bold text-center m-5'>Userlar</h1>
      <table className='w-full'>
        <thead className='border-2 '>
          <tr>
            <th className='border-2 '>ID</th>
            <th className='border-2 '>Name</th>
            <th className='border-2 '>Email</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item , index) => (
            <tr key={index}>
              <td className='border-2 text-center'>{item.id}</td>
              <td className='border-2 text-center'>{item.name}</td>
              <td className='border-2 text-center'>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default User