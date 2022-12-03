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

// STYLES
const DivTitle = styled.div`
  //text-align: center;
  margin: 0 auto;
  padding: 2rem 8rem;
`;
const Div = styled.div`
  max-width: 1500px;
  margin: 0 auto;

  h2 {
    text-align: center;
    padding-bottom: 3rem;
  }
`;
const Container = styled.div`
  background: #f7f7ff;
  padding: 5rem;
  margin: 5rem auto;
  max-width: 1250px;
`;

const Form = styled.form`
  display: grid;
  flex-direction: column;
  margin: 6rem auto;
  background-color: #f7f7ff;
  height: auto;
  padding: 4rem;
  font-family: "Blinker", sans-serif;

  @media (max-width: 768px) {
    padding: 0;
  }
  label {
    display: block;
    margin: 2rem auto;
  }
  span {
    display: block;
    margin-bottom: 0.5rem;
  }
  input,
  textarea {
    padding: 0.5rem 1rem;
    border: solid 1px #ddd;
    border-radius: 0.3rem;
    background-color: #ffffff; // here
    color: #053651;
    font-weight: 300;
    font-size: 1em;
    width: 100%;
    box-sizing: border-box;
    //allow new lines in textarea
    white-space: pre-line;
    overflow-wrap: break-word;
  }
  textarea {
    min-height: 19rem;
  }
`;
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
    background: #2998d5;
    color: #101b21;
    border: #2998d5 solid 1px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const PostFormLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
// CATEGORY SELECTOR
const categories = [
  { value: "Motivation", label: "Motivation" },
  { value: "", label: "Mentor" },
  { value: "Experience", label: "Experience" },
  { value: "Help", label: "Help" },
  { value: "Information", label: "Information" },
  { value: "Advice", label: "Advice" },
];

// FUNCTION COMPONENT START

const Createpost = () => {
  const navigate = useNavigate();
  const { addDocument, response } = useFirestore("posts");
  const { document } = useCollection("users");
  const [users, setUsers] = useState([]);
  const { user } = useAuthContext();

  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  //const [link, setLink] = useState("");
  const [errorForm, setErrorForm] = useState(null);

  useEffect(() => {
    if (document) {
      const options = document.map((user) => {
        return { value: user, label: user.displayName };
      });
      setUsers(options);
    }
  }, [document]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorForm(null);
    if (!category) {
      setErrorForm("You need to select a post category");
      return;
    }

    const postedBy = {
      displayName: user.displayName,
      id: user.uid,
    };

    const posts = {
      name,
      details,

      category: category.value,
      date: timestamp.fromDate(new Date(date)),
      comments: [],
      postedBy,
    };

    await addDocument(posts);
    if (!response.error) {
      navigate("/mainpage");
    }
  };

  return (
    <div>
      <Navbar />
      <Sidecontent />
      <Container>
        <Div>
          <DivTitle>
            <h2>Add a new post</h2>
            <p>Share your experience, your story with our community.</p>
          </DivTitle>

          <Form onSubmit={handleSubmit}>
            <PostFormLayout>
              {/* POST SELECTION FIELDS */}
              <div>
                <label>
                  <span>Post Title:</span>
                  <input
                    required
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </label>

                <label>
                  <span>Date:</span>
                  <input
                    required
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                  />
                </label>
                <label>
                  <span>Category:</span>
                  <Select onChange={(option) => setCategory(option)} options={categories} />
                </label>
              </div>
              {/* POST TEXTAREA FIELD */}
              <div>
                <label>
                  <span>Post detail:</span>
                  <textarea
                    required
                    spellCheck="true"
                    placeholder="Write your post here"
                    //wrap="hard"
                    type="text"
                    onChange={(e) => setDetails(e.target.value)}
                    value={details}></textarea>
                </label>
              </div>
            </PostFormLayout>
            <div>
              <Btn1>Submit post</Btn1>
              {errorForm && <p>{errorForm}</p>}
            </div>
          </Form>
        </Div>
      </Container>
      <Footer />
    </div>
  );
};

export default Createpost;
