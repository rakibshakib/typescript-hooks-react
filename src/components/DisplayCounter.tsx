type Status = {
  name: string;
  status: "Approved" | "Pending";
};
const DisplayCounter = ({ value }: { value: number }) => {
  const product: Status[] = [
    {
      name: "The JavaScript",
      status: "Approved",
    },
    {
      name: "The Java",
      status: "Pending",
    },
  ];
  return (
    <div>
      <div>Counter: {value}</div>
      <p>{product.length}</p>
    </div>
  );
};

export default DisplayCounter;
