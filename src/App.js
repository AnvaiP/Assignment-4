import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Blog1 from './Blog1';
import Blog2 from './Blog2';
import Blog3 from './Blog3';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Route path='/' exact component={Home}/>
      <Route path='/blog1' exact component={Blog1}/>
      <Route path='/blog2' exact component={Blog2}/>
      <Route path='/blog3' exact component={Blog3}/>
    </div>

    
  );
}

export default App;
