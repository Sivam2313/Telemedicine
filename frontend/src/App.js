
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import './app.css';
import Admin from './pages/Admin';
import healthWorker from './pages/HealthWorker';
import Protect from './components/Protect';
import Doctor from './pages/Doctor';
import FamilyCardsView from './pages/FamilyCardsView';
function App() {
  return (
    <div className="App">
      <Route path='/' component={Home} exact />
      <Protect>
        <Route path='/HealthWorker' component={healthWorker} exact />      
        <Route path='/admin' component={Admin} exact /> 
        <Route path='/doctor' component={Doctor} exact/>  
        <Route path='/info' component={FamilyCardsView} exact />
      </Protect>

    </div>
  );
}

export default App;
