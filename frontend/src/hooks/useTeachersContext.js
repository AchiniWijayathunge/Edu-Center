import { TeachersContext } from "../context/TeachersContext"
import { useContext } from "react"

export const useTeachersContext = () => {
  const context = useContext(TeachersContext)

  if(!context) {
    throw Error('useTeachersContext must be used inside an TeachersContextProvider')
  }

  return context
}