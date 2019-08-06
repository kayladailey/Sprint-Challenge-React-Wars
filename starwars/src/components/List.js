import React from "react";

  const List = (props) => {
    
  return (
    <div>
      <h2> {props.name}</h2>
      <h4>{props.age}</h4>
    </div>
  );
};

export default List;