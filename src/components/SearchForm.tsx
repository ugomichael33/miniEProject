import React, { FC } from 'react'
import { useDispatch, useStore } from 'react-redux'
import { setStudentName } from '../storeii/utils'


// onclick on a search button 
// onclick calls a functions
// d function calls the airtable api and takes students name as parameter
// if successful, gets data
// if fails, throws an error
// data updates the state


const SearchForm = () => {
  const store = useStore()
  const dispatch = useDispatch()
  const {studentName} = store.getState() as any
  console.log('student',store.getState())


  const handleChange = (e:any) => {
    const value = e.target.value
    setStudentName(dispatch)(value)

  }


  const handleSearch = () => {
    //findStudentsClasses(studentsName)
  }

  return (
    <div>
      <label>Student Name:</label>
      <input onChange={handleChange} />
      <button onClick={handleSearch}>login</button>
    </div>
  )
}


export default SearchForm