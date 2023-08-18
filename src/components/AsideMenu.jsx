import { useEffect, useState } from 'react'
import './scrollbarcss.css'
import { Link } from 'react-router-dom'
import { getPlatforms } from '../services/getPlatforms'
import { getGenres } from '../services/getGenres'

const AsideMenu = () => {
  const [genres, setGenres] = useState([])
  const [platforms, setPlatforms] = useState([])
  const [limit, setLimit] = useState({ platform: 5, genres: 5 })

  useEffect(() => {
    getGenres()
      .then(data => { setGenres(data) })
      .catch(err => console.log(err))
    getPlatforms()
      .then(data => { setPlatforms(data) })
      .catch(err => console.log(err))
  }, [])

  const OnChangeLimits = (e) => {
    const name = e.target.name
    setLimit(prevLimit => {
      return { ...prevLimit, [name]: prevLimit[name] === 5 ? 20 : 5 }
    })
  }
  return (
    <div className="hidden md:flex p-2 flex-col gap-2 overflow-y-scroll min-w-[300px] scrollbar">
      <div className=" rounded-3xl min-w-[200px] ">

        <h4 className="text-2xl text-slate-100">Por genero</h4>
        <ul className={`${limit.genres === 20 ? ' max-h-[1050px]' : 'max-h-[350px]'} p-4 flex flex-col gap-3`}>
          {genres?.slice(0, limit.genres).map(genre => (
            <li key={genre.name} className="text-lg text-slate-300 hover:text-yellow-400 capitalize cursor-pointer duration-200">
              <Link className='flex items-center gap-2' to={`games/${genre.name}`}>
                <img className='h-10 w-10 object-cover rounded-xl' src={genre.image_background} alt="" /><p>{genre.name}</p>
              </Link>
            </li>
          ))}

        </ul>
        <button className='border px-2 text-slate-900 bg-slate-300 w-full py-1 rounded-xl' name='genres' onClick={OnChangeLimits}>
          {limit.genres <= 5 ? 'Ver mas...' : 'Ver menos...'}
        </button>

      </div>

      <div className=" min-w-[200px] h-full ">
        <h4 className="text-2xl text-slate-100">Plataformas</h4>
        <ul className="p-4 flex flex-col gap-3">
          {platforms?.slice(0, limit.platform).map(platform => (

            <li key={platform.id} className="text-lg text-slate-300 hover:text-yellow-400 capitalize cursor-pointer duration-200">
              <Link className='flex items-center gap-2' to={`games/${platform.slug}`}>
                <img className='h-10 w-10 object-cover rounded-xl' src={platform.image_background} alt="" />  <p>{platform.name}</p>
              </Link>
            </li>
          ))}

        </ul>
        <button className='border px-2 text-slate-900 bg-slate-300 w-full py-1 rounded-xl' name='platform' onClick={OnChangeLimits}>
          {limit.platform <= 5 ? 'Ver mas...' : 'Ver menos...'}
        </button>
      </div>

    </div >
  )
}
export default AsideMenu
