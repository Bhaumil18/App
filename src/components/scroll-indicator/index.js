import React, { useEffect, useState } from "react";
import "./styles.css";

function ScrollIndicator({ url, limit }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scrollPercentage, setscrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?limit=${limit}`);
      const dataa = await response.json();

      if (dataa && dataa.products && dataa.products.length) {
        setLoading(false);
        setData(dataa.products);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  useEffect(() => {
    if (url !== "") fetchData(url);
  }, [url]);



  function handleScroll() 
  {
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const howMuchScroll = document.body.scrollTop || document.documentElement.scrollTop

    const percentage = howMuchScroll/height*100

    setscrollPercentage(percentage)

    console.log(percentage)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

//   console.log(data);

  if (loading) {
    return <h1>Loading ... Please Wait...</h1>;
  }

  return (
    <div className="container">
      <div className="navbar">
        <h1 className="heading">Scroll-indicator</h1>
        <div className="scroll-container">
            <div className="scrollbar" style={{width : `${scrollPercentage}%`}} ></div>
        </div>
      </div>
      <div className="content">
        {data && data.length
          ? data.map((item) => {
              return (
                <div className="item" key={item.id}>
                  <p>{item.title}</p>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default ScrollIndicator;
