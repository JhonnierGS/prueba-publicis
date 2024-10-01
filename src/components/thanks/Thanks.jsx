import { pathRelative } from '@utils/paths'
import { HeaderThanks } from './HeaderThanks'
import { SocilaMedia } from './SocilaMedia'
import { FooterThanks } from './FooterThanks'

export const Thanks = () => {
  const urlToShare = "https://www.headandshoulders-la.com/es";
  return (
    <>
      <div className='lg:flex lg:justify-center overflow-hidden '>
        <img className='hidden lg:block absolute w-[500px] top-0 -left-12' src={pathRelative('/img/flores-left.png')} alt="" />
        <img className='hidden lg:block absolute w-[500px] top-0 -right-0' src={pathRelative('/img/flores-right.png')} alt="" />
        <main className='w-full max-w-[1173px] lg:relative'>
          <HeaderThanks />
          <SocilaMedia url={urlToShare}/>
        </main>
      </div>
      <FooterThanks />
    </>
  )
}
