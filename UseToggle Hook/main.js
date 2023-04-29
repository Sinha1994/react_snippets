import UseToggle from "../../Hooks/useToggle";

const MainComponent = () => {
  const [value, toggleFunc] = UseToggle([1, 2, 3, 4, 5], 2);
  return (
    <>
      <h2>UseToggle Hook Example</h2>
      <h4>Current value {value}</h4>
      <button onClick={toggleFunc}>Toggle</button>
    </>
  );
};

export default MainComponent;
