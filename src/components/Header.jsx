import React, { useRef } from 'react'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const queryRef = useRef('')
  const submitHandler = (event) => {
    event.preventDefault()
    navigate(`/search/${queryRef.current.value}`)

    console.log('searching...')
  }
  return (
    <header className='h-24 px-4 text-slate-200'>
      <nav className='flex items-center h-full justify-between gap-8'>
        <NavLink to={'/'}>
          <h2 className='text-3xl text-center font-bold min-w-[200px]'>Game-GG</h2>
        </NavLink>
        <div className='flex-1 relative'>
          <form onSubmit={submitHandler} action="">
            <input ref={queryRef} className='text-xl placeholder:text-slate-600 text-slate-300 w-full p-3 rounded-2xl bg-slate-950 outline-none' type="text" placeholder='Encuentra cientos de miles de juegos...' />
            <SearchOutlinedIcon className='absolute top-3 right-2' fontSize='large' />
          </form>
        </div>
        <div>
          <ul className='flex text-xl gap-4'>
            <FavoriteOutlinedIcon fontSize='large' />
            <PersonOutlinedIcon fontSize='large' />
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
