import { useEffect, useState } from 'react'
import './scrollbarcss.css'
import { Link } from 'react-router-dom'
const AsideMenu = () => {
  const [genres, setGenres] = useState([])
  const [platforms, setPlatforms] = useState([])
  const [limit, setLimit] = useState({ platform: 5, genres: 5 })
  const getGenres = async () => {
    const url = 'https://api.rawg.io/api/genres?key=0beea51f3404489e88ca4d53a1483c54'
    try {
      const res = await fetch(url)
      if (!res.ok) throw new Error('error al encontrar los generos')
      const { results } = await res.json()
      setGenres(results)
    } catch (error) {
      console.log(error)
    }
  }

  const getPlatforms = async () => {
    const url = 'https://api.rawg.io/api/platforms?key=0beea51f3404489e88ca4d53a1483c54'
    try {
      const res = await fetch(url)
      if (!res.ok) throw new Error('error al encontrar los generos')
      const { results } = await res.json()
      setPlatforms(results)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => getPlatforms, [])
  useEffect(() => getGenres, [])

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
            <li key={platform.name} className="text-xl text-slate-300 hover:text-yellow-400 capitalize cursor-pointer duration-200">{platform.name}</li>
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
