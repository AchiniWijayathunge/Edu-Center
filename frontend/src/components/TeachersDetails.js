import { teachers} from '../pages/Teachers'
const TeachersDetails = ({Teacher}) =>{
    const handleClick = async () =>{
        const response = await fetch('/api/teachers/' + email, {
            method: 'DELETE'
        })
        const json = await response.json()
        if (response.ok){
            dispatch({type: 'DELETE TEACHER', payload: json})
        }
    }
    return (
        <div className="Teachers"> 
        <h4>{teachers.title}</h4> 
        <p><strong>Teacher email:</strong>{teachers.email}</p>
        <p><strong>Subject: </strong>{teachers.subject}</p>
        <span onClick={handleClick}>delete</span>

        </div>
    )
}
export default TeachersDetails