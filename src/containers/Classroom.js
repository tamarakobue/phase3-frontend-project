import React, {useEffect, useState} from 'react'
import Student from '../components/Student'
// import StudentForm from './StudentForm'


const Classroom = (props) => {
    const [classroom, setClassroom] = useState({students: []})
    const [studentForm, setStudentForm] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:9292/classrooms/${props.match.params.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setClassroom(data)
        })
    }, [props.match.params.id])

    addStudent = (student) => {
        console.log(student)
        const headerConfig = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(student)
         }
        fetch(`http://localhost:9292/classrooms/${classroom.id}/students`, headerConfig)
        .then(res => res.json())
        .then(data => {
            setClassroom({...classroom, students: [...classroom, data]})
        })
        setStudentForm(false)
        console.log(students)
    }

    const students = classroom.students.map(s => <Student key={s.id} student={s}/>)
    

    return (
        <div>
            <h1>{classroom.title}</h1>
            <h3>{classroom.teacher_name}</h3>
            <p>{students}</p>
        </div>
    )
}
export default Classroom