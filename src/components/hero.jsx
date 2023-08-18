export default function Portada ({ portada }) {
  console.log('refresh portada')
  return (
    <div className='rounded-3xl bg-slate-950 min-h-[300px] xl:min-h-[400px] overflow-hidden relative '>

      <div className=' absolute inset-0  flex justify-end items-end p-8'>

        <h2 className=' bg-black/60 text-2xl md:text-4xl py-1 px-6 text-slate-200 font-bold'>{portada?.titulo}</h2>
      </div>
      <img className='w-full rounded-3xl h-full object-cover object-top' src={portada?.imagen} alt="" loading='lazy' />
    </div>)
}
