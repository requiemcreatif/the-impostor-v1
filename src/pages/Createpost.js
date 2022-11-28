import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";
import { useFirestore } from "../hooks/useFirestore";
import { timestamp } from "../firebase/config";
import Navbar from "../components/Navbar";
import Sidecontent from "../components/Sidecontent";
import Footer from "../components/Footer";
import styled from "styled-components";

const Container = styled.div`
    background: transparent;
    padding: 5rem;
    margin: 5rem auto;
    max-width: 1250px;
    `

const Form = styled.form`
    margin: 6rem auto;
    //max-width: 1000rem;
    height: auto;
    padding: 4rem;
    border: 1px solid #ccc;
    border-radius: 1rem;
    box-shadow: 0 0 1rem #ccc;
    font-family: "Blinker", sans-serif;
    label {
        display: block;
        margin: 2rem auto;
    }
    span {
        display: block;
        margin-bottom: 0.5rem;
    }
    input, textarea {
        padding: 0.5rem 1rem ;
        border: solid 1px #ddd;
        border-radius: 0.3rem;
        background: transparent;
        color: #053651;
        font-weight: 300;
        font-size: 1em;
        width: 100%;
        box-sizing: border-box;
    }
    textarea {
        min-height: 16rem;
    }
`
const Btn1 = styled.button`
        margin-top: 2rem;
        width: 20rem;
        height: 5rem;
        padding: 0.5rem 1rem;
        border: solid 1px #053651;
        border-radius: 0.5rem;
        background: #053651;
        color: white;
        font-weight: 300;
        font-size: 1.5rem;
        cursor: pointer;
        &:hover {
            background: #2998D5;
            color: #101B21;
            border: #2998D5 solid 1px;             
    }`

    const categories = [
        {value: "motivation", label: "motivation"},
        {value: "mentor", label: "mentor"},
        {value: "experience", label: "experience"},
        {value: "help", label: "help"},
    ]
    


const Createpost = () => {
    const navigate = useNavigate()
    const {addDocument, response} = useFirestore("posts")
    const {document} = useCollection("users")
    const [users, setUsers] = useState([])
    const {user} = useAuthContext()



    const [name, setName] = useState("")
    const [details, setDetails] = useState("")
    const [date, setDate] = useState("")
    const [category, setCategory] = useState("")
    
    const [errorForm, setErrorForm] = useState(null)

    useEffect(() => {
        if(document) {
            const options = document.map(user => {
                return {value: user, label: user.displayName}
            })
            setUsers(options)
        }
    }, [document])


    const handleSubmit = async(e) => {
        e.preventDefault()
        setErrorForm(null)
        if(!category) {
            setErrorForm("You need to select a post category")
            return
        }

    const postedBy = {
        displayName: user.displayName,
        id: user.uid
    }

    const posts = {
        name, 
        details,
        category: category.value,
        date: timestamp.fromDate(new Date(date)),
        comments: [],
        postedBy,
    }


        await addDocument(posts)
        if(!response.error) {
            navigate("/mainpage")
        }
    }

  return( 
  <div>
        <Navbar />
        <Sidecontent />
        <Container>
    <h2>Add a new post</h2>
    <Form onSubmit={handleSubmit}>
        <label>
            <span>Post title:</span>
            <input 
            required
            type="text" 
            onChange={(e)=> setName(e.target.value)}
            value={name}
            />
        </label>
        <label>
            <span>Post detail:</span>
            <textarea 
            required
            type="tex" 
            onChange={(e)=> setDetails(e.target.value)}
            value={details}
            ></textarea>
        </label>
        <label>
            <span>Post date:</span>
            <input 
            required
            type="date" 
            onChange={(e)=> setDate(e.target.value)}
            value={date}
            />
        </label>
        <label>
            <span>Post category:</span>
            <Select
            onChange={(option) => setCategory(option)}
            options={categories}
            />
        </label>
        
        <Btn1>Submit post</Btn1>
        {errorForm && <p>{errorForm}</p>}
    </Form>
    </Container>
    <Footer />
  </div>)
};

export default Createpost;
