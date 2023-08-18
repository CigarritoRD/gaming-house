export const BackgroundDetail = ({ singleGame }) => {
  return <div className='absolute w-full inset-0 -z-10'>
    <div className='absolute w-full h-full inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/90'></div>
    <img className='w-full h-full object-cover' src={singleGame?.background_image_additional} alt="" />
  </div>
}
