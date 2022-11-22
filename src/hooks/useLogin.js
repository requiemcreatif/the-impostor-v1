import { useEffect, useState } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useLogin = () => {
    const [isCancel, setIsCancel] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        setError(null)
        setIsPending(true)

        try {
            //sign in user
            const response = await projectAuth.signInWithEmailAndPassword(email, password)
            //console.log(response);
            dispatch({type: "LOGIN", payload: response.user})

            //Update state
            if(!isCancel) {
                setIsPending(false)
                setError(null)
            }
        } 
        catch (err) {
            if(!isCancel) {
            console.log(err.message);
            setError(err.message)
            setIsPending(false)
            }
        }
    }

    useEffect(() => {
        return () => setIsCancel(true)
    }, [])
    
    return { login, error, isPending }
}