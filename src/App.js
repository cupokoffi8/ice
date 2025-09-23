import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom'; 
import Main from './Pages/Main/Main';

const App = () => {
  return (
    <>
      <HashRouter>
        <Switch>
          
          <Route exact path="/" component={Main} />

        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
