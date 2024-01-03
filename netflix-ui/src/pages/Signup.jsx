import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { firebaseAuth } from "../utils/firebase-config";
import { motion } from 'framer-motion';
import { validate } from "../utils/validation";



function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  })
  const [inputs, setinputs] = useState({
    email: '' ,
    password: ''
  })
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

    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
  
  }

  return (
    <motion.div
    initial={{ opacity: 0, x: -200 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.5 }}
  >
  <Container showPassword={showPassword}>
      <BackgroundImage />
      <div className="content">
      <Header login />
  <motion.div
    initial={{ opacity: 0, y: -200 }}
    animate={{ opacity: 1, y: 100 }}
    transition={{ delay: 1 }}
  >
  <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>
              Ready to watch? Enter your email to create or restart membership.
            </h6>
          </div>

          <div className="border-2 border-blue px-4 py-3">
          {errors.email && <div className={`${errors}`}><p className="errors">{errors.email}</p></div> }
          {errors.password && <div className={`${errors} `}><p className="errors">{errors.password}</p></div> }
          </div>

          <div className="form">
            <input
              type="email"
              placeholder="Email address"
              onChange={handleChange}
              name="email"
              value={formValues.email}
            />
            {showPassword && (
              <input
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
                name="password"
                value={formValues.password}
              />
            )}
            {!showPassword && (
              <button onClick={() => errors.email ? setShowPassword(false) : setShowPassword(true)}>Get Started</button>
            )}
          </div>
          {showPassword && <button onClick={handleSignIn}>Log In</button>}
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
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        h1 {
          padding: 0 25rem;
        }
      }
      .form {
        display: grid;
        grid-template-columns: ${({ showPassword }) =>
          showPassword ? "1fr 1fr" : "2fr 1fr"};
        width: 60%;
        input {
          color: black;
          border: none;
          padding: 1.5rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
        }
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
`;

export default Signup;
