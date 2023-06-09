import React, { useRef, useState } from 'react'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import { NavLink, useNavigate } from 'react-router-dom'
import ggIcon from '../assets/icon-gg.svg'

const Header = () => {
  const [menu, setMenu] = useState(false)
  const navigate = useNavigate()
  const queryRef = useRef('')
  const submitHandler = (event) => {
    event.preventDefault()
    navigate(`/search/${queryRef.current.value}`)

    console.log('searching...')
  }
  const handleMenu = () => {
    setMenu(!menu)
  }
  return (
    <header className='h-22 px-2 text-slate-200 pb-2'>
      <nav className='flex items-center h-full justify-between gap-4  mx-auto'>
        <NavLink to={'/'}>
          <div className=' gap-2 flex items-center md:min-w-[150px]'>
            <img className='lg:w-[80px] lg:h-[80px] block' src={ggIcon} alt="" />
            <h2 className='text-xl font-bold italic border-b border-slate-600'>Games</h2>
          </div>
        </NavLink>

        <div className='flex gap-8'>
          <div className='flex-1 relative'>
            <form onSubmit={submitHandler} action="">
              <input ref={queryRef} className=' min-w-[180px] md:min-w-[200px] lg:min-w-[300px] placeholder:text-slate-600 text-slate-300 w-full p-3 rounded-2xl bg-slate-800/90 outline-none' type="text" placeholder='Encuentra cientos de miles de juegos...' />
              <SearchOutlinedIcon className='absolute top-3 right-2' fontSize='medium' />
            </form>
          </div>

          <ul className='items-center hidden md:flex'>
            <NavLink to={'mejores'}>
              <li className='text-sm lg:text-lg px-2 py-1 rounded-xl hover:bg-slate-200/20 duration-150 cursor-pointer'>Mejores</li>
            </NavLink>
            <NavLink to={'nuevos'}>
              <li className='text-sm lg:text-lg px-2 py-1 rounded-xl hover:bg-slate-200/20 duration-150 cursor-pointer'>Nuevos</li>
            </NavLink>
            <NavLink to={'proximos-estrenos'}>
              <li className='text-sm lg:text-lg px-2 py-1 rounded-xl hover:bg-slate-200/20 duration-150 cursor-pointer'>Proximos estrenos </li>
            </NavLink >
            <NavLink to={'plataformas'}>
              <li className='text-sm lg:text-lg px-2 py-1 rounded-xl hover:bg-slate-200/20 duration-150 cursor-pointer'>Plataformas </li>
            </NavLink>
          </ul>

        </div>
        <div>
          <ul className='hidden md:flex text-xl gap-4'>
            <li>

              <FavoriteOutlinedIcon fontSize='medium' />
            </li>
            <li>

              <PersonOutlinedIcon fontSize='medium' />
            </li>
          </ul>
          {/* menu movil */}

          <div className='md:hidden cursor-pointer' onClick={handleMenu}>
            <MenuIcon />
          </div>
          {menu && <div className='absolute inset-0 backdrop-blur-[2px] z-30 bg-black/60'></div>}
          <div className={`md:hidden absolute w-[60%] h-full z-40 p-4 text-lg bg-slate-600 top-0 right-0 shadow-lg duration-200 ${menu ? 'translate-x-[0%]' : 'translate-x-[100%]'}`}>

            <ul className='relative'>
              {menu && <CloseIcon onClick={handleMenu} className='absolute cursor-pointer -left-40 rounded-full' />}
              <div className='flex justify-between border-b pb-2 border-slate-500'>
                <li>
                  <FavoriteOutlinedIcon fontSize='medium' />
                </li>
                <li>
                  <PersonOutlinedIcon fontSize='medium' />
                </li>
              </div>

              <li className='lg:text-lg px-2 py-1 rounded-xl hover:bg-slate-200/20 duration-150 cursor-pointer'>Mejores</li>
              <li className='lg:text-lg px-2 py-1 rounded-xl hover:bg-slate-200/20 duration-150 cursor-pointer'>Nuevos</li>
              <li className='lg:text-lg px-2 py-1 rounded-xl hover:bg-slate-200/20 duration-150 cursor-pointer'>Proximos estrenos </li>
              <li className='lg:text-lg px-2 py-1 rounded-xl hover:bg-slate-200/20 duration-150 cursor-pointer'>Plataformas </li>

            </ul>
          </div>
        </div>

      </nav>
    </header>
  )
}

export default Header
