import React, { useEffect } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import ClassesPage from './components/ClassesPage';


const App= () => {

  useEffect(()=> {
      
  }, [])



  return (
    <div className="App">
      <SearchForm />
      <ClassesPage />
    </div>
  );
}

export default App;
