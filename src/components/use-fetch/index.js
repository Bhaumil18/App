import React from 'react'
import useFetch from './fetchData'

function Test() {

    const {data,error,loading} = useFetch("https://dummyjson.com/products")

    // console.log(data,error,loading)

    if(loading)
    {
      return <h1>Loading... Please wait...</h1>
    }
    
    if(error)
    {
      return <h1>Error... {error}</h1>
    }

  return (
    <div className='container'>
      {
        data.map((item,index)=> {
          return <h3 key={index}>{item.title}</h3>
        })
      }      
    </div>
  )
}

export default Test