
import { plataformas } from '../constants/plataformas'
import useSingleGame from '../hooks/useSingleGame'
import { useParams } from 'react-router-dom'
import './slider.css'

const BackgroundDetail = ({ singleGame }) => {
  return <div className='absolute w-full inset-0 -z-10'>
    <div className='absolute w-full h-full inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/90'></div>
    <img className='w-full h-full object-cover' src={singleGame?.background_image_additional} alt="" />
  </div>
}

const SliderAndTrailer = ({ trailers, screenShots }) => {
  return (<div className=' flex flex-col gap-4'>
    {/* trailer of game */}
    <div className='max-h-[460px] max-w-[800px]'>
      {!!trailers?.length && <video src={trailers[0]?.data['480']} className='min-h-[400px]' controls>
        <source src={trailers[0]?.data['480']} type="video/mp4" /></video>}
    </div>

    {/*  slider of screenshots */}
    <div className='flex max-w-[800px] rounded-xl border border-slate-600 shadow-lg shadow-black snap-x snap-mandatory overflow-x-scroll '>
      {screenShots?.map(screenshot => (
        <div className=' h-[400px] w-full snap-center shrink-0' key={screenshot.image}>
          <img className='h-[400px] w-full object-cover' src={screenshot.image} alt="" />
        </div>

      ))}
    </div>
  </div>)
}
const PlatformsAvaliable = ({ singleGame }) => {
  return (<div className='flex flex-wrap gap-2 py-2'>{singleGame?.parent_platforms?.map(plataforma => {
    return <div className='max-w-[18px] md:max-w-[22px]' key={plataforma.platform.id}><img className='w-full'
      src={plataformas[plataforma.platform.name]}
      alt={plataforma.platform.name} /></div>
  })}
  </div>)
}
const GameDetail = () => {
  const { slug } = useParams()
  const { screenShots, trailers, singleGame } = useSingleGame({ slug })
  return (
    <section className='overflow-y-scroll mx-auto w-full md:p-4 '>
      <div className=' w-full min-xl:overflow-y-scroll mx-auto max-w-[1280px] scrollbar '>
        {/* back ground */}
        <BackgroundDetail singleGame={singleGame} />
        <div className='grid gap-4 md:gap-8 pt-10 md:px-4'>
          <div className='z-20 relative '>
            <h1 className='text-4xl lg:text-6xl pb-4 text-slate-200 font-bold '>{singleGame.name}</h1>
            <div className='flex items-center justify-between'>
              <p className='text-slate-100 flex flex-col md:block'>lanzamiento: <span className='px-2 rounded-xl bg-slate-300 text-slate-600'>{singleGame?.released}</span></p>

              <div className='flex items-center md:gap-2 flex-col'> <p className='text-slate-100'>plataformas:</p>
                <PlatformsAvaliable singleGame={singleGame} />
              </div>
            </div>
            <div className='overflow-hidden max-h-[400px] rounded-xl'>
              <img className='w-full rounded-xl' src={singleGame?.background_image} alt="" />
            </div>

            <div className='flex  gap-8 p-2 items-center'>
              <div className='bg-slate-800 border-2 md:border-4 rounded-xl max-h-[100px] border-yellow-400 flex flex-col p-2 justify-between items-center'>
                <span className='text-4xl md:text-6xl text-green-400 font-bold'>{singleGame.metacritic}</span>
                <span className='text-slate-100 text-lg font-medium'>Metacritic</span>
              </div>
              <div className=''>
                <div>
                  <span className='text-slate-100 md:text-xl'>Generos:</span>
                  <ul className='flex gap-2 flex-wrap'>
                    {singleGame.genres?.map(genre => <li key={genre.name} className='px-2 text-sm md:text-md rounded-lg bg-slate-100 text-slate-800'>{genre.name}</li>)}
                  </ul>
                </div>
                <div className=''>
                  <h4 className='md:text-xl text-slate-100 pt-4'>Desarrollado por:</h4>
                  <ul className='flex flex-wrap gap-2'>
                    {singleGame.developers?.map(dev => (
                      <li key={dev.name} className='px-2 rounded-lg text-sm md:text-md bg-slate-100 text-slate-800'>
                        <span >{dev.name}
                        </span>
                      </li>))}
                  </ul>
                </div>
              </div>
            </div>
            <h4 className='md:text-xl text-slate-100 pt-4'> Disponible en :</h4>
            <ul className='flex flex-wrap gap-2'>
              {singleGame.stores?.map(dev => (
                <li key={dev.store.name} className='border rounded-lg overflow-hidden flex gap-4 items-center bg-slate-200 font-bold'>
                  <div className='h-10'>
                    <img className='block h-full' src={dev.store.image_background} alt="" />
                  </div>

                  <span className='pr-2' >{dev.store.name}
                  </span>
                </li>))}
            </ul>

            <h3 className='text-3xl text-slate-100 my-4'>Descripcion:</h3>
            <div
              dangerouslySetInnerHTML={{ __html: singleGame?.description }}
              className='text-slate-300 p-2 max-w-[800px] text-lg'>
            </div>

          </div>
          <div className='z-20 text-2xl h-full text-slate-200'>
            <SliderAndTrailer trailers={trailers} screenShots={screenShots} />
          </div>
        </div>
      </div>
      {/* <div className='px-4 min-w-[400px] w-full justify-self-start'>
        <h4 className='text-2xl text-slate-100 py-5'>Desarrollado por:</h4>
        <ul className='flex flex-col gap-2 max-w-[300px]'>
          {singleGame.developers?.map(dev => (
            <li key={dev.name} className='p-1 rounded-lg bg-slate-100 text-slate-800'>
              <span >{dev.name}
              </span>
            </li>))}
        </ul>
        <h4 className='text-2xl text-slate-100 py-5'> Tiendas:</h4>
        <ul className='flex flex-col gap-2 max-w-[300px]'>
          {singleGame.stores?.map(dev => (
            <li key={dev.store.name} className='border rounded-lg overflow-hidden flex gap-4 items-center bg-slate-200 font-bold'>
              <div className='h-10'>
                <img className='block h-full' src={dev.store.image_background} alt="" />
              </div>

              <span className='pr-2' >{dev.store.name}
              </span>
            </li>))}
        </ul>
      </div> */}
    </section>

  )
}

export default GameDetail
