import { useEffect, useState } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
    const [isCancel, setIsCancel] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const logout = async () => {
        setError(null)
        setIsPending(true)

        try {
            //sign out user
            const response = await projectAuth.signOut()
            //console.log(response);

            // if(!response) {
            //     throw new Error("Could not complete the logout")
            // }

            //dispatch logout action
            dispatch({type: "LOGOUT"})

            //Update state
            if(!isCancel) {
                setIsPending(false)
                setError(null)
            }
            return response
        } 
        catch (err) {
            console.log(err.message);
            setError(err.message)
            setIsPending(false)
        }
    }

    useEffect(() => {
        return () => setIsCancel(true)
    }, [])
    
    return { logout, error, isPending }

}
