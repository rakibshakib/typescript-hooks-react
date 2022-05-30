import { useState } from "react";
type Function = (a: number, b: number) => void;

const useHooks = () => {
  const [current, setCurrent] = useState<number>(0);
  const addNumber: Function = (num1, num2) => {
    setCurrent(num1 + num2);
  };
  const [show] = useState<boolean>(false);

  return [addNumber, current, show] as const; // https://fettblog.eu/typescript-react-typeing-custom-hooks/#option-2%3A-as-const
};

export default useHooks;
