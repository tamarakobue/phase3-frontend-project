import React from 'react'

const Student = (props) => {
    return (
        <div>
           Name: {props.student.first_name} {props.student.last_name}, 
           Age: {props.student.age}
        </div>
    )
}
export default Student