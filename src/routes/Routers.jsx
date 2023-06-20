
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const Games = lazy(() => import('../pages/Games'))
const Home = lazy(() => import('../pages/Home'))
const GameDetail = lazy(() => import('../pages/GameDetail'))
const Search = lazy(() => import('../pages/Search'))

const Routers = () => {
  return (
    <Suspense fallback={<h1>Cargando...</h1>}>
      <Routes>
        <Route path='/' element={<Home />} />
        < Route path='/search/' element={< Search />} />
        < Route path='/search/:query' element={< Search />} />
        < Route path='/games' element={< Games />} />
        < Route path='/games/:name' element={< Games />} />
        < Route path='/games/:platform/:genre' element={< Games />} />
        < Route path='/games/detail/:slug' element={< GameDetail />} />
      </Routes >
    </Suspense>
  )
}

export default Routers
