import React from 'react'

interface IButtonProps {
  value?: string
  onClick?: () => any
  className?: string
  disabled?: boolean
}

const Button = (props: IButtonProps) => {
  return (
    <button
      className={`
         ${
           props.disabled
             ? 'shadow-sm bg-gray-100 pointer-events-none opacity-50'
             : ''
         } ${props.className} w-full px-4 py-3 shadow-md rounded-lg bg-gray-50 
    hover:shadow-sm hover:bg-gray-100 active:bg-gray-200 text-gray-900
    focus:bg-gray-100 focus:shadow-sm flex items-center justify-center select-none 
    outline-none focus:outline-none transition-all duration-100 z-10`}
      onClick={(e) => props.onClick && props.onClick()}
    >
      {props.value || ''}
    </button>
  )
}

export default Button
