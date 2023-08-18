export const SliderAndTrailer = ({ trailers, screenShots }) => {
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
