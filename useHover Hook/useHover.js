//useHover() hook to maintain state of any element ref for CSS pseduo class :hover
//Should satisfies below cases
//event listeners should be attached for hover event on given ref
//event listeners should be detached when ref.current changes  

import { Ref, useRef, useState, useEffect} from 'react'

export function useHover<T extends HTMLElement>(): [Ref<T>, boolean] {
  const elementRef = useRef<T>(null);
  let [isHovered, setIsHovered] = useState(false);
  useEffect(() => {

    setIsHovered(false);

    const setTrue = () => setIsHovered(true);
    const setFalse = () => setIsHovered(false);

    elementRef?.current?.addEventListener('mouseenter', setTrue);
    elementRef?.current?.addEventListener('mouseleave', setFalse);

    return () => {
      elementRef?.current?.removeEventListener('mouseenter', setTrue);
      elementRef?.current?.removeEventListener('mouseleave', setFalse);
      }
  }, [elementRef.current]);
  return [elementRef, isHovered];
}

