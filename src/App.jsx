import "./App.css";
import { Hello, Counter, MainWrapper } from "./components";

function App() {
  return (
    <MainWrapper>
      <Hello name="Maulana" />
      <Hello name="Fajar" />
      <Counter />
    </MainWrapper>
  );
}

export default App;
