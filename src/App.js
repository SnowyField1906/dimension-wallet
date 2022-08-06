import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from "./components/Navigation/Navigation";
import Home from './containers/Home';
import Welcome from './containers/Welcome';
import Wallet from "./containers/Wallet";
import Transaction from "./containers/Transaction";

function App() {
  return (
    <div className="h-screen bg-screen bg-cover bg-center">
      <Router>
        <Navigation />
        <Home />
        <Routes>
          <Route path="/" exact element={<Welcome />} />
          <Route path='/Wallet' element={<Wallet />} />
          <Route path='/Transaction' element={<Transaction />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
