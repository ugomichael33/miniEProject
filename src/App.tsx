import React, { useEffect } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import ClassesPage from './components/ClassesPage';
import { useSelector } from 'react-redux';


const App= () => {
  const studentClasses = useSelector((state: any) => state.studentClasses)
  const isLoggedIn = useSelector((state: any) => state.isLoggedIn )
  console.log('isl',isLoggedIn)
  
  return (
    <div className="App">
      {!isLoggedIn  ? <SearchForm /> : <ClassesPage studentClasses={studentClasses}/>   } 
    </div>
  );
}




export default App;
