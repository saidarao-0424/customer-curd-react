import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ManageCustomer from './components/ManageCustomer';

import CustomerList from './components/CustomerList';

function App() {
  return (
    <div className="App">
      <Router>
        <Header title="head" />
        <Switch>
              <Route exact path="/" component ={CustomerList}></Route>
              <Route path="/manage/:id" component ={ManageCustomer}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
