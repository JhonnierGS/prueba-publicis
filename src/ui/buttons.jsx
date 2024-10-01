import React from 'react'
import { ArrowNext } from './icons'

export const Button = ({icon, text}) => {
  return (
    <button className='w-full max-w-[163px] mt-2 rounded-full uppercase flex justify-center items-center bg-blue-200 text-white text-base py-[13px] px-6'>
      {text}
      {icon ? <ArrowNext className='w-6' /> : null}
    </button>
  )
}
