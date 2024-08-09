import React, { useState } from "react";
import data from "./data.js";
import "./style.css";

function Accordion() {
  const [selected, setSelected] = useState(null);
  const [multiSelect, setMultiSelect] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleClick = (elementId) => {
    selected !== elementId ? setSelected(elementId) : setSelected(0);
  };

  const handleMulClick = (elementId) => {
    let cpyMultiple = [...multiple];
    let ind = cpyMultiple.indexOf(elementId);
    // console.log(ind)
    if (ind == -1) {
      cpyMultiple.push(elementId);
    } else {
      cpyMultiple.splice(ind, 1);
    }
    setMultiple(cpyMultiple);
    // console.log(multiple)
  };

  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                className="title"
                onClick={
                  multiSelect
                    ? () => handleMulClick(dataItem.id)
                    : () => handleClick(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <h3>+</h3>
              </div>
              <div className="content">
                {multiSelect ? (
                  multiple.indexOf(dataItem.id) != -1 ? (
                    <span>{dataItem.answer}</span>
                  ) : (
                    <span></span>
                  )
                ) : dataItem.id === selected ? (
                  <span>{dataItem.answer}</span>
                ) : (
                  <span></span>
                )}
              </div>
            </div>
          ))
        ) : (
          <span>No data found</span>
        )}
      </div>
      <div className="multiple">
        <button onClick={() => setMultiSelect(!multiSelect)}>
          Multiple Selection
        </button>
      </div>
    </div>
  );
}

export default Accordion;
