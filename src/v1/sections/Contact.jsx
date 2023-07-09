import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'

const Contact = () => {



    return (
        <div id='contact' className={`min-h-screen py-[100px] `}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <div className='grid md:grid-cols-2 gap-4' dir='rtl'>
                    <div dir="ltr" className='text-center text-blue-500 text-3xl font-bold'>Lets make something better</div>
                    <div className=' flex justify-center items-center ' dir='ltr'>
                        <div className='flex flex-col border-2 border-blue-500 gap-3 px-5 py-10 rounded-lg'>
                            {/* email */}
                            <div>
                                <div className='font-semibold text-slate-500'>Email</div>
                                <div className='font-bold text-slate-400'>glilabousselham@gmail.com</div>
                            </div>
                            {/* phone */}
                            <div>
                                <div className='font-semibold text-slate-500'>Phone</div>
                                <div className='font-bold text-slate-400'>+212 7 71 74 35 50</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Contact
