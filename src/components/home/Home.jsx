import React from 'react'
import { Head } from './Head'
import { Banner } from '@app/banner'
import { Form } from '@app/form/Form'
import { EventData } from '@app/ListEvent/EventData'
import { Footer } from './Footer'
import { Search } from '@app/search/Search'
import { pathRelative } from '@utils/paths'

export const Home = () => {
  const urlToShare = "https://www.headandshoulders-la.com/es";
  return (
    <div className='lg:flex lg:justify-center overflow-hidden '>
      <img className='hidden lg:block absolute w-[600px] top-0 -left-12' src={pathRelative('/img/flores-left.png')} alt="" />
      <img className='hidden lg:block absolute w-[600px] top-0 -right-0' src={pathRelative('/img/flores-right.png')} alt="" />
      <main className='w-full max-w-[1173px] lg:relative'>
        <Head />
        <Banner />
        <Form />
        <EventData />
        <Search url={urlToShare} />
        <Footer />
      </main>
    </div>
  )
}
