
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import GameDetail from '../pages/GameDetail'
import Home from '../pages/Home'
import Games from '../pages/Games'
import Search from '../pages/Search'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search/' element={<Search />} />
      <Route path='/search/:query' element={<Search />} />
      <Route path='/games' element={<Games />} />
      <Route path='/games/:genre' element={<Games />} />
      <Route path='/games/detail/:slug' element={<GameDetail />} />
    </Routes>
  )
}

export default Routers
