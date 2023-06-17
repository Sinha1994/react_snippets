import React, { useRef, useState, useEffect, Ref } from 'react'

export function useFocus<T extends HTMLElement>(): [Ref<T>, boolean] {
  const ref = useRef<T>();
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const currentElement = ref.current
    if (!currentElement) return;

    setIsFocused(document.activeElement === ref.current);

    const setFocus = () => setIsFocused(true);
    const removeFocus = () => setIsFocused(false);
   
    currentElement.addEventListener('focus', setFocus);
    currentElement.addEventListener('blur', removeFocus);
  
  return () => {
    currentElement.removeEventListener('focus', setFocus);
    currentElement.removeEventListener('blur', removeFocus);
    };
  }, [ref.current]);

  return [ref, isFocused];
}
