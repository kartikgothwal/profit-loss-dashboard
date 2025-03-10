import { JSX } from "react";
import "./App.css";
import Heading from "./components/Layout/Heading";
import { PROFIT_LOSS_HEADER } from "./constant";
import RowHeroComponent from "./components/ui/RowHeroComponent";
function App(): JSX.Element {
  return (
    <div className="container mx-auto p-4">
      <Heading title={PROFIT_LOSS_HEADER} />
      <RowHeroComponent />
    </div>
  );
}

export default App;
