import React from 'react'
import { useState , useEffect} from 'react'
import axios from 'axios'


function Alboms() {

    const [data , setData ] = useState()

    const getAlbomss = () =>{
        let res = axios.get('https://jsonplaceholder.typicode.com/albums')
        .then((res) => {
            console.log(res.data);
            setData(res.data)
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            console.log('muofaqiyatli keldi');
        })
    }
    useEffect(() => {
        getAlbomss()
    }, [])


  return (
    <div className="w-[80%]  mx-auto">
        <h1 className='text-4xl font-bold text-center m-5'>Albumlar</h1>
        <table className='w-full'>
            <thead className='border-2 '>
                <tr>
                    <th className='border-2 px-2 py-1'>ID</th>
                    <th className='border-2 px-2 py-1'>Title</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((item, index) => (
                    <tr key={index}>
                        <td className='border-2 px-2 py-1'>{item.id}</td>
                        <td className='border-2 px-2 py-1'>{item.title}</td>
                    </tr>
                ))}
            </tbody>
            
        </table>
     
    </div>
  )
}

export default Alboms