import React, {useEffect, useState} from 'react'

const ClassForm = ({addANewClassroom}) => {
    const [title, setTitle] = useState('')
    const [teacherName, setTeacherName] = useState('')

  const handleChange = (e) => {
        setTitle(e.target.value)
        setTeacherName(e.target.value)
    }

  const handleSubmit = (e) => {
        e.preventDefault()
        addANewClassroom(title, teacherName)
    }

    return (
        <div>
            <h1 className='class-form'>Classroom Form</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <label>Title:  </label>
                <input type='text' title='title' value='title' onChange={handleChange}/>
                <label>Teacher's Name:  </label>
                <input type='text' teacherName='teacher_name' value='teacherName' onChange={handleChange}/>
                <br />
                <input type='submit'/>
            </form>
        </div>
    )
}
export default ClassForm