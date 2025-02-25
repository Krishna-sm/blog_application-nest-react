import React, { useId } from 'react'
import { Link } from 'react-router'

const BlogCard = () => {
  const id = useId()
  return (
    <>
        <Link to={'/blog/'+id} className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full">
  <div className="relative h-56 m-2.5 overflow-hidden text-white  object-center rounded-md">
    <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" className='w-full h-full object-cover transition-all duration-300 hover:scale-125' alt="card-image" />
  </div>
  <div className="p-4">
    <h6 className="mb-2 text-slate-800 text-xl font-semibold">
      Website Review Check
    </h6>
    <p className="text-slate-600 leading-normal font-light">
      The place is close to Barceloneta Beach and bus stop just 2 min by walk
      and near to "Naviglio" where you can enjoy the main night life in
      Barcelona.
    </p>
  </div>
  <ul className="flex items-center gap-x-2 px-4 xl:px-4 flex-wrap">
    {
      Array(5).fill(null).map((cur,i)=>{
        return <li className='px-6 poppins-medium py-1 rounded-md border-tertiary border text-tertiary' key={i}>#{`Love`}</li>
      })
    }
  </ul>
  <div className="px-4 pb-4 pt-0 mt-2">
    <button className="rounded-md bg-tertiary cursor-pointer py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Read more
    </button>
  </div>
</Link>

    </>
  )
}

export default BlogCard