import axios from "axios";
import { useState } from "react";

interface ListData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
type GetDataType = (url: string, msg?: string) => void;

const useGetData = () => {
  const [res, setRes] = useState<ListData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const getData: GetDataType = (url, msg) => {
    setIsLoading(true);
    axios
      .get(url)
      .then(function (response) {
        if (response.data) {
          setIsLoading(false);
          setRes(response.data);
          setErrorMsg("");
        }
      })
      .catch(function (error) {
        setIsLoading(false);
        setRes([]);
        msg && setErrorMsg(msg || "Something Went Wrong" || error.message);
      });
  };
  return [res, getData, isLoading, errorMsg] as const; // here, we freeze the array to a tuple
};

export default useGetData;
