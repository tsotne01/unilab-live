import React from 'react'

const Button = ({ onClick, children }) => {
    return (
        <div className='flex items-center justify-center'>
            <button onClick={onClick} className='bg-[#33D570] rounded-2xl py-2.5  px-5 hover:bg-[#33d571a8] cursor-pointer transition-all'>{children}</button>
        </div>
    )
}

export default Button