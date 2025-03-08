import React, { useEffect, useState } from 'react'
import axios from 'axios'

function post() {
  const [data , setData ] = useState()

  const getUsers = () => {
    let res= axios.get('https://jsonplaceholder.typicode.com/posts')
    // setData(res)
     .then((res) => {
      console.log(res.data);
       setData(res.data)
      
     })
     .catch((err) => {
       console.log(err);
     })
     .finally(() => {
       console.log('muofaqiyatli keldi');
     })
    
  }
  useEffect(()=>
  {
    getUsers()
  }, [])
  return (
    
    <div className="w-[80%] mx-auto">
      <h1 className="text-3xl text-center">Postlar</h1>
        <table>
          <thead className='border-2 '>
            <tr>
              <th className='border-2 px-2 py-1'>ID</th>
              <th className='border-2 px-2 py-1'>Title</th>
              <th className='border-2 px-2 py-1'>Body</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={index}>
                <td  className='border-2 px-2 py-1'>{item.id}</td>
                <td className='border-2 px-2 py-1'>{item.title}</td>
                <td className='border-2 px-2 py-1'>{item.body}</td>
              </tr>
            ))}
          </tbody>
        </table>

      
     
    </div>
  )
}

export default post