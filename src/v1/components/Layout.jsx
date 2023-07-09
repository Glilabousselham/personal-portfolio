import React from 'react'

const Layout = ({ children }) => {
    return (
        <div id='layout' className='w-screen h-screen overflow-x-hidden bg-slate-900 overflow-y-auto  text-blue-100'>{children}</div>
    )
}

export default Layout