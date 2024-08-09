import React from "react";

function FilterData({ data , onClick }) {
  return (
    <div className="filter-data">
      {data && data.length
        ? data.map((item,index) => {
            return (
              <ul className="item" key={index}>
                <li  onClick={onClick}>{item}</li>
              </ul>
            );
          })
        : null}
    </div>
  );
}

export default FilterData;
