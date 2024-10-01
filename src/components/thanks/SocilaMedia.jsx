import { pathRelative } from '@utils/paths'
import React from 'react'

export const SocilaMedia = ({url}) => {
  const shareUrl = encodeURIComponent(url);
  const shareOptions = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${shareUrl}&text=¡Mira%20esto!`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=¡Mira%20esto!`,
  };
  return (
    <section className='bg-blue-50 lg:bg-transparent lg:absolute bottom-[100px] right-[150px] pt-[26px] px-4'>
      <h2 className='text-[24px] font-semibold text-blue-200' >Invita a tus amigos</h2>
      <p className='text-[24px] text-gray-300 font-semibold mt-[11px]'>#RaícesFuertes</p>
      <div>
      <figure className="flex justify-center gap-x-[50px] mt-[18px] pb-5">
          <a target="_blank" href={shareOptions.facebook} className="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-white">
            <img src={pathRelative('/img/Elipse-1.png')} alt="icon compartir" />
          </a>
          <a target="_blank" href="https://x.com/headshoulders" className="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-white">
            <img src={pathRelative('/img/Elipse-2.png')} alt="icon Twitter" />
          </a>
          <a target="_blank" href="https://www.facebook.com/headandshoulders/?brand_redir=325507387471151&fref=ts" className="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-white">
            <img src={pathRelative('/img/Elipse-3.png')} alt="icon Facebook" />
          </a>
          <a target="_blank" href="https://www.instagram.com/headandshouldersla/?hl=es-la" className="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-white">
            <img src={pathRelative('/img/Elipse-4.png')} alt="icon Instagram" />
          </a>
        </figure>
      </div>
    </section>
  )
}
