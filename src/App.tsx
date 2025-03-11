import { JSX } from "react";
import "./App.css";
import ProfileLossReport from "./components/ui/profit-and-loss-report/ProfileLossReport";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BalanceSheet from "./components/ui/balance-sheet/BalanceSheet";
function App(): JSX.Element {
  return (
    <div className="container mx-auto p-4">
      <Router>
        <Routes>
          <Route path="/" element={<ProfileLossReport />} />
          <Route path="/balance-sheet" element={<BalanceSheet />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
