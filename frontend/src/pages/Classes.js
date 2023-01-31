import {useEffect, useState} from 'react'

const Classes_a = () => {
    const [classes, setClasses] = useState(null)
    useEffect(() =>{
        const fetchClassses = async()=> {
            let teacher_id = "63d80b5b74fda65ebadef397"
            const response = await fetch(`/api/teachers/${teacher_id}/classes`)
            const json = await response.json()

            if (response.ok){
                setClasses(json)

            }

        }

        fetchClassses()
    }, [])
    return (
        <div className='Class'>
            <div className='Classes'>
                {classes && classes.map((classes) =>(
                    <p key={classes._id}>{classes.title}
                    {classes.subject}</p>

                ))}
            </div>
        </div>
    )
}
export default Classes_a