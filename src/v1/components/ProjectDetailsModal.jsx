import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs"

const ProjectDetailsModal = ({ project, onHide }) => {


    const [activeImageIndex, setActiveImageIndex] = useState(0)


    useEffect(() => {
        if (!project) {
            setActiveImageIndex(0);
        }
    }, [project])

    const changeActiveImageIndex = (value) => {
        if (!project) return;

        const newIndex = activeImageIndex + value

        if (newIndex > project.images.length - 1) {
            setActiveImageIndex(0)
        } else if (newIndex < 0) {
            setActiveImageIndex(project.images.length - 1)
        } else {
            setActiveImageIndex(newIndex)
        }
    }

    const imageContainerRef = useRef(null)


    const marginLeft = `-${activeImageIndex * (imageContainerRef.current?.offsetWidth ?? 0)}px`;



    return !!project && (
        <div className='fixed top-0 right-0 left-0 bottom-0 bg-[#00000099] flex justify-center p-2'>

            <div className={`
                w-full h-fit mt-10 p-4 bg-slate-800
                md:max-w-[600px]
                lg:max-w-[700px]
                rounded-md
            `}>
                <div className='flex justify-between'>
                    <div>{project.title}</div>
                    <div className='flex gap-2 text-sm'>
                        <Button>Demo</Button>
                        <Button>Source</Button>
                        <Button onClick={onHide}>Close</Button>
                    </div>

                </div>
                <div className={`
                    mt-5
                    overflow-hidden
                    w-full
                    h-[300px]
                    md:h-[350px]
                    lg:h-[400px]
                    relative
                `}>
                    <div ref={imageContainerRef} className='h-full w-full flex '>
                        {
                            project.images.map((image, i) => (
                                <img
                                    key={i}
                                    style={{
                                        marginLeft: i === 0 ? marginLeft : null
                                    }}
                                    src={image} alt="nn" className='flex-none w-full h-full bg-black overflow-hidden transition-all duration-500 object-contain' />
                            ))
                        }
                    </div>

                    <div className='absolute left-0 right-0 h-[50px] top-[50%] -mt-[25px] text-5xl flex justify-between '>
                        {/* left */}

                        <BsFillArrowLeftCircleFill onClick={() => changeActiveImageIndex(-1)} className='bg-[#88888866] text-[#eeeeeedd] cursor-pointer p-1 rounded-full mx-2' />

                        {/* rigth */}

                        <BsFillArrowRightCircleFill onClick={() => changeActiveImageIndex(1)} className='bg-[#88888866] text-[#eeeeeedd] cursor-pointer p-1 rounded-full mx-2' />

                    </div>

                </div>
                {/* images pointers */}
                <div className=''>
                    <div className='flex gap-3 justify-center mt-3'>
                        {project.images.map((image, i) => (
                            <div key={i} onClick={() => setActiveImageIndex(i)} className={`p-[5px] transition-all duration-500 rounded-full ${activeImageIndex === i ? "bg-blue-600" : "bg-slate-500"}`}></div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProjectDetailsModal