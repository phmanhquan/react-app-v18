let count = 0;

const Message = () => {
  console.log("Call", count);
  count++;
  return <div>Message {count}</div>;
};

export default Message;
