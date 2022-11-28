import { useReducer, useEffect, useState } from "react";
import { databaseFirebase, timestamp } from "../firebase/config";

let initialState = {
  document: null, 
  isPending: false,
  error: null,
  success: null
}

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING": 
      return {
        isPending: true,
        document: null,
        success: false,
        error: null
      }
    
    case "DOCUMENT_ADDED":
      return {
        isPending: false,
        document: action.payload,
        success: true, 
        error: null
      }

      case "DOCUMENT_DELETED":
      return {
        isPending: false,
        document: null,
        success: true,
        error: null
      }

      case "DOCUMENT_UPDATED":
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null
      }

    case "ERROR":
      return {
        isPending: false,
        document: null,
        success: false, 
        error: action.payload
      }
    
    

    default:
      return state
  }
}

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState)
  const [isCancel, setIsCancel] = useState(false)

  const ref = databaseFirebase.collection(collection)

  //dispatch if is not cancelled
  const ifNotCanceled = (action) => {
    if(!isCancel) {
      dispatch(action)
    }
  }

  const addDocument = async (doc) => {
    dispatch({type: "IS_PENDING"})

    try {
      const created = timestamp.fromDate(new Date())
      const addedDocument = await ref.add({...doc, created: created})
      ifNotCanceled({type: "DOCUMENT_ADDED", payload: addedDocument})
    } catch(err) {
      ifNotCanceled({type: "ERROR", payload: err.message})
    }
  }

  const deleteDocument = async (id) => {
    dispatch({type: "IS_PENDING"})

    try {
      await ref.doc(id).delete()
      ifNotCanceled({type: "DOCUMENT_DELETED", payload: null})
    } catch(err) {
      ifNotCanceled({type: "ERROR", payload: "This document could not be deleted"})
    }
  }

  //Update document
  const updateDocument = async (id, updates) => {
    dispatch({type: "IS_PENDING"})

    try {
      const updatedDocument = await ref.doc(id).update(updates)
      ifNotCanceled({type: "DOCUMENT_UPDATED", payload: updatedDocument})
      return updatedDocument
    } catch(err) {
      ifNotCanceled({type: "ERROR", payload: err.message})
      return null
    }
  }

  //cleanup function
  useEffect(() => {
    return () => {
      setIsCancel(true)
    }
  }, [])

  return {addDocument, deleteDocument, updateDocument, response}
}