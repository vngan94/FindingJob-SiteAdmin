import { useEffect, useState } from "react";

function useDeferred(value, delay = 100) {
  const [deferredValue, setDeferredValue] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => {
      setDeferredValue(value);
    }, delay);
    return () => {
      clearTimeout(id);
    }
  }, [value])
  return deferredValue;
}

export default useDeferred;
