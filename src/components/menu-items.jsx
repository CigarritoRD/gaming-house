import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuItems = ({ items: NAVLINK, className }) => {
  return (
    <ul className='items-center hidden md:flex'>
      {Object.entries(NAVLINK).map(([key, { HREF, TEXT }]) => (
        < NavLink key={key} to={HREF} >
          <li className='text-sm lg:text-lg px-2 py-1 rounded-xl hover:bg-slate-200/20 duration-150 cursor-pointer'>{TEXT}</li>
        </NavLink>
      ))}
    </ul>
  )
}

export default MenuItems
