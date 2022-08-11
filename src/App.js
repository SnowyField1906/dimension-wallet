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
          <Route path="dApp-useDApp-project/" exact element={<Welcome />} />
          <Route path='dApp-useDApp-project/Wallet' element={<Wallet />} />
          <Route path='dApp-useDApp-project/Transaction' element={<Transaction />} />
          <Route path='dApp-useDApp-project/Upgrade' element={<Upgrade />} />
          <Route path='dApp-useDApp-project/About' element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

