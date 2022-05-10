import React from 'react'

interface ClassProp {

}

const classes = [
    {
        name: 'cs103',
        students: 'joe, jerry, sid'
    },
    {
        name: 'cs102',
        students: 'joe'
    },
    {
        name: 'cs100',
        students: 'joe,tony, sid'
    },
    {
        name: 'cs101',
        students: 'joe, jerry, sid, barry'
    }
]





const ClassesPage = () => {
  return (
    <div>
        {classes.map((item, index) => (
             <div className='class-page'key={index}>
                <h1>Name</h1>
                <h2>{item.name}</h2>
                <h1>Students</h1>
                <h2>{item.students}</h2>
             </div>
        ))}
    </div>
  )
}

export default ClassesPage