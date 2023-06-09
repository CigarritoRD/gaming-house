import React, { useRef } from 'react'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { NavLink, useNavigate } from 'react-router-dom'
import ggIcon from '../assets/icon-gg.svg'

const Header = () => {
  const navigate = useNavigate()
  const queryRef = useRef('')
  const submitHandler = (event) => {
    event.preventDefault()
    navigate(`/search/${queryRef.current.value}`)

    console.log('searching...')
  }
  return (
    <header className='h-22 px-2 text-slate-200 pb-2'>
      <nav className='flex items-center h-full justify-between gap-4  mx-auto'>
        <NavLink to={'/'}>
          <div className=' gap-2 flex items-center min-w-[200px]'>
            <img className='w-[80px] h-[80px] block' src={ggIcon} alt="" />
            <h2 className='text-xl font-bold italic border-b border-slate-600'>Games</h2>
          </div>
        </NavLink>

        <div className='flex gap-8'>
          <div className='flex-1 relative'>
            <form onSubmit={submitHandler} action="">
              <input ref={queryRef} className=' min-w-[180px] md:min-w-[300px] placeholder:text-slate-600 text-slate-300 w-full p-3 rounded-2xl bg-slate-800/90 outline-none' type="text" placeholder='Encuentra cientos de miles de juegos...' />
              <SearchOutlinedIcon className='absolute top-3 right-2' fontSize='medium' />
            </form>
          </div>
          <ul className='flex items-center'>
            <li className='lg:text-lg px-2 py-1 rounded-xl hover:bg-slate-200/20 duration-150 cursor-pointer'>Mejores</li>
            <li className='lg:text-lg px-2 py-1 rounded-xl hover:bg-slate-200/20 duration-150 cursor-pointer'>Nuevos</li>
            <li className='lg:text-lg px-2 py-1 rounded-xl hover:bg-slate-200/20 duration-150 cursor-pointer'>Proximos estrenos </li>
            <li className='lg:text-lg px-2 py-1 rounded-xl hover:bg-slate-200/20 duration-150 cursor-pointer'>Plataformas </li>
          </ul>
        </div>
        <div>
          <ul className='flex text-xl gap-4'>
            <li>

              <FavoriteOutlinedIcon fontSize='medium' />
            </li>
            <li>

              <PersonOutlinedIcon fontSize='medium' />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
