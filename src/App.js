import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom';
import Search from './components/Search';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/search'>
          <SearchPage />
        </Route>

        <Route>
          <Route path='/'>
            <Home />
          </Route>
        </Route>
      </Switch>

      {/* Search (results page) */}
    </div>
  );
}

export default App;
