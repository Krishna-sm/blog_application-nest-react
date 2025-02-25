import React from 'react'
import BlogCard from '../components/BlogCard'

const HomePage = () => {
  return (
    <>
          <div className="grid   grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-[96%] lg:w-[90%] mx-auto gap-x-4 gap-y-4
          ">
            {
              Array(10).fill(null).map((cur,i)=>{
                return <BlogCard key={i} />
              })
            }
          </div>
    </>
  )
}

export default HomePage