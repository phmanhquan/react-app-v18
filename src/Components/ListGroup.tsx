import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  //   items = [];

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

  //event handle
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <div>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {/* {message} */}
      {/* {getMessage()} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            // onClick={(event) => console.log(event)}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
