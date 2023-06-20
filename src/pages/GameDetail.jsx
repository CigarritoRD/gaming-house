
import { plataformas } from '../constants/plataformas'
import useSingleGame from '../hooks/useSingleGame'
import { useParams } from 'react-router-dom'
import './slider.css'

const GameDetail = () => {
  const { slug } = useParams()

  const { screenShots, trailers, singleGame } = useSingleGame({ slug })

  return (
    <div className='mx-auto w-full overflow-y-scroll p-4 scrollbar max-w-[1200px]'>
      <div className='absolute w-full inset-0 -z-10'>
        <div className='absolute w-full h-full inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/90'></div>
        <img className='w-full h-full object-cover' src={singleGame?.background_image_additional} alt="" />
      </div>
      <div className='grid gap-8 pt-10'>
        <div className='z-20 relative '>
          <h1 className='text-4xl lg:text-6xl pb-4 text-slate-200 font-bold '>{singleGame.name}</h1>
          <div className='flex items-center justify-between'>
            <p className='text-slate-100'>lanzamiento: <span className='px-2 rounded-xl bg-slate-300 text-slate-600'>{singleGame?.released}</span></p>
            <div className='flex items-center gap-2'> <p className='text-slate-100'>plataformas:</p>
              <div className='flex flex-wrap gap-2 py-2'>{singleGame?.parent_platforms?.map(plataforma => {
                return <div className='max-h-[22px] max-w-[22px]' key={plataforma.platform.id}><img className='w-full'
                  src={plataformas[plataforma.platform.name]}
                  alt={plataforma.platform.name} /></div>
              })}
              </div>
            </div>
          </div>
          <div className='overflow-hidden max-h-[400px] rounded-xl'>
            <img className='w-full rounded-xl' src={singleGame?.background_image} alt="" />
          </div>
          {/* RATINGS */}
          <div className='flex gap-4 p-2 justify-between md:justify-start max-w-[600px] text-slate-100'>
            <div className=''>
              <div className='border-2 py-1 px-2 rounded-xl text-center border-yellow-400 w-full'>
                <p className='font-bold text-green-500 text-2xl md:text-4xl'>{singleGame?.metacritic}</p>

              </div>
              <p className='text-md'>Metacritic</p>
            </div>
            <div>
              <div className='border-2 py-1 px-2 rounded-xl text-center border-yellow-400 w-full'>
                <p className='font-bold text-green-500 text-2xl md:text-4xl'>{singleGame?.metacritic}</p>

              </div>
              <p className='text-md'>Metacritic</p>
            </div>
            <div>
              <div className='border-2 py-1 px-2 rounded-xl text-center border-yellow-400 w-full'>
                <p className='font-bold text-green-500 text-2xl md:text-4xl'>{singleGame?.metacritic}</p>

              </div>
              <p className='text-md'>Metacritic</p>
            </div>
          </div>
          {/* RATINGS */}
          <div dangerouslySetInnerHTML={{ __html: singleGame?.description }} className='text-slate-300 p-2  text-lg'>
          </div>

        </div>
        <div className='z-20 text-2xl h-full text-slate-200'>

          <div className=' flex flex-col gap-4'>
            <div className='max-h-[460px] max-w-[800px]'>
              {!!trailers?.length && <video src={trailers[0]?.data['480']} className='min-h-[400px]' controls>
                <source src={trailers[0]?.data['480']} type="video/mp4" /></video>}
            </div>
            <div className='border slider'>
              {screenShots?.map(screenshot => (
                <img key={screenshot.id} className='w-full h-full sliderItem' src={screenshot.image} alt="" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameDetail
