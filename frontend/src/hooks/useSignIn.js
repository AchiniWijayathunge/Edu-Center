import { useState } from 'react'
import { useNavigation } from 'react-router-dom'
import { useAuthContext } from './useAuthContext'

export const useSignIn = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const Login = async (email, password,navigate) => {
    
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/user/SignIn', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    })
    const json = await response.json()
    console.log(json)

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'SignIn', payload: json})

      //route 
      navigate('/dashboard');
      // update loading state
      setIsLoading(false)
    }
  }

  return { Login, isLoading, error }
}