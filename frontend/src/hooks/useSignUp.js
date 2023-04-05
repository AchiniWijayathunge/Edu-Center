import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useSignUp = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const Register = async (role,firstName,middleName, lastName,birthday,address,school, telephone,email, password, navigate) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/user/SignUp', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({role,firstName,middleName, lastName,birthday,address,school, telephone,email, password, navigate })
    })
    const json = await response.json()
   
    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))
    

      // update the auth context
      dispatch({type: 'SignUp', payload: json})
         //route 
         navigate('/SignIn');

      // update loading state
      setIsLoading(false)
    }
  }

  return { Register, isLoading, error }
}