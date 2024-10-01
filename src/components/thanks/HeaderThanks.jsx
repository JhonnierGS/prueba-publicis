import { pathRelative } from '@utils/paths'
import React from 'react'

export const HeaderThanks = () => {
  return (
    <header className='px-4 pt-7 lg:pt-8 relative'>
    <section className=''>
      <div className='flex lg:hidden justify-between items-center'>
        <img src={pathRelative('/logoHead.png')} alt="logo head&shoulders" />
      </div>
      <h1 className=' text-[24px] lg:text-[56px] font-semibold text-blue-200 mt-12 lg:mt-[10px]'>
        ¡NOS VEMOS PRONTO!
      </h1>
      <div className='w-full flex items-center lg:justify-start justify-center mt-[16px] gap-x-2'>
        <img src={pathRelative('/img/Mail.png')} alt="" />
        <p className='text-[14px] text-blue-200 w-full lg:max-w-[534px] '>
          Recibirás un correo de confirmación
        </p>
      </div>
      <figure className='lg:hidden w-full flex justify-end mt-10 pb-20'>
        <img className=' absolute bottom-0 left-0' src={pathRelative('/img/greeicy-thanks.png')} alt="imagen modelo" />
        <div className='flex flex-col items-end'>
          <img className='w-[155px] h-[131px]' src={pathRelative('/img/Paragraph.png')} alt="parrafo" />
          <img src={pathRelative('/img/greeicy-firma-mobile.png')} alt="firma greeicy" />
        </div>
      </figure>

      <figure className='hidden lg:flex w-full justify-center gap-12 mt-10 pb-20 lg:pb-0'>
        <img className='' src={pathRelative('/img/Greeicy-Rendon-3.png')} alt="imagen modelo" />
        <div className='flex flex-col items-end'>
          <img className='w-[458px] h-[217px]' src={pathRelative('/img/parrafo-desk.png')} alt="parrafo" />
          <img className='w-[127] h-[85px]' src={pathRelative('/img/greeicy-firma-mobile.png')} alt="firma greeicy" />
        </div>
      </figure>
    </section>
  </header>
  )
}
