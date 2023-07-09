import React from 'react'

const Container = ({ children }) => {
    return (
        <div
            className={`
                    w-full
                    
                    px-2
                    sm:px-0


            `}
        >
            {/* content */}
            <div className={`
                overflow-hidden
                w-full
                m-auto

                sm:max-w-[630px]
                md:max-w-[750px]
                lg:max-w-[1000px]
                xl:max-w-[1200px]
                2xl:max-w-[1400px]
            `}>
                {children}
            </div>
        </div>
    )
}

export default Container