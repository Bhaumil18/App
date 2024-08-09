import React, { useEffect, useState } from "react";
import "./styles.css"

function LoadMoreData({ url,limit }) {
  const [items, setItems] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?limit=${limit}&skip=${count === 0 ? 0 : count*limit}`);
      const data = await response.json();

      if (data && data.products && data.products.length) {
        setItems(data.products);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }
  
  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url,count]);

  console.log(items);
  console.log(count)

  if(loading) 
  {
    return <h3>Loading ... Please Wait ... </h3>
  }
  if(errorMsg) 
  {
    return <h3>Error occured ! {errorMsg}</h3>
  }


  return <div className="container">
        <div className="product-container">
            {
                items && items.length ?
                items.map((item)=>{
                    if(item.id >= limit*count)
                    return  <div className="product" key={item.id}>
                        <img src={item.thumbnail} alt={item.title} />
                        <p>{item.title}</p>
                    </div>
                })
                : null
            }
        </div>
        <div className="button-container">
            {
                (count+1)*limit === 100 ? <p>You have reached to 100 products.</p> :
                <button onClick={()=> setCount(count+1)}>Load more products</button>
            }
        </div>
    </div>
}

export default LoadMoreData;
