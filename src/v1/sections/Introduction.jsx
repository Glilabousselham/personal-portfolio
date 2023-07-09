import React from 'react'
import Container from '../components/Container'

const Introduction = () => {
    return (
        <div id='about' className={`h-screen pt-[130px] `}>
            <Container>
                <div className='flex flex-col gap-5 md:w-[70%]'>

                    <div className='text-slate-500 text-xl font-bold'>Hi, my name is</div>
                    <div className={`
                        text-blue-600  font-bold
                        text-4xl 
                        md:text-6xl 

                    `}>Bousselham glila. Fullstack Web developer  </div>
                    <p className='text-md font-light text-slate-400'>I'm a web Full Stack developer with expertise in React, Tailwind CSS, Laravel, and Node.js. With 3 years of experience, I'm passionate about crafting dynamic and user-friendly web applications that deliver exceptional user experiences</p>
                    <button onClick={() => {
                        document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
                    }} className='border-2 font-semibold border-blue-500 text-blue-500 px-6 hover:text-white hover:bg-blue-500 transition-all duration-300 py-4 w-fit rounded-full'>SEE MY PROJECTS</button>
                </div>
            </Container>
        </div>
    )
}

export default Introduction