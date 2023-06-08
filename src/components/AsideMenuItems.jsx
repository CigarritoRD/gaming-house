import React from 'react'

const AsideMenuItems = ({ title, url, item }) => {
  return (
    <div className=" rounded-3xl min-w-[200px]">

      <h4 className="text-2xl text-slate-100">Por genero</h4>
      <ul className="p-4 flex flex-col gap-3">
        {genres?.map(genre => (
          <li key={genre.name} className="text-xl text-slate-300 hover:text-yellow-400 capitalize cursor-pointer duration-200">{genre.name}</li>
        ))}

      </ul>

    </div>
  )
}

export default AsideMenuItems
