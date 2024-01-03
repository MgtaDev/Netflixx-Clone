import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import background from "../assets/login.jpg";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { motion } from 'framer-motion';
import { validate } from '../utils/validation'

function Login() {
  const [inputs, setinputs] = useState({
    email: '' ,
    password: ''
  })
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  })
  console.log(inputs);
  console.log(errors);
  
  function handleChange (e){
    setinputs({
      ...inputs,
      [e.target.name] : e.target.value
    })
    setErrors(
      validate({
        ...inputs,
        [e.target.name] : e.target.value
      })
    )
  
  }

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, inputs.email, inputs.password);
    } catch (error) {
      console.log(error.code);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <motion.div
    initial={{ opacity: 0, x: -200 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.5 }}
  >
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header />
        <motion.div
    initial={{ opacity: 0, y: -200 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1 }}
  >
<div className="form-container flex column a-center j-center">
          <div className="border-2 border-blue px-4 py-3">
          {errors.email && <div className={`${errors}`}><p className="errors">{errors.email}</p></div> }
          {errors.password && <div className={`${errors} `}><p className="errors">{errors.password}</p></div> }
          </div>
         
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className="container flex column">
              <input
                type="text"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={inputs.email}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={handleChange}
                name="password"
                value={inputs.password}
              />
              <button onClick={handleLogin}>Login to your account</button>
            </div>
          </div>
        </div>
  </motion.div>
        
      </div>
    </Container>
  </motion.div>

  );
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    grid-template-rows: 15vh 85vh;
    .title{
      font-size:30px
    }
    .form-container {
      gap: 1.5rem;
      height: 85vh;
      .form {
        border-radius:1rem;
        padding: 2rem 0rem;
        background-color: #000000b0;
        width: 25vw;
        gap: 2rem;
        color: white;
        .container {
          gap: 2rem;
          input {
            padding: 0.5rem 1rem;
            width: 100%;
            border-radius:.2rem;
          }
        
          button {
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.2rem;
            font-weight: bolder;
            font-size: 1.05rem;
          }
        }
      }
    }
  }
`;

export default Login;
