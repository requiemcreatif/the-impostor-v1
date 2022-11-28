import { useEffect, useState } from "react"
import { databaseFirebase } from "../firebase/config"

export const useDocument = (collection, id) => {
    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)

    //realtime data for a single document
    useEffect(() => {
        const ref = databaseFirebase.collection(collection).doc(id)

       
        const unsubscribe = ref.onSnapshot((snap) => {
            if(snap.data()) {
                
                setDocument({...snap.data(), id: snap.id})
                setError(null)
            } else {
                setError("This post does not exist")
            }
        }, (err) => {
                console.log(err.message);
                setError("That document does not exist")
        })
        return () => unsubscribe()
    }, [collection, id])

    return {document, error}
}