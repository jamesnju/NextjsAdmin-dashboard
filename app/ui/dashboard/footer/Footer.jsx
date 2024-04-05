const year  = new Date().getFullYear();
const Footer = () => {
  return (
    <div className='w-100 bg-[var(--bgsoft)] p-10'>
        <p className='text-center'>Made by @jamesnju; All righrs reserved &copy; {year}</p>
    </div>
  )
}

export default Footer