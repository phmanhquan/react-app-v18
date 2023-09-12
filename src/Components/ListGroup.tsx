import { Fragment } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

  //   if (items.length === 0)
  //     return (
  //       <>
  //         <h1>List</h1>
  //         <p>No item found</p>
  //       </>
  //     );

  //   const message = items.length === 0 ? <p>No item found</p> : null;
  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };

  return (
    <div>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {/* {message} */}
      {/* {getMessage()} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group"></ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </div>
  );
}

export default ListGroup;
