import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

const Header = (props) => {
    const navigate = useNavigate()
  return (
      <Container className='flex a-center j-between'>
      <div className="logo">
          <img src={logo} alt="logo" />
      </div>
      <button onClick={()=> navigate(props.login ? "/login" : "/signup" )}>
        {props.login ? 'Log in' : 'Sign In'}
      </button>
      </Container>
  )
}

export default Header

const Container = styled.div`

padding: 0 4rem;
.logo{
    img{
        height:5rem;
    }

}
button{
    padding: 0.5rem 1rem;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    color: white;
    font-weight: bolder;
    font-size: 1.05rem;
    border-radius:.3rem;

}

`