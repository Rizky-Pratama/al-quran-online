import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-2">
      <h1 className='text-8xl font-black text-stone-900'>NotFound</h1>
      <Link to="/" className='text-xl font-semibold text-stone-900 underline underline-offset-auto'>Back</Link>
    </div>
  )
}

export default NotFound