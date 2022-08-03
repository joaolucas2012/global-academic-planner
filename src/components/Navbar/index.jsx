import React from 'react'
import { FixedNav } from './styles'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: 'none',
    }
  }
  return (
    <FixedNav>
      <NavLink style={navLinkStyles} to='/register'>Cadastrar-se</NavLink>
    </FixedNav>
  )
}
