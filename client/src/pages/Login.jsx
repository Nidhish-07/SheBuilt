import React from 'react'
// import { RiWomenLine } from "react-icons/ri"


const Login = () => {
    return (
        <section className="overflow-hidden flex flex-col text-center height-[100vh] ">
            <div className='relative mb-[10vw] w-full min-h-screen flex justify-center items-center flex-col py-20 px-10 h-full'>
                <div className='max-w-2xl w-full flex flex-col '>
                    {/* <RiWomenLine></RiWomenLine> */}
                    <div className='text-white'>Jelo</div>
                    <div className='font-bold text-white bg-[#5c4aae] mb-3 w-full tracking-[2px] text-xl py-4 px-0 border-[1px] border-solid border-transparent rounded-md hover:bg-[#846afa]'>ENTER</div>
                    <p className='text-white  opacity-75 text-[15px] my-0 mx-6 leading-[1.5] tracking-[1.5px]'>

                        Find the job that is
                        perfect for You
                    </p>
                </div>
                <div className='h-full bg-top bg-cover bg-no-repeat absolute inset-0 z-[-99] bg-hero'></div>
            </div>
        </section>
    )
}

export default Login