
import Routers from '../routes/Routers'
import AsideMenu from './AsideMenu'
import Header from './Header'

const Layout = () => {
  return (
    <div className=" relative h-screen overflow-hidden p-2 md:p-4">
      <div className='-z-10 bg-slate-900 absolute inset-0'></div>
      <Header />
      <div className='flex h-[calc(100%_-_80px)]'>
        <AsideMenu />
        <Routers />
      </div>
    </div>
  )
}

export default Layout
