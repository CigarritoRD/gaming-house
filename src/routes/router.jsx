
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
const DiscoverType = lazy(() => import('../pages/discover-typeof-games'))
const Games = lazy(() => import('../pages/games'))
const Home = lazy(() => import('../pages/home'))
const GameDetail = lazy(() => import('../pages/game-details'))
const Search = lazy(() => import('../pages/search'))

const Routers = () => {
  return (
    <Suspense fallback={<h1>Cargando...</h1>}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:type' element={<DiscoverType />} />
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
