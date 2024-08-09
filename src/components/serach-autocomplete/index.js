import React, { useEffect, useState } from "react";
import FilterData from "./filterDatas";

function SearchAutoComplete() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [value, setValue] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  async function fetchUserData() {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();

      if (data && data.users.length) {
        setLoading(false);
        setUsers(
          data.users.map((item) => {
            return item.firstName;
          })
        );
      }
    } catch (e) {
      setLoading(false);
      setError(e.message);
      console.log(error);
    }
  }
//   console.log(users);
//   console.log(filteredData);

  useEffect(() => {
    fetchUserData();
  }, []);

  function handleChange(e) {
    const query = e.target.value.toLowerCase();
    setValue(query);
    if (query.length > 1) {
      const filterData =
        users && users.length
          ? users.filter((item) => {
              return item.toLowerCase().indexOf(query) > -1;
            })
          : null;
      setFilteredData(filterData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  }

  function handleClick(e)
  {
	setValue(e.target.innerText)
	setShowDropDown(false)
	setFilteredData([])
  }

  return (
    <div className="container">
      <div className="input">
        <input
          type="text"
          value={value}
          className="input"
          onChange={handleChange}
        />
      </div>
      {/* <div className="content"> */}
      {showDropDown ? (
        <FilterData onClick={handleClick} data={filteredData} />
      ) : null}
      {/* </div> */}
    </div>
  );
}

export default SearchAutoComplete;
