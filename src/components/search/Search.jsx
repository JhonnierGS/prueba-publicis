import { pathRelative } from "@utils/paths"
import { useState } from "react";
import Modal from "src/ui/Modal";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Search = ({url}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  const shareUrl = encodeURIComponent(url);
  const shareOptions = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${shareUrl}&text=¡Mira%20esto!`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=¡Mira%20esto!`,
  };


  return (
    <section className='hidden lg:block px-4 relative mt-[88px]'>
      <div>
        <p className="text-[18px] text-blue-200">Compárte el evento</p>
        <figure className="flex gap-x-[50px] mt-2">
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
        <figure className="flex mt-[81px] gap-x-3 pb-24">
          <img
            src={pathRelative('/img/img-modal-1.png')}
            alt=""
            onClick={() => openModal(pathRelative('/img/img-modal-1.png'))}
            className="cursor-pointer"
          />
          <img
            src={pathRelative('/img/img-modal-2.png')}
            alt=""
            onClick={() => openModal(pathRelative('/img/img-modal-2.png'))}
            className="cursor-pointer"
          />
          <img
            src={pathRelative('/img/img-modal-3.png')}
            alt=""
            onClick={() => openModal(pathRelative('/img/img-modal-3.png'))}
            className="cursor-pointer"
          />
        </figure>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <Carousel>
              <div>
                  <img src={pathRelative('/img/img-modal.png')} alt="Imagen seleccionada 1" />
              </div>
              <div>
                  <img src={pathRelative('/img/img-modal.png')} alt="Imagen seleccionada 2" />
              </div>
              <div>
                  <img src={pathRelative('/img/img-modal.png')} alt="Imagen seleccionada 3" />
              </div>
          </Carousel>
        </Modal>
      </div>

      <div className="absolute top-0 -right-[355px]">
        <img src={pathRelative('/img/greeicy-footer.png')} alt="" />
      </div>

    </section>
  )
}
