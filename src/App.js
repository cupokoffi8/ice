import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom'; 
import Main from './Pages/Main/Main';
import ContactUs from './Pages/Contact/Contact';
import Menu from './Pages/Menu/Menu';

const App = () => {
  return (
    <>
      <HashRouter>
        <Switch>
          
          <Route exact path="/" component={Main} />
          <Route exact path="/contact" component={ContactUs} />
          <Route exact path="/menu" component={Menu} />

        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
