import { useDispatch } from 'react-redux'
import {StudentClass} from '../storeii/actions/studentClasses'
import { ActionType } from '../storeii/actions/studentClasses'
import { setIsLoggedOut } from '../storeii/utils/index'

interface ClassProp {
    studentClasses: StudentClass[]
}


const ClassesPage = ({studentClasses}: ClassProp) => {
    const dispatch = useDispatch()
    
    const handleLogout = () => {
        setIsLoggedOut(dispatch)()
    }

  return (
    <div >
        <button style={{float: 'right'}}onClick={handleLogout}>logout</button>
        <div className='container'>
        {studentClasses.map((item, index) => (
             <div className='class-page'key={index}>
                <h1>Name</h1>
                <h4>{item.name},</h4>
                <h1>Students</h1>
                {item.students.map((student, idx) => <h4 key={idx}>{student}</h4>)}
             </div>
        ))}
        </div>
    </div>
  )
}

export default ClassesPage