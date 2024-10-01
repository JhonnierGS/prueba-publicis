import React from 'react'
import { ListEvent } from './ListEvent'
import { IconDate, IconMaps, IconWatch } from 'src/ui/icons'

export const EventData = () => {
  return (
    <section className='bg-white px-4 flex justify-center py-8 lg:relative lg:rounded-[20px]'>
      <section className="hidden lg:block lg:absolute -top-12">
        <div className='w-[750px] rounded-full bg-blue-200 text-center py-2'>
          <p className='text-[32px] text-white'>Cada vez falta menos para el concierto</p>
          <p className=' text-[28px] text-white'>10 Días - 8 Hrs - 13 min </p>
        </div>
      </section>
      <div className='w-full max-w-[328px] lg:max-w-[585px] lg:mt-[115px]'>
        <div>
          <p className='text-lg lg:text-center text-gray-200'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>

        <ul className=' lg:flex flex-row-reverse lg:gap-x-[30px]'>
          <ListEvent
            text={'Lorem ipsum dolor'}
            icon={<IconMaps className='w-6 lg:w-11' />}
          />
          <ListEvent
            text={'Lorem ipsum dolor'}
            icon={<IconDate className='w-6 lg:w-11' />}
          />
          <ListEvent
            text={'Lorem ipsum dolor'}
            icon={<IconWatch className='w-6 lg:w-11' />}
          />
        </ul>
      </div>
    </section>
  )
}
