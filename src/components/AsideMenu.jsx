import { useEffect, useState } from 'react'
import './scrollbarcss.css'
import { Link } from 'react-router-dom'
import { getPlatforms } from '../helpers/getPlatforms'
import { getGenres } from '../helpers/getGenres'

const AsideMenu = () => {
  const [genres, setGenres] = useState([])
  const [platforms, setPlatforms] = useState([])
  const [limit, setLimit] = useState({ platform: 5, genres: 5 })

  useEffect(() => {
    getPlatforms()
      .then(data => { setPlatforms(data) })
      .catch(err => console.log(err))
  }, [])
  useEffect(() => {
    getGenres()
      .then(data => { setGenres(data) })
      .catch(err => console.log(err))
  }, [])

  const OnChangeLimits = (e) => {
    const name = e.target.name
    console.log(name)
    setLimit(prevLimit => {
      return { ...prevLimit, [name]: prevLimit[name] === 5 ? 20 : 5 }
    })
  }
  return (
    <div className="hidden  md:flex p-2 flex-col gap-2 overflow-y-scroll min-w-fit scrollbar">
      <div className=" rounded-3xl min-w-[200px]">

        <h4 className="text-2xl text-slate-100">Por genero</h4>
        <ul className="p-4 flex flex-col gap-3">
          {genres?.slice(0, limit.genres).map(genre => (
            <li key={genre.name} className="text-xl text-slate-300 hover:text-yellow-400 capitalize cursor-pointer duration-200">
              <Link to={`games/${genre.name}`}>
                {genre.name}
              </Link>
            </li>
          ))}

        </ul>
        <button className='border px-2 text-slate-100 rounded-xl' name='genres' onClick={OnChangeLimits}>
          {limit.genres <= 5 ? 'Ver mas...' : 'Ver menos...'}
        </button>

      </div>

      <div className=" min-w-[200px] h-full ">
        <h4 className="text-2xl text-slate-100">Plataformas</h4>
        <ul className="p-4 flex flex-col gap-3">
          {platforms?.slice(0, limit.platform).map(platform => (
            <Link key={platform.id} to={`games/${platform.slug}`}>
              <li className="text-xl text-slate-300 hover:text-yellow-400 capitalize cursor-pointer duration-200">{platform.name}</li>
            </Link>
          ))}

        </ul>
        <button className='border px-2 text-slate-100 rounded-xl' name='platform' onClick={OnChangeLimits}>
          {limit.platform <= 5 ? 'Ver mas...' : 'Ver menos...'}
        </button>
      </div>

    </div >
  )
}
export default AsideMenu
