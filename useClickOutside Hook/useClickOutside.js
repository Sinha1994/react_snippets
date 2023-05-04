import React, {useRef, useEffect} from 'react'

export function useClickOutside(callback: Function) {
  const ref = useRef();
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
    if(ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  }
  document.addEventListener('mousedown', handleClick);
  return () => document.removeEventListener('mousedown', handleClick);
  }, []);
  return ref;
}


function TestComponent() {
  const ref = useClickOutside(() => {
    alert('clicked outside')
  });
  return <div><h4 ref={ref}>Hello World!!!</h4></div>
}

export function App() {
  return <TestComponent />
}
