import React from 'react'
import BlogArtical from '../components/BlogArtical'

const BlogPage = () => {
  return (
    <>
                <div className="py-10  w-[96%] lg:w-[80%]  mx-auto">
                    <div className="mb-3 h-[50vh] overflow-hidden rounded-md  shadow-xl">
                        <img src="https://codewithkrishna.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdspqukl0w%2Fimage%2Fupload%2Fv1699345692%2FmyWeb%2Fgzrfskg3p21gd1puql10.png&w=1080&q=75" alt="" className=' w-full h-full object-cover mx-auto' />
                    </div>  

                    <div className="py-6  text-2xl lg:text-4xl poppins-semibold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum aliquam facere.
                    </div>
                    <div className="mb-3">
                        <span className="text-lg poppins-semibold">Posted by: Admin</span>
                        <span className="text-accent ml-2 poppins-semibold">12th Feb, 2023</span>
                    </div>
                    <BlogArtical/>


                </div>
    </>
  )
}

export default BlogPage