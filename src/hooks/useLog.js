import { useRef } from "react";

function useLog(message, initValue = 0) {
  let count = useRef(initValue);
  console.log(message, count.current++);
}

export default useLog;
