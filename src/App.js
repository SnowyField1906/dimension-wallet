import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "./components/Navigation/Navigation";

import Welcome from './containers/Welcome';
import Wallet from "./containers/Wallet";
import Transaction from "./containers/Transaction";
import Upgrade from "./containers/Upgrade";
import About from "./containers/About";

function App() {
  return (
    <div className="h-screen bg-screen bg-cover bg-center overflow-hidden">
      <Router >
        <Navigation />
        <Routes>
          <Route path="Dimension-Wallet/" exact element={<Welcome />} />
          <Route path='Dimension-Wallet/Wallet' element={<Wallet />} />
          <Route path='Dimension-Wallet/Transaction' element={<Transaction />} />
          <Route path='Dimension-Wallet/Upgrade' element={<Upgrade />} />
          <Route path='Dimension-Wallet/About' element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

