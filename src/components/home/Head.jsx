import { pathRelative } from '@utils/paths'
import React from 'react'
import { ArrowDown } from 'src/ui/icons'

export const Head = () => {
  return (
    <header className='px-4 pt-7 lg:pt-8'>
      <section className=''>
        <div className='flex justify-between items-center'>
          <img src={pathRelative('/logoHead.png')} alt="logo head&shoulders" />
          <a href='#form' className='lg:hidden uppercase text-base flex items-center gap-x-2 text-blue-200 border-[1px] border-blue-200 rounded-full px-3 py-2'>
            REGISTRAR
            <ArrowDown className='w-3 rotate-90' />
          </a>
        </div>
        <h1 className=' text-[32px] lg:text-[56px] lg:font-bold text-blue-200 mt-12 lg:mt-[51px]'>Concierto Virtual</h1>
        <p className='mt-[16px] text-2xl text-gray-300 w-full lg:max-w-[534px] lg:font-bold'>
          Regístrate y vive una experiencia única conmigo y Head & Shoulders
        </p>
        <figure className='flex justify-center lg:justify-start mt-5'>
          <img className='lg:hidden' src={pathRelative('/img/greeicy-img.png')} alt="imagen modelo" />
          <img className='hidden lg:block ml-8' src={pathRelative('/img/greeicy-desktop.png')} alt="imagen modelo" />
        </figure>

      </section>
    </header>
  )
}
