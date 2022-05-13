import { useDispatch,  useSelector } from 'react-redux'
import { setStudentName, getStudentClasses, setIsLoggedIn, clearStudentName } from '../storeii/utils'


const SearchForm = () => {
  const studentName = useSelector((state:any)=> state.studentName)
  const dispatch = useDispatch()

  const handleChange = (e:any) => {
    const value = e.target.value
    setStudentName(dispatch)(value)
  }

  const handleSearch = (studentName: any) => {
    getStudentClasses(dispatch)(studentName)
    clearStudentName(dispatch)()
    setIsLoggedIn(dispatch)()
  }

  return (
    <div className='search'>
      <div className='search-input'>
        <label style={{whiteSpace: 'nowrap'}}>Student Name:</label>
        <input onChange={handleChange} value={studentName}/>
      </div>
      <button onClick={handleSearch}>login</button>
    </div>
  )
}



export default SearchForm

