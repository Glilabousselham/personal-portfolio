import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import { RiMenu4Fill } from "react-icons/ri"
import { MdClose } from "react-icons/md"
import Container from './Container'

const NavBar = () => {

    const [menu, setMenu] = useState(false)

    const navRef = useRef(null)

    var [scrollState, setScrollState] = useState(0)

    const scrollE = (e) => {
        const scroll = e.target.scrollTop;
        if (scroll > scrollState) {
            navRef.current.style.marginTop = "-100px"
        } else {
            navRef.current.style.marginTop = "0px"
        }
        setScrollState(() => scroll)
    }

    useEffect(() => {
        document.getElementById("layout").addEventListener("scroll", scrollE)
        return () => {
            document.getElementById("layout").removeEventListener("scroll", scrollE)
        }
    }, [scrollState])


    return (
        <>

            <div ref={navRef} className='fixed w-full transition-all duration-300 bg-slate-900'>
                <Container>
                    <div className=' flex justify-between items-center py-2  '>
                        {/* logo */}
                        <div className='text-blue-700 font-bold text-2xl'>BG</div>
                        {/* sections */}
                        {/* on with > sm */}
                        <ul className='hidden sm:flex items-center gap-3'>
                            <li><Item section="about">About</Item></li>
                            <li><Item section="skills">Skills</Item></li>
                            <li><Item section="projects">Projects</Item></li>
                            <li><Item section="contact">Contact</Item></li>
                            <li>
                                <Button>Resume</Button>
                            </li>
                        </ul>
                        {/* on with < sm */}
                        <div className='block sm:hidden'><Button onClick={() => setMenu(true)}><RiMenu4Fill /></Button></div>
                    </div>
                </Container>
            </div>
            <MenuComponent open={menu} onHide={() => setMenu(false)}></MenuComponent>
        </>
    )
}

export default NavBar



function Item({ children, section, onClick }) {
    const goToView = () => {
        const e = document.getElementById(section)

        e.scrollIntoView({ behavior: "smooth" })

        onClick?.()
    }
    return (
        <div
            onClick={goToView}
            role='button'
            className={`
                relative 
                transition-all duration-500 hover:text-blue-600
                after:transition-all after:duration-500 
                after:h-[3px] after:w-[0%] hover:after:w-[100%] after:bg-blue-700  after:absolute after:-bottom-1 after:left-0 
            `}
        >{children}</div>
    )
}


function MenuComponent({ open, onHide }) {
    return open && (
        <div className={`

            fixed top-0 left-0 bottom-0 right-0  
            flex-col
          bg-[#0A1029dd] 
            ${open ? (
                `flex`
            ) : (
                `hidden`
            )}
        `}>
            <div className=" flex justify-end p-3">
                <div onClick={() => onHide()} className='w-fit hover:text-blue-600 cursor-pointer transition-all duration-300'><MdClose className='text-3xl' /></div>
            </div>
            <div className='h-full flex flex-col items-center justify-center gap-3 text-lg'>

                <div><Item onClick={() => onHide()} section="about">About</Item></div>
                <div><Item onClick={() => onHide()} section="skills">Skills</Item></div>
                <div><Item onClick={() => onHide()} section="projects">Projects</Item></div>
                <div><Item onClick={() => onHide()} section="contact">Contact</Item></div>

                <Button>Resume</Button>

            </div >

        </div >

    )
}