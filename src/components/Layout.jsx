
import Routers from '../routes/router'
import AsideMenu from './aside-menu'
import Header from './header'

const Layout = () => {
  return (
    <div className=" relative h-screen overflow-hidden p-2 md:p-4">
      <div className='-z-10 bg-[#0F1C2E] absolute inset-0'></div>
      <Header />
      <div className='flex h-[calc(100%_-_80px)]'>
        <AsideMenu />
        <Routers />
      </div>
    </div>

  )
}

export default Layout
