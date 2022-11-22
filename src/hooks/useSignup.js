import { useState, useEffect } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useSignup = () => {
    const [isCancel, setIsCancel] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const signup = async (email, password, displayName) => {
        setError(null)
        setIsPending(true)

        try {
            //sign up user
            const response = await projectAuth.createUserWithEmailAndPassword(email, password)
            //console.log(response.user);

            if(!response) {
                throw new Error("Could not complete the signup")
            }
            //add display name
            await response.user.updateProfile({displayName: displayName})

            //dispatch login action
            dispatch({type: "LOGIN", payload: response.user})

            //Update state
            if(!isCancel) {

            setIsPending(false)
            setError(null)
            }
            return response
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

    return { signup, error, isPending }
}
