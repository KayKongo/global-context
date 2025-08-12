import { useGlobalContext } from "./context";

const App = () => {
  const { name } = useGlobalContext();
  console.log(name);

  return (
    <>
      <h2>Global Context Template</h2>
    </>
  );
};

export default App;
