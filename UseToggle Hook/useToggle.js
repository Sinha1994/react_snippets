import { useCallback, useState } from "react";
const UseToggle = (list, currentIndex) => {
  const [index, updateIndex] = useState(currentIndex);
  const updateFunction = useCallback(() => {
    updateIndex((prevIndex) => (prevIndex + 1) % list.length);
  }, [list]);
  return [list[index], updateFunction];
};

export default UseToggle;
