
import { plataformas } from '../constants/plataformas'
import useSingleGame from '../hooks/use-single-games'
import { useParams } from 'react-router-dom'
import './slider.css'
import { SliderAndTrailer } from '../components/slider-and-thriller'
import { PlatformsAvaliable } from '../components/platforms-avaliables'
import { BackgroundDetail } from '../components/detail-games-background'

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
            <div className='flex items-center justify-between pb-1'>
              <p className='text-slate-100 flex flex-col lg:flex-row gap-1 lg:gap-4'>lanzamiento: <span className='px-2 rounded-xl bg-slate-300 text-slate-600'>{singleGame?.released}</span></p>

              <div className='flex items-center lg:gap-4 flex-col lg:flex-row'> <p className='text-slate-100'>plataformas:</p>
                <PlatformsAvaliable plataformas={plataformas} singleGame={singleGame} />
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
