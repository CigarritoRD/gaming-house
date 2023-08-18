export const PlatformsAvaliable = ({ singleGame, plataformas }) => {
  return (
    <div className='flex flex-wrap gap-2 py-2'>{singleGame?.parent_platforms?.map(plataforma => {
      if (!plataformas[plataforma.platform.name]) return ''
      return <div
        className='max-w-[18px] md:max-w-[22px]'
        key={plataforma.platform.id}>
        <img className='w-full'
          src={plataformas[plataforma.platform.name]}
          alt={plataforma.platform.name}
        />
      </div>
    })}
    </div>)
}
