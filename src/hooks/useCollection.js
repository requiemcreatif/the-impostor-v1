import { useEffect, useState } from "react"
import { databaseFirebase } from "../firebase/config"

export const useCollection = (collection) => {
    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)


    useEffect(() => {
        let ref = databaseFirebase.collection(collection)
        const unsubscribe = ref.onSnapshot((snapshot) => {
            let result = []
            snapshot.docs.forEach(doc => {
                result.push({...doc.data(), id: doc.id})
            })

            setDocument(result)
            setError(null)
        }, (error) => {
            console.log(error);
            setError("The data could not been fetched")
        })

        return ( ) => unsubscribe()

    }, [collection])

    return {document, error}
}