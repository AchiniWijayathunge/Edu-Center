const TeachersDetails = ({Teacher}) =>{
    return (
        <div className="Teachers"> 
        <h4>{teachers.title}</h4> 
        <p><strong>Teacher id:</strong>{teachers.teacher_id}</p>
        <p><strong>Subject: </strong>{teachers.subject}</p>
        <button></button>
        </div>
    )
}
export default TeachersDetails