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
                </div>
            </Container>
        </div>
    )
}

export default Introduction