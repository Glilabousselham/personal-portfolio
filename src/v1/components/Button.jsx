import React from 'react'

const Button = ({ type = "primary", children, ...props }) => {
    return (
        <button {...props} className={`
            hover:shadow-lg hover:shadow-blue-950 text-white bg-gradient-to-br
            from-blue-600 to-blue-700 transition-all duration-300
            hover:from-blue-500 hover:to-blue-600
            px-2 py-1 rounded`}
        >{children}</button>
    )
}

export default Button