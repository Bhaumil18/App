import { useEffect, useState } from "react";

function useFetch(url) 
{
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    async function fetchData()
    {
        try {
            setLoading(true)
            const res = await fetch(url)
            // if(!res.ok) throw new Error(res.statusText)
            const result = await res.json()        
            if(result)
            {
                setData(result.products)
                setLoading(false)
            }
        } catch (e) {
                setLoading(false)
                setError(e.message)
            }
        }

    useEffect(()=>{
        fetchData()
    },[url])

    // console.log(data)

    return {data,error,loading};
}

export default useFetch;
