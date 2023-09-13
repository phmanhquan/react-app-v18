import React from "react";

interface Props {
  cartItems: string[];
  onRemove: () => void;
  onClear: () => void;
}

const Cart = ({ cartItems, onRemove, onClear }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onRemove}>Remove</button>
      <button onClick={onClear}>Clear</button>
    </>
  );
};

export default Cart;
