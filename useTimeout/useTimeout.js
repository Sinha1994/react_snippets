//React hook to easily use setTimeout(callback, delay) and covers following cases
//Reset the timer if delay changes
//DO NOT reset the timer if only callback changes

import {useEffect, useRef} from "react";
export function useTimeout(callback: () => void, delay: number) {
  let callbackRef = useRef(callback);
  callbackRef.current = callback;
  useEffect(() => {
   let timeout = setTimeout(() => callbackRef.current(), delay);
   return () => { clearTimeout(timeout) };
  }, [delay])
}
